// myMixin.js
import { Editor } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from "@tiptap/extension-highlight";
import CharacterCount from '@tiptap/extension-character-count';
import { CustomCommands } from '../extension/CustomCommands';
import { FontSizeExtension } from '../extension/FontSizeExtension';

export default {
    data() {
        return {
            editorContentFontSize: '',
        };
    },
    methods: {
        initEditor(value='', editable=false, type='object', mode='html', contentKey) {
            const self = this

            const editor = new Editor({
                // content value for editor
                content: value,
                // make editable true or false
                editable: editable,
                // extensions
                extensions: [
                    StarterKit.configure({
                        paragraph: {
                            disableEnter: true,
                            HTMLAttributes: { class: 'custom-paragraph' },
                        },
                        heading: {
                            levels: [1, 2, 3],
                            HTMLAttributes: { class: 'custom-heading' },
                        },
                    }),
                    Link.configure({
                        openOnClick: false,
                    }),
                    Color,
                    Underline,
                    Subscript,
                    TextStyle,
                    Highlight.configure({
                        multicolor: true,
                    }),
                    Placeholder.configure({
                        placeholder: "Type / to choose a block",
                    }),
                    Superscript,
                    TextAlign.configure({
                        types: ['heading', 'paragraph'],
                    }),
                    CharacterCount,
                    CustomCommands,
                    FontSizeExtension
                ],
                
            })

            editor.on('update', () => {

                let jsonData = editor.getJSON().content
                let htmlData = editor.getHTML()
                htmlData = htmlData.replaceAll('<p></p>', '<br />');

                let data = {
                    key: contentKey,
                    value: self.mode == "json" ? jsonData : htmlData,
                }

                if(type == 'object') {
                    self.$emit( "input", data);
                } else {
                    self.$emit( "input", mode == "json" ? jsonData : htmlData);
                }
                    
            })

            editor.on('selectionUpdate', ({ editor }) => {
                const size = editor.getAttributes( 'textStyle' ).fontSize
                this.editorContentFontSize = size ?? '';
            })

            editor.on('focus', ({ editor }) => {
                const size = editor.getAttributes( 'textStyle' ).fontSize
                this.editorContentFontSize = size ?? '';
            })

            return editor;
        }
    }
}