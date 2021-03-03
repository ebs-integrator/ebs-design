import * as React from 'react';

import { Select } from './Select';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Select1', 'molecules'),
  component: Select,
};

export const Regular = (): React.ReactNode => {
    const [values, setValues] = React.useState<any>(['hey']);
    const [loading, setLoading] = React.useState(false);
    return (
    <Select placeholder="Select" optionLabelProp={"label"} loading multiple value={values} open onChange={(v, options) => {setValues(v) }} onPopupScroll={(e: any) => {
        console.log(e.target.contentHeight);
    }}>
        <Select.Option value="hey" label="abc">HEY</Select.Option>
        <Select.Option value="jack" label="cde">jack</Select.Option>
        <Select.Option value="lucy" label="efg">lucy</Select.Option>
        <Select.Option value="a">yiminghe</Select.Option>
        <Select.Option value="b">jack</Select.Option>
        <Select.Option value="c">lucy</Select.Option>
        <Select.Option value="d">yiminghe</Select.Option>
        <Select.Option value="e">jack</Select.Option>
        <Select.Option value="f">lucy</Select.Option>
        <Select.Option value="g">yiminghe</Select.Option>
        <Select.Option value="h">jack</Select.Option>
        <Select.Option value="i">lucy</Select.Option>
        <Select.Option value="j">yiminghe</Select.Option>
    </Select>
)};

// export const Multiple = (): React.ReactNode => (
//     <Select placeholder="Select" multiple onChange={console.log}>
//         <Select.Option value="jack">jack</Select.Option>
//         <Select.Option value="lucy">lucy</Select.Option>
//         <Select.Option value="yiminghe">yiminghe</Select.Option>
//     </Select>
// );

