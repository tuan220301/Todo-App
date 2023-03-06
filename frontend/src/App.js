import './App.css';
import { ListToDo } from './ToDoApp/ListToDo';
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ListToDo />
    </QueryClientProvider>

  );
}

export default App;
