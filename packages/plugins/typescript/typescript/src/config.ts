import { RawTypesConfig, AvoidOptionalsConfig } from '@graphql-codegen/visitor-plugin-common';

/**
 * @description This plugin generates the base TypeScript types, based on your GraphQL schema.
 *
 * The types generated by this plugin are simple, and refers to the exact structure of your schema, and it's used as the base types for other plugins (such as `typescript-operations` / `typescript-resolvers`)
 */
export interface TypeScriptPluginConfig extends RawTypesConfig {
  /**
   * @description This will cause the generator to avoid using TypeScript optionals (`?`) on types,
   * so the following definition: `type A { myField: String }` will output `myField: Maybe<string>`
   * instead of `myField?: Maybe<string>`.
   * @default false
   *
   * @exampleMarkdown
   * ## Override all definition types
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          avoidOptionals: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   *
   * ## Override only specific definition types
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          avoidOptionals: {
   *            field: true
   *            inputValue: true
   *            object: true
   *            defaultValue: true
   *          }
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  avoidOptionals?: boolean | AvoidOptionalsConfig;
  /**
   * @description Will prefix every generated `enum` with `const`, you can read more about const enums here: https://www.typescriptlang.org/docs/handbook/enums.html.
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          constEnums: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  constEnums?: boolean;
  /**
   * @description Generates enum as TypeScript `type` instead of `enum`. Useful if you wish to generate `.d.ts` declaration file instead of `.ts`
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          enumsAsTypes: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  enumsAsTypes?: boolean;
  /**
   * @description Controls whether to preserve typescript enum values as numbers
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          numericEnums: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  numericEnums?: boolean;
  /**
   * @description This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future.
   * This is useful if you are using `relay`.
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          enumsAsTypes: true
   *          futureProofEnums: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  futureProofEnums?: boolean;
  /**
   * @description This option controls whether or not a catch-all entry is added to union type definitions for values that may be added in the future.
   * This is useful if you are using `relay`.
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          futureProofUnions: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  futureProofUnions?: boolean;
  /**
   * @description Generates enum as TypeScript `const assertions` instead of `enum`. This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript’s enum construct.
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          enumsAsConst: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  enumsAsConst?: boolean;
  /**
   * @description This will cause the generator to emit types for enums only.
   * @default false
   *
   * @exampleMarkdown Override all definition types
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          onlyEnums: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  onlyEnums?: boolean;
  /**
   * @description This will cause the generator to emit types for operations only (basically only enums and scalars).
   * Interacts well with `preResolveTypes: true`
   * @default false
   *
   * @exampleMarkdown Override all definition types
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          onlyOperationTypes: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  onlyOperationTypes?: boolean;
  /**
   * @description Generates immutable types by adding `readonly` to properties and uses `ReadonlyArray`.
   * @default false
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          immutableTypes: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  immutableTypes?: boolean;
  /**
   * @description Allow to override the type value of `Maybe`.
   * @default T | null
   *
   * @exampleMarkdown
   * ## Allow undefined
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          maybeValue: 'T | null | undefined'
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   *
   * ## Allow `null` in resolvers:
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript', 'typescript-resolvers'],
   *        config: {
   *          maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  maybeValue?: string;
  /**
   * @description Allow to override the type value of `Maybe` for input types and arguments.
   * This is useful in case you want to differentiate between the wrapper of input and output types.
   * By default, this type just refers to `Maybe` type, but you can override it's definition.
   *
   * @default Maybe<T>
   *
   * @exampleMarkdown
   * ## Allow undefined
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          inputMaybeValue: T | null | undefined
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   *
   * ## Allow `null` in resolvers:
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          inputMaybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  inputMaybeValue?: string;
  /**
   * @description Set to `true` in order to generate output without `export` modifier.
   * This is useful if you are generating `.d.ts` file and want it to be globally available.
   * @default false
   *
   * @exampleMarkdown
   * ## Disable all export from a file
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli'
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          noExport: true
   *        }
   *      }
   *    }
   *  }
   *  export default config
   * ```
   */
  noExport?: boolean;
  /**
   * @description Set the value to `true` in order to disable all description generation.
   * @default false
   *
   * @exampleMarkdown
   * ## Disable description generation
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          disableDescriptions: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  disableDescriptions?: boolean;
  /**
   * @description When a GraphQL interface is used for a field, this flag will use the implementing types, instead of the interface itself.
   * @default false
   *
   * @exampleMarkdown
   * ## Override all definition types
   *
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          useImplementingTypes: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  useImplementingTypes?: boolean;
  /**
   * @name wrapEntireFieldDefinitions
   * @type boolean
   * @description Set to `true` in order to wrap field definitions with `EntireFieldWrapper`.
   * This is useful to allow return types such as Promises and functions for fields.
   * Differs from `wrapFieldDefinitions` in that this wraps the entire field definition if i.e. the field is an Array, while
   * `wrapFieldDefinitions` will wrap every single value inside the array.
   * @default false
   *
   * @example Enable wrapping entire fields
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          wrapEntireFieldDefinitions: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  wrapEntireFieldDefinitions?: boolean;
  /**
   * @name entireFieldWrapperValue
   * @type string
   * @description Allow to override the type value of `EntireFieldWrapper`. This wrapper applies outside of Array and Maybe
   * unlike `fieldWrapperValue`, that will wrap the inner type.
   * @default T | Promise<T> | (() => T | Promise<T>)
   *
   * @example Only allow values
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          entireFieldWrapperValue: 'T'
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  entireFieldWrapperValue?: string;
  /**
   * @description Allow using enum string values directly.
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts"
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        plugins: ['typescript'],
   *        config: {
   *          allowEnumStringTypes: true
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  allowEnumStringTypes?: boolean;
}
