// 修改 renderLinkCard 函数，使未登录状态下不显示编辑按钮和相关文字
function renderLinkCard(link) {
    // ... 其他代码

    // 判断是否有 authToken
    if (!authToken) {
        // 如果未登录，返回不包含编辑按钮的组件
        return (<div>{link.title}</div>);
    }
    
    return (
        <div>
            <h3>{link.title}</h3>
            <button>Edit</button>
        </div>
    );
}

// ... 其他代码