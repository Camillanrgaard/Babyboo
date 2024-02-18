"use client";
/* Components */
import {
  cartStatusSelector,
  fetchCart,
  fetchProducts,
  fetchUser,
  fetchUserSelector,
  productsStatusSelector,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrderItems from "@/app/components/orderItems/orderItems";
import Campaigns from "@/app/components/campaigns/campaigns";
import RecentOrders from "./components/recentOrders/recentOrders";
import FavoriteProducts from "./components/favoriteProducts/favoriteProducts";

export default function IndexPage() {
  const dispatch = useDispatch();
  const user = useSelector(fetchUserSelector);
  // Fetch first product data and then the cart data
  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(fetchUser());
      dispatch(fetchCart());
    });
  }, [dispatch]);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Velkommen {user.name}</h1>
        </Col>
      </Row>

      <Row xs={12} lg={3}>
        <Col xs={12} md={12} lg={6}>
          <OrderItems />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <RecentOrders />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <FavoriteProducts />
        </Col>
      </Row>
      <Campaigns />
    </Container>
  );
}
