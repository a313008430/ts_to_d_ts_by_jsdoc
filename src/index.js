/** @namespace Core */ 
var Core = (function (exports) {
    'use strict';

    /**
     * @memberof Core
     * @class
     */
    class logic {
        /**
         * 添加一个子集
         * @protected
         * @returns {logic}
         */
        addChild() {
        }
    }

    /**
     * @memberof Core
     * @extends Core.logic
     */
    class game extends logic {
    }

    exports.game = game;
    exports.logic = logic;

    return exports;

}({}));
