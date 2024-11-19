# TypeScript Vista

An utility to enhance TypeScript.

## Quick Start

Omit keys from an object:

```ts
import type { Omit } from "ts-vista";

import { omit } from "ts-vista";

type T = {
    a: string;
    b: number;
    c: boolean;
};

const o1: T = {
    a: "a",
    b: 1,
    c: true,
};

// o2 = { b: 1, c: true }
const o2: Omit<T, "a"> = omit(o1, ["a"]);
```

## License

This project is licensed under the terms of the MIT license.
