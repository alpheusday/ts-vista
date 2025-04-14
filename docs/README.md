[< Back](../README.md)

# TypeScript Vista

This is the documentation for TypeScript Vista.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i ts-vista

# Yarn
yarn add ts-vista

# pnpm
pnpm add ts-vista

# Deno
deno add npm:ts-vista

# Bun
bun add ts-vista
```

## Types

### `Readonly`

Make properties in T readonly.

Example:

```ts
import type { Readonly } from "ts-vista";

type T = {
    a: string;
    b: number;
    c: boolean;
};

// C1 = {
//     readonly a: string;
//     readonly b: number;
//     readonly c: boolean;
// }
type C1 = Readonly<T>;

// C2 = { readonly a: string; b: number; c: boolean; }
type C2 = Readonly<T, "a">;

// C3 = { readonly a: string; readonly b: number; c: boolean; }
type C3 = Readonly<T, "a" | "b">;
```

### `Partial`

Make properties in T optional.

Example:

```ts
import type { Partial } from "ts-vista";

type T = {
    a: string;
    b: number;
    c: boolean;
};

// O1 = { a?: string; b?: number; c?: boolean; }
type O1 = Partial<T>;

// O2 = { a?: string; b: number; c: boolean; }
type O2 = Partial<T, "a">;

// O3 = { a?: string; b?: number; c: boolean; }
type O3 = Partial<T, "a" | "b">;
```

### `Omit`

Construct a type with the properties of T except for those in type K.

Example:

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

### `Extract`

Extract from T those types that are assignable to U.

Example:

```ts
import type { Extract } from "ts-vista";

type T1 = {
  type: "a";
  name: string;
};

type T2 = {
  type: "b";
  age: number;
};

type T3 = {
  type: "c";
  color: string;
};

type T4 = T1 | T2 | T3;

// P1X = T1
type P1A = Extract<T4, T1>;
type P1B = Extract<T4, { type: "a" }>;

// P2X = T1 | T2
type P2A = Extract<T4, T1 | T2>;
type P2B = Extract<T4, { type: "a" } | { type: "b" }>;
```

### `Exclude`

Exclude from T those types that are assignable to U.

Example:

```ts
import type { Exclude } from "ts-vista";

type T1 = {
  type: "a";
  name: string;
};

type T2 = {
  type: "b";
  age: number;
};

type T3 = {
  type: "c";
  color: string;
};

type T4 = T1 | T2 | T3;

// D1X = T2 | T3
type D1A = Exclude<T4, T1>;
type D1B = Exclude<T4, { type: "a"; name: string }>;

// D2X = T3
type D2A = Exclude<T4, T1 | T2>;
type D2B = Exclude<
    T4,
    | { type: "a"; name: string }
    | { type: "b"; age: number }
>;
```

### `Format`

Make all properties in T visible.

Example:

```ts
import type { Format } from "ts-vista";

type T1 = {
  a: string;
  b: number;
};

type T2 = {
  c: string;
  d: number;
};

// F = { a: string; b: number; c: string; d: number; }
type F = Format<T1 & T2>;
```

## Functions

### `pick`

From `object`, pick a set of properties whose keys are in `keys`.

Example:

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

### `omit`

Construct an object with the properties of `object` except for those in `keys`.

Example:

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
