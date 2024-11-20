import type { Omit } from "#/@types/omit";

import { split } from "#/functions/split";

/**
 * Construct an object with the properties of `object`
 * except for those in `keys`.
 *
 * ### Example
 *
 * ```ts
 * import type { Omit } from "ts-vista";
 *
 * import { omit } from "ts-vista";
 *
 * type Keys = {
 *     a: number;
 *     b: number;
 *     c: number;
 * };
 *
 * type Keys2 = Omit<Keys, "a" | "b">;
 *
 * const keys: Keys = {
 *     a: 1,
 *     b: 2,
 *     c: 3,
 * };
 *
 * const keys2: Keys2 = omit(keys, ["a", "b"]);
 * ```
 */
const omit = <T extends object, K extends (keyof T)[]>(
    object: T,
    keys: K,
): Omit<T, K[number]> => {
    return split(object, keys).without;
};

export { omit };
