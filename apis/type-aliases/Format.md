[ts-vista](../README.md) / Format

# Type Alias: Format\<T\>

```ts
type Format<T> = T extends Function ? T : { [K in keyof T]: T[K] };
```

Defined in: [@types/format.ts:24](https://github.com/alpheusday/ts-vista/blob/32bd0a1381c46235c59319451c0b59ee6b065259/package/src/@types/format.ts#L24)

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

### T

`T`
