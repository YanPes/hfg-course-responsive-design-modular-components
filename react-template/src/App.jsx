import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button';

function App() {
  const isValid = true;

  const user = {
    name: "Tom",
    age: 28, 
    hobbies: ["Skiing", "Cooking"],
  }

  return (
    <div>
      <p>{`The user ${user.name} is ${user.age} years old`} </p>  
      <Button 
      text = "My cool Button" 
      variant="primary"
      />
    </div>
  )
}

export default App
