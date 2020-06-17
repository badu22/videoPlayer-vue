module.exports = {
    crossorigin: 'anonymous',
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        public: '127.0.0.1:8080',
        disableHostCheck: true
    },
};
