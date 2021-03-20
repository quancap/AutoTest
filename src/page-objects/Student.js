const expect = require("chai").expect

const STUDENT_HYPERLINK = '[routerlink="/student-management/student"]'
const ADD_STUDENT_BTN = '[class="mat-raised-button mat-button-base mat-primary"]'
const FIRST_NAME_COLUMN = '//*[@class="ripple-row mat-ripple mat-row ng-star-inserted"]/mat-cell[2]'
const LAST_NAME_COLUMN = '//*[@class="ripple-row mat-ripple mat-row ng-star-inserted"]/mat-cell[3]'
const SCHOOL_COLUMN = '//*[@class="ripple-row mat-ripple mat-row ng-star-inserted"]/mat-cell[5]'
const STUDENT_ID_COLUMN = '//*[@class="ripple-row mat-ripple mat-row ng-star-inserted"]/mat-cell[6]'

class Student {

    clickStudentHyperlink() {
        browser.pause(5000)
        $(STUDENT_HYPERLINK).waitForDisplayed(10000)
        $(STUDENT_HYPERLINK).click()
        return this
    }

    clickAddStudentBtn() {
        $(ADD_STUDENT_BTN).waitForDisplayed(5000)
        $(ADD_STUDENT_BTN).click()
        return this
    }

    verifyFirstNameStudent(firstname) {
        browser.pause(2000)
        $(FIRST_NAME_COLUMN).waitForDisplayed(10000)
        const RESULT_FIRST_NAME = $(FIRST_NAME_COLUMN).getText()
        expect(RESULT_FIRST_NAME).to.equal(firstname)
        return this
    }

    verifyLastNameStudent(lastname) {
        $(LAST_NAME_COLUMN).waitForDisplayed(10000)
        const RESULT_LAST_NAME = $(LAST_NAME_COLUMN).getText()
        expect(RESULT_LAST_NAME).to.equal(lastname)
        return this
    }

    verifySchoolStudent(school) {
        $(SCHOOL_COLUMN).waitForDisplayed(10000)
        const RESULT_SCHOOL = $(SCHOOL_COLUMN).getText()
        expect(RESULT_SCHOOL).to.equal(school)
        return this
    }

    verifyStudentIDStudent(studentid) {
        $(STUDENT_ID_COLUMN).waitForDisplayed(10000)
        const RESULT_STUDENT_ID = $(STUDENT_ID_COLUMN).getText()
        expect(RESULT_STUDENT_ID).to.equal(studentid)
        return this
    }
}

module.exports = new Student();