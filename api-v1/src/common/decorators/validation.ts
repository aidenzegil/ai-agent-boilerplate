import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

type Params = {
  optional?: boolean;
};

export function IsApiEmail(params?: Params) {
  const required = !params?.optional;
  return applyDecorators(
    IsEmail(),
    ApiProperty({
      description: "An email address",
      example: "jordon@wetpages.com",
      type: String,
      required,
    }),
    required ? IsNotEmpty() : IsOptional(),
  );
}

export function IsApiString(params?: Params) {
  const required = !params?.optional;
  return applyDecorators(
    IsString(),
    ApiProperty({
      description: "A non-empty string",
      example: "some string",
      type: String,
      required,
    }),
    required ? IsNotEmpty() : IsOptional(),
  );
}

export function IsApiUrl(params?: Params) {
  const required = !params?.optional;
  return applyDecorators(
    IsUrl(),
    ApiProperty({
      description: "A valid URL",
      example: "www.wetpages.com",
      type: String,
      required,
    }),
    required ? IsNotEmpty() : IsOptional(),
  );
}
