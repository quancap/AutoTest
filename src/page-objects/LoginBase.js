class LoginBase {

    openTestingPage(path) {
        browser.url(path);
        browser.maximizeWindow();
    }
}

module.exports = LoginBase;