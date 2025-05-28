[ts-vista](../README.md) / Readonly

# Type Alias: Readonly\<T, K\>

```ts
type Readonly<T, K> = Omit<T, K> & Readonly<Pick<T, K>>;
```

Defined in: [@types/readonly.ts:31](https://github.com/alpheusday/ts-vista/blob/c438b9dc95b0e81e858cb313b2cc7855fc9db4c9/package/src/@types/readonly.ts#L31)

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

### T

`T`

### K

`K` *extends* keyof `T` = keyof `T`
