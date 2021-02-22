describe('Javabuzz', function() {
  // method statements go here

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz(); // This inserts the following line after every it
  })

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    }); 

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function(){
    
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('11 when a number is not divisible by either 3, 5 or 15 ', function(){
      expect(javabuzz.says(11)).toEqual(11);
    });

  });
  
});
