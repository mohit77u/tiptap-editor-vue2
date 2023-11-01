<template>
    <div class="editor-main w-8/12 mx-auto py-12 relative">
        
        <div class="text-right mb-5">
            <button class="border-2 border-red-500 text-red-500 focus:ring-0 focus:outline-none font-medium rounded text-sm px-2 py-2 ml-auto flex justify-center items-center gap-2 tracking-wider" :class="{ 'text-green-500 border-green-500': !editorVisible }" @click="editorVisible = !editorVisible;">
                <svg class="w-3.5 h-3.5 lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                Edit {{ editorVisible ? 'Off' : 'On' }}
            </button>
        </div>

        <div class="editor-data">
            <h1 class="heading text-5xl font-bold text-slate-800 mb-3 leading-[60px]" :class="{ 'rounded border border-dashed border-gray-300 px-3 py-2': editorVisible }" @click="handleElementClick($event, 'heading')">
                <ContentEditor @input="getEditorData" :modalValue="heading" :editable="editableKey" :contentKey="'heading'" type="object" :editorVisible="editorVisible" nodeType="mainHeading" />
            </h1>
            <p class="para text-md text-slate-600 mb-3 leading-[30px]" :class="{ 'rounded border border-dashed border-gray-300 px-3 py-2': editorVisible }" @click="handleElementClick($event, 'para')">
                <ContentEditor @input="getEditorData" :modalValue="para" :editable="editableKey" :contentKey="'para'" type="object"  :editorVisible="editorVisible" nodeType="paragraph" />
            </p>
        </div>

    </div>
</template>

<script>
    import ContentEditor from './ContentEditor.vue'
    
    export default {
        name: 'HelloWorld',
        components: {
            ContentEditor,
        },
        data() {
            return {
                heading         : 'This is an editable heading',
                para            : 'I\'m running Tiptap with Vue js. 🎉',
                editableKey     : '',
                editor          : '',
                editorVisible   : false,
            }
        },
        mounted() {
            
        },
        methods: {
            handleElementClick(e, key) {
                if(this.editorVisible) {
                    this.editableKey = key;
                }
            },
            getEditorData(data) {
                this[data.key] = data.value
            },
        }
    }
</script>
