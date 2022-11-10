import {Button, ButtonVariants} from './components/Button.jsx';

function App() {
  return (
    <div className="App">
      <Button
        text="Hello from Primary"
        variant={ButtonVariants.primary}
      />
      <Button
        text="Hello from Secondary"
        variant={ButtonVariants.secondary}
      />
    </div>
  )
}
export default App
