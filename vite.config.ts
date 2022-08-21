/* eslint-disable no-var */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1600,
    },
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: 'styles',
                replacement: path.resolve(__dirname, './src/styles'),
            },
        ],
    },
    css: {
        modules: {
            // https://github.com/madyankin/postcss-modules
            // generateScopedName: '[name]__[local]___[hash:base64:5]',
            generateScopedName: (name, filename, css) => {
                // vite error: Transforming const to the configured target environment ("es5") is not supported yet
                // using var instead of const for the moment
                var file = path
                    .basename(filename, '.module.scss')
                    .replace('module.scss?used', '_')
                    .split('.')
                    .join('');
                var i = css.indexOf('.' + name);
                var line = css.substr(0, i).split(/[\r\n]/).length;
                return file + '_' + name + '_' + line;
            },
        },
    },
});