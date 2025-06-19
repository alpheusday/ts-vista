import type { Omit } from "ts-vista";

import { omit } from "ts-vista";
import { describe, expect, it } from "vitest";

describe("Omit function tests", (): void => {
    it("should omit key from an object", (): void => {
        type Obj1 = {
            a: number;
            b: number;
            c: number;
        };

        type Obj2 = Omit<Obj1, "a">;

        const obj1: Obj1 = {
            a: 1,
            b: 2,
            c: 3,
        };

        const obj2: Obj2 = omit(obj1, [
            "a",
        ]);

        expect(obj2).toEqual({
            b: 2,
            c: 3,
        });
    });

    it("should omit keys from an object", (): void => {
        type Obj1 = {
            a: number;
            b: number;
            c: number;
        };

        type Obj2 = Omit<Obj1, "a" | "b">;

        const obj1: Obj1 = {
            a: 1,
            b: 2,
            c: 3,
        };

        const obj2: Obj2 = omit(obj1, [
            "a",
            "b",
        ]);

        expect(obj2).toEqual({
            c: 3,
        });
    });
});
