(function(window) {
    'use strict'

    var LOGIN_SELECTOR = '[data-login="form"]';
    var SIGNUP_SELECTOR = '[data-signup="form"]';
    var App = window.App;
    var LoginForm = App.LoginForm;
    var login = new LoginForm(LOGIN_SELECTOR)
    var signup = new LoginForm(SIGNUP_SELECTOR)

    login.addLoginHandler(function (data) {
        console.log('submitting login...')
    });
    signup.addSignupHandler(function(data) {
        console.log('submitting signup...')
    });

})(window)