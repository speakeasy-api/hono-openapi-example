import * as z from "zod";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
export type UserInsert = {
    name: string;
    age: number;
};
/** @internal */
export declare const UserInsert$inboundSchema: z.ZodType<UserInsert, z.ZodTypeDef, unknown>;
/** @internal */
export type UserInsert$Outbound = {
    name: string;
    age: number;
};
/** @internal */
export declare const UserInsert$outboundSchema: z.ZodType<UserInsert$Outbound, z.ZodTypeDef, UserInsert>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserInsert$ {
    /** @deprecated use `UserInsert$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserInsert, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserInsert$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserInsert$Outbound, z.ZodTypeDef, UserInsert>;
    /** @deprecated use `UserInsert$Outbound` instead. */
    type Outbound = UserInsert$Outbound;
}
export declare function userInsertToJSON(userInsert: UserInsert): string;
export declare function userInsertFromJSON(jsonString: string): SafeParseResult<UserInsert, SDKValidationError>;
//# sourceMappingURL=userinsert.d.ts.map