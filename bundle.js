(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


const emailInput = document.querySelector(".email-input")
const emailForm = document.querySelector(".email-form")
const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener('click', function(event) {
  console.log('hello');
    if(emailInput.value === "") {
      emailInput.classList.add("shake-box")
      event.preventDefault()
        setTimeout(function() {
          emailInput.classList.remove("shake-box")
        }, 300)
    }else{
      alert("Thank you for signing up!")
    }

})

},{}]},{},[1]);
