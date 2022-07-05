import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart,setPopupChooseProduct } from "../redux/slices/popupSlice";
function Cart({
  id,
  imageUrl,
  title,
  description,
  types,
  sizes,
  sizes_price,
  additionally_title,
  additionally_price,
  weight,
  addtionallyImage,
}) {
  const dispatch = useDispatch();
  const [activePopupChoose, setactivePopupChoose] = useState(false);
  const [activeDrought, setActiveDrought] = useState("Традиционное");
  const [activeSize, setActiveSize] = useState("20см");
  const [activeAddtive, setActiveAddtive] = useState([]);
  const [activePopup, setActivePopup] = useState(false);
  const [estimatedPriceAdditionally, setEstimatedPriceAdditionally] =
    useState(0);
  const [estimatedPriceSize, setEstimatedPriceSize] = useState(sizes_price[0]);
  const clickAddToCart = () => {
    // если element не равен null,то передаем в новый массив
    const filterActiveAddtive = activeAddtive.filter((el) => el != null);
    const count = 1;
    const totalPrice =
      (estimatedPriceSize + estimatedPriceAdditionally) * count;
    dispatch(
      addToCart({
        id,
        title,
        imageUrl,
        filterActiveAddtive,
        activeDrought,
        activeSize,
        totalPrice,
        count,
      })
    );
    setActiveSize(`${sizes[0]}см`);
    setActivePopup(!activePopup);
    setActiveAddtive([]);
    setEstimatedPriceAdditionally(0);
  };

  const clickClose = () => {
    setActivePopup(!activePopup);
    setActiveAddtive([]);
  };

  const onClickSize = (e, index) => {
    setEstimatedPriceSize(sizes_price[index]);
    setActiveSize(e.target.innerHTML);
  };

  const addAdditionally = (additionally_title, index) => {
    setActiveAddtive((currentAddtiveTitle) =>
      currentAddtiveTitle.includes(additionally_title)
        ? currentAddtiveTitle.map((additive) =>
            additive === additionally_title ? null : additive
          )
        : [...currentAddtiveTitle, additionally_title]
    );
    activeAddtive.includes(additionally_title)
      ? setEstimatedPriceAdditionally(
          estimatedPriceAdditionally - additionally_price[index]
        )
      : setEstimatedPriceAdditionally(
          estimatedPriceAdditionally + additionally_price[index]
        );
  };
  return (
    <div className="parent-cart">
      {activePopup && <div className="layout"></div>}
      <div className="cart">
        <div className="img">
          <img
            src={imageUrl}
            alt="Rectangle-4.png"
            border="0"
            width={300}
            height={300}
          />
        </div>
        <div className="cart__title">{title}</div>
        <div className="cart__description">{description}</div>
        <div className="cart__choose">
          <button
            className="cart__choose-button"
            onClick={() => setActivePopup(!activePopup)}
          >
            Выбрать
          </button>
          <div className="cart__choose-price">
            от {sizes_price[0]} <span>₽</span>
          </div>
        </div>
      </div>
      {activePopup && (
        <div className="popup__selectItem">
          <img src={imageUrl} alt="" />
          <div className="popup__selectItem-right">
            <div className="close__popup" onClick={() => clickClose()}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.77617 0.304743C1.36985 -0.101581 0.711067 -0.101581 0.304743 0.304743C-0.101581 0.711067 -0.101581 1.36985 0.304743 1.77617L14.5286 16L0.304752 30.2238C-0.101572 30.6302 -0.101572 31.2889 0.304752 31.6953C0.711076 32.1016 1.36986 32.1016 1.77618 31.6953L16 17.4714L30.2238 31.6953C30.6301 32.1016 31.2889 32.1016 31.6953 31.6953C32.1016 31.2889 32.1016 30.6301 31.6953 30.2238L17.4714 16L31.6953 1.77618C32.1016 1.36985 32.1016 0.71107 31.6953 0.304746C31.2889 -0.101578 30.6302 -0.101578 30.2238 0.304746L16 14.5286L1.77617 0.304743Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="popup__selectItem-right-title">{title}</div>
            <div className="popup__selectItem-right-select">
              <ul>
                {types.map((type) => (
                  <li
                    key={type}
                    className={activeDrought == type ? "active" : ""}
                    onClick={(e) => setActiveDrought(e.target.innerHTML)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="popup__selectItem-right-select">
              <ul>
                {sizes.map((size, index) => (
                  <li
                    key={size}
                    className={activeSize == `${size}см` ? "active" : ""}
                    onClick={(e) => onClickSize(e, index)}
                  >
                    {size}см
                  </li>
                ))}
              </ul>
            </div>
            <div className="popup__selectItem-right-addTitle">
              Добавьте в пиццу
            </div>
            <div className="popup__selectItem-right-add">
              {additionally_title.map((additionally_title, index) => (
                <div
                  onClick={() => addAdditionally(additionally_title, index)}
                  key={`${additionally_title}_${index}`}
                  className="popup__selectItem-right-add-item "
                >
                  <img
                    className={
                      activeAddtive.includes(additionally_title)
                        ? "active-add"
                        : ""
                    }
                    src={addtionallyImage}
                  />
                  {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58897 0 0 3.58897 0 8C0 12.411 3.58897 16 8 16C12.411 16 16 12.411 16 8C16 3.58897 12.411 0 8 0ZM8 15.4483C3.89241 15.4483 0.551724 12.1076 0.551724 8C0.551724 3.89241 3.89241 0.551724 8 0.551724C12.1076 0.551724 15.4483 3.89241 15.4483 8C15.4483 12.1076 12.1076 15.4483 8 15.4483ZM12.4441 5.10069C12.5517 5.20828 12.5517 5.38207 12.4441 5.48966L7.42345 10.5103C7.37103 10.5628 7.30207 10.5903 7.22759 10.5903C7.1531 10.5903 7.08414 10.56 7.03172 10.5103L4.32828 7.8069C4.22069 7.69931 4.22069 7.52552 4.32828 7.41793C4.43586 7.31034 4.60966 7.31034 4.71724 7.41793L7.22483 9.92552L12.0497 5.10069C12.16 4.9931 12.3366 4.9931 12.4441 5.10069V5.10069Z" fill="#FF7010"/>
</svg>
галочка при активной добавке */}

                  <div className="popup__selectItem-right-add-itemTitle">
                    {additionally_title}
                  </div>
                  <div className="popup__selectItem-right-add-itemPrice">
                    {additionally_price[index]} ₽
                  </div>
                </div>
              ))}
            </div>
            <div className="popup__selectItem-right-add-bottom">
              <div className="popup__selectItem-right-add-bottom-price">
                Итого: {estimatedPriceAdditionally + estimatedPriceSize} ₽
                <p>{weight} г</p>
              </div>
              <div
                className="popup__selectItem-right-add-bottom-add"
                onClick={() => clickAddToCart()}
              >
                Добавить
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
