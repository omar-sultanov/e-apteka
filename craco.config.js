/* craco.config.js */
const path = require(`path`);
const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@models': resolvePath('src/models'),
            '@services': resolvePath('src/services'),
            '@stores': resolvePath('src/stores'),
            // '@components': resolvePath('src/components'),
            // '@CardList':resolvePath('src/components/CardList'),
            // '@Product':resolvePath('src/components/Product'),
            // '@AppNav':resolvePath('src/components/AppNav'),
            // '@ProductsCart':resolvePath('src/components/ProductsCart'),
            // '@UrlError':resolvePath('src/components/UrlError'),
            // '@SignForm':resolvePath('src/components/SignForm'),

        }
    },
}