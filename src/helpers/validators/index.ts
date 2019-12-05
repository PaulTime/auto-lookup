import { TValidator } from 'types/forms';

export const required: TValidator = value => (value ? undefined : 'Required');

const CAR_NUMBER_REG_EXP = /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/;

export const carNumber: TValidator = value =>
  CAR_NUMBER_REG_EXP.test(value) ? undefined : 'Not a car number';
