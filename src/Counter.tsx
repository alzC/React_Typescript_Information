import {  ComponentType, Dispatch, ForwardedRef, forwardRef, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, SetStateAction, useRef, useState } from "react";
import { useCounter } from "./Counterprovider";






/**
 * Comment définir des types utilitaires.
 * 
 * Comment rendre mes types optionnels en amont meme si le composant n'a pas encore d'enfant avec "?".
 * 
 * @ReactNode accepte les chaine de caractére , null et les undefined et tous ce que l'on pourrait avoir en children
 * 
 * @IntresicElements est une interface qui va contenir en clé l'element et les différente propiéter qui sont accépté  par l'élement
 * 
 * @ComponentType_PropsWithChildren permet de prévenir typescript si on passe a notre custom atttribut un composant et le prevenir que ce composant pourrait attendre des props
 */

type CouterProps = PropsWithChildren<{
    start?: number;
    title?: ReactNode
    titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>
}>

/**
 * Il y'a plusieurs syntaxe disponible voici celle que je préonise 
 * pour le projet.
 * 
 * export const Counter = forwardRef<HTMLButtonElement, CouterProps> (({ start = 0, children, title = 'Compteur' }, ref) => {
 */


 /**
  * Voici comment typé à la fois les props et les refs
  * N'oubliez pas que l'on type d'abord les refs et ensuite les props
  * alors que les paramétres sont dans l'autre sens
  */
export const Counter = forwardRef<HTMLButtonElement, CouterProps> (({ start = 0, children, title = 'Compteur', titleTag: Title = "h1" }, ref) => {

    /**
     * Définir une valeur initial pour eviter d'avoir un types undefined en plus du type défini a vérifier plus tard
     * 
     * voir CounterProvider
     */
 const {n , incr} = useCounter()
    
  return (
    <div>
          <h2>{title}</h2>
          {children}
          <p>Numéro : {n}</p>
          <button ref={ref} onClick={incr}>Incrementer</button>
    </div>
  )
})


Counter.displayName = 'Couter';

/**
 * React travail avec des évenements synthétiques
 * Toujours verifier que l'import  d'évenement viens bien de REACT !!
 * 
 * function onClick(e: MouseEvent) {}
 */




