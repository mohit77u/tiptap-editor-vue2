export const inlineMenu = [
    {
        icon: '<svg class="w-4.5 h-4.5" width="24" height="24" focusable="false"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8Z" fill-rule="nonzero"></path></svg>',
        command: (editor) => {
            editor.commands.undo()
        },
        isActiveTest: (editor) => editor.isActive("undo"),
        label: 'Undo'
    },
    {
        icon: '<svg class="w-4.5 h-4.5" width="24" height="24" focusable="false"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3Z" fill-rule="nonzero"></path></svg>',
        command: (editor) => {
            editor.commands.redo()
        },
        isActiveTest: (editor) => editor.isActive("redo"),
        label: 'Redo'
    },
    {
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold"><path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8Z"/></svg>',
        command: (editor) => {
            editor.chain().focus().toggleBold().run();
        },
        isActiveTest: (editor) => editor.isActive("bold"),
        label: 'Bold'
    },
    {
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>',
        command: (editor) => {
            editor.chain().focus().toggleItalic().run();
        },
        isActiveTest: (editor) => editor.isActive("italic"),
        label: 'Italic'
    },
    {
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-underline"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>',
        command: (editor) => {
            editor.chain().focus().toggleUnderline().run();
        },
        isActiveTest: (editor) => editor.isActive("underline"),
        label: 'Underline'
    },
    
]

export default inlineMenu;