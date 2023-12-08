import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { useState, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Typography } from "@mui/material";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
    // The editor theme
    onError(error) {
        throw error;
    },
    // Any custom nodes go here
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ]
};

const editorConfig2 = {
    // The editor theme
    // Handling of errors during update
    onError(error) {
        throw error;
    },
    //not editable
    editable: false,
    // Any custom nodes go here
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ],
    editorState: {},
    namespace: "editor",
};
function OnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState);
        });
    }, [editor, onChange]);
}

export default function Editor() {
    const [showOutput, setShowOut] = useState(false);
    const [editorState, setEditorState] = useState<any>(false);

    let output;

    function onChange(editorState) {
        const editorStateJSON = editorState.toJSON();
        console.log(editorStateJSON);
        // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
        setEditorState(JSON.stringify(editorStateJSON));
        //   return <></>;
    }

    let newEditorConfig = { ...editorConfig2 };
    newEditorConfig.editorState = editorState;
    output = showOutput ? (<Typography>

        <LexicalComposer initialConfig={newEditorConfig as any}>
            <div className="editor-inner">
                <RichTextPlugin placeholder={<Placeholder />}
                    contentEditable={<ContentEditable placeholder="placeholder" className="editor-input" />}
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </div>
        </LexicalComposer>
    </Typography>
    ) : (
        <></>
    );
    return (
        <>
            <LexicalComposer initialConfig={editorConfig as any}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                        <RichTextPlugin
                            contentEditable={<ContentEditable className="editor-input" />}
                            placeholder={<Placeholder />}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin />
                        {
                            // <TreeViewPlugin />
                        }
                        <AutoFocusPlugin />
                        <CodeHighlightPlugin />
                        <ListPlugin />
                        <LinkPlugin />
                        <AutoLinkPlugin />
                        <ListMaxIndentLevelPlugin maxDepth={7} />
                        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                        {//<OnChangePlugin onChange={onChange as any} />
                        }
                    </div>
                </div>
            </LexicalComposer>
            <button
                onClick={() => {
                    setShowOut(!showOutput);
                }}
            >
                SET {String(!showOutput)}
            </button>
            {output}
        </>
    );
}
