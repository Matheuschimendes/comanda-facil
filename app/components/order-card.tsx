'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/app/_components/ui/card'
import { Button } from '@/app/_components/ui/button'
import { Order } from '@/app/types/order'
import { formatTime, getTimeColor } from '@/app/utils/format-time'

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const [remainingTime, setRemainingTime] = useState(order.remainingTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Pedido Nº {order.id}</CardTitle>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
          'bg-green-100 text-green-800'
        }`}>
          {order.status === 'pending' ? 'Pendente' :
           order.status === 'preparing' ? 'Preparando' : 'Pronto'}
        </span>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="font-semibold">{item.quantity}und</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className={`${getTimeColor(remainingTime)} w-full p-2 text-white text-center rounded-md`}>
          Tempo restante: {formatTime(remainingTime)}
        </div>
        <Button variant="outline" className="w-full">Ver detalhes</Button>
      </CardFooter>
    </Card>
  )
}