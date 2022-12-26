import styled from "styled-components";
import React, { useCallback, useState } from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**最小行数 */
  minRows?: number;
  /**最大行数 */
  maxRows?: number;
  /**バリデーションエラーフラグ */
  hasError?: boolean;
}

/**スタイルを適用 */
const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  color: ${({ theme, hasError }) =>
    hasError ? theme.color.danger : theme.colors.border};
  border-radiout: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;

  &:placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

/**テキストエリア */
const TextArea = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    hasError,
    onChange,
    ...rest
  } = props;
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));

  //   最低の行より未満していしなようにする
  console.assert(
    !(rows < minRows),
    "TextArea: rows should be greater than minRows"
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarealineHeight = 24;
      const previousRows = e.target.rows;

      e.target.rows = minRows; //行数のリセット

      const currentRows = Math.floor(
        e.target.scrollHeight / textarealineHeight
      );

      if (currentRows === previousRows) {
        e.target.rows === currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      //   最大を超えないように行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows]
  );

  return (
    <StyledTextArea
      hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  );
};

TextArea.defaultProps = {
  rows: 5,
  minRows: 5,
  maxRows: 10,
};

export default TextArea;
