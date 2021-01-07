"use strict";

var form = document.querySelector("#formInit");
var c = console.log;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var regexSoloLetras = /^[a-zA-Z\s]+$/;
  var validateUsername = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  var validateLetterNumberSpace = /^[A-Za-z0-9\s]+$/g;

  if (!validator.isCreditCard(form.card.value)) {
    if (!form.card.classList.contains("is-invalid")) {
      form.card.classList.add("is-invalid");
    }
  } else {
    if (form.card.classList.contains("is-invalid")) {
      form.card.classList.remove("is-invalid");
    }
  }

  if (!validator.isNumeric(form.amount.value)) {
    if (!form.amount.classList.contains("is-invalid")) {
      form.amount.classList.add("is-invalid");
    }
  } else {
    if (form.amount.classList.contains("is-invalid")) {
      form.amount.classList.remove("is-invalid");
    }
  }

  if (!validator.isAlpha(form.name.value)) {
    if (!form.name.classList.contains("is-invalid")) {
      form.name.classList.add("is-invalid");
    }
  } else {
    if (form.name.classList.contains("is-invalid")) {
      form.name.classList.remove("is-invalid");
    }
  }

  if (!validator.isAlpha(form.lastname.value)) {
    if (!form.lastname.classList.contains("is-invalid")) {
      form.lastname.classList.add("is-invalid");
    }
  } else {
    if (form.lastname.classList.contains("is-invalid")) {
      form.lastname.classList.remove("is-invalid");
    }
  }

  if (!validator.isAlpha(form.city.value)) {
    if (!form.city.classList.contains("is-invalid")) {
      form.city.classList.add("is-invalid");
    }
  } else {
    if (form.city.classList.contains("is-invalid")) {
      form.city.classList.remove("is-invalid");
    }
  } // c(validator.isPostalCodeLocales(form.postcode.value))
  // if(!validator.isPostalCode(form.postcode.value)){
  //     if(!form.postcode.classList.contains(`is-invalid`)){
  //         form.postcode.classList.add(`is-invalid`)
  //     }
  // 	}else{
  // 		if(form.postcode.classList.contains(`is-invalid`)){
  // 				form.postcode.classList.remove(`is-invalid`)
  // 		}
  // }


  if (form.state.value === "--Opciones--") {
    if (!form.state.classList.contains("is-invalid")) {
      form.state.classList.add("is-invalid");
    }
  } else {
    if (form.state.classList.contains("is-invalid")) {
      form.state.classList.remove("is-invalid");
    }
  }

  if (validateLetterNumberSpace.test(form.message.value)) {
    if (!form.message.classList.contains("is-invalid")) {
      form.message.classList.add("is-invalid");
    }
  } else {
    if (form.message.classList.contains("is-invalid")) {
      form.message.classList.remove("is-invalid");
    }
  } // if(!validator.isEmail(form.username.value)){
  //     //alert("debe ingresar un username valido");
  //     form.username.classList.add('is-invalid');
  // }

});