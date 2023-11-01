<template>
    <div v-if="editor">
        <!-- menu -->
        <div
            class="fixed-menu absolute top-0 left-0 w-full flex flex-wrap gap-2 items-center px-2 h-[38px] leading-[20px]"
            v-if="editableEditor && editorVisible"
        >
            <!-- regular menu -->
            <button
                class="single-block icon-btn group relative px-2 py-1.5 hover:bg-blue-100/80 rounded"
                :class="{
                    'bg-blue-100/80': menu.isActiveTest(editor),
                    'pointer-none':
                        menu.label == 'Undo'
                            ? !editor.can().chain().focus().undo().run()
                            : menu.label == 'Redo'
                            ? !editor.can().chain().focus().redo().run()
                            : false,
                }"
                v-for="(menu, index) in regular_menus"
                :key="index"
                @click="menu.label != 'Link' ? menu.command(editor) : setLink()"
                :disabled="
                    menu.label == 'Undo'
                        ? !editor.can().chain().focus().undo().run()
                        : menu.label == 'Redo'
                        ? !editor.can().chain().focus().redo().run()
                        : false
                "
            >
                <div
                    class="icon"
                    :class="{
                        'text-lime-500': menu.isActiveTest(editor),
                        'text-slate-800': !menu.isActiveTest(editor),
                        'opacity-20':
                            menu.label == 'Undo'
                                ? !editor.can().chain().focus().undo().run()
                                : menu.label == 'Redo'
                                ? !editor.can().chain().focus().redo().run()
                                : false,
                    }"
                    v-html="menu.icon"
                ></div>
                <span
                    class="tooltip-content absolute hidden group-hover:block left-[-2px] top-[-42px] bg-slate-900 z-50 text-white text-sm px-4 py-1.5 rounded font-medium whitespace-nowrap"
                    >{{ menu.label }}</span
                >
            </button>

            <!-- inline menu -->
            <template v-if="docType != 'text'">
                <button
                    class="single-block icon-btn group relative px-2 py-1.5 hover:bg-blue-100/80 rounded"
                    :class="{
                        'bg-blue-100/80': menu.isActiveTest(editor),
                        'pointer-none':
                            menu.label == 'Undo'
                                ? !editor.can().chain().focus().undo().run()
                                : menu.label == 'Redo'
                                ? !editor.can().chain().focus().redo().run()
                                : false,
                    }"
                    v-for="(menu, index) in inline_menus"
                    :key="index"
                    @click="
                        menu.label != 'Link' ? menu.command(editor) : setLink()
                    "
                    :disabled="
                        menu.label == 'Undo'
                            ? !editor.can().chain().focus().undo().run()
                            : menu.label == 'Redo'
                            ? !editor.can().chain().focus().redo().run()
                            : false
                    "
                >
                    <div
                        class="icon"
                        :class="{
                            'text-lime-500': menu.isActiveTest(editor),
                            'text-slate-800': !menu.isActiveTest(editor),
                            'opacity-20':
                                menu.label == 'Undo'
                                    ? !editor.can().chain().focus().undo().run()
                                    : menu.label == 'Redo'
                                    ? !editor.can().chain().focus().redo().run()
                                    : false,
                        }"
                        v-html="menu.icon"
                    ></div>
                    <span
                        class="tooltip-content absolute hidden group-hover:block left-[-2px] top-[-42px] bg-slate-900 z-50 text-white text-sm px-4 py-1.5 rounded font-medium whitespace-nowrap"
                        >{{ menu.label }}</span
                    >
                </button>
            </template>

            <!-- font size -->
            <div class="font-size relative">
                <div class="flex items-center border border-gray-100 rounded">
                    <button
                        class="text-[26px] text-slate-800 w-[40px] h-8 bg-gray-100/80"
                        @click="decreaseFontSize"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        :value="fontSize"
                        @change="applyFontSize($event, '')"
                        @focus="showFontOptions = true"
                        @blur="showFontOptions = false"
                        class="w-[40px] h-8 px-1 text-[16px] border-x border-gray-200 text-center focus:outline-none font-normal"
                    />
                    <button
                        class="text-[16px] text-slate-800 w-[40px] h-8 bg-gray-100/80"
                        @click="increaseFontSize"
                    >
                        +
                    </button>
                </div>
            </div>

            <!-- text color -->
            <button
                class="text-color group relative border-b-4 border-white"
                :style="
                    'border-bottom-color:' +
                    editor.getAttributes('textStyle').color
                "
            >
                <input
                    type="color"
                    class="opacity-0 absolute w-0 z-0"
                    @input="
                        editor
                            .chain()
                            .focus()
                            .setColor($event.target.value)
                            .run()
                    "
                    ref="textColorPicker"
                />
                <button
                    class="single-block icon-btn group relative py-1.5 px-2 hover:bg-blue-100/80 rounded"
                    @click="$refs.textColorPicker.click()"
                >
                    <Baseline
                        class="text-gray-800 w-5 h-5 md:w-6 md:h-6"
                        :size="24"
                    />
                </button>
                <span
                    class="tooltip-content absolute hidden group-hover:block left-[-2px] top-[-42px] bg-slate-900 z-50 text-white text-sm px-4 py-1.5 rounded font-medium whitespace-nowrap"
                    >Text Color</span
                >
            </button>

            <!-- highlight color -->
            <button
                class="text-highlight group relative border-b-4 border-white"
                :style="
                    'border-bottom-color:' +
                    editor.getAttributes('highlight').color
                "
            >
                <input
                    type="color"
                    class="opacity-0 absolute w-0 z-0"
                    @input="
                        editor
                            .chain()
                            .focus()
                            .setHighlight({ color: $event.target.value })
                            .run()
                    "
                    ref="textBgColorPicker"
                />
                <button
                    class="single-block icon-btn group relative py-1.5 px-2 hover:bg-blue-100/80 rounded"
                    :background-color="editor.getAttributes('highlight').color"
                    @click="$refs.textBgColorPicker.click()"
                >
                    <Paintbrush
                        class="text-gray-800 w-5 h-5 md:w-6 md:h-6"
                        :size="20"
                    />
                </button>
                <span
                    class="tooltip-content absolute hidden group-hover:block left-[-2px] top-[-42px] bg-slate-900 z-50 text-white text-sm px-4 py-1.5 rounded font-medium whitespace-nowrap"
                    >Highlight Color</span
                >
            </button>

            <!-- placeholders -->
            <button class="single-block icon-btn group relative px-2 py-1.5 hover:bg-blue-100/80 rounded">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-replace"><path d="M14 4c0-1.1.9-2 2-2"/><path d="M20 2c1.1 0 2 .9 2 2"/><path d="M22 8c0 1.1-.9 2-2 2"/><path d="M16 10c-1.1 0-2-.9-2-2"/><path d="m3 7 3 3 3-3"/><path d="M6 10V5c0-1.7 1.3-3 3-3h1"/><rect width="8" height="8" x="2" y="14" rx="2"/></svg>
                </div>
                <span
                    class="tooltip-content absolute hidden group-hover:block left-[-2px] top-[-42px] bg-slate-900 z-50 text-white text-sm px-4 py-1.5 rounded font-medium whitespace-nowrap"
                    >Insert Placeholders</span
                >

                <div class="absolute top-full left-0 w-28 bg-white shadow-xl hidden group-hover:block z-50 rounded">
                    <button v-for="(i, index) in placeholders" :key="index" class="text-[14px] text-gray-500 py-1 block w-full px-2 whitespace-nowrap text-left hover:bg-blue-100/80" @click="applyPlaceholders(index)"> 
                        {{ index }}
                    </button>
                </div>
            </button>
        </div>

        <!-- link modal -->
        <template v-if="linkModal">
            <div
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center bg-white/80"
            >
                <div class="relative w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <button
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                            @click="cancelLinkModal()"
                        >
                            <svg
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900">
                                Insert/Edit Link
                            </h3>
                            <template>
                                <div class="form-group mb-4">
                                    <label
                                        for="url"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                        >URL</label
                                    >
                                    <input
                                        type="text"
                                        name="url"
                                        id="url"
                                        class="bg-blue-50 border border-blue-300 text-gray-900 text-sm rounded focus:ring-0 focus:outline-none block w-full p-2.5"
                                        placeholder=""
                                        v-model="url"
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <label
                                        for="target"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                        >Target</label
                                    >
                                    <select
                                        name="target"
                                        id="target"
                                        class="bg-blue-50 border border-blue-300 text-gray-900 text-sm rounded focus:ring-0 focus:outline-none block w-full p-2.5"
                                        @change="
                                            (e) => (target = e.target.value)
                                        "
                                    >
                                        <option value="_blank">
                                            Open in new window
                                        </option>
                                        <option value="_self">
                                            Same window
                                        </option>
                                    </select>
                                </div>
                            </template>

                            <div
                                class="flex mt-6"
                                :class="{
                                    'justify-between': url,
                                    'justify-end': !url,
                                }"
                            >
                                <button
                                    type="button"
                                    class="text-blue-500 border border-blue-500 focus:ring-0 focus:outline-none font-medium rounded text-sm px-4 py-2 text-center tracking-wider"
                                    @click="unlinkUrl()"
                                    v-if="url"
                                >
                                    Unlink
                                </button>
                                <div class="flex justify-between gap-4">
                                    <button
                                        type="button"
                                        class="text-red-500 border border-red-500 focus:ring-0 focus:outline-none font-medium rounded text-sm px-4 py-2 text-center tracking-wider"
                                        @click="cancelLinkModal()"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        class="text-white bg-lime-500 focus:ring-0 focus:outline-none font-medium rounded text-sm px-4 py-2 text-center tracking-wider"
                                        @click="updateLink()"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <!-- main editor -->
        <editor-content :editor="editor" />
    </div>
