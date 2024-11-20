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

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `K` *extends* keyof `T` | keyof `T` |

## Defined in

[@types/partial.ts:27](https://github.com/alpheustangs/ts-vista/blob/8bbe28116f138b15dd06e37767960e13a4fdad79/package/src/@types/partial.ts#L27)
