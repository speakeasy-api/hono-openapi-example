import * as z from "zod";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
export type Path = string | number;
export type Issue = {
    code: string;
    path: Array<string | number>;
    message?: string | undefined;
};
export type ErrorT = {
    issues: Array<Issue>;
    name: string;
};
/** @internal */
export declare const Path$inboundSchema: z.ZodType<Path, z.ZodTypeDef, unknown>;
/** @internal */
export type Path$Outbound = string | number;
/** @internal */
export declare const Path$outboundSchema: z.ZodType<Path$Outbound, z.ZodTypeDef, Path>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Path$ {
    /** @deprecated use `Path$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Path, z.ZodTypeDef, unknown>;
    /** @deprecated use `Path$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Path$Outbound, z.ZodTypeDef, Path>;
    /** @deprecated use `Path$Outbound` instead. */
    type Outbound = Path$Outbound;
}
export declare function pathToJSON(path: Path): string;
export declare function pathFromJSON(jsonString: string): SafeParseResult<Path, SDKValidationError>;
/** @internal */
export declare const Issue$inboundSchema: z.ZodType<Issue, z.ZodTypeDef, unknown>;
/** @internal */
export type Issue$Outbound = {
    code: string;
    path: Array<string | number>;
    message?: string | undefined;
};
/** @internal */
export declare const Issue$outboundSchema: z.ZodType<Issue$Outbound, z.ZodTypeDef, Issue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Issue$ {
    /** @deprecated use `Issue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Issue, z.ZodTypeDef, unknown>;
    /** @deprecated use `Issue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Issue$Outbound, z.ZodTypeDef, Issue>;
    /** @deprecated use `Issue$Outbound` instead. */
    type Outbound = Issue$Outbound;
}
export declare function issueToJSON(issue: Issue): string;
export declare function issueFromJSON(jsonString: string): SafeParseResult<Issue, SDKValidationError>;
/** @internal */
export declare const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
/** @internal */
export type ErrorT$Outbound = {
    issues: Array<Issue$Outbound>;
    name: string;
};
/** @internal */
export declare const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
    /** @deprecated use `ErrorT$Outbound` instead. */
    type Outbound = ErrorT$Outbound;
}
export declare function errorToJSON(errorT: ErrorT): string;
export declare function errorFromJSON(jsonString: string): SafeParseResult<ErrorT, SDKValidationError>;
//# sourceMappingURL=createerror.d.ts.map