import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import Parent from './components/Parent';
import Child from './components/Child';
import ErrorBoundary from './ErrorBoundary';


function App() {
  
   return (
    <>
      <h2>Error Boundaries</h2>

      <ErrorBoundary>

        <Counter/>
        
      </ErrorBoundary>
      
      <Counter/>
      
      </>
  );
};

export default App;
