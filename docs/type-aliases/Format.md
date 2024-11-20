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

• **T**

## Defined in

[@types/format.ts:24](https://github.com/alpheustangs/ts-vista/blob/c55ddd747aa287607cf84dd6de142b1ed1e2f70a/package/src/@types/format.ts#L24)
