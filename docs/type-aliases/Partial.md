[ts-vista](../README.md) / Partial

# Type Alias: Partial\<T, K\>

> **Partial**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `Partial`\<`Pick`\<`T`, `K`\>\>

Make properties in T optional.

### Example

```ts
import type { Partial } from "ts-vista";

type T = {
    a: string;
    b: number;
    c: boolean;
};

// O1 = { a?: string; b?: number; c?: boolean; }
type O1 = Partial<T>;

// O2 = { a?: string; b: number; c: boolean; }
type O2 = Partial<T, "a">;

// O3 = { a?: string; b?: number; c: boolean; }
type O3 = Partial<T, "a" | "b">;
```

## Type Parameters

• **T**

• **K** *extends* keyof `T` = keyof `T`

## Defined in

[@types/partial.ts:27](https://github.com/alpheustangs/ts-vista/blob/7305b9af7fc4e532c5d41e5524c0a80f5c2aa978/package/src/@types/partial.ts#L27)
