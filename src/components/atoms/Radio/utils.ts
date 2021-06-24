import { RadioProps } from './Radio';

export function withoutRadioProps<T>(props: RadioProps): T {
  const result = {};
  const set: Set<keyof RadioProps> = new Set([
    'value',
    'checked',
    'defaultChecked',
    'disabled',
    'inputRef',
  ] as (keyof RadioProps)[]);
  Object.keys(props).forEach((key) => !(key in set) && (result[key] = props[key]));

  return result as T;
}
