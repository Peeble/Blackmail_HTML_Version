(function(window) {
    'use strict'

    var REMOVE_SELECTOR = '[data-remove="form"]';
    var PAYMENT_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var RemoveForm = App.RemoveForm;
    var remove = new RemoveForm(REMOVE_SELECTOR)
    var payment = new RemoveForm(PAYMENT_SELECTOR)

    remove.addRemoveHandler(function (data) {
        console.log('submitting removal...')
    });

    payment.addPaymentHandler(function (data) {
        console.log('submitting payment...')
    })

})(window)