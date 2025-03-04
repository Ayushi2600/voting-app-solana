# voting-dapp

## Getting Started

### Prerequisites

- Node v22.14.0
- Rust rustc 1.84.1 (e71f9a9a9 2025-01-27)
- Anchor CLI 0.30.1
- Solana CLI 2.0.24 (src:4c817c28; feat:607245837, client:Agave)

### Installation

#### Clone the repo

```shell
git clone <repo-url>
cd <repo-name>
```
#### Setup for project
```shell
npx create-solana-dapp
cd <project-name>
```
#### Install Dependencies

```shell
npm install
```

#### Start the web app

```
npm run dev
```

## Apps

### anchor

This is a Solana program written in Rust using the Anchor framework.

#### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command.

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the
Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/votingdapp-exports.ts` to match the new program id.

```shell
anchor keys sync
```

#### Build the program:

```shell
anchor-build
```

#### Start the test validator with the program deployed:

```shell
solana-test-validator
```

#### Run the tests

```shell
anchor-test
```

#### Deploy to Devnet

```shell
anchor deploy
```

### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

#### Commands

Start the web app

```shell
npm run dev
```
