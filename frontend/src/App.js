import './App.css';
import { ListToDo } from './ToDoApp/ListToDo';
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // retry: 3, //Will retry to fectch the data 3 times before displayinh an error
        staleTime: 5000 // the data will be considered fresh for 5000ms (5s)
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ListToDo />
    </QueryClientProvider>

  );
}

export default App;
