import React, { useState, useEffect } from 'react';
//import useCustomHook from './CustomHook';
import './App.css';

function useCustomHook(param) {
  const [result, setResult] = useState(param);

  //setResult(param + 'outra coisa');
  useEffect(() => {
    function change() {
      const changed = `posso mudar o parametro de "${param}", para outra coisa dentro do useEffect customizado`
      setResult(changed);
    }

    change();
  });

  return [result, setResult];
}

function App() {
  //useState é um Hook
  const [count, setCount] = useState(0);
  const [custom, setCustom] = useCustomHook('alguma coisa')

  //const custom = useCustomHook('alguma coisa')

  //Hooks não funcionam dentro de classes
  /*
    useEffect é um Hook de efeito, ele gera um efeito colateral
    ou seja, na hora que clicar no botão, o setCount atualiza o count,
    e gera um efeito colateral aqui, atualizando o titulo do documento
  */
  //normalmente as funções que o efeito usa são escritas dentro dele
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${count} times`;
    //setCustom('diferente')
  });

  //É possivel ter varios efeitos 
  /*
  useEffect(() => {
     // Atualiza o título do documento utilizando a API do navegador
   document.title = `You clicked ${count} times`;
  
  },[count]); //atualiza o titulo apenas quando count mudar //se o array estiver vazio só vai executar uma vez quando montar o componente
  */


  //efeitos podem ter uma faze de limpeza
  //
  /*
  useEffect(() => {
    //executa apos a limpeza
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //vai executar a limpeza primeiro no return
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]);// Apenas usa o efeito se props.friend.id mudar
  */
  return (
    <div className="App">
      <div className="simpleHook">
        <p>Você clicou {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      </div>

      <div className="customHook">
        <p>Tem: </p>
        <p onClick={() => setCustom('cliquei')}>{custom}</p>
        <p>no custom hook</p>
      </div>


    </div>
  );
}
//hooks tem 2 regras 
//• Apenas chame hooks no nivel mais alto, não em loops ou funções aninhadas
//• Apenas chame hooks de componentes funcionais, não chame hooks de funções javascript comuns

export default App;
