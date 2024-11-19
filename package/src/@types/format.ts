/**
 * Make all properties in T visible.
 *
 * ## Example
 *
 * ```ts
 * import type { Format } from "ts-vista";
 *
 * type T1 = {
 *   a: string;
 *   b: number;
 * };
 *
 * type T2 = {
 *   c: string;
 *   d: number;
 * };
 *
 * // F = { a: string; b: number; c: string; d: number; }
 * type F = Format<T1 & T2>;
 * ```
 */
// biome-ignore lint/complexity/noBannedTypes: Function
type Format<T> = T extends Function
    ? T
    : {
          [K in keyof T]: T[K];
      };

export type { Format };
