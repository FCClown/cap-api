function sum(a, b) {
  try {
    if (typeof a !== "number" && typeof b !== "number") {
      throw new TypeError("Arguments must be numbers !");
    } else {
      return a + b;
    }
  } catch (error) {
    return error.message;
  }
}
