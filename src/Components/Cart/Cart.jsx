import React from "react";
import Cart_item from "./Cart_item";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Cart() {
  const dispatch = useDispatch();
  const { itemsToCart, totalPrice } = useSelector((state) => state.popupSlice);
  // itemsToCart.map((obj)=>console.log(obj.filterActiveAddtive))

  return (
      <div className="content">
        <div className="content-catalog">
          <div className="content__catalog-top">
            <div className="content__catalog-top-cart">Ваш заказ</div>
          </div>
          {itemsToCart.length > 0 ? (
            <div className="content__catalog-cart">
              <div className="cart__items">
                {itemsToCart.map((obj, index) => (
                  <Cart_item
                    key={`${obj.id}_${obj.filterActiveAddtive}_${obj.activeDrough}_${obj.activeSize}`}
                    index={index}
                    {...obj}
                  />
                ))}
              </div>
              <div className="cart__item">
                <div className="cart__item-bottom">
                  <div className="cart__item-input">
                    <input type="text" placeholder="Промокод" />
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="6" fill="#FF7010" />
                      <g clipPath="url(#clip0_303_14013)">
                        <path
                          d="M31.6875 22.4664L17.6047 16.7099C17.0115 16.4674 16.3412 16.5741 15.8556 16.9882C15.3699 17.4024 15.1668 18.0407 15.3256 18.6538L16.579 23.4962H22.7163C22.9987 23.4962 23.2277 23.7218 23.2277 24C23.2277 24.2782 22.9987 24.5038 22.7163 24.5038H16.579L15.3256 29.3462C15.1668 29.9593 15.3699 30.5975 15.8556 31.0117C16.3422 31.4267 17.0125 31.5321 17.6048 31.29L31.6875 25.5336C32.3287 25.2715 32.727 24.6838 32.727 24C32.727 23.3161 32.3287 22.7285 31.6875 22.4664Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="cart__item-totalCount">
                    Итого:{totalPrice} ₽
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-orders">
              <span>
                Ой, пусто! Ваша корзина пуста, откройте «Меню» и выберите
                понравившийся товар. Мы доставим ваш заказ от 549 ₽
              </span>
            </div>
          )}
        </div>
        <div className="content-catalog">
          <div className="content__catalog-top">
            <div className="content__catalog-top-title">Добавить к заказу?</div>
          </div>
          <div className="content__catalog-cart">
            <div className="cart__item">
              <div className="cart__item-left">
                <div className="cart__item-left-img">
                  <img
                    src="https://ltdfoto.ru/images/2022/06/13/Rectangle-4-2.png"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="cart__item-left-information">
                  <div className="cart__item-left-information-title">
                    Пепперони по деревенски
                  </div>
                  <div className="cart__item-left-information-detail">
                    Традиционное тесто, 20см
                  </div>
                </div>
              </div>
              <div className="cart__item-count">
                <div className="cart__item-count-left">
                  <div className="cart__item-count-left-minus">-</div>
                  <div className="cart__item-count-left-countTotal">1</div>
                  <div className="cart__item-count-left-plus">+</div>
                </div>
                <div className="cart__item-count-price">399 ₽</div>
              </div>
            </div>
            {/* немного отличается от того что сверху,поменять */}
          </div>
        </div>
      </div>
  );
}

export default Cart;
