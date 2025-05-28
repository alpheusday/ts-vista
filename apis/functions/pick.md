[ts-vista](../README.md) / pick

# Function: pick()

```ts
function pick<T, K>(object, keys): Pick<T, K[number]>;
```

Defined in: [functions/pick.ts:28](https://github.com/alpheus-day/ts-vista/blob/a2bc999187faa2f0eb8f7abe2b1074733e87318f/package/src/functions/pick.ts#L28)

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

`Pick`\<`T`, `K`\[`number`\]\>
