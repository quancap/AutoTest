let LoginData = require('../test-data/LoginFunction.js')
let SchoolData = require('../test-data/School.js')
let LoginPage = require('../page-objects/LoginPage.js')
let SchoolPage = require('../page-objects/School.js')

describe('TC002_FILTER_SCHOOL', () => {

    const VALID_DATA_CREDS = LoginData.VALID_DATA_CREDS;
    const SCHOOL_NAME = SchoolData.SCHOOL_NAME;
    const SCHOOL_CODE = SchoolData.SCHOOL_CODE;

    before(() => {
        //1: Open Page
        LoginPage.openTestingPage('');
        //2: Login success
        LoginPage
            .waitForUsernameDisplayed()
            .inputUsername(VALID_DATA_CREDS.username)
            .inputPassword(VALID_DATA_CREDS.password)
            .clickOnLoginBtn();
    });

    it('TC002_1_Search School By Name', () => {
        //3: Select School item on left menu
        SchoolPage.clickSchoolHyperlink()

        //4: Search School By Name
        SchoolPage
        .searchSchoolByName(SCHOOL_NAME)
        .clickSearchBTN()

        //5: Verify name school
        SchoolPage.verifyNameSchool(SCHOOL_NAME)
    });

    it('TC002_2_Search School By Code', () => {
        //3: Erase Data Search
        SchoolPage.eraseDataSearch()

        //4: Search School By Name
        SchoolPage
        .searchSchoolByCode(SCHOOL_CODE)
        .clickSearchBTN()

        //5: Verify name school
        SchoolPage.verifyCodeSchool(SCHOOL_CODE)
    });

    it('TC002_3_Search School both Name, Code', () => {
        //3: Erase Data Search
        SchoolPage.eraseDataSearch()

        //4: Search School By Name
        SchoolPage
        .searchSchoolByName(SCHOOL_NAME)
        .searchSchoolByCode(SCHOOL_CODE)
        .clickSearchBTN()

        //5: Verify name school
        SchoolPage.verifySchool(SCHOOL_NAME,SCHOOL_CODE)
    });

    after(() => {
        //Clear Environment
        console.log('TC_001_AddNewStudent is done');
        browser.closeWindow();
    });
});