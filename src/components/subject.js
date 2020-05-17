import React, {Component} from 'react';

class Subject extends Component{  //Subject 라는 Component를 만들겠다 라는 의미
    render(){
      return(
          <header>
              <h1><a href ="/">{this.props.title}</a></h1>
              {this.props.sub}
          </header>    // Component를 만들때는 하나의 최상위 태그만 써야 한다. 여기서는 header가 최상위 태그.
      );
    }
  }

  export default Subject;