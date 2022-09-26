export const exportStory = (
  name: string,
  type: 'introduction' | 'form' | 'data-display' | 'feedback' | 'navigation' | 'layout' | 'surfaces' | 'utils',
): string => `${type.replace(/-/g, ' ')}/${name}`;
