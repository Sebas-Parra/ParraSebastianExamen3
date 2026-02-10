export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules:{
            semi: ['error', 'always'], //Para el uso de ;
            quotes: ['error', 'single'], //Para comillas simples 
        }
    }
];