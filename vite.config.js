import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import DefineOptions from 'unplugin-vue-define-options/vite'

// 按需导入、自动导入
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(mode)
  console.log('env', env)
  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PUBLIC_PATH,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      DefineOptions(),
      // 按需导入、自动导入 配置
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          'vue',              //自动引入的vue的ref等方法
          '@vueuse/core',
          'vue-router',       //引入useRoute等方法
          // {                   //对于vue-router的type的扩展,配置后可以直接使用
          //   from: 'vue-router',
          //   imports: ['RouteLocationRaw',],
          //   type: true,
          // }
        ],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            // prefix: 'Icon',
            //配置前缀，效果等用于Components中的 prefix
            componentPrefix: 'I',
            enabledCollections: ['ep']
          }),
        ],

        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            prefix: 'i', // 默认为i,设置为false则不显示前缀
            enabledCollections: ['ep'],
            // alias: {
            //   'oto': "ep", //配置别名 <i-oto-delete />
            // },
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],

        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        autoInstall: true, // 是否自动安装对应的图标库，默认为true
        scale: 1, // 图标缩放，默认为1
        defaultStyle: "", // 图标style
        defaultClass: "", // 图标class
        compiler: "vue3", // 编译方式，可选值：'vue2', 'vue3', 'jsx'
        jsx: "react", // jsx风格：'react' or 'preact'
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
    build: {
      outDir: 'dist',           // 指定输出路径
      assetsDir: 'static',      // 指定生成静态资源的存放路径
      minify: 'terser',         // 混淆器,terser构建后文件体积更小 ,boolean | 'terser' | 'esbuild',默认使用esbuild
      sourcemap: false,         // 是否产出soucemap.json
      manifest: false,          // 是否产出maifest.json
      // reportCompressedSize: true,
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,   // 生产环境移除console
          drop_debugger: true   // 生产环境移除debugger
        }
      },
    },
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
  }
})
