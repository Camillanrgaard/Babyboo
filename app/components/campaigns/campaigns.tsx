import styles from "./campaigns.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import {
  fetchCampaigns,
  fetchCampaignsSelector,
  fetchCampaignsStatusSelector,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useEffect } from "react";
import Campaign from "../campaign/campaign";

export default function Campaigns() {
  const dispatch = useDispatch();
  const campaigns = useSelector(fetchCampaignsSelector);
  const campaignsStatus = useSelector(fetchCampaignsStatusSelector);

  useEffect(() => {
    if (campaignsStatus === "idle") {
      dispatch(fetchCampaigns());
    }
  }, [campaignsStatus, dispatch]);

  let content;
  if (campaignsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (campaignsStatus === "succeeded") {
    content = campaigns.map((campaign) => (
      <Col xs={12} md={6} lg={4} xl={3}>
        <Campaign props={campaign} />
      </Col>
    ));
  } else if (campaignsStatus === "failed") {
    content = <p>ERROR</p>;
  }
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className={styles.campaigns}>
            <Image src="images/megaphone.svg" width={24} height={24} alt={"megaphone icon"} />
            <h3>Kampagner</h3>
          </div>
        </Col>
      </Row>
      <Row>{content}</Row>
    </>
  );
}
