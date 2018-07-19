import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';

class Counter extends Component{
    static propTypes= { //这个propTypes是类的属性是用来批定属性的，而PropTypes是导入进来用来验证的
        name:PropTypes.number.isRequired
    };
    render(){
        return (
            <div>aaaaaaaaaaaa</div>
        )
    }
}

render(<Counter name={1}/>,document.getElementById('root'));
