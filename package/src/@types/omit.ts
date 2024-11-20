/**
 * Construct a type with the properties of T
 * except for those in type K.
 *
 * ### Example
 *
 * ```ts
 * import type { Omit } from "ts-vista";
 *
 * type T = {
 *   a: string;
 *   b: number;
 *   c: boolean;
 * };
 *
 * // D1 = { b: number; c: boolean; }
 * type D1 = Omit<T, "a">;
 *
 * // D2 = { c: boolean; }
 * type D2 = Omit<T, "a" | "b">;
 * ```
 */
type Omit<T, K extends keyof T> = {
    [KY in keyof T as KY extends K ? never : KY]: T[KY];
};

export type { Omit };
