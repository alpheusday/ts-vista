# TypeScript Vista

An utility to enhance TypeScript.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i ts-vista

# Yarn
yarn add ts-vista

# pnpm
pnpm add ts-vista
```

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

## Documentation

For more information, please refer to the [documentation](./docs/README.md).

## License

This project is licensed under the terms of the MIT license.
