"use client";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import OrderItem from "../orderItem/orderItem";
import styles from "./modal.module.scss";
import { OrderItemModel } from "@/types/orderItemModel";
import { fetchCartSelector, useSelector } from "@/lib/redux";

interface OrderItemModalProps {
  triggerButton: React.ReactElement;
}

function OrderItemModal({ triggerButton }: OrderItemModalProps) {
  const cart = useSelector(fetchCartSelector);

  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <>
      {React.cloneElement(triggerButton, { onClick: modalShow })}

      <Modal show={show} onHide={modalClose}>
        <div className={styles.modalContent}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>Bestillingsliste</h2>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles.modalBody}>
            <div className={styles.orderItemsContainer}>
              {cart.products.map((orderItem) => (
                <OrderItem props={orderItem} key={orderItem.product.title} />
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button className={styles.btn} variant="secondary" onClick={modalClose}>
              <p>Luk</p>
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
export default OrderItemModal;
