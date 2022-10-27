import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";



/**
 * Ne pas hésiter a étre pointillieux sur les types en utilisnt le @as pour définir des énumerateurs ou quand typescript infére le types de maniére litéral
 * 
    type: "user" as "user" | "admin",
 */

type ContextProps = {
    n: number,
    incr: () => void,
}

const CounterContext = createContext<null | ContextProps>(null)

type Props = PropsWithChildren<{
  start?: number
}>
export const CounterProvider = ({ start = 0, children }: Props) => {

    const [n, setN] = useState(start)
    const incr = useCallback(() => setN(n => n + 1), [])
    
    return <CounterContext.Provider value={ {n , incr}}>
     {children}
    </CounterContext.Provider>
}


/**
 * N'oubliez pas non plus les Typeguards sur vos composant pour pouvoir etre informer d'une erreur de type et remonter a la source facilement
 */
export const useCounter = () => {

    const value = useContext(CounterContext)
    if (value === null) {
        throw new Error("Vous devait entourer ce composant d\'un <CouterProvider>");
        
    }
    return value
}