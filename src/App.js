import React, { useState } from "react";
import ModalForm from "./ModalForm";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
