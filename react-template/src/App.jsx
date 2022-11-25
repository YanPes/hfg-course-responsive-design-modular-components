import { Button, ButtonVariants } from "./components/Button/Button.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Button
        text="Hello from Primary"
        variant={ButtonVariants.primary}
        onClick={() => setShowModal(true)}
      />
      <Button
        text="Hello from Secondary"
        variant={ButtonVariants.secondary}
        onClick={() => setShowModal(true)}
      />
      <Button
        text="Hello from Tertiary"
        variant={ButtonVariants.tertiary}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal
          headline={"Hello from Modal"}
          description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
          onCancel={() => setShowModal(false)}
          onAccept={() => setShowModal(false)}
          isOpen={showModal}
        ></Modal>
      )}
    </div>
  );
}
export default App;
