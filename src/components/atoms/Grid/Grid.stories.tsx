import * as React from 'react';

import { Container as UIContainer, Row as UIRow, Col as UICol } from './Grid';
import './ExampleGrid.scss';

export default {
  title: 'Container',
  component: UIContainer,
};

export const Container = (): React.ReactElement => <UIContainer className="example-block">Container</UIContainer>;

export const Row = (): React.ReactElement => (
  <UIContainer>
    <UIRow className="example-block">Row</UIRow>
  </UIContainer>
);

export const Col = (): React.ReactElement => (
  <UIContainer className="ebs-table__mobile">
    <>
      <UIRow className="mb-30">
        <UICol type={4}>
          <div className="example-block">Col 4</div>
        </UICol>
        <UICol type={8}>
          <div className="example-block">Col 8</div>
        </UICol>
      </UIRow>

      <UIRow>
        <UICol className="example-block">Col</UICol>
        <UICol className="example-block">Col</UICol>
        <UICol className="example-block">Col</UICol>
      </UIRow>
    </>
  </UIContainer>
);
