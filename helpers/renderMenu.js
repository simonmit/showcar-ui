module.exports = (globalJSON) => {
    let removeDuplicates = [];
    const renderLink = (rec) => `<li>
            <a data-scroll href="#${rec.label}-link">${rec.label}</a>
            <a href="${rec.dir}" class="open-separate"></a>
        </li>`;
    const renderSubs = (subs) => subs.map(renderLink).join('\n');
    const renderNode = (node) => {
        return `
        <ul>
            <li>
                <span>${node.label}</span>
                <a href="${node.dir}" class="open-separate"></a>
                <ul>${renderSubs(node.subs)}</ul>
            </li>
        </ul>`;
    };
    const metaTree = Object.keys(globalJSON)
        .map(key => globalJSON[key])
        .filter((item) => {
            if (removeDuplicates.indexOf(item.group) === - 1) {
                removeDuplicates.push(item.group);
                return true;
            }
        })
        .reduce((res, item) => {
            removeDuplicates = [];
            res[item.type] = res[item.type] || {
                label: item.type,
                dir: '/docs/' + item.type,
                subs: []
            };
            res[item.type].subs.push({
                label: item.group,
                dir: '/docs/' + item.type + '/' + item.group
            });
            return res;
        }, {});
    return Object.keys(metaTree)
        .map(key => metaTree[key])
        .map(renderNode)
        .join('\n');
};
