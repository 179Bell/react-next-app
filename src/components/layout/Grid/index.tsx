/*eslint-disable prettier/prettier */
import styled from "styled-components";
import {
  CSSPropertyGirdArea,
  CSSPropertyGirdAutoFlow,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  Responsive,
} from "../../../types/styles";
import { toPropValue } from "../../../utils/styles";
import Box, { BoxProps } from "../Box";

type GridProps = BoxProps & {
  gridGap?: Responsive<string>;
  gridColumnGap?: Responsive<string>;
  gridRowGap?: Responsive<string>;
  gridColumn?: Responsive<CSSPropertyGridColumn>;
  gridRow?: Responsive<CSSPropertyGridRow>;
  gridAutoFlow?: Responsive<CSSPropertyGirdAutoFlow>;
  gridAutoColumns?: Responsive<string>;
  gridAutoRows?: Responsive<string>;
  gridTemplateColumns?: Responsive<string>;
  gridTemplateRows?: Responsive<string>;
  gridTemplateAreas?: Responsive<CSSPropertyGirdArea>;
  gridAreas?: Responsive<string>;
};

/**
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = styled(Box)<GridProps>`
  ${(props) => toPropValue("grid-gap", props.gridGap, props.theme)}
  ${(props) => toPropValue("grid-column-gap", props.gridColumnGap, props.theme)}
${(props) => toPropValue("grid-row-gap", props.gridRowGap, props.theme)}
${(props) => toPropValue("grid-row", props.gridRow, props.theme)}
${(props) => toPropValue("grid-column", props.gridColumn, props.theme)}
${(props) => toPropValue("grid-auto-flow", props.gridAutoFlow, props.theme)}
${(props) =>
    toPropValue("grid-auto-columns", props.gridAutoColumns, props.theme)}
${(props) => toPropValue("grid-auto-rows", props.gridAutoRows, props.theme)}
${(props) =>
    toPropValue(
      "grid-template-columns",
      props.gridTemplateColumns,
      props.theme
    )}
${(props) =>
    toPropValue("grid-template-rows", props.gridTemplateRows, props.theme)}
${(props) =>
    toPropValue("grid-template-areas", props.gridTemplateAreas, props.theme)}
${(props) => toPropValue("grid-area", props.gridAreas, props.theme)}
`;

Grid.defaultProps = {
  display: "grid",
};

export default Grid;
