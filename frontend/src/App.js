import './App.css';
import { ListToDo } from './ToDoApp/ListToDo';
import React from 'react';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>

      <ListToDo />
    </React.Suspense>

  );
}

export default App;
