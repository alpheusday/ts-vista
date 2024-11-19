import type { Omit } from "#/@types/omit";

type SplitResult<T extends object, K extends (keyof T)[]> = {
    within: Pick<T, K[number]>;
    without: Omit<T, K[number]>;
};

const split = <T extends object, K extends (keyof T)[]>(
    object: T,
    keys: K,
): SplitResult<T, K> => {
    const within: Partial<Pick<T, K[number]>> = {};
    const without: Partial<Omit<T, K[number]>> = {};

    for (const key in object) {
        if (keys.includes(key)) {
            within[key] = object[key];
        } else {
            (without as Partial<T>)[key] = object[key];
        }
    }

    return {
        within: within as Pick<T, K[number]>,
        without: without as unknown as Omit<T, K[number]>,
    };
};

export type { SplitResult };
export { split };
