import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import Link from '../../components/Link';

import heroesImage from '../../assets/img/heroes.png'
import logoImage from '../../assets/img/logo.svg'

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            console.log('Falha no login, tente novamente.', error);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" label="Não tenho cadastro" >
                        <FiLogIn size={16} color="#E02041" />
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}
