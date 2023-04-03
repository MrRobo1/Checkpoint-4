const defaultDetails = {
    message: "Invalid credentials",
};

class InvalidCredentailsError extends Error {
  constructor(details = defaultDetails) {
    super();
    this.statusCode = 401;
    this.details = details;
  }
}

module.exports = { InvalidCredentailsError };