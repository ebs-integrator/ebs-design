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
