import * as z from "zod";
export type CreateMessageObjectErrorData = {
    message: string;
};
export declare class CreateMessageObjectError extends Error {
    /** The original data that was passed to this error instance. */
    data$: CreateMessageObjectErrorData;
    constructor(err: CreateMessageObjectErrorData);
}
/** @internal */
export declare const CreateMessageObjectError$inboundSchema: z.ZodType<CreateMessageObjectError, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateMessageObjectError$Outbound = {
    message: string;
};
/** @internal */
export declare const CreateMessageObjectError$outboundSchema: z.ZodType<CreateMessageObjectError$Outbound, z.ZodTypeDef, CreateMessageObjectError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateMessageObjectError$ {
    /** @deprecated use `CreateMessageObjectError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateMessageObjectError, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateMessageObjectError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateMessageObjectError$Outbound, z.ZodTypeDef, CreateMessageObjectError>;
    /** @deprecated use `CreateMessageObjectError$Outbound` instead. */
    type Outbound = CreateMessageObjectError$Outbound;
}
//# sourceMappingURL=createmessageobjecterror.d.ts.map