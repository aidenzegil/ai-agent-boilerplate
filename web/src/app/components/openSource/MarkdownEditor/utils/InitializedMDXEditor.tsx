"use client";

import type { ForwardedRef } from "react";
import s from "@/app/components/openSource/MarkdownEditor/styles.module.scss";

import {
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  Separator,
  ListsToggle,
  listsPlugin,
  BlockTypeSelect,
  thematicBreakPlugin,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  InsertImage,
  InsertTable,
  imagePlugin,
  InsertThematicBreak,
  linkDialogPlugin,
  CreateLink,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      className={s.editor}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper>
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <ListsToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
              </>
            </DiffSourceToggleWrapper>
          ),
        }),
        listsPlugin(),
        linkDialogPlugin(),
        thematicBreakPlugin(),
        diffSourcePlugin(),
        imagePlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
