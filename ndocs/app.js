exports.loadContext = (callback) => {
    const context = require.context('./pages', true);
    if (module.hot) {
        module.hot.accept(context.id, () =>
            callback(require.context('./pages', true))
        );
    }
    return callback(context);
};
