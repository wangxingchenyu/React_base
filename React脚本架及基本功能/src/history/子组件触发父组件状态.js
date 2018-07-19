import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';


class Counter extends Component{
    static propTypes= {
        name:PropTypes.number.isRequired
    }
    constructor(){
        super();
        this.state={
            number:1,
        }
    }
    handleClick=()=>{
        this.setState({number:this.state.number+1})
    }
    render(){
        return (
            <div>
                <p>计数组件</p>
                <hr/>
                <Onecom n={this.state.number}  change={this.handleClick}/>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

class Onecom extends  Component{
    render(){
        return (
            <div>one组件 {this.props.n}
                <button onClick={this.props.change}>修改父组件</button>
            </div>
        )
    }
}

//通过子组个上面绑定一个事件，而这个事件，真正操作的是父组件的事件，而父组件的事情是可以修改状态，而状态又通过属性传给子组件

render(<Counter name={1}/>,document.getElementById('root'));
