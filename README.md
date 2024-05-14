# Swapr-UI

Swapr-UI is a Next.js monorepo project that implements a set of web components built with the utility classes from Tailwind CSS.

## Prerequisites

Before you can run this project, make sure you have the following software installed:

- Node.js 18 or higher
- Bun
- Git

## Getting Started

To get started with Swapr UI, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/SwaprHQ/swapr-ui-lib.git
    ```

2. Install the dependencies and build the projects:

    ```bash
    cd swapr-ui-lib
    bun install
    bun run build
    ```

3. Start the UI Library development server:

    ```bash
    bun run dev:ui
    ```

4. Start the Website development server:

    ```bash
    bun run dev:website
    ```

If you need to delete all the files and folders inside each `.gitignore` file from all the repos, run:

  ```bash
  bun run clean
  ```

## Troubleshooting

- `Unhandled Runtime Error` for NextJS

  This usually happens on NextJS v13.2.4 and up, when you export a client component (using the `"use client"` directive) using a normal function. A quick fix for this bug is to turn the normal function into an arrow function.

- `app-index.js:31 Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed` or similar

  This may happen due to different browser extensions like `Grammarly` and `LanguageTool` passing down extra attributes that will make a mismatch between server and client renders. Disabling/configuring the troublesome extensions to not run in the development ports (like port `3000`) should fix this issue.

- `Cannot read properties of undefined (reading Component).`

  This may happen due to circular dependencies between imports. Check if you have three or more components creating a circle of imports which may lead to a component being invoked before its initialization. A quick way to solve this would be to check the way you're exporting the problematic component. Check `packages/components/src/components/index.ts` to see an example of how to solve these exports.

## License

Swapr is released under the ISC License.
