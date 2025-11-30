[ts-vista](../README.md) / omit

# Function: omit()

```ts
function omit<T, K>(object, keys): Omit<T, K[number]>;
```

Defined in: [functions/omit.ts:33](https://github.com/alpheusday/ts-vista/blob/28ecd427a4892ffaf9e4d5a31d823e7ff7b1aff7/package/src/functions/omit.ts#L33)

Construct an object with the properties of `object`
except for those in `keys`.

### Example

```ts
import type { Omit } from "ts-vista";

import { omit } from "ts-vista";

type Keys = {
    a: number;
    b: number;
    c: number;
};

type Keys2 = Omit<Keys, "a" | "b">;

const keys: Keys = {
    a: 1,
    b: 2,
    c: 3,
};

const keys2: Keys2 = omit(keys, ["a", "b"]);
```

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* keyof `T`[]

## Parameters

### object

`T`

### keys

`K`

## Returns

[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\[`number`\]\>
