import React from "react";

class CountStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  changeStep = (e) => {
this.setState({
    count:e.target.value,
})
  }
    render() {
      return (
        <div className="step">
          Krok:
          <input type="number" value={this.state.count} onChange={this.changeStep} />
          <button onClick={()=>this.props.changeSteps(this.state.count)}> Zwiększ o {this.state.count}</button>
        </div>
      );
    }
  }
  

export default CountStep;

// function CountStep (props) {

//     return(
//         <div className="step">
//             <input type="number" min="" value={props}/>
//         </div>
//     ); 
// }

// export default CountStep;