import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/content"
import Subject from "./components/subject"
import './App.css';

// class Subject extends Component{  //Subject 라는 Component를 만들겠다 라는 의미
//   render(){
//     return(
//         <header>
//             <h1>{this.props.title}</h1>
//             {this.props.sub}
//         </header>    // Component를 만들때는 하나의 최상위 태그만 써야 한다. 여기서는 header가 최상위 태그.
//     );
//   }
// }


class App extends Component{
  constructor(props){   /*어떠한 컴포넌트가 실행될때 render라고 하는 함수보다 먼저 실행이 되면서 그 컴포넌트를 초기화 시켜주고 싶은 코드는 constructor를 저렇게 짜고 그 안에다가 코드를 작성한다.   */
    super(props);
    this.state = {  //APP이 내부적으로 사용할 상태는 state라는 형태를 통해서 사용한다. 
      mode : 'welcome',
      subject: {title :'WEB', sub : 'World Wide Web'},
      wlecome:{title:'welcome', desc:'Hello, react!!'},
      contents: [
        {id:1, title:'HTML', desc : "HTML is for information"},
        {id:2, title:'css', desc : "css is for design"},
        {id:3, title:'Javascript', desc : "javascript is for interactive"},
      ]
    }
  }
  render() {
    var _title,_desc = null;

    if (this.state.mode === 'welcome'){
      _title = this.state.wlecome.title;
      _desc = this.state.wlecome.desc;
    }else if (this.state.mode === 'read'){
      _title=this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject title = {this.state.subject.title}   //만들어진 state값을 subject라는 컴포넌트에 props값으로 줌 , 상위 컴포넌트의 state값을 하위 컴포넌트의 props의 값으로 전달하는 것은 얼마든지 가능하다. 
                 sub ={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title = {_title} desc = {_desc}></Content>
      </div> 
    );
  }
}

export default App;
