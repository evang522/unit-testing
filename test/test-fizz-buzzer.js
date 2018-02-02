const expect = require('chai').expect;


let fizzBuzzer = require('../fizzBuzzer');

// , `buzz`, when divisible by 5, and `fizzbuzz` when divisible by 15


describe('fizzbuzzer', function () {
  it('should return fizz when a number is divisible by 3', function(){
    const answer = fizzBuzzer(6);
    expect(answer).to.equal('fizz');
  })

  it('should return fizz when a number is divisible by 3', function(){
    const answer = fizzBuzzer(6);
    expect(answer).to.equal('fizz');
  } )

  it('should return fizz-buzz when a number is divisible by 3 and 5', function() {
    const answer = fizzBuzzer(15);
    expect(answer).to.equal('fizz-buzz');


  });
})

