import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const FavoritesContext = createContext([])

export function useFavoritesContext() {
    return useContext(FavoritesContext)
}

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    function handleFavorites(product){
        const isInFavorites = favorites.find((favorite => favorite.id === product.id))
        if(isInFavorites){
            setFavorites(favorites.filter(favorite => favorite.id !== product.id))
            const removedFromFavorites = () => toast.success("Eliminado de favoritos")
            removedFromFavorites()
        } else {
            setFavorites([...favorites, product])
            const addedToFavorites = () => toast.success("Agregado a favoritos")
            addedToFavorites()
        }
    }

    function emptyFavorites(){
        setFavorites([])
    }

    useEffect(() => {
        let favoritesProducts = localStorage.getItem("favoritesProducts")
        if (favoritesProducts) {
            setFavorites(JSON.parse(favoritesProducts))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem('favoritesProducts', JSON.stringify(favorites))
    }, [favorites])

    return(
        <FavoritesContext.Provider value={{
            favorites,
            setFavorites,
            handleFavorites,
            emptyFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}