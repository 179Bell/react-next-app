/**
 * Responsiveプロパティ
 * CSSプロパティの値をブレークポイントごとに設定できる
 * TはCSSプロパティの値の型
 */
export type ResponsiveProp<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type Responsive<T> = T | ResponsiveProp<T>;

/**
 * Flex
 */
type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "self-end"
  | "self-start"
  | "start";

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

type CSSPropertyGlobals =
  | "-mos-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "strech"
  | (string & {});

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "baseline"
  | "normal"
  | (string & {});

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "left"
  | "legacy"
  | "normal"
  | "right"
  | "strech"
  | (string & {});

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | "left"
  | "normal"
  | "right"
  | (string & {});

export type CSSProperyFlexWrap =
  | CSSPropertyGlobals
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | "auto"
  | "baseline"
  | "left"
  | "right"
  | "stretch"
  | (string & {});

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stretch"
  | (string & {});

/**
 * Grid
 */
type GridLine = "auto" | (string & {});

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {});

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {});

export type CSSPropertyGirdAutoFlow =
  | CSSPropertyGlobals
  | "column"
  | "dense"
  | "row"
  | (string & {});

export type CSSPropertyGirdArea = CSSPropertyGlobals | GridLine | (string & {});
