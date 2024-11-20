[ts-vista](../README.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`object`, `keys`): [`Omit`](../type-aliases/Omit.md)\<`T`, `K`\[`number`\]\>

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

• **T** *extends* `object`

• **K** *extends* keyof `T`[]

## Parameters

• **object**: `T`

• **keys**: `K`

## Returns

[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\[`number`\]\>

## Defined in

[functions/omit.ts:33](https://github.com/alpheustangs/ts-vista/blob/c55ddd747aa287607cf84dd6de142b1ed1e2f70a/package/src/functions/omit.ts#L33)
