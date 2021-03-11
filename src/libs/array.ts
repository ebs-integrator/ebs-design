export const flattenArray = <T>(arr: T[], key = 'children'): T[] =>
  arr.reduce((acc: T[], value: T) => {
    acc.push(value);

    if (value[key]) {
      acc = acc.concat(flattenArray(value[key], key));
      delete value[key];
    }

    return acc;
  }, []);

