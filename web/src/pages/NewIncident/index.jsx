import React, { useState } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import { create } from '../../services/incident.service';

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        const res = create(localStorage.getItem('id'), data)
        alert(`Caso criado com sucesso!`)
    }

    const onChange = (e) => {
        switch(e.target.name){
            case "title":
                setTitle(e.target.value)
                break
            case "description":
                setDescription(e.target.value)
                break
            case "value":
                setValue(e.target.value)
                break
            default:
                return
        }
    }

    return ( 
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"/>
                    <h1>
                        Cadastrar novo Caso
                    </h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um heroi para resolver isso.
                    </p>
                    <Link to="/profile" className="link-to">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={onSubmit}>
                    <input 
                        name="title"
                        type="text"  
                        placeholder="Titulo do caso"
                        onChange={onChange}
                        />
                    <textarea 
                        name="description"
                        placeholder="Descrição"
                        onChange={onChange}
                        />
                    <input 
                        name="value"
                        type="number"  
                        placeholder="Valor em reais"
                        onChange={onChange}
                        />
                    <button 
                        type="submit" 
                        className="button"
                        >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
  );
}
