import LexicalEditorWrapper from "../components/TextEditor/LexicalEditorWrapper";
import TextEditor from "../components/TextEditor/TextEditor";
import '../providers/styles.css'

export default function () {
    return <> <div className="App">
        <h1>Rich Text Example</h1>
        <p>Note: this is an experimental build of Lexical</p>

        <TextEditor />
    </div>
    </>
}