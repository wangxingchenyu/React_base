let CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT';

function createStore() {
    let state = {
        title:{color:'red',text:'标题'},
        content:{color:'green',text:'内容'}
    };
    let getState = () => JSON.parse(JSON.stringify(state)); // 创造一份和状态同样的对象给外界来用
    function dispatch(action) {
        switch (action.type){
            case CHANGE_TITLE_TEXT:
                state = {...state,title:{...state.title,text:action.text}};
        }
    }
    return {
        dispatch,
        getState,
    }
}

let store = createStore(); // 拿到createStore中返回的对象

function renderContent() {
    console.log(store.getState().content.text);
    console.log(store.getState().content.color);
}

function renderTitle() {
    console.log(store.getState().title.color);
}

function renderApp() {
    renderContent();
    renderTitle();
}

renderApp();

setTimeout(()=>{
    store.dispatch({type:CHANGE_TITLE_TEXT,text:'hello'});
    renderApp();
},1000);