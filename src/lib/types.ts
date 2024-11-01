import type { RouteConfig, RouteHandler, z } from '@hono/zod-openapi';

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R>;

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;
