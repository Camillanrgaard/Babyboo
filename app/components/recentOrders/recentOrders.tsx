import styles from "./recentOrders.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { RecentOrderModel } from "@/types/recentOrderModel";
import RecentOrder from "./../recentOrder/recentOrder";
import Link from "next/link";

var recentOrders: RecentOrderModel[] = [
  {
    date: "02-02-2022",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "02-02-2022",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "12-02-2022",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "02-03-2022",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "02-02-2024",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "02-07-2024",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
  {
    date: "02-07-2024",
    orderNumber: "#4134534",
    viewOrder: "link",
    reorder: "link",
  },
];

export default function RecentOrders() {
  return (
    <>
      <div className={styles.recentOrders}>
        <Image src="images/recent-order.svg" width={23} height={20} alt={"recent order icon"} />
        <h2>Seneste ordrer</h2>
        <Link className={styles.link} href="https://nextjs.org/docs/api-reference/next/link#with-url-object">
          Se alle
        </Link>
      </div>
      <div className={styles.recentOrderContainer}>
        {recentOrders.map((recentOrder) => (
          <RecentOrder props={recentOrder} />
        ))}
      </div>
    </>
  );
}
