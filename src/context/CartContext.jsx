import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = () => {
  try { return JSON.parse(localStorage.getItem('carrito')) || [] } catch { return [] }
}

function reducer(state, action){
  switch(action.type){
    case 'ADD': {
      const exists = state.find(i => i.id === action.item.id)
      if(exists){
        return state.map(i => i.id===action.item.id ? { ...i, cantidad: i.cantidad + 1 } : i)
      }
      return [...state, { ...action.item, cantidad: 1 }]
    }
    case 'INC':
      return state.map(i => i.id===action.id ? { ...i, cantidad: i.cantidad + 1 } : i)
    case 'DEC':
      return state.map(i => i.id===action.id ? { ...i, cantidad: Math.max(1, i.cantidad - 1) } : i)
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'SET':
      return action.items
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, [], initialState)

  useEffect(() => { localStorage.setItem('carrito', JSON.stringify(items)) }, [items])

  const total = useMemo(() => items.reduce((acc,i)=>acc + i.precio*i.cantidad, 0), [items])
  const totalItems = useMemo(() => items.reduce((a,i)=>a+i.cantidad, 0), [items])

  const value = {
    items,
    total,
    totalItems,
    addToCart: (item) => dispatch({ type: 'ADD', item }),
    increment: (id) => dispatch({ type: 'INC', id }),
    decrement: (id) => dispatch({ type: 'DEC', id }),
    removeItem: (id) => dispatch({ type: 'REMOVE', id }),
    getQuantity: (id) => items.find(i=>i.id===id)?.cantidad || 0
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
