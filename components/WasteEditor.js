import Editor, { useMonaco } from "@monaco-editor/react";

const WasteEditor = ({ body = "// welcome to wastebin" }) => {
  function handleEditorDidMount(editor) {
    window.require.config({
      paths: {
        "monaco-vim": "https://unpkg.com/monaco-vim/dist/monaco-vim",
      },
    });

    window.require(["monaco-vim"], function (MonacoVim) {
      const statusNode = document.querySelector(".status-node");
      MonacoVim.initVimMode(editor, statusNode);

      MonacoVim.VimMode.Vim.defineEx("write", "w", function () {
        // your own implementation on what you want to do when :w is pressed
        alert("here is the value, you can save it :)", editor.getValue());
      });
    });
  }

  return (
    <Editor
      height="100vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={body}
      onChange={() => true}
      options={{
        minimap: {
          enabled: false,
        },
      }}
      onMount={handleEditorDidMount}
    />
  );
};

export { WasteEditor };
