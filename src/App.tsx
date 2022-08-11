import { useState } from 'react';
import styles from './App.module.css'


const App = () => {

  const [weight, setWeight] = useState(0)

  const [height, setHeight] = useState(0)

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          Calculadora IMC
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <input type='number'/>
          <input type='number'/>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;