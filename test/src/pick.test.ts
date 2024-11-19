import { pick } from "ts-vista";
import { describe, expect, it } from "vitest";

describe("Pick function tests", (): void => {
    it("should pick key from an object", (): void => {
        type Obj1 = {
            a: number;
            b: number;
            c: number;
        };

        type Obj2 = Pick<Obj1, "a">;

        const obj1: Obj1 = {
            a: 1,
            b: 2,
            c: 3,
        };

        const obj2: Obj2 = pick(obj1, ["a"]);

        expect(obj2).toEqual({ a: 1 });
    });

    it("should pick keys from an object", (): void => {
        type Obj1 = {
            a: number;
            b: number;
            c: number;
        };

        type Obj2 = Pick<Obj1, "a" | "b">;

        const obj1: Obj1 = {
            a: 1,
            b: 2,
            c: 3,
        };

        const obj2: Obj2 = pick(obj1, ["a", "b"]);

        expect(obj2).toEqual({ a: 1, b: 2 });
    });
});
