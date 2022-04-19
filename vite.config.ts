import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    }
  },
  json: {
    namedExports: true,
  },
  build: {
    rollupOptions: {
      output: {
        // chunkFileNames: ((chunkInfo) => {

        //   const name = chunkInfo.name.toLocaleLowerCase();
        //   return `assets/[name]/js/${name}-[hash].[format].js`
        // }),
        // assetFileNames: (chunkInfo) => {
        //   console.log(chunkInfo);

        //   return `assets/[name]/[ext]/[name]-[hash].[ext]`
        // },

        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        //   console.log(this);

        //   return id;
        // }
      }
    }
  }
})
