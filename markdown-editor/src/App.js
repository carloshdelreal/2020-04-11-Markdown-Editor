import React, { useState }from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import MarkdownView from 'react-showdown';

const App = () => {
  const [mdContent, setValue] = useState(
    `# type your markdown\nthis is **Markdown**\nthis is *italics*\n> this is a quote\n- [x] tasklist`
  );

  const updateEditor = (editor, data, mdContent) => {
    setValue(mdContent);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Editor</h1>
        <p>by Carlos Del Real</p>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CodeMirror
              value={`# type your markdown\nthis is **Markdown**\nthis is *italics*\n> this is a quote\n- [x] tasklist`}
              options={{
                mode: 'markdown',
                theme: "default",
                lineNumbers: true
              }}
              onChange={(editor, data, mdContent) => {updateEditor(editor, data, mdContent)}}
            />
          </div>

          <div className="col-6">
            <MarkdownView
              markdown={mdContent}
              flavor={"github"}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
