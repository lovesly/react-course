module.exports = {
    testURL: "http://localhost/",
    setupFiles: [
        "raf/polyfill",
        "<rootDir>/src/tests/setupTests.js"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"],
};