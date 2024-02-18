import styles from "./primaryBtn.module.scss";
import Link from "next/link";
import Image from "next/image";

const PrimaryBtn = ({ btnText, link, btnIcon }: { btnText: string; link: string; btnIcon: string }) => {
  return (
    <>
      <Link href={link} className={styles.primaryBtn}>
        {btnText}
        <Image src={btnIcon} width={19} height={19} alt={"arrow right icon"} />
      </Link>
    </>
  );
};
export default PrimaryBtn;
