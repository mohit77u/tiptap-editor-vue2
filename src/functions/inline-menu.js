export const inlineMenu = [
    // {
    //     icon: '<svg class="w-4.5 h-4.5" width="24" height="24" focusable="false"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8Z" fill-rule="nonzero"></path></svg>',
    //     command: (editor) => {
    //         editor.commands.undo()
    //     },
    //     isActiveTest: (editor) => editor.isActive("undo"),
    //     label: 'Undo'
    // },
    // {
    //     icon: '<svg class="w-4.5 h-4.5" width="24" height="24" focusable="false"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3Z" fill-rule="nonzero"></path></svg>',
    //     command: (editor) => {
    //         editor.commands.redo()
    //     },
    //     isActiveTest: (editor) => editor.isActive("redo"),
    //     label: 'Redo'
    // },
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
    {
        label: "Link",
        icon: '<svg class="w-4.5 h-4.5" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>',
        
        // command: (editor) => {
            
        // },
        isActiveTest: (editor) => editor.isActive("link"),
        isActiveClass: "hidden",
    },
    {
        label: "Main Heading",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>',
        command: (editor) => {
            editor.chain().focus().setHeading({ level: 1 }).run();
        },
        isActiveTest: (editor) => editor.isActive('heading', { level: 1 }),
    },
    {
        label: "Sub Heading",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>',
        command: (editor) => {
            editor.chain().focus().setHeading({ level: 2 }).run();
        },
        isActiveTest: (editor) => editor.isActive('heading', { level: 2 }),
    },
    {
        label: "Heading",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>',
        command: (editor) => {
            editor.chain().focus().setHeading({ level: 3 }).run();
        },
        isActiveTest: (editor) => editor.isActive('heading', { level: 3 }),
    },
    {
        label: "Paragraph",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pilcrow"><path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"/></svg>',
        command: (editor) => {
            editor.chain().focus().setParagraph().run();
        },
        isActiveTest: (editor) => editor.isActive('paragraph'),
    },
    {
        label: "Align left",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>',
        command: (editor) => {
            editor.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "left" }),
    },
    {
        label: "Align center",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg>',
        command: (editor) => {
            editor.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "center" }),
    },
    {
        label: "Align right",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>',
        command: (editor) => {
            editor.chain().focus().setTextAlign("right").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "right" }),
    },
    {
        label: "Align justify",
        icon: '<svg class="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>',
        command: (editor) => {
            editor.chain().focus().setTextAlign("justify").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "justify" }),
    },
    {
        label: "Bullet list",
        name: "bulletList",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1"  fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
        
        command: (editor) => {
            editor.chain().focus().toggleBulletList().run();
        },
        isActiveTest: (editor) => editor.isActive("bulletList"),
    },
    {
        label: "Ordered list",
        name: "orderedList",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 114 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"/></svg>',
        command: (editor) => {
            editor.chain().focus().toggleOrderedList().run();
        },
        isActiveTest: (editor) => editor.isActive("orderedList"),
    },
]

export default inlineMenu;