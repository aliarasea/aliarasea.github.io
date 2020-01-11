import React from 'react';
import {TodoList} from './components/todolist/TodoList';

const App: React.FC = () => {

    const reactElement = React.createElement('div',
        {className: 'App'},
        <TodoList/>);

    const element = (<div className="App"><TodoList/></div>);

    return reactElement;
};

export default App;
