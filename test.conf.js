let chai = require('chai');

exports.config = {

    // Test scripts
    specs: [
        "./src/test-scripts/TC_001_AddNewStudent.js",
        "./src/test-scripts/TC_002_FilterSchool.js"
    ],

    maxInstances: 1,

    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    //Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',
    baseUrl: "https://systemmanagement-stage.karrostech.io/",

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    //report configuration
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    //chaijs - verify lib
    before: () => {
        global.expect = chai.expect; // gan bien global.expect băng ket qua qua cua ham expect - k xài ()
    }
}