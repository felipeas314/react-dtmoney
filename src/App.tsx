import { useState } from 'react';
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transacao</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
