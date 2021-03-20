const FIRST_NAME_TXTBOX = '[formcontrolname="givenName"]'
const LAST_NAME_TXTBOX = '[formcontrolname="familyName"]'
const DOB_DATEPICKER_BTN = '[class="mat-datepicker-toggle-default-icon ng-star-inserted"]'
const SCHOOL_TXTBOX = '[formcontrolname="school"]'
const STUDENT_ID_TXTBOX = '[formcontrolname="districtId"]'
const ADD_NEW_STUDENT_BTN = '[type="SUBMIT"]'

class NewStudent {

    inputFirstName(firstname) {
        browser.pause(1000)
        $(FIRST_NAME_TXTBOX).waitForDisplayed(10000)
        $(FIRST_NAME_TXTBOX).setValue(firstname)
        return this
    }

    inputLastName(lastname) {
        $(LAST_NAME_TXTBOX).waitForDisplayed(10000)
        $(LAST_NAME_TXTBOX).setValue(lastname)
        return this
    }

    inputDOB(dob) {
        $(DOB_DATEPICKER_BTN).waitForDisplayed(10000)
        $(DOB_DATEPICKER_BTN).click()
        const DATE_PICKER = '//td[@aria-label="' + dob + '"]'
        $(DATE_PICKER).click()
        return this
    }

    inputSchool(school) {
        $(SCHOOL_TXTBOX).waitForDisplayed(10000)
        $(SCHOOL_TXTBOX).setValue(school)
        $(SCHOOL_TXTBOX).click()
        const SELECT_ITEM = '//span[@class="mat-option-text"]//strong'
        $(SELECT_ITEM).click()
        return this
    }

    inputStudentID(studentid) {
        $(STUDENT_ID_TXTBOX).waitForDisplayed(10000)
        $(STUDENT_ID_TXTBOX).setValue(studentid)
        return this
    }

    clickAddNewStudentBtn() {
        $(ADD_NEW_STUDENT_BTN).click()
        return this
    }
}

module.exports = new NewStudent();