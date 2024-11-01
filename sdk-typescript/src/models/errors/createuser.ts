/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * The validation error(s)
 */
export type CreateUserResponseBodyData = {
  success: boolean;
  error: components.CreateError;
};

/**
 * The validation error(s)
 */
export class CreateUserResponseBody extends Error {
  success: boolean;
  error: components.CreateError;

  /** The original data that was passed to this error instance. */
  data$: CreateUserResponseBodyData;

  constructor(err: CreateUserResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.success = err.success;
    this.error = err.error;

    this.name = "CreateUserResponseBody";
  }
}

/** @internal */
export const CreateUserResponseBody$inboundSchema: z.ZodType<
  CreateUserResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  error: components.CreateError$inboundSchema,
})
  .transform((v) => {
    return new CreateUserResponseBody(v);
  });

/** @internal */
export type CreateUserResponseBody$Outbound = {
  success: boolean;
  error: components.CreateError$Outbound;
};

/** @internal */
export const CreateUserResponseBody$outboundSchema: z.ZodType<
  CreateUserResponseBody$Outbound,
  z.ZodTypeDef,
  CreateUserResponseBody
> = z.instanceof(CreateUserResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean(),
    error: components.CreateError$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserResponseBody$ {
  /** @deprecated use `CreateUserResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateUserResponseBody$inboundSchema;
  /** @deprecated use `CreateUserResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateUserResponseBody$outboundSchema;
  /** @deprecated use `CreateUserResponseBody$Outbound` instead. */
  export type Outbound = CreateUserResponseBody$Outbound;
}