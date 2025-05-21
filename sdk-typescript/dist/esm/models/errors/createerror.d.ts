import * as z from "zod";
import * as models from "../index.js";
export type CreateErrorData = {
    success: boolean;
    error: models.ErrorT;
};
export declare class CreateError extends Error {
    success: boolean;
    error: models.ErrorT;
    /** The original data that was passed to this error instance. */
    data$: CreateErrorData;
    constructor(err: CreateErrorData);
}
/** @internal */
export declare const CreateError$inboundSchema: z.ZodType<CreateError, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateError$Outbound = {
    success: boolean;
    error: models.ErrorT$Outbound;
};
/** @internal */
export declare const CreateError$outboundSchema: z.ZodType<CreateError$Outbound, z.ZodTypeDef, CreateError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateError$ {
    /** @deprecated use `CreateError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateError, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateError$Outbound, z.ZodTypeDef, CreateError>;
    /** @deprecated use `CreateError$Outbound` instead. */
    type Outbound = CreateError$Outbound;
}
//# sourceMappingURL=createerror.d.ts.map