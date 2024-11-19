import type { Omit } from "#/@types/omit";

/**
 * Make properties in T optional.
 *
 * ## Example
 *
 * ```ts
 * import type { Partial } from "ts-vista";
 *
 * type T = {
 *     a: string;
 *     b: number;
 *     c: boolean;
 * };
 *
 * // O1 = { a?: string; b?: number; c?: boolean; }
 * type O1 = Partial<T>;
 *
 * // O2 = { a?: string; b: number; c: boolean; }
 * type O2 = Partial<T, "a">;
 *
 * // O3 = { a?: string; b?: number; c: boolean; }
 * type O3 = Partial<T, "a" | "b">;
 * ```
 */
type _Partial<T, K extends keyof T = keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;

export type { _Partial as Partial };
