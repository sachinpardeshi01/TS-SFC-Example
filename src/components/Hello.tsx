import * as React from "react";

export interface IProps{
    name : string;
    enthusiasmLevel ?: number;
}

interface IState {
    currentEnthusiam: number;
}

// function Hello ({name,enthusiasmLevel = 1 } : IProps){
    
//     if(enthusiasmLevel <=0){
//         throw new Error('You could be a little more enthusiastic. :D');
//     }

//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name + getExclemationMarks(enthusiasmLevel)}
//             </div>
//         </div>
//     )
// }


class Hello extends React.Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.state = { currentEnthusiam: props.enthusiasmLevel || 1};
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiam + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiam -1 );

    updateEnthusiasm(currentEnthusiam: number) {
        this.setState({ currentEnthusiam });
      }

    render(){
        const {name} = this.props;

        if(this.state.currentEnthusiam <= 0 ){
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                Hello {name + getExclemationMarks(this.state.currentEnthusiam)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }

}

export default Hello;

// Helpers

function getExclemationMarks(numChars: number){
    return Array(numChars + 1).join('!');
}