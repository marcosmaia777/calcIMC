import { useState } from 'react';
import styles from './App.module.css'


const App = () => {
  
  let [height, setHeight] = useState<number>(0)
  let [weight, setWeight] = useState<number>(0)

  let calc = () => {
    // imc =  peso/ altura * altura 
    
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
          <h1>Calcule seu IMC</h1>
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

            <button>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;