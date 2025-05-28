[ts-vista](../README.md) / Partial

# Type Alias: Partial\<T, K\>

```ts
type Partial<T, K> = Omit<T, K> & Partial<Pick<T, K>>;
```

Defined in: [@types/partial.ts:27](https://github.com/alpheus-day/ts-vista/blob/a2bc999187faa2f0eb8f7abe2b1074733e87318f/package/src/@types/partial.ts#L27)

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
