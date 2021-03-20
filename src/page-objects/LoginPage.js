let LoginBase = require('./LoginBase.js');

const USER_NAME_TXTBX = '//*[@autocomplete="username"]';
const PASSWORD_TXTBX = '//*[@autocomplete="current-password"]';
const LOGIN_BTN = '[type="submit"]';

class Login_Page extends LoginBase {

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDisplayed(15000);
        return this;
    }

    inputUsername(username) {
        $(USER_NAME_TXTBX).setValue(username);
        return this;
    }

    inputPassword(password) {
        $(PASSWORD_TXTBX).setValue(password);
        return this
    }

    clickOnLoginBtn() {
        $(LOGIN_BTN).click()
        return this
    }

}

module.exports = new Login_Page();