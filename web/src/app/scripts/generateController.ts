const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is the name of the controller you would like to generate? ",
  (input: string) => {
    const fs = require("fs");
    const dirName = input[0].toLowerCase() + input.slice(1);
    const controllerName =
      input[0].toUpperCase() + input.slice(1) + "Controller";
    const capitalizedInput = input[0].toUpperCase() + input.slice(1);
    const pathToController = `src/app/lib/server/controllers/${dirName}`;
    fs.mkdirSync(`${pathToController}`);
    console.log("Starting generation...");
    console.log("Generating params...");
    fs.writeFileSync(
      `${pathToController}/params.ts`,
      `
export namespace params {
// export type CreateUser = {
//   email: string;
//   profilePictureUrl: string;    
// }
}
            `
    );
    console.log("Generating controller...");
    fs.writeFileSync(
      `${pathToController}/controller.ts`,
      `
import { params } from "./params";

interface Dependencies {
//  authToken?: string;
}
interface Methods {
  // createUser: (params: params.CreateUser) => Promise<ApiResponse<PrivateUser>>;
}

type ${capitalizedInput} = (deps: Dependencies) => Methods;

/**
 * @returns Controller object
 */
export const ${controllerName}: ${capitalizedInput} = ({ authToken }) => ({
//     createUser: async ({
//     profilePictureUrl,
//     email,
//     username,
//   }): Promise<ApiResponse<PrivateUser>> => {
//     const res = await POST<PrivateUser>({
//       authToken,
//       body: { profilePictureUrl, email, username },
//       path: "/users",
//       requiresAuth: true,
//     });
//     if (res.isOk()) {
//       const privateUser: PrivateUser = {
//         username: res.value.username,
//         email: res.value.email,
//         id: res.value.id,
//         profilePictureUrl: res.value.profilePictureUrl,
//       };
//       return Ok(privateUser);
//     }
//     return Err(res.error);
//   },
});
       `
    );
    console.log("Generation complete!");
    rl.close();
  }
);
