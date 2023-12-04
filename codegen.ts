import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:4001/graphql',
    documents: 'src/gql/**/*.graphql',
    hooks: { afterAllFileWrite: ['prettier --write'] },
    config: {
        typesPrefix: 'I',
        namingConvention: {
            typeNames: 'change-case-all#pascalCase',
            enumValues: 'change-case-all#upperCase',
        },
    },
    generates: {
        'src/gql/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query',
            ],
            config: {
                addInfiniteQuery: true,
                addSuspenseQuery: true,
                skipTypename: true,
                // exposeQueryKeys: true,
                // exposeFetcher: true,
                reactQueryVersion: 5,
                fetcher: './fetcher#gqlFetcher',
            },
        },
    },
};

export default config;