import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://publy-fullstack-example.fly.dev/graphql",
  documents: "src/**/*.{ts,tsx,graphql}",
  generates: {
    "./_generated-graphql-types.ts": {
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
        skipTypename: true,
        typesPrefix: "G_",
        printFieldsOnNewLines: true,
        scalars: {
          DateTime: "string",
        },
        inlineFragmentTypes: "combine",
        // extractAllFieldsToTypes: true,
        omitOperationSuffix: true,
        maybeValue: "T",
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
