import * as React from 'react';
import { useSetState } from 'react-use';
import { InputSelect } from './InputSelect';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('InputSelect', 'molecules'),
  component: InputSelect,
};

const options = [
  { value: 1, text: 'Item 1' },
  { value: 2, text: 'Item 2' },
  { value: 3, text: 'Item 3' },
  { value: 4, text: 'Item 4' },
  { value: 5, text: 'Item 5' },
  { value: 6, text: 'Item 6' },
  { value: 7, text: 'Item 7' },
  { value: 8, text: 'Item 8' },
  { value: 9, text: 'Item 9' },
  { value: 10, text: 'Item 10' },
];

export const Regular = (): React.ReactNode => <InputSelect options={options} placeholder="Select" />;

export const HasValue = (): React.ReactNode => (
  <InputSelect options={options} value="Selected value" placeholder="Select" initialOptions={[{ value: 'Selected value', text: 'Selected value' }]} />
);

export const Multiple = (): React.ReactNode => <InputSelect mode="multiple" options={options} placeholder="Select" />;

export const MultipleHasValue = (): React.ReactNode => {
  const [value, setValue] = React.useState<any>(['Selected value']);
  return (
  <InputSelect
    mode="multiple"
    options={options}
    value={value}
    onChange={setValue}
    initialOptions={[{ value: 'Selected value', text: 'a' }]}
    placeholder="Select"
  />
)};

export const OptionsAsChildren = (): React.ReactNode => (
  <InputSelect placeholder="Select">
    {options.map((props) => <InputSelect.Option key={props.value} {...props}/>)}
  </InputSelect>
);

// export const Async = (): React.ReactNode => {
//   const [state, setState] = useSetState({
//     $options: options,
//     loading: false,
//     page: 1,
//     search: ''
//   });

//   const timeoutRef = React.useRef<NodeJS.Timeout>();

//   const loadMore = React.useCallback(() => {
//     clearTimeout(timeoutRef.current!);
//     setState({ loading: true });
//     timeoutRef.current = setTimeout(() => {
//       setState({ loading: false });
//       setOptions([
//         ...$options,
//         ...Array.from(Array(10).keys()).map((_, i) => ({
//           value: $options.length + i + 1,
//           text: `Item ${$options.length + i + 1}`
//         }))
//       ])
//     }, 1500);
//   }, [search, $options, setOptions, setLoading])

//   const onSearch = (search) => {
//     setSearch(search);
//     loadMore();

//     clearTimeout(timeoutRef.current!);
//     setLoading(true);
//     timeoutRef.current = setTimeout(() => {
//       setLoading(false);
//       setOptions(
//         Array.from(Array(50).keys()).map((_, i) => ({
//           value: i + 1,
//           text: `Item ${i + 1}`
//         })).filter((option) => option.text.toLowerCase().includes(search.toLowerCase()))
//       );
//     }, 1000);
//   }

//   return (
//     <InputSelect
//       options={$options}
//       placeholder="Select"
//       showSearch
//       onSearch={onSearch}
//       loading={loading}
//       loadMore={loadMore}
//       hasMore={$options.length < 50}
//     />
// )};
