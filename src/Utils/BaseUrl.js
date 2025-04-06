export const isDev = import.meta.env.NODE_ENV !== 'production'//
const devUrl = import.meta.env.VITE_LOCAL_SERVER_URL ?? 'http://13.43.16.29:5000'
const prodUrl = import.meta.env.VITE_SERVER_PROD_URL ?? 'http://13.43.16.29:5000'

export const url = isDev ? devUrl : prodUrl