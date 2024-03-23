import React, { useState, useEffect } from "react";
import { FaTrash } from 'react-icons/fa';
import '../Formulario/Formulario.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAA_fBdmG96YbPiDrR87gGZiWwVsW6xl7M",
  authDomain: "backendcn-75ff1.firebaseapp.com",
  projectId: "backendcn-75ff1",
  storageBucket: "backendcn-75ff1.appspot.com",
  messagingSenderId: "285043527155",
  appId: "1:285043527155:web:0674f3b1277014015b5686",
  measurementId: "G-E12SCVEQJJ"
};

// Inicializa o app do Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Formulario = () => {
  const [escolas, setEscolas] = useState([]);
  const [novaEscola, setNovaEscola] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [containerHeight, setContainerHeight] = useState('120px'); // Altura inicial do contêiner

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'compras'));
      const itemsData = [];
      querySnapshot.forEach(doc => {
        itemsData.push({ id: doc.id, ...doc.data() });
      });
      setEscolas(itemsData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const adicionarEscolaFirestore = async (novaEscola) => {
    try {
      const docRef = await addDoc(collection(db, 'compras'), {
        nome: novaEscola
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const excluirEscolaFirestore = async (id) => {
    try {
      await deleteDoc(doc(db, 'compras', id));
      console.log("Document successfully deleted!");
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const adicionarEscola = () => {
    if (novaEscola.trim() !== "") {
      adicionarEscolaFirestore(novaEscola);
      setEscolas([...escolas, { id: Date.now(), nome: novaEscola }]);
      setNovaEscola("");
      setMostrarInput(false);
      setContainerHeight(`${120 + (escolas.length + 1) * 35}px`);
    }
  };

  const excluirEscola = async (id) => {
    excluirEscolaFirestore(id);
    const novasEscolas = escolas.filter(escola => escola.id !== id);
    setEscolas(novasEscolas);
    setContainerHeight(`${120 + novasEscolas.length * 35}px`);
  };

  return (
    <div className="form-container" style={{ height: containerHeight }}>
      <h2 className='form-title'>Lista de Compras</h2>
      <ul>
        {escolas.map(escola => (
          <li key={escola.id} className="escola-container">
            <span>{escola.nome}</span>
            <button onClick={() => excluirEscola(escola.id)} className="button">
              <FaTrash className="trash-icon" />
            </button>
          </li>
        ))}
      </ul>
      {mostrarInput && (
        <div>
          <input
            type="text"
            value={novaEscola}
            onChange={(e) => setNovaEscola(e.target.value)}
            placeholder="Digite o nome do item"
          />
          <button onClick={adicionarEscola} className="button">
            Adicionar Item
          </button>
        </div>
      )}
      {!mostrarInput && (
        <button onClick={() => setMostrarInput(true)} className="button">
          Adicionar Item
        </button>
      )}
    </div>
  );
};

export default Formulario;
