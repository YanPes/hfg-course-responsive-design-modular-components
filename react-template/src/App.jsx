import { Button, ButtonVariants } from "./components/Button/Button.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { useState } from "react";

import "./App.css";

const ModalStatus = {
  accepted: "accepted",
  cancelled: "cancelled",
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  const getModalResponseStatus = () => {
    if (modalStatus === "")
      return `Please click on a button to start the modal interaction.`;
    return `The modal interaction was ${modalStatus}.`;
  };

  const handleModalOnAccept = () => {
    setShowModal(false);
    setModalStatus(ModalStatus.accepted);
  };

  const handleModalOnCancel = () => {
    setShowModal(false);
    setModalStatus(ModalStatus.cancelled);
  };

  return (
    <div className="App">
      <div className="dashed-wrapper">
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
      </div>
      <div className="dashed-wrapper">
        <p>{getModalResponseStatus()}</p>
      </div>
      {showModal && (
        <Modal
          headline={"Hello from Modal"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
          onCancel={handleModalOnCancel}
          onAccept={handleModalOnAccept}
          isOpen={showModal}
        ></Modal>
      )}
    </div>
  );
}
export default App;
