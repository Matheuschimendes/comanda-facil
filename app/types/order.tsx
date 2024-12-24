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
  

 // app/types.ts

export interface Produto {
  id?: number; // Tornar o id opcional no momento da criação de um produto
  nome: string;
  descricao: string;
  preco: number;
  disponivel: boolean;
}

export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  disponivel: boolean;
}

export type ProductFormData = Omit<Product, 'id'>;