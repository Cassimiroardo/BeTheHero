import React, { useState } from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg'

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { register } from '../../services/ong.service';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [uf, setUf] = useState('')
    const [city, setCity] = useState('')

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
                name,
                email,
                whatsapp,
                city,
                uf,
        }
            register(data)
                .then( id => {
                    alert(`Seu ID de acesso ${id}`)
                    history.push('/')
                })
        
    }

    const onChange = (e) => {
        switch(e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'whatsapp':
                setWhatsapp(e.target.value)
                break
            case 'uf':
                setUf(e.target.value)
                break
            case 'city':
                setCity(e.target.value)
                break
            default:
                return
        }
    }

  return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo"/>
                <h1>
                    Cadastro
                </h1>
                <p>
                    Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.
                </p>
                <Link to="/" className="link-to">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho Cadastro
                </Link>
            </section>
            <form onSubmit={onSubmit}>
                <input
                    name="name"
                    type="text" 
                    value={name}  
                    placeholder="Nome da ONG"
                    onChange={onChange}
                    />
                <input
                    name="email"
                    type="email" 
                    value={email} 
                    placeholder="E-mail"
                    onChange={onChange}
                    />
                <input
                    name="whatsapp"
                    type="text"
                    value={whatsapp}  
                    placeholder="Whatsapp"
                    onChange={onChange}
                    />
                <div className="input-group">
                    <input
                        name="city"
                        type="text" 
                        value={city} 
                        placeholder="Cidade"
                        onChange={onChange}
                        />
                    <input
                        name="uf"
                        type="text"
                        value={uf} 
                        placeholder="UF" 
                        style={{width: 80}}
                        onChange={onChange}
                        />
                </div>
                <button type="submit" className="button">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
  );
}
