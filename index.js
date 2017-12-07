'use strict';

module.exports = {
    configs: {
        node: require('./configs/node'),
    },
    rules: {
        "leftover-only": require("./rules/leftover-only"),
    },
};
