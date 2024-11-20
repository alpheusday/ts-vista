/**
 * Extract from T those types that are assignable to U.
 *
 * ### Example
 *
 * ```ts
 * import type { Extract } from "ts-vista";
 *
 * type T1 = {
 *   type: "a";
 *   name: string;
 * };
 *
 * type T2 = {
 *   type: "b";
 *   age: number;
 * };
 *
 * type T3 = {
 *   type: "c";
 *   color: string;
 * };
 *
 * type T4 = T1 | T2 | T3;
 *
 * // P1X = T1
 * type P1A = Extract<T4, T1>;
 * type P1B = Extract<T4, { type: "a" }>;
 *
 * // P2X = T1 | T2
 * type P2A = Extract<T4, T1 | T2>;
 * type P2B = Extract<T4, { type: "a" } | { type: "b" }>;
 * ```
 */
type Extract<T, U extends Partial<T>> = T extends U ? T : never;

export type { Extract };
