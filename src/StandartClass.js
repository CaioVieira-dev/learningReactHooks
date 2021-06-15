import React, { Component, useState } from 'react';

//tentar renderizar esse componente usando um hook vai dar esse erro
//src\StandartClass.js
//  Line 7:35:  React Hook "useState" cannot be called in a class component. 
//React Hooks must be called in a React function component or a custom React
// Hook function  react-hooks/rules-of-hooks

class StandartClass extends Component {
    //    const[count, setCount] = useState(0);
    //o equivalente dessa linha de cima numa classe seria
    state = {
        count: 0
    }
    //o equivalente ao hook de efeito seria
    componentDidMount() {
        document.title = `Você clicou ${this.state.count} vezes`;
    }
    componentDidUpdate() {
        document.title = `Você clicou ${this.state.count} vezes`;
    }
    render() {

        return (
            <div>
                <p>Você clicou {count} times</p>
                <button onClick={() => this.setState(this.state.count + 1)}>
                    Clique aqui
                </button>
            </div>
        )
    }
}
export default StandartClass;