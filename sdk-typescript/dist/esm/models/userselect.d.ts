import * as z from "zod";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
export type UserSelect = {
    id: string;
    name: string;
    age: number;
};
/** @internal */
export declare const UserSelect$inboundSchema: z.ZodType<UserSelect, z.ZodTypeDef, unknown>;
/** @internal */
export type UserSelect$Outbound = {
    id: string;
    name: string;
    age: number;
};
/** @internal */
export declare const UserSelect$outboundSchema: z.ZodType<UserSelect$Outbound, z.ZodTypeDef, UserSelect>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserSelect$ {
    /** @deprecated use `UserSelect$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserSelect, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserSelect$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserSelect$Outbound, z.ZodTypeDef, UserSelect>;
    /** @deprecated use `UserSelect$Outbound` instead. */
    type Outbound = UserSelect$Outbound;
}
export declare function userSelectToJSON(userSelect: UserSelect): string;
export declare function userSelectFromJSON(jsonString: string): SafeParseResult<UserSelect, SDKValidationError>;
//# sourceMappingURL=userselect.d.ts.map