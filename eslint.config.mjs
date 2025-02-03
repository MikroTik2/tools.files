import antfu from '@antfu/eslint-config';

export default antfu({
    vue: true,
    // typescript: true,
    formatters: {
        css: true,
        html: true,
        json: true,
        markdown: 'prettier',
    },
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true,
    },
}, {
    rules: {
        'no-undef': 0,
        'vue/multi-word-component-names': 0,
        'unused-imports/no-unused-vars': 1,
        'symbol-description': 0,
        'ts/no-explicit-any': 1,
    },
});
