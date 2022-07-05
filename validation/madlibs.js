// validation/madlibs.js
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMadlibInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 20 })) {
    errors.text = 'Madlib cant be smaller than 20 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
