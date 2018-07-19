import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';

class Clock extends Component {
    constructor(){
        super();
        this.state = {date:new Date().toLocaleString()}
    }
    componentDidMount(){ //组件渲染完成，当渲染后会自动触发此函数
        this.timer = setInterval(()=>{ // 箭头函数 否则this 指向的是window
            this.setState({date:new Date().toLocaleString()})
        },1000);
    }
    componentWillUnmount(){ //组件将要卸载，当组件移除时会调用
        clearInterval(this.timer); //一般在这个方法中 清除定时器和绑定的事件
    }
    destroy=()=>{ //es7 箭头函数
        // 删除某个组件
        ReactDOM.unmountComponentAtNode(window.root);
    }
    render(){
        // 给react元素绑定事件默认this是undefined,bind方式 在就是箭头函数
        return <h1 onClick={this.destroy}>{this.state.date}</h1>
    }
}
// 执行顺序 constructor -> render -> componentDidMount -> setState-> render - onClick-> unmountComponentAtNode -> componentWillUnmount -> clearInterval
ReactDOM.render(<Clock/>,window.root);

//给jsx元素绑定事件要注意事件中的this指向，事件名采用 on+"开头大写事件名"的方式
