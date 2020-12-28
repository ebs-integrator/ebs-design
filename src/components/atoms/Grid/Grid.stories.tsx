import * as React from 'react';

import { Container as UIContainer } from './Container/Container';
import { Row as UIRow } from './Row/Row';
import { Col as UICol } from './Col/Col';
import './ExampleGrid.scss';

export default {
  title: 'Grid',
  component: UICol,
};

export const Container = (): React.ReactElement => <UIContainer className="example-block">Container</UIContainer>;

export const Row = (): React.ReactElement => (
  <UIContainer>
    <UIRow className="example-block">Row</UIRow>
  </UIContainer>
);

export const Col = (): React.ReactElement => (
  <UIContainer>
    <>
      <UIRow className="mb-30">
        <UICol size={4}>
          <div className="example-block">Col 4</div>
        </UICol>
        <UICol size={8}>
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
