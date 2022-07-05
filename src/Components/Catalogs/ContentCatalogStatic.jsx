import React, { useEffect } from "react";
import Cart from "../CardPizza";
import Skeleton from "../Skeleton";
import { useDispatch } from "react-redux/es/exports";
function ContentCatalogStatic({ title }) {
    const dispatch=useDispatch()






  useEffect(() => {
   
  }, []);


  return (
      <div className="content__catalog">
      <div className="content__catalog-top">
        <div className="content__catalog-top-title">{title}</div>
      </div>
      <div className="content__catalog-bottom">
        {/* {loading
          ? [...new Array(8)].map((idx) => <Skeleton key={idx} />)
          : items.map((obj) => <Cart key={obj.title} {...obj} obj={obj} />)} */}
      </div>
    </div>
  );
}
export default ContentCatalogStatic;

