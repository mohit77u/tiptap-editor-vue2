<template>
    <div class="editor-main w-8/12 mx-auto px-12 py-12 relative">
        
        <div class="text-right mb-5">
            <button class="border border-emerald-300 text-emerald-400 focus:ring-0 focus:outline-none font-medium rounded text-sm px-4 py-2 text-center tracking-wider" @click="editorVisible = !editorVisible;">Turn {{ editorVisible ? 'Off' : 'On' }}</button>
        </div>

        <div class="editor-data">
            <div class="heading" @click="handleElementClick($event, 'heading')">
                <ContentEditor @input="getEditorData" :modalValue="heading" :editable="editableKey" :contentKey="'heading'" type="object" :editorVisible="editorVisible" class="text-5xl font-bold text-slate-800 mb-3" nodeType="mainHeading" />
            </div>
            <div class="para" @click="handleElementClick($event, 'para')">
                <ContentEditor @input="getEditorData" :modalValue="para" :editable="editableKey" :contentKey="'para'" type="object"  :editorVisible="editorVisible" class="text-md text-slate-600 mb-3"  nodeType="paragraph" />
            </div>
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
                value: '',
                element: '',
                heading: 'This is an editable heading',
                para: 'I\'m running Tiptap with Vue.js. 🎉',
                editableKey: '',
                editor: '',
                editorVisible: false,
            }
        },
        mounted() {
            
        },
        methods: {
            handleElementClick(e, key) {
                if(this.editorVisible) {
                    this.element = e.target;
                    this.value = this[key];
                    this.editableKey = key;
                }
            },
            getEditorData(data) {
                this[data.key] = data.value
            },
        }
    }
</script>
