# Open Source MDXEditor Component

This component follows the documentation provided by https://mdxeditor.dev/.

## Structure

The InitializedMDXEditor.tsx and ForwardRefEditor.tsx files are stored in /utils. The editor is initialized in InitializedMDXEditor.tsx and is passed to ForwardRefEditor.tsx as per the documentation. From there, the editor is passed to component.tsx.

The markdown prop, which contains the initial text shown in the editor and is a required prop, is set in component.tsx.

## Need to Know

1. To style the toolbar:

   1. In this project: layout.tsx imports styles from /assets/globals.css so we included @import '/node_modules/@mdxeditor/editor/dist/style.css' in our globals.css file. Make sure your path is correct!
   2. If your project is set up differently, try importing into InitializedMDXEditor.tsx or ForwardRefEditor.tsx.
   3. No good? Take a break and come back later.

2. The BlockTypeSelect toolbar feature requires the quotePlugin and the headingsPlugin.

3. Toolbar all set up?! But not working? You have to style the headings, blockquote, lists, and paragraph features. Look at /styles.module.scss for an example. You may need to style more features than the ones we styled for your project!

4. How to access the value of the markdown:

   1. The documentation defines types for a getMarkdown function and a setMarkdown function. It doesn't actually import those functions anywhere, therefore we must define our own.
   2. Refer to data.ts for our solution.

5. The editor may duplicate itself. To fix this, reference .popupContainer_11eqz_1170 in this project's globals.css file.
