import { React, useState, useEffect } from "react";
import { getItem } from "./ItemDetailService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import Loader from "../../Components/Loader/Loader";
import "./ItemDetail.scss";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

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

  useEffect(() => {
    handleGetItemDetail();
  }, [idItem]);

  if (loading) return <Loader />;

  return (
    <section className="itemDetail">
      {/* <ItemDetail product={product} /> */}
      <div className="itemDetail_container">
        <img className="itemDetail_container_img" src={item.image} />
      </div>
    </section>
  );
};

export default ItemDetailContainer;
