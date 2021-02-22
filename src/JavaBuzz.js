class Javabuzz {

  // The underscore before the method tells us that it is public

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
  
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "JavaBuzz";
    } else if (this.isDivisibleByFive(number)) {
      return "Buzz";
    } else if (this.isDivisibleByThree(number)) {
      return "Java";
    } else {
      return number;
    }
  }
}