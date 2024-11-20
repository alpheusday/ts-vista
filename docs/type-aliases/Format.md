[ts-vista](../README.md) / Format

# Type Alias: Format\<T\>

> **Format**\<`T`\>: `T` *extends* `Function` ? `T` : `{ [K in keyof T]: T[K] }`

Make all properties in T visible.

### Example

```ts
import type { Format } from "ts-vista";

type T1 = {
  a: string;
  b: number;
};

type T2 = {
  c: string;
  d: number;
};

// F = { a: string; b: number; c: string; d: number; }
type F = Format<T1 & T2>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[@types/format.ts:24](https://github.com/alpheustangs/ts-vista/blob/8bbe28116f138b15dd06e37767960e13a4fdad79/package/src/@types/format.ts#L24)
