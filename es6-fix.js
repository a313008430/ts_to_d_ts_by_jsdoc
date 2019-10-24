/**
 * 删除包含指定字符 的一行
 */
function clearLineByChars(str, chars) {
    return str.replace(new RegExp(`.+(?=${chars}).+\r\n`), '');
}

exports.handlers = {
    newDoclet: function (e) {
        e.doclet.comment = clearLineByChars(e.doclet.comment, 'protected');
        //如果当前newDoclet有template标签 测添加
        if (e.doclet['template']) {
            e.doclet.name += `<${e.doclet['template']}>`;
            e.doclet.comment = clearLineByChars(e.doclet.comment, 'template');
        }

    },
};

exports.defineTags = function (dictionary) {
    /**
     * 检测标签 template
     * 并把值传给 newDoclet
     */
    dictionary.defineTag('template', {
        onTagged: function (e, tag) {
            e[tag.title] = tag.value;
        }
    });
}
