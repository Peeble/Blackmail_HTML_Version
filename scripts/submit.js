(function () {
    var App = window.App || {}
    var $ = window.jQuery

    class RemoveForm {
        constructor(selector) {
            console.log('constructor?')
            if (!selector) {
                throw new Error('No selector provided')
            }
            this.$formElement = $(selector)
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector)
            }
        }

        addRemoveHandler (fn) {
            console.log('Setting submit handler for remove form')
            this.$formElement.on('submit', function (event) {
              event.preventDefault()
      
              var data = {}
              $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value
                console.log(item.name + ' is ' + item.value)
              })
              console.log(data)
              fn(data)
            })
          }

          addPaymentHandler (fn) {
            console.log('Setting submit handler for payment form')
            this.$formElement.on('submit', function (event) {
              event.preventDefault()
      
              var data = {}
              $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value
                console.log(item.name + ' is ' + item.value)
              })
              console.log(data)
              fn(data)
            })
          }


    }

    App.RemoveForm = RemoveForm
    window.App = App
})(window);