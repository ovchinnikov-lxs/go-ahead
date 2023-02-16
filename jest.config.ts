export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    transform: {
        'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!variables/.*)',
    ],
    testEnvironment: 'jsdom',
};
