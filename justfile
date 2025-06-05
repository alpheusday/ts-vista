set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsc"
tsup := node_bin + "tsup"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint with TypeScript Compiler
tsc:
    cd ./package && ../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./package && ../{{tsup}}

# Run tests
test:
    cd ./test && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./test && pnpm run test
    cd ./test && deno run test
    cd ./test && bun run test

# Generate APIs documentation
api:
    cd ./package && ../{{typedoc}}

# Clean builds
clean:
    rm -rf ./package/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./package/node_modules
    just clean
