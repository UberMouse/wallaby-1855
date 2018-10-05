var compilerOptions = require('./tsconfig.json');
compilerOptions.module = 'CommonJs';


module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'tsconfig.json', load: false },
            { pattern: 'Scripts/react/**/*.ts', load: false },
            { pattern: 'Scripts/react/**/*.tsx', load: false },
            { pattern: 'Scripts/react/**/*.js', load: false },
            { pattern: 'Scripts/react/**/*.spec.tsx', ignore: true },
            { pattern: 'Scripts/react/**/*.spec.ts', ignore: true },
            { pattern: 'Scripts/react/**/*.stories.tsx', ignore: true },
            { pattern: 'Scripts/react/**/*.snap', ignore: true },
        ],
        tests: [
            'Scripts/react/**/*.spec.ts',
            'Scripts/react/**/*.spec.tsx',
            '!Scripts/react/sections/apm/modules/onboarding/tourtip.spec.tsx'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest',
        compilers: {
            '**/*.ts?x': wallaby.compilers.typeScript(compilerOptions)
        },
        setup: function (wallaby) {
            var jestConfig = require(wallaby.localProjectDir + '/jestconfig.json');

            wallaby.testFramework.configure(jestConfig);
        }
    }
};