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

[functions/pick.ts:28](https://github.com/alpheustangs/ts-vista/blob/7305b9af7fc4e532c5d41e5524c0a80f5c2aa978/package/src/functions/pick.ts#L28)
