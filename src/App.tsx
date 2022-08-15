import { useState } from 'react';
import styles from './App.module.css'
import { levels, calculateImc } from './helpers/imc';


const App = () => {
  
  let [height, setHeight] = useState<number>(0)
  let [weight, setWeight] = useState<number>(0)

  const calc = () => {
    if (height && weight) {

    } else {
      alert('Preencha todos os campos')
    }
  }
 
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          Calculadora IMC
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <p>O IMC (Índice de Massa Corporal) é um cálculo que ajuda a avaliar se a pessoa está dentro
           do seu peso ideal, de acordo com a altura. </p>
          <input 
            placeholder='Digite sua altura'
            type='number'
            value={height > 0 ? height: ''}
            onChange={e => setHeight(parseFloat(e.target.value))}
            />
          
          <input 
            placeholder='Digite seu peso'
            type='number'
            value={weight > 0 ? weight: ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            />
          <div className={styles.result}>
            21.5
          </div>

            <button onClick={calc}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;