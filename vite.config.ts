import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
        entry: resolve(dirname(''), 'src/main.ts'),
        name: 'VueTable',
        fileName: (format) => `${format}.js`
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                vue: 'Vue'
            }
        }
    }
}
})
