import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Stash } from "$controllers/decorators/stash";
import { AuthenticatedStash } from "$controllers/types/request.dto";
import { ApiResponse } from "$controllers/types/response.dto";

import * as InputDto from "./dto/input.dto";
import { ChatGenerationOutputDTO } from "./dto/output.dto";
import { AgentService } from "$application/agent/agent.service";
import { UserService } from "$domain/user/user.service";

@ApiTags("agent")
@Controller("agent")
export class AgentController {
  constructor(
    private agentService: AgentService,
    private userService: UserService
  ) {}

  @Post("chat-generation")
  async CreateChatGeneration(
    @Body() inputDto: InputDto.CreateChatGeneration,
    @Stash() stash: AuthenticatedStash
  ): ApiResponse<ChatGenerationOutputDTO> {
    /** This is attached by auth middleware */
    const auth = stash.auth;

    const user = await this.userService.GetUser({
      discriminator: "firebaseId",
      firebaseId: auth.firebaseId,
    });

    if (!user) {
      throw new Error("User not found");
    }

    /** Create the user */
    const chatGenerationOutput = await this.agentService.generateChat({
      userId: user.id,
      message: inputDto.message,
    });
    /** Construct the output dto */
    const dto = new ChatGenerationOutputDTO(chatGenerationOutput);
    /** Return the dto as an ApiResponse */
    return { data: dto };
  }
}
