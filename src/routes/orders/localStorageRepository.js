import { redirect } from "react-router-dom";

export const addBurger = async ({ request }) => {
  const burger = await request.json();
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  const newOrder = [...order,  burger];
  window.localStorage.setItem('order', JSON.stringify(newOrder));
  return redirect("/order/menu/summary");
}

export const listOrder = async () => {
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  return order;
}