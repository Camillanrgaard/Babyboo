import styles from "./secondaryBtn.module.scss";
import Image from "next/image";
import OrderItemModal from "../modal/modal";
const SecondaryBtn = ({ text }: { text: string }) => {
  return (
    <OrderItemModal
      triggerButton={
        <button className={styles.secondaryBtn}>
          {text}
          <Image src="images/arrow-down.svg" width={11} height={7} alt={"arrow down icon"} />
        </button>
      }
    />
  );
};
export default SecondaryBtn;
