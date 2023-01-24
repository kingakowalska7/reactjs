import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import CountStep from './CountStep';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue  
        };

        
    }
    
    changeValue = (action) => { 

        this.setState((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

changeSteps = (par) => {
    this.setState({
        counterValue:this.state.counterValue + parseInt(par),
    })
}

     render() {

        return (
             <div className="counter">
                 Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} /> 
                <CountStep changeSteps={this.changeSteps}/>
             </div>
         );
     }
}

export default Counter;


