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

export const isObject = (val: any): boolean => typeof val === 'object' && val !== null;

export const omitKeys = <T extends object, K extends Extract<keyof T, string>>(obj: T, keys: K[]): Omit<T, K> => {
  const updatedObj = { ...obj };

  for (const key of keys) {
    delete updatedObj[key];
  }

  return updatedObj;
};
