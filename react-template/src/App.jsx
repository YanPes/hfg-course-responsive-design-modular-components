import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Button} from './components/Button';
import {ButtonVariants} from './components/Button';

function App() {
  return (

    <div className = "Modal">

      <div className = "Header">
          <h3>Select file type</h3>
          <p>Select the type of file you want to download.</p>  
          

          <div className = "Body"> 
            <Button 
              text=" .zip"
              variant={ButtonVariants.secondary}
            />
            <Button 
              text=" .tap"
              variant={ButtonVariants.secondary}
            /> 
          </div>


          <div className = "Footer"> 
            <Button
              text = "Download files"
              variant = {ButtonVariants.primary}
            />
            <Button
              text = "Cancel"
              variant = {ButtonVariants.tertiary}
            />
        </div>

      </div>

    </div>
    )
};

export default App
