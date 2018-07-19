let state = {

    //组件一
    title:{color:'red',text:'标题'},
    content:{color:'green',text:'内容'}
};

function renderContent() {
    // let content = document.querySelector('.content');
    // content.innerHTML = state.content.text;
    // content.style.color = state.content.color;
    console.log(state.content.text);
}

function renderTitle() {
    //组件二
    // let title = document.querySelector('.title');
    // title.innerHTML = state.title.text;
    // title.style.color = state.title.color;
    console.log(state.title.text);
}

function renderApp() {
    //复合组件
    renderContent();
    renderTitle()
}

renderApp();
