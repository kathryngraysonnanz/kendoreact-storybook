import React from 'react';
import PropTypes from 'prop-types';
import { Editor as KendoEditor, EditorTools } from "@progress/kendo-react-editor";
import './assets/index.scss';

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

export const Editor = ({...props }) => {
  return (
    <>
      <KendoEditor {...props}
      tools={[
        [Bold, Italic, Underline, Strikethrough],
        [Subscript, Superscript],
        [AlignLeft, AlignCenter, AlignRight, AlignJustify],
        [Indent, Outdent],
        [OrderedList, UnorderedList],
        FontSize,
        FontName,
        FormatBlock,
        [Undo, Redo],
        [Link, Unlink, InsertImage, ViewHtml],
        [InsertTable],
        [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
        [DeleteRow, DeleteColumn, DeleteTable],
        [MergeCells, SplitCell],
      ]}
      />
    </>
  );
};

Editor.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  contentStyle: PropTypes.any,
  defaultContent: PropTypes.string,
  defaultEditMode: PropTypes.oneOf(['div', 'iframe']),
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  keyboardNavigation: PropTypes.bool,
  preserveWhiteSpace: PropTypes.oneOf(['true', 'false', 'full']),
  resizeable: PropTypes.bool,
  style: PropTypes.any,
  tools: PropTypes.any,
  value: PropTypes.string
};

Editor.defaultProps = {
  defaultContent: "Hello World! Type here to explore the features of the KendoReact Editor."
};