</template>

<script>
import { EditorContent } from "@tiptap/vue-2";
import inlineMenu from "../functions/inline-menu";
import regularMenu from "../functions/regular-menu";
// Import icons
import { Baseline, Paintbrush } from "lucide-vue";

export default {
    name: "ContentEditor",
    components: {
        EditorContent,
        Baseline,
        Paintbrush,
    },
    props: {
        textValue: {
            type: String,
            default: "",
        },
        modalValue: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "object",
        },
        editable: {
            type: String,
            default: "",
        },
        mode: {
            type: String,
            default: "html",
        },
        contentKey: {
            type: String,
            default: "",
        },
        editorVisible: {
            type: Boolean,
            default: false,
        },
        nodeType: {
            type: String,
            default: "",
        },
        docType: {
            type: String,
            default: "text",
        },
    },
    data() {
        return {
            editor: null,
            editorFocused: false,
            inline_menus: inlineMenu,
            regular_menus: regularMenu,
            inputValue: this.modalValue,
            tempValue: this.modalValue,
            linkModal: false,
            isUrl: false,
            url: "",
            target: "_blank",
            editableEditor: "",
            fontSize: "",
            fontSizeOptions: [
                8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 40, 48, 60, 72, 84,
                96,
            ],
            showFontOptions: false,
            placeholders: {
                'POC'           : 'POC Name',
                'FIRST_NAME'    : 'Micheal',
                'LAST_NAME'     : 'Moore',
                'EMAIL'         : 'micheal@hireawiz.com',
            }
        };
    },
    computed: {},
    watch: {
        modalValue: function (value) {
            let editorValue = value;

            // HTML
            const isSame = this.editor.getHTML() === editorValue;
            this.inputValue = editorValue;
            this.tempValue = editorValue;

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return;
            }

            if (editorValue.trim().length == 0) {
                editorValue = this.tempValue;
            }

            this.editor.commands.setContent(editorValue, false);
        },
        editable: function (value) {
            if (value == this.contentKey && this.editorVisible) {
                this.editableEditor = true;
            } else {
                this.editableEditor = false;
            }
        },
        editorVisible: function (value) {
            this.editor.destroy();
            if (this.editable == this.contentKey && this.editorVisible) {
                this.editableEditor = true;
            } else {
                this.editableEditor = false;
            }
            this.editor = this.initEditor(
                this.inputValue,
                value,
                this.type,
                this.mode,
                this.contentKey,
                this.docType
            );
        },
        editorContentFontSize: function (value) {
            if (value) {
                this.fontSize = value.replace("px", "");
            } else {
                this.fontSize = "";
            }
        },
    },
    mounted() {
        // if (this.modalValue) {
        //     if (this.nodeType == 'mainHeading') {
        //         this.inputValue = '<h1 class="custom-heading">' + this.modalValue + '</h1>'
        //     } else if (this.nodeType == 'subHeading') {
        //         this.inputValue = '<h2 class="custom-heading">' + this.modalValue + '</h2>'
        //     } else if (this.nodeType == 'heading') {
        //         this.inputValue = '<h3 class="custom-heading">' + this.modalValue + '</h3>'
        //     } else {
        //         this.inputValue = '<p class="custom-paragraph">' + this.modalValue + '</p>'
        //     }
        // }
        this.mountEditor();
    },
    methods: {
        mountEditor() {
            const editor = this.initEditor(
                this.inputValue,
                false,
                this.type,
                this.mode,
                this.contentKey,
                this.docType
            );
            this.editor = editor;
        },
        setLink() {
            const url = this.editor.getAttributes("link").href;
            const { empty } = this.editor.state.selection;
            const textSelected = !empty;

            if (!textSelected && !url) {
                return;
            }

            this.url = url;

            if ((textSelected && url) || (textSelected && !url)) {
                this.isUrl = false;
            }

            if (!textSelected && url) {
                const state = this.editor.state;
                const { doc } = state;

                let start = null,
                    end = null;

                doc.descendants((node, pos) => {
                    if (node.isText && node.marks.length > 0) {
                        node.marks.forEach((mark) => {
                            if (
                                mark.type.name == "link" &&
                                mark.attrs.href == url
                            ) {
                                const $pos = doc.resolve(pos);
                                const $end = doc.resolve(pos + node.nodeSize);
                                if (!start || start > $pos.pos) {
                                    start = $pos.pos;
                                }
                                if (!end || end < $end.pos) {
                                    end = $end.pos;
                                }
                            }
                        });
                    }
                });

                this.editor.commands.setTextSelection({ from: start, to: end });
                const updatedUrl = this.editor.getAttributes("link").href;
                this.url = updatedUrl;

                this.isUrl = true;
            }

            this.linkModal = true;
        },
        updateLink() {
            let editor = this.editor;

            const { empty } = editor.state.selection;

            // If nothing is selected
            if (empty) {
                this.linkModal = false;
                return null;
            }

            // cancelled
            if (this.url == null || this.url == "") {
                editor.commands.unsetLink();
                this.linkModal = false;
                this.isUrl = false;
                return;
            }

            // update link
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({
                    href: this.url,
                    target: this.target,
                })
                .run();

            this.url = "";
            this.linkModal = false;
            this.isUrl = false;
        },
        cancelLinkModal() {
            this.url = "";
            this.isUrl = false;
            this.linkModal = false;
        },
        applyFontSize($event, fontSize) {
            let value = "";
            if (!fontSize) {
                value = $event.target.value.replace(/[^0-9]/g, "");
            } else {
                value = fontSize;
            }
            this.fontSize = value;
            this.editor.commands.setFontSize(value + "px");
        },
        decreaseFontSize() {
            if (this.fontSize) {
                let value = this.fontSize;
                this.fontSize = parseInt(value) - 1;
                this.editor.commands.setFontSize(this.fontSize + "px");
            }
        },
        increaseFontSize() {
            if (this.fontSize) {
                let value = this.fontSize;
                this.fontSize = parseInt(value) + 1;
                this.editor.commands.setFontSize(value + "px");
            }
        },
        unlinkUrl() {
            this.editor.commands.unsetLink();
            this.linkModal = false;
            this.url = "";
        },
        applyPlaceholders(key) {
            this.editor
                .chain()
                .focus()
                .insertContent(this.placeholders[key])
                .run();
        }
    },
    beforeDestroy() {
        this.editor.destroy();
    },
};
</script>
