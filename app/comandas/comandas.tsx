import { OrderCard } from "../components/order-card";
import { Order } from "../types/order";

const mockOrders: Order[] = [
  {
    id: "123456",
    items: [
      { name: "Espetinho de frango com bacon|completo", quantity: 1 },
      { name: "Picanha na chapa", quantity: 1 },
      { name: "Mandioca frita", quantity: 1 },
      { name: "Mandioca frita", quantity: 1 },
    ],
    remainingTime: 300, // 5 minutes
    startTime: Date.now(),
    status: "pending",
  },
  {
    id: "123457",
    items: [
      { name: "Espetinho de frango com bacon|completo", quantity: 1 },
      { name: "Picanha na chapa", quantity: 1 },
      { name: "Mandioca frita", quantity: 1 },
    ],
    remainingTime: 900, // 15 minutes
    startTime: Date.now(),
    status: "preparing",
  },
  {
    id: "123458",
    items: [
      { name: "Espetinho de frango com bacon|completo", quantity: 1 },
      { name: "Picanha na chapa", quantity: 1 },
      { name: "Mandioca frita", quantity: 1 },
    ],
    remainingTime: 1800, // 30 minutes
    startTime: Date.now(),
    status: "ready",
  },
  {
    id: "123459",
    items: [
      { name: "Espetinho de frango com bacon|completo", quantity: 1 },
      { name: "Picanha na chapa", quantity: 1 },
      { name: "Mandioca frita", quantity: 1 },
    ],
    remainingTime: 1800, // 30 minutes
    startTime: Date.now(),
    status: "ready",
  },
];

export default function Comandas() {
  return (
    <>
      <div className="rounded-xl md:min-h-min h-screen">
        <h2 className="text-2xl font-semibold mb-6 m-5">Ordem de chegada</h2>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 m-7">
          {mockOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
