export const exportStory = (name: string, type: 'atoms' | 'molecules' | 'organisms' | 'introduction'): string =>
  `"React EBS UI"/${type.toUpperCase()}/${name}`;
