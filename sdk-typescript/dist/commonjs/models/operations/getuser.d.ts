import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetUserRequest = {
    id: string;
};
/** @internal */
export declare const GetUserRequest$inboundSchema: z.ZodType<GetUserRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetUserRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetUserRequest$outboundSchema: z.ZodType<GetUserRequest$Outbound, z.ZodTypeDef, GetUserRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetUserRequest$ {
    /** @deprecated use `GetUserRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetUserRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetUserRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetUserRequest$Outbound, z.ZodTypeDef, GetUserRequest>;
    /** @deprecated use `GetUserRequest$Outbound` instead. */
    type Outbound = GetUserRequest$Outbound;
}
export declare function getUserRequestToJSON(getUserRequest: GetUserRequest): string;
export declare function getUserRequestFromJSON(jsonString: string): SafeParseResult<GetUserRequest, SDKValidationError>;
//# sourceMappingURL=getuser.d.ts.map