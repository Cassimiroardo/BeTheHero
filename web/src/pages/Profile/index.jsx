import React, { useEffect, useState } from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { index, destroy } from '../../services/incident.service';

export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const name = localStorage.getItem('name')
    const id = localStorage.getItem('id')
    
    const history = useHistory()

    useEffect(() => {
        index(id)
            .then( data => {
                setIncidents(data)
            })
    }, [])

    const logOff = () => {
        localStorage.clear()
        history.push('/')
    }

    const handleDestroy = (itemId) => {
        destroy(itemId, id)
        setIncidents(incidents.filter( incident => incident.id !== itemId ))
    }

  return (
    <div className="profile-container">
        <header>
            <img src={logoImg} alt="heroes"/>
            <span>
                Bem vinda, {name}
            </span>
            <Link className="button" to="/incidents/new">
                Cadastrar novo caso
            </Link>
            <button type="button" onClick={logOff}>
                <FiPower size={18} color="#E02041"/>
            </button>
        </header>
        <h1>
            Casos cadastrados
        </h1>
        <ul>
            { incidents.map(item => {
                return (
                <li key={item.id}>
                    <strong>
                        CASO:
                    </strong>
                    <p>
                        {item.title}
                    </p>
                    <strong>
                        DESCRIÇÃO
                    </strong>
                    <p>
                        {item.description}
                    </p>
                    <strong>
                        VALOR:
                    </strong>
                    <p>R$ {Intl.NumberFormat('pt-br', { sttle: 'currency', currency: 'BRL' }).format(item.value)}</p>
                    <button onClick={() => handleDestroy(item.id)}>
                        <FiTrash2 size={18} color="#a8a8b3"/>
                    </button>
                </li>
                )
            })}
        </ul>
    </div>
  );
}
