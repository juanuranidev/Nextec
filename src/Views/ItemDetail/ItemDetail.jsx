import { React, useState, useEffect } from "react";
import { getItem } from "./ItemDetailService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import Loader from "../../Components/Loader/Loader";
import "./ItemDetail.scss";
import { useFavoritesContext } from "../../Context/FavoritesContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();
  const { favorites, handleFavorites } = useFavoritesContext();

  const handleGetItemDetail = async () => {
    setLoading(true);
    try {
      const response = await getItem(idItem);
      setItem({ id: response.id, ...response.data() });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  function isInFavorites(item) {
    return favorites.some(function (x) {
      return x.id === item.id;
    });
  }

  useEffect(() => {
    handleGetItemDetail();
  }, [idItem]);

  if (loading) return <Loader />;

  return (
    <section className="itemDetail">
      {/* <ItemDetail product={product} /> */}
      <div className="itemDetail_container">
        <img className="itemDetail_container_img" src={item.image} />
        <div className="itemDetail_container_div">
          {isInFavorites(item) ? (
            <div className="itemDetail_container_div_favorite">
              <span
                className="fas fa-heart fa-2x itemDetail_container_div_favorite_span"
                onClick={() => handleFavorites(item)}
              />
            </div>
          ) : (
            <div className="itemDetail_container_div_favorite">
              <span
                className="far fa-heart fa-2x itemDetail_container_div_favorite_span"
                onClick={() => handleFavorites(item)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
