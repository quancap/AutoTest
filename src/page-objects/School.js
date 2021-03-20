const expect = require("chai").expect

const SCHOOL_HYPERLINK = '[routerlink="/student-management/school"]'
const NAME_TXTBOX = '[placeholder="Name"]'
const CODE_TXTBOX = '#code'
const SEARCH_BTN = '[aria-label="Filter"]'
const NAME_COLUMN = '//mat-row//mat-cell[1]'
const CODE_COLUMN = '//mat-row//mat-cell[2]'
const X_BTN = '#btn-clear'

class School {

    clickSchoolHyperlink() {
        browser.pause(5000)
        $(SCHOOL_HYPERLINK).click()
        browser.pause(1000)
        return this
    }

    clickSearchBTN() {
        $(SEARCH_BTN).click()
        browser.pause(2000)
        return this
    }

    searchSchoolByName(name) {
        $(NAME_TXTBOX).waitForDisplayed(5000)
        $(NAME_TXTBOX).setValue(name)
        return this
    }

    searchSchoolByCode(code) {
        $(CODE_TXTBOX).waitForDisplayed(5000)
        $(CODE_TXTBOX).setValue(code)
        return this
    }

    verifyNameSchool(resultname) {
        $(NAME_COLUMN).waitForDisplayed(5000)
        const nameverify = $(NAME_COLUMN).getText()
        expect(nameverify).to.equal(resultname)
    }

    verifyCodeSchool(resultcode) {
        $(CODE_COLUMN).waitForDisplayed(5000)
        const codeverify = $(CODE_COLUMN).getText()
        expect(codeverify).to.equal(resultcode)
    }

    verifySchool(resultname, resultcode){
        $(NAME_COLUMN).waitForDisplayed(5000)
        const nameverify = $(NAME_COLUMN).getText()
        const codeverify = $(CODE_COLUMN).getText()
        expect(nameverify).to.equal(resultname)
        expect(codeverify).to.equal(resultcode)
    }

    eraseDataSearch() { 
        $(X_BTN).click()
        browser.pause(1000)
    }
}

module.exports = new School();