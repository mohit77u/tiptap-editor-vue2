import { Extension } from '@tiptap/core'

export const FontSizeExtension = Extension.create({

    name: 'FontSizeExtension',
    
    addOptions() {
        return {
            types: ['textStyle'],
            getStyle: (fontSize)=>{
                return `font-size: ${fontSize}`
            }
        };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
                        renderHTML: attributes => {
                            if (!attributes.fontSize) {
                                return {};
                            }
            
                            return {
                                style: this.options.getStyle(attributes.fontSize)
                            };
                        },
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize: fontSize => ({ chain }) => {
                return chain()
                  .setMark('textStyle', { fontSize })
                  .run();
            },
        };
      },
});