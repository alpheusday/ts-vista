import type { Omit } from "#/@types/omit";

/**
 * Make properties in T readonly.
 *
 * ### Example
 *
 * ```ts
 * import type { Readonly } from "ts-vista";
 *
 * type T = {
 *     a: string;
 *     b: number;
 *     c: boolean;
 * };
 *
 * // C1 = {
 * //     readonly a: string;
 * //     readonly b: number;
 * //     readonly c: boolean;
 * // }
 * type C1 = Readonly<T>;
 *
 * // C2 = { readonly a: string; b: number; c: boolean; }
 * type C2 = Readonly<T, "a">;
 *
 * // C3 = { readonly a: string; readonly b: number; c: boolean; }
 * type C3 = Readonly<T, "a" | "b">;
 * ```
 */
type _Readonly<T, K extends keyof T = keyof T> = Omit<T, K> &
    Readonly<Pick<T, K>>;

export type { _Readonly as Readonly };
