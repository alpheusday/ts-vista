[ts-vista](../README.md) / pick

# Function: pick()

```ts
function pick<T, K>(object, keys): Pick<T, K[number]>;
```

Defined in: [functions/pick.ts:28](https://github.com/alpheustangs/ts-vista/blob/eab8284f4120b255476b7a6b3bf20303d7fc4744/package/src/functions/pick.ts#L28)

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
