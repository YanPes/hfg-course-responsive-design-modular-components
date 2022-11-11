import { Button, Variants } from './assets/components/button.jsx'

function App() {
  return(
    <div className ="App">
      <Button 
      text="Hallo from Primary"
      variant={Variants.primary}
      />
      <Button 
      text="Hallo from Secondary"
      variant={Variants.secondary}
      />
      </div>
  );
  };

export default App
