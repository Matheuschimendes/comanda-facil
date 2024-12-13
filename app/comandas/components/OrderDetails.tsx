'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/app/_components/ui/card'
import { Button } from '@/app/_components/ui/button'
import { Badge } from '@/app/_components/ui/badge'

type Order = {
  id: number
  tableNumber: number
  items: string[]
  status: 'pending' | 'preparing' | 'ready' | 'served'
}

export function OrderDetails() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleUpdateStatus = (newStatus: Order['status']) => {
    if (selectedOrder) {
      setSelectedOrder({ ...selectedOrder, status: newStatus })
      // Here you would typically update the backend as well
    }
  }

  if (!selectedOrder) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          Select an order to view details
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details - Table {selectedOrder.tableNumber}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Items:</h3>
        <ul className="list-disc list-inside mb-4">
          {selectedOrder.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mb-4">
          <span className="font-semibold mr-2">Status:</span>
          <Badge>{selectedOrder.status}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handleUpdateStatus('preparing')} disabled={selectedOrder.status !== 'pending'}>
          Start Preparing
        </Button>
        <Button onClick={() => handleUpdateStatus('ready')} disabled={selectedOrder.status !== 'preparing'}>
          Mark as Ready
        </Button>
        <Button onClick={() => handleUpdateStatus('served')} disabled={selectedOrder.status !== 'ready'}>
          Mark as Served
        </Button>
      </CardFooter>
    </Card>
  )
}

