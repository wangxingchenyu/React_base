import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PropTypes from 'prop-types';
import JSONP from  'jsonp'

//封装jonsp为promise对象
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
            if (err) reject(err);
            resolve(data);
        })
    })
}

class SearchCom extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    handleClick(e){
        console.log(this);
        console.log(e);
    }
    handleClick2= (a,e)=>{
       console.log(a);
       console.log(this);
       console.log(e);
    }
    render(){
        let style ={marginTop:"20px"}
        return (
            <div className='container' style={style}>
                {/*如果被执行的函数没有写箭头函数的话，则可以下的方式来*/}
                <button onClick={(e)=>this.handleClick(e)}>点击</button>
                {/*事件绑定第一种方法，如果在执行函数里面加入了箭头函数了，则在事件调用的时候要加入.bind方法来传参事件不参传*/}
                <button onClick={this.handleClick2.bind(this,1)}>点击2</button>
            </div>
        )
    }
}

//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SearchCom/>, document.getElementById("root"))



