import styles from "./orderItems.module.scss";
import Image from "next/image";
import { OrderItemModel } from "@/types/orderItemModel";
import OrderItem from "./../orderItem/orderItem";
import SecondaryBtn from "./../secondaryBtn/secondaryBtn";
import Link from "next/link";
import { fetchCartSelector, useDispatch, useSelector } from "@/lib/redux";

export default function OrderItems() {
  const cart = useSelector(fetchCartSelector);

  return (
    <>
      <div className={styles.orderItems}>
        <Image src="images/order-item.svg" width={18} height={22} alt={"order item icon"} />
        <h2>Bestillingsliste</h2>
        <Link className={styles.link} href="https://nextjs.org/docs/api-reference/next/link#with-url-object">
          Gå til bestillingslisten
        </Link>
      </div>
      <div className={styles.orderItemsDetails}>
        <div className={styles.orderItemsDetailsFlex}>
          <p className={styles.orderItemsP}>{cart.totalQuantity} produkter</p>
          <p className={styles.orderItemsP}>Total: {cart.total} DKK</p>
        </div>
        <div className={styles.orderItemsContainer}>
          {cart.products.map((orderItem) => (
            <OrderItem props={orderItem} key={orderItem.id} />
          ))}
        </div>
      </div>
      <div className={styles.showMoreBtn}>
        <SecondaryBtn text="Vis alle" />
      </div>
    </>
  );
}
