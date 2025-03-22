import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command, mode, ssrBuild}) => {
    const env = loadEnv(mode, process.cwd());
    const isDev = env.NODE_ENV !== 'production';
    const port = env.VITE_LOCAL_PORT
    const url = env.VITE_LOCAL_URL
    console.warn('port', port)

    if (isDev) {
        return {
            plugins: [react()],
            server: {
                port: port,
                strictPort: true,
                host: "0.0.0.0",
                watch: {
                    usePolling: true,
                },
                origin: `${url}`,
            },
            build: {
                minify: false,
                sourcemap: isDev,
            },
        }
    } else {
        return {
            plugins: [react()],
            server: {
                host: '0.0.0.0',
                port: 3000,
            },
            build: {
                minify: 'esbuild',
                sourcemap: false,
            },
        }
    }
})