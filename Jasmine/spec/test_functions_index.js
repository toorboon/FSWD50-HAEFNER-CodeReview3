/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   

// describe your code
describe("validate(name,age,country,horse_power)", function(){
       // what it should do
       it("should return true, if the input is valid",function(){
               //expect something
               expect(validate('Horst',34,'austria',56)).toBe(true);
       });

       it("should return false, if the input is not valid",function(){
               //expect something
               expect(validate('',1,'austria',56)).toBe(false);
       });

       it("should return result > 0",function(){
               //expect something
               expect(calculateInsurancePerCountry(34,'austria',56)).toBeGreaterThan(0);
       });
});


/*
Note how describe - it() argument reads like a sentence.
*/