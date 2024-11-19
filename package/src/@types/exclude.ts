/**
 * Exclude from T those types that are assignable to U.
 *
 * ## Example
 *
 * ```ts
 * import type { Exclude } from "ts-vista";
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
 * // D1X = T2 | T3
 * type D1A = Exclude<T4, T1>;
 * type D1B = Exclude<T4, { type: "a"; name: string }>;
 *
 * // D2X = T3
 * type D2A = Exclude<T4, T1 | T2>;
 * type D2B = Exclude<
 *     T4,
 *     | { type: "a"; name: string }
 *     | { type: "b"; age: number }
 * >;
 * ```
 */
type Exclude<T, U extends T> = T extends U ? never : T;

export type { Exclude };
