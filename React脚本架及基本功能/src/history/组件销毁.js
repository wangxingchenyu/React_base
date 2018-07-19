import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PropTypes from 'prop-types';


class InputCom  extends  Component{
    constructor(){
        super();
        this.state ={
            date:new Date().toLocaleString(),
        }
    }
   componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date().toLocaleString()})
        },1000)
   }
   componentWillUnmount(){
       clearInterval(this.timer) ;//销毁组件之前，给定时器给删除掉
   }
   destory = ()=>{
       console.log("扫行了销毁组件");
       ReactDOM.unmountComponentAtNode(document.getElementById("root"));//销毁该组件
   }
   render(){
       return (
           <div className={'container'}>
               <p className='bg-danger text-white'>标题内容</p>
               <p className='text-center'>{this.state.date}</p>
               <button className='btn btn-primary' onClick={this.destory}>销毁组件</button>
           </div>
       )
   }
}

render(
    <InputCom/>,
    document.getElementById("root")
)
