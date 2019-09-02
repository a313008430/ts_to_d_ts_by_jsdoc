/** @namespace Core
 */
declare namespace Core {
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
        protected addChild(): logic;
    }
    /**
     * @memberof Core
     * @extends Core.logic
     */
    class game extends Core.logic {
        /**
         * 添加一个子集
         * @protected
         * @returns {logic}
         */
        protected addChild(): logic;
    }
}

