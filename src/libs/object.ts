export function keys<O>(o: O): (keyof O)[] {
  return Object.keys(o) as (keyof O)[];
}

export const validate = (errors: string[] | { [key: string]: string[] }): string[] => {
  if (errors) {
    if (Array.isArray(errors)) {
      return errors;
    }

    return keys(errors)
      .reduce((acc, current) => [...acc, ...errors[current]], [] as string[])
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  return [];
};

export const isObject = (val: any): boolean => typeof val === 'object';

export const omitKeys = (keys: string[], obj: object): object => {
  const updatedObj = { ...obj };

  for (const n of keys) delete updatedObj[n];

  return updatedObj;
};

export const typedOmitKeys = <T extends object, TKeys extends keyof T>(keys: TKeys[], obj: T): Omit<T, TKeys> => {
  const updatedObj = { ...obj };
  for (const key of keys) delete updatedObj[key];
  return updatedObj;
};
