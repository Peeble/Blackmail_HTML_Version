(function () {
    var App = window.App || {}
    var $ = window.jQuery

    class LoginForm {
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

        addLoginHandler (fn) {
            console.log('Setting submit handler for login form')
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

          addSignupHandler (fn) {
            console.log('Setting submit handler for signup form')
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

        testFunc() {
            console.log('test')
        }
    }

    App.LoginForm = LoginForm
    window.App = App
})(window);