import { INVALID_ENTRY, NEGATIVE_VALUE, TRIANGLE_RULE, ISOSCELES_TRIANGLE, EQUILATERAL_TRIANGLE, SCALENE_TRIANGLE } from '../../constants/common';
import { validateSides, isSatisfyTriangleRule, getTriangleType, objectToArray } from '../../utils/common';

describe('test to validate triangle sides', () => {
    
    it('should return false if any of the side length is 0', () => {
        const sides = [3, 0, 7];
        const actualResult = validateSides(sides);
        expect(actualResult).toEqual({isValid: false, message: INVALID_ENTRY});
    });

    it('should return false if any of the side length is negative', () => {
        const sides = [3, -1, 7];
        const actualResult = validateSides(sides);
        expect(actualResult).toEqual({isValid: false, message: NEGATIVE_VALUE});
    });

    it('should return false if not satisfy triangle rule', () => {
        const sides = [1, 10, 12];
        const actualResult = validateSides(sides);
        expect(actualResult).toEqual({isValid: false, message: TRIANGLE_RULE});
    });

    it('should return a true for valid sides', () => {
        const sides = [3, 5, 7];
        const actualResult = validateSides(sides);
        expect(actualResult).toEqual({isValid: true}); 
    });
});

describe('test to satisfy triangle rule', () => {
    it('should return false for invalid sides', () => {
        const sides = [1, 10, 12];
        const actualResult = isSatisfyTriangleRule(sides);
        expect(actualResult).toEqual(false);
    });
    it('should return true for invalid sides', () => {
        const sides = [3, 5, 7];
        const actualResult = isSatisfyTriangleRule(sides);
        expect(actualResult).toEqual(true);
    });
});

describe('should return triangle type', () => {
    it('shoule be ISOSCELES_TRIANGLE', () => {
        const sides = [5, 32, 32];
        const actualResult = getTriangleType(sides);
        expect(actualResult).toEqual(ISOSCELES_TRIANGLE);
    });
    
    it('shoule be SCALENE_TRIANGLE', () => {
        const sides = [11, 25, 32];
        const actualResult = getTriangleType(sides);
        expect(actualResult).toEqual(SCALENE_TRIANGLE);
    });

    it('shoule be EQUILATERAL_TRIANGLE', () => {
        const sides = [24, 24, 24];
        const actualResult = getTriangleType(sides);
        expect(actualResult).toEqual(EQUILATERAL_TRIANGLE);
    });
});

describe('should convert object to array', () => {
    it('should receive an object and convert it to an array[number]', ()=> {
        const sidesObject = {'first': '12', 'second': 23, 'third': 34};
        const actualResult = objectToArray(sidesObject);
        expect(actualResult).toEqual([12, 23, 34]);
    });
});
