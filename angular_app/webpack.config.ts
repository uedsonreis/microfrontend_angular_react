import { container } from 'webpack';

module.exports = {
    output: {
        publicPath: 'http://localhost:4200/',
        uniqueName: 'angularapp',
        scriptType: 'text/javascript',
    },
    devServer: { port: 4200 },
    plugins: [
        new container.ModuleFederationPlugin({
            name: 'microfrontends',
            filename: 'remoteEntry.js',
            remotes: {
                reactMf: 'reactMf@http://localhost:3000/remoteEntry.js',
            },
        }),
    ],
}