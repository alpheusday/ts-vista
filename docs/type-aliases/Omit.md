[ts-vista](../README.md) / Omit

# Type Alias: Omit\<T, K\>

> **Omit**\<`T`, `K`\>: `{ [KY in keyof T as KY extends K ? never : KY]: T[KY] }`

Construct a type with the properties of T
except for those in type K.

### Example

```ts
import type { Omit } from "ts-vista";

type T = {
  a: string;
  b: number;
  c: boolean;
};

// D1 = { b: number; c: boolean; }
type D1 = Omit<T, "a">;

// D2 = { c: boolean; }
type D2 = Omit<T, "a" | "b">;
```

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[@types/omit.ts:23](https://github.com/alpheustangs/ts-vista/blob/7305b9af7fc4e532c5d41e5524c0a80f5c2aa978/package/src/@types/omit.ts#L23)
