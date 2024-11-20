[ts-vista](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`object`, `keys`): `Pick`\<`T`, `K`\[`number`\]\>

From `object`, pick a set of properties whose keys are in `keys`.

### Example

```ts
import { pick } from "ts-vista";

type Keys = {
    a: number;
    b: number;
    c: number;
};

type Keys2 = Pick<Keys, "a" | "b">;

const keys: Keys = {
    a: 1,
    b: 2,
    c: 3,
};

const keys2: Keys2 = pick(keys, ["a", "b"]);
```

## Type Parameters

• **T** *extends* `object`

• **K** *extends* keyof `T`[]

## Parameters

• **object**: `T`

• **keys**: `K`

## Returns

`Pick`\<`T`, `K`\[`number`\]\>

## Defined in

[functions/pick.ts:28](https://github.com/alpheustangs/ts-vista/blob/c55ddd747aa287607cf84dd6de142b1ed1e2f70a/package/src/functions/pick.ts#L28)
