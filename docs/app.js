exports.loadContext = (callback) => {
    const context = require.context('./pages', true);
    if (module.hot) {
        module.hot.accept(context.id, () =>
            callback(require.context('./pages', true))
        );
    }
    return callback(context);
};

exports.onRouteChange = (state) => {
    if (window.ga) {
        window.ga('send', 'pageview', state.pathname);
    }

    const content = document.querySelector('.mdl-layout__content');
    if (content) {
        content.scrollTop = 0;
    }
};
