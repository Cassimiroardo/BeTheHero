import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/ong.service';

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()

    login(id)
      .then( name => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        history.push('/profile')
      })
  }

  return (
      <div className="logon-container">
          <section className="form">
            <img src={logoImg} alt="logo"/>
            <form onSubmit={onSubmit}>
                <h1>Faça Seu Logon</h1>
                <input 
                  type="text" 
                  placeholder="Sua ID"
                  value={id}
                  onChange={e => setId(e.target.value)}
                  />
                <button 
                  className="button" 
                  type="submit"
                  >
                    Entrar
                  </button>
                <Link to="/register" className="link-to">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho Cadastro
                </Link>
            </form>
          </section>
            <img src={heroesImg} alt="heroes"/>
      </div>
  );
}
