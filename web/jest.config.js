module.exports = async () => {

    process.env.TZ = 'UTC';

    return {
        "testEnvironment": "jsdom",
        "testRegex": "__tests__/.*Spec.(js|ts)x?$",
        "roots": [
            "<rootDir>/src/js"
        ],
        "unmockedModulePathPatterns": [
            "react"
        ],
        "coverageDirectory": "./coverage",
        "coveragePathIgnorePatterns": [
            "<rootDir>/src/js/filt/filt.js"
        ],
        "collectCoverageFrom": [
            "src/js/**/*.{js,jsx,ts,tsx}"
        ],
        "transform": {
            "^.+\\.[jt]sx?$": [
                "esbuild-jest",
                {
                    "loaders": {
                        ".js": "tsx"
                    },
                    "format": "cjs",
                    "sourcemap": true,
                }
            ]
        }
    }
}
