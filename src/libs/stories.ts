export const exportStory = (
  name: string,
  type: 'introduction' | 'form' | 'data-display' | 'feedback' | 'navigation' | 'layout' | 'surfaces' | 'utils',
): string => `"React EBS UI"/${type.toUpperCase().replace(/-/g, ' ')}/${name}`;
