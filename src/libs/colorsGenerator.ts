const getHashCode = (value: string): number => {
  let hash = 0;

  if (value.length !== 0) {
    for (let i = 0; i < value.length; i++) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
  }

  return hash;
};

const intoRGB = (value: string): string => {
  const hash = getHashCode(value);
  const rgb = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

export const colorFromString = (value: string): string => {
  return intoRGB(value);
};
