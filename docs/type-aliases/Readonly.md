[ts-vista](../README.md) / Readonly

# Type Alias: Readonly\<T, K\>

> **Readonly**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `Readonly`\<`Pick`\<`T`, `K`\>\>

Make properties in T readonly.

### Example

```ts
import type { Readonly } from "ts-vista";

type T = {
    a: string;
    b: number;
    c: boolean;
};

// C1 = {
//     readonly a: string;
//     readonly b: number;
//     readonly c: boolean;
// }
type C1 = Readonly<T>;

// C2 = { readonly a: string; b: number; c: boolean; }
type C2 = Readonly<T, "a">;

// C3 = { readonly a: string; readonly b: number; c: boolean; }
type C3 = Readonly<T, "a" | "b">;
```

## Type Parameters

• **T**

• **K** *extends* keyof `T` = keyof `T`

## Defined in

[@types/readonly.ts:31](https://github.com/alpheustangs/ts-vista/blob/c55ddd747aa287607cf84dd6de142b1ed1e2f70a/package/src/@types/readonly.ts#L31)
