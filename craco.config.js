const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@assets': resolvePath('./src/assets'),
            '@components': resolvePath('./src/components'),
            '@services': resolvePath('./src/services'),
            '@pages': resolvePath('./src/pages'),
        }
    },
}