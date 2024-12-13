export type OrderItem = {
    name: string
    quantity: number
    details?: string
  }
  
  export type Order = {
    id: string
    items: OrderItem[]
    remainingTime: number
    startTime: number
    status: 'pending' | 'preparing' | 'ready' | 'delivered'
  }
  