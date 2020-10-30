(function(window) {
    'use strict'

    var SUBMIT_SELECTOR = '[data-submit="form"]';
    var App = window.App;
    var RemoveForm = App.RemoveForm;
    var submit = new RemoveForm(SUBMIT_SELECTOR)

    submit.addRemoveHandler(function (data) {
        console.log('submitting removal...')
    });



})(window)