import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  const trimmed = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));
  return JSON.stringify(trimmed);
}