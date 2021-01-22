import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import MainForm from '../components/MainForm';
import DogBox from '../components/DogBox';

export default function CreditCard () {
    const history = useHistory();
    const [ clicked, setClicked ] = useState(false);
    const [ cardName, setCardName ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ expiration, setExpiration ] = useState('');
    const [ cvv, setCvv ] = useState('');

    function submitForm (event) {
        event.preventDefault();
        setClicked(true);
        proceedSubmiting();
    }

    function proceedSubmiting () {
        const body = { cardName, cardNumber, expiration, cvv };
        //const request = axios.post(``, body);
        //request.then(submitSucceeded);
        //request.catch(submitFailed);
        submitSucceeded();                  //apagar essa linha depois
    }

    function submitSucceeded () {
        history.push('/compra-concluida');
    }

    function submitFailed () {
        alert('Não foi possível enviar seus dados, tente novamente');
        setClicked(false);
    }
  
    return (
        <OutterBox>
            <Main>
                <MainForm onSubmit={submitForm}>
                    <h2>Dados do cartão</h2>

                    <label htmlFor='cardName'>Nome no cartão:</label>
                    <input 
                        type='text' 
                        id='cardName'
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}   
                        required
                    />
                    
                    <label htmlFor='cardNumber'>Número do cartão:</label>
                    <InputMask
                        mask={'9999 9999 9999 9999'} 
                        type='text' 
                        id='cardNumber'
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}   
                        required
                    />

                    <label htmlFor='expiration'>Data de validade:</label>
                    <InputMask
                        mask={'99/9999'} 
                        type='text' 
                        id='expiration'
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}   
                        required
                    />

                    <label htmlFor='cvv'>CVV:</label>
                    <InputMask
                        mask={'999'} 
                        type='text' 
                        id='cvv'
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}   
                        required
                    />

                    <div className='to-fill'></div>

                    <MainButton>Finalizar compra</MainButton>
                </MainForm>

                <DogBox>
                    <img src='/images/yogacat.png' />
                </DogBox>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 850px;
`;
