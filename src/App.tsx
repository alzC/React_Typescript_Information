import { PropsWithChildren, useState } from 'react'
import { Counter } from './Counter'
import { CounterProvider } from './Counterprovider'


/**
 * Typescript permet une codebase plus solide et de garder une cohérence Global en s'assurant que la forme du composant corespond a nos attentes.
 * 
 * Ce template fais office d'example.
 */

function Title ({children}: PropsWithChildren) {
  return <h1>{children}</h1>
}

function App() {


  /***
   * Vous pouvez ici 
   * 
   * - Définir une valeur initial avec l'atribut start sur le CounterProvider
   * - Comprendre la logique de typescript
   * 
   * Si vous souhaité plus d'information sur le typages des hooks faite un Ctrl + click pour voir ce qu'il attend en générique.
   * 
   * @STEP_1 in counter components
   */
   
  return <div>

  <CounterProvider >
    <Counter title={<em>Bonjour</em>} titleTag={Title} >
    <p>Hello world</p>
      </Counter>
 </CounterProvider>
  </div>
}

export default App
