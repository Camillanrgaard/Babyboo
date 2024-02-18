import styles from "./favoriteProducts.module.scss";
import Image from "next/image";
import FavoriteProduct from "./../favoriteProduct/favoriteProduct";
import Link from "next/link";
import { fetchUserLikedProductsSelector, useSelector } from "@/lib/redux";
import { useState } from "react";

export default function FavoriteProducts() {
  const favoriteProducts = useSelector(fetchUserLikedProductsSelector);
  const [isEdit, setEdit] = useState(false);

  const toggleIsEdit = () => {
    setEdit(prevState => !prevState);
  };

  return (
    <>
      <div className={styles.favoriteProducts}>
        <Image src="images/favorite-products.svg" width={22} height={26} alt={"favorite products icon"} />
        <h2>Farvoritprodukter</h2>
        <p className={styles.link} onClick={() => { toggleIsEdit() }}>
          Redigér
        </p>
      </div>

      <div className={styles.favoriteProductsContainer}>
        {favoriteProducts.map((favoriteProduct) => (
          <FavoriteProduct props={favoriteProduct} isEdit={isEdit} />
        ))}
      </div>
    </>
  );
}
