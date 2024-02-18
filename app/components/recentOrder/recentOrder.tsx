import styles from "./recentOrder.module.scss";
import { RecentOrderModel } from "@/types/recentOrderModel";

export default function RecentOrder({ props }: { props: RecentOrderModel }) {
  return (
    <div className={styles.recentOrder}>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.orderNumber}>{props.orderNumber}</p>
      <p className={styles.link}>{props.viewOrder}</p>
      <p className={styles.link}>{props.reorder}</p>
    </div>
  );
}
