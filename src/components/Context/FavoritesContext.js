import { createContext } from 'react'
import { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'

const FavoritesContext = createContext([])

export function useFavoritesContext() {
    return useContext(FavoritesContext)
}

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    const addedToFavorites = () => toast.success("Agregado a favoritos")
    const removedFromFavorites = () => toast.success("Eliminado de favoritos")

    function handleFavorites(product){
        const isInFavorites = favorites.find((x => x.id === product.id))

        if(isInFavorites){
            setFavorites(favorites.filter((x) => x.id !== product.id))
            removedFromFavorites()
        } else {
            setFavorites([...favorites, product])
            addedToFavorites()
        }
    }

    function emptyFavorites(){
        setFavorites([])
    }

    useEffect(() => {
        let favorites = localStorage.getItem("favorites")
        if (favorites) {
            setFavorites(JSON.parse(favorites))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
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

