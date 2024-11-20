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

| Type Parameter |
| ------ |
| `T` *extends* `object` |
| `K` *extends* keyof `T`[] |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `T` |
| `keys` | `K` |

## Returns

`Pick`\<`T`, `K`\[`number`\]\>

## Defined in

[functions/pick.ts:28](https://github.com/alpheustangs/ts-vista/blob/8bbe28116f138b15dd06e37767960e13a4fdad79/package/src/functions/pick.ts#L28)
