[ts-vista](../README.md) / Omit

# Type Alias: Omit\<T, K\>

```ts
type Omit<T, K> = { [KY in keyof T as KY extends K ? never : KY]: T[KY] };
```

Defined in: [@types/omit.ts:23](https://github.com/alpheustangs/ts-vista/blob/eab8284f4120b255476b7a6b3bf20303d7fc4744/package/src/@types/omit.ts#L23)

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

### T

`T`

### K

`K` *extends* keyof `T`
