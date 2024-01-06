import { MDXEditorMethods } from "@mdxeditor/editor";

export type MarkdownProps = MDXEditorMethods;

export type Fields = {
  onChange: (markdown: string) => void;
  value: string;
};
