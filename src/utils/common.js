import {INCLUDES_ZERO, TRIANGLE_RULE, NEGATIVE_VALUE, SCALENE_TRIANGLE, EQUILATERAL_TRIANGLE, ISOSCELES_TRIANGLE } from '../constants/common';
import { values } from 'lodash';

export const validateSides = (sides) => {
    if (sides.includes(0)) {
        return {isValid: false, message: INCLUDES_ZERO};
    } else if (sides.some( x => x < 0 )) {
        return {isValid: false, message: NEGATIVE_VALUE};
    } else if (!isSatisfyTriangleRule(sides)) {
        return {isValid: false, message: TRIANGLE_RULE };
    } else {
        return {isValid: true}
    }
};

export const isSatisfyTriangleRule = (sides) => {
    const first = sides[0];
    const second = sides[1];
    const third = sides[2];
    return (first + second > third && first + third > second && second + third > first);
};

export const getTriangleType = (sides) => {
    const newSet = Array.from(new Set(sides));
    if (newSet.length === 3) {
        return SCALENE_TRIANGLE;
    } else if (newSet.length === 2) {
        return ISOSCELES_TRIANGLE;
    } else {
        return EQUILATERAL_TRIANGLE;
    }
};

export const objectToArray = (sidesObject) => {
    const sidesArray = values(sidesObject);
    return sidesArray.map(val => Number(val));      
}
