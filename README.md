# Learning React Hooks
Hooks não funcionam em classes, mas podem ser usados no lugar de classes.
### hooks tem 2 regras 
<ul>
<li>Apenas chame hooks no nivel mais alto, não em loops ou funções aninhadas</li>
<li>Apenas chame hooks de componentes funcionais, não chame hooks de funções javascript comuns</li>
</ul>

## useState
funciona como o state de uma classe do react.
### usando useState
<code>

    import {useState} from 'react';

    function Example(){

        const [count, setCount] = useState(0);

        return (
        <div className="App">
        <div className="simpleHook">
            <p>Você clicou {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Clique aqui
            </button>
        </div>
        </div>
    }

</code> 

## useEffect
funciona como o <code>componentDidMount()</code>, <code>componentDidUpdate()</code> e <code>componentWillUnmount()</code> combinados.
### usando useEffect
<code>

    import {useState,  useEffect } from 'react';

    function Example(){

        const [count, setCount] = useState(0);

        useEffect(() => {
        document.title = `You clicked ${count} times`;
        });

        return (
        <div className="App">
        <div className="simpleHook">
            <p>Você clicou {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Clique aqui
            </button>
        </div>
        </div>
    }

</code> 

#### extras do useEffect
<li>Passar uma array vazia como abaixo, faz com que o useEffect rode apenas uma vez no mount</li>
<code>

    useEffect(() => {
    
    },[]);

</code>

<li>Passar uma variavel no array faz com que o useEffect só rode quando a variavel mudar. No exemplo abaixo, o useEffect só vai executar quando <code>count</code> for atualizado</li>

<code>

    useEffect(() => {
    document.title = `You clicked ${count} times`;
    },[count]);

</code>

## Hooks customizados
para criar um hook customizado, crie uma função e retorne o valor do estado.
<code>
 
    function useCustomHook(param) {

        const [result, setResult] = useState(param);

        useEffect(() => {

    function change() {

        const changed = `posso mudar o parametro de "${param}", para outra coisa dentro do useEffect customizado`
        setResult(changed);
        }

        change();
        });

        return [result, setResult];
    }


</code>