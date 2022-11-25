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
      <Button
        text="Hello from Tertiary"
        variant={ButtonVariants.tertiary}
      />
    </div>
  )
}
export default App
