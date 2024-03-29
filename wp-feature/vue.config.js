const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                exposes: {
                    './HelloWorld': './src/components/HelloWorld'
                },
                remotes: {
                    remoteApp: 'remoteApp@https://micro-frontend-vue.vercel.app/assets/remoteEntry.js'
                },
                shared: {
                    vue: {
                        singleton: true
                    }
                }
            })
        ]
    },

    devServer: {
        port: 8000
    }
});
