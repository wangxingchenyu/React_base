let state = {
    title:{color:'red',text:'原标题'},
    content:{color:'green',text:'原内容'}
};

let action ={
    text:"新内容"
};


let result = {...state,title:{...state.title,text:action.text}};

let title ={ color:'red',text:'新内容'};


// let a = {title:{color:'red',text:'原标题'}, content:{color:'green',text:'原内容'},title:{}};

// console.log(result);

// console.log({...state});

// let result = { color:'red',text:'新内容'}, content: { color: 'green', text: '原内容' } }

console.log(result);