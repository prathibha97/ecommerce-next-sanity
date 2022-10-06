import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find(
            (item) => item._id === product._id,
        );


        if (checkProductInCart) {

            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    const newQty = item.quantity + quantity;
                    return {
                        ...cartProduct,
                        quantity: newQty,
                    }
                } else {
                    return {
                        ...cartProduct
                    }
                }
            })
            setCartItems(updatedCartItems)
        }
        else {
            product.quantity = quantity
            setCartItems([...cartItems, { ...product }])
        }
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity)
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    const incQty = () => {
        setQty(prevQty => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1
        })
    }

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            setShowCart
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)