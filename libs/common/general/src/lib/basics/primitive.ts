import { Nullish } from '../types';

export function isNullish(value: unknown): value is Nullish {
  return (value === null || value === undefined || typeof(value) === 'undefined');
}

export function isOfType<T>(value: unknown): value is T {
  return !isNullish(value);
}

export type TypeOfName = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'object' | 'function' | 'undefined';


export const primitive = {
  isNotNullish: <T>(obj: unknown): obj is T => !isNullish(obj),
  isNullish: (obj: unknown): obj is Nullish => isNullish(obj),
  isOfType,

  isNumber: (obj: unknown): obj is number => Number.isFinite(obj),
  isInteger: (obj: unknown): obj is number => Number.isInteger(obj),

  isBoolean: (obj: unknown): obj is boolean => typeof(obj) === 'boolean',
  isString: (obj: unknown): obj is string => typeof(obj) === 'string',

  isArray: (obj: unknown) => Array.isArray(obj),
  
}
