import React from 'react'
import Wrapper from './components/wrapper'
import autentification from '../aut'

function App() {

  
  const getApiArmtek = async () => {
    const url = 'http://ws.armtek.by/api/ws_search/search?format=json';

    const data = {
      VKORG: '2000',
      KUNNR_RG: '43077259',
      PIN: '5PK1025'
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Успех:', data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }

  return (
    <>
      <div className='template'>
        <button onClick={getApiArmtek}>get API</button>
        <div className="main_title">css scroll visual constructor</div>
        <Wrapper />
      </div>
    </>
  )
}

export default App