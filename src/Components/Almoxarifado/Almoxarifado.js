import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, getDocs } from 'firebase/firestore';
import '../Almoxarifado/Almoxarifado.css'
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const firebaseConfig = {
  apiKey: "AIzaSyAA_fBdmG96YbPiDrR87gGZiWwVsW6xl7M",
  authDomain: "backendcn-75ff1.firebaseapp.com",
  projectId: "backendcn-75ff1",
  storageBucket: "backendcn-75ff1.appspot.com",
  messagingSenderId: "285043527155",
  appId: "1:285043527155:web:0674f3b1277014015b5686",
  measurementId: "G-E12SCVEQJJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Almoxarifado = ({ title, collectionName }) => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [collectionName]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const itemsData = [];
      querySnapshot.forEach(doc => {
        itemsData.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const openModal = (index) => {
    setEditItemIndex(index);
    setItemName(items[index].name);
    setItemQuantity(items[index].quantity.toString());
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditItemIndex(null);
    setItemName('');
    setItemQuantity('');
    setIsModalOpen(false);
  };

  const addItem = async () => {
    if (editItemIndex !== null) {
      try {
        await updateDoc(doc(db, collectionName, items[editItemIndex].id), {
          name: itemName,
          quantity: parseInt(itemQuantity, 10),
        });
        const updatedItems = [...items];
        updatedItems[editItemIndex] = { id: items[editItemIndex].id, name: itemName, quantity: parseInt(itemQuantity, 10) };
        setItems(updatedItems);
        closeModal();
      } catch (error) {
        console.error('Erro ao atualizar dados:', error);
      }
    } else {
      try {
        const docRef = await addDoc(collection(db, collectionName), {
          name: itemName,
          quantity: parseInt(itemQuantity, 10),
        });
        setItems([...items, { id: docRef.id, name: itemName, quantity: parseInt(itemQuantity, 10) }]);
        closeModal();
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
      }
    }
  };

  const removeItem = async (index) => {
    const itemId = items[index].id;
    try {
      await deleteDoc(doc(db, collectionName, itemId));
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error('Erro ao excluir dados:', error);
    }
  };

  return (
    <div className='container'>
      <div className='title1'>
        <p className='name'>{title}</p>
      </div>
      <hr className='hr' />
      <div className='add-item-form'>
        <div className='form-row'>
          <label className='itemName' htmlFor='itemName'>Nome do Item:</label>
          <input
            type='text'
            id='itemName'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label className='itemName' htmlFor='itemQuantity'>Quantidade:</label>
          <input
            type='number'
            id='itemQuantity'
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <button className='button-add-item' onClick={addItem}>
          {editItemIndex !== null ? 'Editar Item' : 'Adicionar Item'}
        </button>
      </div>
      <div className='item-list'>
        <h3>Lista de Itens:</h3>
        <ul>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <span>{`${item.name} - Quantidade: ${item.quantity}`}</span>
                <div className='item-actions'>
                  <FaEdit onClick={() => openModal(index)} />
                  <FaTrash onClick={() => removeItem(index)} />
                </div>
              </li>
              {index !== items.length - 1 && <hr className='corDoSeparador' />}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Editar Item Modal'
        className='modal'
      >
        <h2>{editItemIndex !== null ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
        <label htmlFor='modalItemName'>Nome do Item:</label>
        <input
          type='text'
          id='modalItemName'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor='modalItemQuantity'>Quantidade:</label>
        <input
          type='number'
          id='modalItemQuantity'
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button onClick={addItem}>
          {editItemIndex !== null ? 'Salvar Alterações' : 'Adicionar Item'}
        </button>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default Almoxarifado;
