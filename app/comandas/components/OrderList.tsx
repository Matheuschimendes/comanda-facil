'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/app/_components/ui/card'
import { Button } from '@/app/_components/ui/button'

type Order = {
  id: number
  tableNumber: number
  items: string[]
  status: 'pending' | 'preparing' | 'ready' | 'served'
}

const mockOrders: Order[] = [
  { id: 1, tableNumber: 3, items: ['Burger', 'Fries'], status: 'pending' },
  { id: 2, tableNumber: 5, items: ['Pizza', 'Salad'], status: 'preparing' },
  { id: 3, tableNumber: 2, items: ['Pasta', 'Garlic Bread'], status: 'ready' },
  { id: 4, tableNumber: 4, items: ['Pasta', 'Garlic Bread'], status: 'ready' },
]

export function OrderList() {
  const [orders,] = useState(mockOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Incoming Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {orders.map((order) => (
            <li key={order.id}>
              <Button
                variant={selectedOrder?.id === order.id ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => handleSelectOrder(order)}
              >
                Table {order.tableNumber} - {order.status}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

