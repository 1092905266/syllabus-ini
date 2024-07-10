import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// import proxy from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true //启动项目自动打开浏览器
    // host:'localhost',
    // port:5174,
    // proxy: {
    //   '/code': {
    //     target: 'http://101.33.243.173:8094/syllabus',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/code/, ''),
    //     cookieDomainRewrite: '', // 可能需要清除 cookie 的域名重写
    //   }
    // }
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },//解析对象
  plugins: [
    nodePolyfills(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
