export const exportStory = (
  name: string,
  type: 'introduction' | 'inputs' | 'data-display' | 'feedback' | 'navigation' | 'layout' | 'surfaces' | 'utils',
): string => `"React EBS UI"/${type.toUpperCase().replace(/-/g, ' ')}/${name}`;
