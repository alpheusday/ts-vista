import { split } from "#/functions/split";

/**
 * From `object`, pick a set of properties whose keys are in `keys`.
 *
 * ### Example
 *
 * ```ts
 * import { pick } from "ts-vista";
 *
 * type Keys = {
 *     a: number;
 *     b: number;
 *     c: number;
 * };
 *
 * type Keys2 = Pick<Keys, "a" | "b">;
 *
 * const keys: Keys = {
 *     a: 1,
 *     b: 2,
 *     c: 3,
 * };
 *
 * const keys2: Keys2 = pick(keys, ["a", "b"]);
 * ```
 */
const pick = <T extends object, K extends (keyof T)[]>(
    object: T,
    keys: K,
): Pick<T, K[number]> => {
    return split(object, keys).within;
};

export { pick };
