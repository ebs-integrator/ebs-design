export const throwError = (message: string): void => {
  throw Error(message);
};

export const throwErrorLog = (message: string): void => console.error(message);
