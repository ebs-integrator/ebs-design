export const exportStory = (
  name: string,
  type: 'atoms' | 'molecules' | 'organisms' | 'templates' | 'introduction',
): string => `"React EBS UI"/${type.toUpperCase()}/${name}`;
