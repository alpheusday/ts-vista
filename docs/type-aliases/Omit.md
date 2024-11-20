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

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |

## Defined in

[@types/omit.ts:23](https://github.com/alpheustangs/ts-vista/blob/8bbe28116f138b15dd06e37767960e13a4fdad79/package/src/@types/omit.ts#L23)
