let LoginData = require('../test-data/LoginFunction.js')
let StudentData = require('../test-data/Student.js')
let LoginPage = require('../page-objects/LoginPage.js')
let StudentPage = require('../page-objects/Student.js')
let NewStudentPage = require('../page-objects/NewStudent.js')

describe('TC001_Add New Student', () => {

    const VALID_DATA_CREDS = LoginData.VALID_DATA_CREDS;
    const NEW_STUDENT = StudentData.NEW_STUDENT;

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

    it('Add New Student', () => {
        //3: Select Add Student button
        StudentPage
        .clickStudentHyperlink()
        .clickAddStudentBtn()
        //4: Fill data to add new student
        NewStudentPage
        .inputFirstName(NEW_STUDENT.firstname)
        .inputLastName(NEW_STUDENT.lastname)
        .inputDOB(NEW_STUDENT.dob)
        .inputSchool(NEW_STUDENT.school)
        .inputStudentID(NEW_STUDENT.studentid)
        .clickAddNewStudentBtn()
        //5: verify new student is added successfully
        StudentPage
        .verifyFirstNameStudent(NEW_STUDENT.firstname)
        .verifyLastNameStudent(NEW_STUDENT.lastname)
        .verifySchoolStudent(NEW_STUDENT.school)
        .verifyStudentIDStudent(NEW_STUDENT.studentid)
    });

    after(() => {
        //Clear Environment
        console.log('TC_001_AddNewStudent is done');
        browser.closeWindow();
    });
});