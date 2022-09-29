export type SelectMode = 'single' | 'multiple' | 'tags';
export type OptionsMode = 'dropdown' | 'box';
export type ValueMode = 'regular' | 'inline';
export type OptionValue = string | number;
export type Option = {
  value: OptionValue;
  text: React.ReactNode;
};
