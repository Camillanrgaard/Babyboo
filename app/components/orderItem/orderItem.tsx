import styles from "./orderItem.module.scss";
import { OrderItemModel } from "@/types/orderItemModel";
import { fetchUserLikedProductsSelector, useDispatch, useSelector, userSlice } from "@/lib/redux";

export default function OrderItem({ props }: { props: OrderItemModel }) {
  const dispatch = useDispatch();
  const favorites = useSelector(fetchUserLikedProductsSelector);
  const isFavorite = favorites.includes(props.product);

  return (
    <>
      <div className={styles.orderItem}>
        <div className={styles.productImage} style={{ backgroundImage: `url("${props.product.thumbnail}")` }}>
          <div className={styles.iconBg}>
            <svg onClick={() => { dispatch(userSlice.actions.toggleFavorite(props.product)) }} className={isFavorite ? styles.iconFilled : styles.icon} width="13.5px" height="12px">
              <use xlinkHref={"/images/favorite.svg" + "#favorite"}></use>
            </svg>
          </div>
        </div>

        <div className={styles.itemTitleCategory}>
          <h2>{props.product.title}</h2>
          <p className={styles.category}>{props.product.category}</p>
        </div>

        <p className={styles.orderDetail}>{props.quantity} stk</p>
        <p className={styles.orderDetail}>-{props.discountPercentage}%</p>
        <p className={styles.orderDetail}>{props.price} dkk</p>
      </div>
    </>
  );
}
