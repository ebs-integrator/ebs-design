import { GenericObject } from "types";

export const flattenArray = <T>(arr: T[], key = 'children'): T[] =>
  arr.reduce((acc: T[], value: T) => {
    acc.push(value);

    if (value[key]) {
      acc = acc.concat(flattenArray(value[key], key));
      delete value[key];
    }

    return acc;
  }, []);

export const isArray = (arr): boolean => arr && Array.isArray(arr);

export const isEqualArrays = (arr1, arr2): boolean => JSON.stringify(arr1) === JSON.stringify(arr2);

export const uniqueArray = (arr1, arr2): GenericObject[] => {
  const newArray: GenericObject[] = [];

  (arr1.concat(arr2)).map((i: GenericObject) => {
    if (!newArray.some((item: GenericObject) => item.value === i.value)) {
      newArray.push(i)
    }

    return i;
  })

  return newArray;
};
