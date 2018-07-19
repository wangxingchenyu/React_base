import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class SearchCom extends Component{
    constructor(){
       super();
       this.state={
           arr:["one",'two','three'],
       }
    }
    click = (key)=>{
        console.log(key);
    }
    render(){
        let style ={marginTop:"20px"}
        return (
            <div className='container' style={style}>
                {
                    this.state.arr.map((item,key)=>{
                        return <p className='btn-primary' key={key} onClick={()=>{this.click(key)}}>{item}</p>
                    })
                }
                <p className='bg-danger'></p>
            </div>
        )
    }
}

//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SearchCom/>, document.getElementById("root"))



