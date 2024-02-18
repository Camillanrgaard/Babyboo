import styles from "./favoriteProduct.module.scss";
import Image from "next/image";
import { Product } from "@/types/product";
import { useDispatch, userSlice } from "@/lib/redux";


export default function FavoriteProduct({ props, isEdit }: { props: Product, isEdit: boolean}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.favoriteProduct}>
      <div className={styles.productImage} style={{ backgroundImage: `url("${props.thumbnail}")` }}></div>

      <div className={styles.favoriteTitleCategory}>
        <h2>{props.title}</h2>
        <p className={styles.category}>{props.category}</p>
      </div>
      {
        isEdit 
        ? <Image onClick={() => { dispatch(userSlice.actions.toggleFavorite(props)) }} className={styles.icon} src="images/remove-favorite-products.svg" width={46} height={31} alt={"Remove from favorites icon"} />
        : <Image className={styles.icon} src="images/add-to-cart.svg" width={46} height={31} alt={"Add to cart icon"} />
      }
    </div>
  );
}
