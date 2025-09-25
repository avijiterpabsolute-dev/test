const { expect } = require('chai');
const { add, subtract, multiply, divide } = require('../index');

describe('Calculator Functions', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-2, 3)).to.equal(1);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).to.equal(2);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).to.equal(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(4, 3)).to.equal(12);
    });

    it('should handle zero multiplication', () => {
      expect(multiply(5, 0)).to.equal(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should handle decimal results', () => {
      expect(divide(7, 2)).to.equal(3.5);
    });

    it('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).to.throw('Division by zero is not allowed');
    });
  });
});