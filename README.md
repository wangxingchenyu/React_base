#第1章： React基础
- •	开篇序
- •	脚手架基础应用
- •	脚手架高级应用
- •	jsx语法大括号用法
- •	jsx语法其它细节
- •	jsx语法的渲染流程
- •	jsx语法的渲染机制-createElement
- •	jsx语法的渲染机制-render
- •	jsx复杂结构的处理
- •	函数式组件基础语法
- •	函数式组件的渲染过程
- •	弹框实例
- •	回顾ES6类用法
- •	基于类的组件
- •	属性管理
- •	状态管理之了解数据驱动 
- •	点赞案例-数据驱动操作
- •	点赞案例-DOM操作
- •	手动实现数据的双向绑定
- •	生命周期
- •	留言板体验复杂组件间的数据传递
- •	手动配置webpack+react环境 

## 第2章： Redux应用
- •	redux初识
- •	手动实现简版redux 
- •	redux基本流程
- •	redux 工程化结构与使用场景 

## 第3章： React-Redux应用
- •	拆分文件
- •	引入react-redux 
- •	react-redux之todo
- •	todo1
- •	todo2
- •	todo3

## 第4章： React-Redux实现与路由与中间件的使用
- •	高阶组件及context用法
- •	实现react-redux 
- •	路由开始 
- •	路由 
- •	路由权限校验 
- •	中间件的使用



##context上下文件传递 (props是只读的，但是context 里面的值是可以更改的,但在哪个组件里面调用更改，则生效在哪个组件里，不会更改父组件里面的值)

- 要提前在祖组件里声明好共享的数据类型

```
     static childContextTypes = {
            n: PropTypes.number,
            m: PropTypes.number,
            callback: PropTypes.func
        };
```

- 然后设置要分享的值，反回是一个对象 getChildContext()这个函数用来反回，是固定写法，函数的名称不能改变
```angular2html

getChildContext() {
        let {n, m} = this.state;
        return {
            n,
            m,
            callback: this.add
        }
    }
```

- 如果想在子组件里面调用的话，则是由子组件自己主动发起，先声明好数据的类型 contextTypes 固定的写法，不能变,需要调用哪个就写哪个就可
    - 1) 数据的类型必须是跟父组件里面共享的数据类型一致，否则报错
    - 2) 如果想在 constructor 里面用，要给constructor,传入props,context super(props,context)
    
```
  static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    };
```


## 传递的两种试
- props
- context
    -  如果父传子 ,则要通过父主动通过props来分配，或者是 父已经全局分配好的getChildContext内容，由子孙来调用
    -  如果子想更改父，将父更改State 的方法作为属性传递给子就可以了，而context 是可以通过调用 state里面值来取的

## 组件也可以通过 React.createContext（）方式来创建
-  也了解生产者与消费者模型
-  父组件来生产，而子组件来消费
-  所以这个方法解构出来 **两个组件** 分别是 Provider(生产者：可以通过其value属性来提供上下文的数据) Customer(消费者)
-  createContext里面传一个对象，用来提供上下文的数据 ，这个数据是默认的数据 如果生产者(Provider) 里面提供了，则不找Default上下文件的数据
-  子组件如果想调用的话，不需要像以前一样声明类型，直接用 Customer 组件包括就可以了 里面返回是一个函数，参数是context
> 如下:
```angular2html
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        background: 'black',
        color: "#fff"
    },
};

const {Provider, Consumer} = React.createContext({
    background: 'black',
    color: "#fff"
});

//里面是默认提供者提供值 ，如果
/*
 *如果父组件提供了provider 则子组件就用其它祖组件的provider，否则在话，用的是React.createContext里面默认的provider
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <Provider value={{color: "yellow", background: "#000"}}>
                    <Header/>
                </Provider>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <Title>Hello React Context API</Title>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <Consumer>
            {context => (
            <h1 style={{background: context.background, color: context.color}}>
                {this.props.children}
            </h1>
        )}
    </Consumer>
        );
    }
}

ReactDOM.render(
    <App/>,
    root
);

```










 


