import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PropTypes from 'prop-types';

class SearchCom extends Component{
    constructor(){
       super();
       this.state={
           val:"请搜索"
       }
    }
    handleChange = (e)=>{
        this.setState({val:e.target.value});
    }
    render(){
        let style ={marginTop:"20px"}
        return (
            <div className='container' style={style}>
                <input type="text" defaultValue={this.state.val} onChange={this.handleChange} className='form-control' placeholder='百度搜索框'/>
                <hr/>
                <h2>{this.state.val}</h2>
            </div>
        )
    }
}

//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SearchCom/>, document.getElementById("root"))


