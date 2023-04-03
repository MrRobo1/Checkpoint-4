class ModelValidationError extends Error {
  constructor(detail) {
    super();
    this.statusCode = 400;
    this.details = details;
  }
}

module.exports =  { ModelValidationError };