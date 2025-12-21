[ts-vista](../README.md) / Partial

# Type Alias: Partial\<T, K\>

```ts
type Partial<T, K> = Omit<T, K> & Partial<Pick<T, K>>;
```

Defined in: [@types/partial.ts:27](https://github.com/alpheusday/ts-vista/blob/32bd0a1381c46235c59319451c0b59ee6b065259/package/src/@types/partial.ts#L27)

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

### T

`T`

### K

`K` *extends* keyof `T` = keyof `T`
