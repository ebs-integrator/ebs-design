import * as React from 'react';

export type ThemeProps = [string | undefined, (value?: string) => void];

export const useTheme = (defaultTheme?: string): ThemeProps => {
  const [theme, setTheme] = React.useState<string | undefined>(defaultTheme);

  React.useEffect(() => {
    if (theme) {
      document.body.classList.add(`theme--${theme}`);
    }

    return () => {
      if (theme) {
        document.body.classList.remove(`theme--${theme}`);
      }
    };
  }, [theme]);

  const onChange = (value?: string): void => {
    if (theme && value !== theme) {
      document.body.classList.remove(`theme--${theme}`);
    }

    setTheme(value);
  };

  return [theme, onChange];
};
