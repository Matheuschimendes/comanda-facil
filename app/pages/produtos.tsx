// pages/produtos.tsx (ou app/produtos/page.tsx, se estiver usando App Router)

import { useState, useEffect } from "react";
import FormularioProduto from "@/app/components/FormularioProduto";
import { Produto } from "@/app/types/order"; // Importando o tipo Produto
import { useRouter } from "next/navigation"; // Importação para App Router
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Button } from "@/app/_components/ui/button";

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoEditando, setProdutoEditando] = useState<Produto | null>(null);
  const router = useRouter(); // Usando o useRouter da App Router

  useEffect(() => {
    // Carregar os produtos da API
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((error) => {
        // Tratamento de erro caso a requisição falhe
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("Erro desconhecido ao carregar produtos");
        }
      });
  }, []);

  const handleAddProduto = async (produto: Produto) => {
    try {
      const res = await fetch("/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (!res.ok) {
        throw new Error("Erro ao adicionar produto");
      }

      const novoProduto = await res.json();
      setProdutos((prev) => [...prev, novoProduto]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro desconhecido ao adicionar produto");
      }
    }
  };

  const handleUpdateProduto = async (produto: Produto) => {
    try {
      const res = await fetch(`/api/produtos/${produto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (!res.ok) {
        throw new Error("Erro ao atualizar produto");
      }

      const produtoAtualizado = await res.json();
      setProdutos((prev) =>
        prev.map((p) => (p.id === produtoAtualizado.id ? produtoAtualizado : p))
      );
      setProdutoEditando(null); // Resetar estado
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro desconhecido ao atualizar produto");
      }
    }
  };

  const handleDeleteProduto = async (id: number) => {
    try {
      const res = await fetch(`/api/produtos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Erro ao excluir produto");
      }

      setProdutos((prev) => prev.filter((produto) => produto.id !== id));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro desconhecido ao excluir produto");
      }
    }
  };

  const handleBackToHome = () => {
    router.push("/"); // Navegar para a página inicial (home)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Produtos</h1>

      <Button onClick={handleBackToHome} className="mb-4">
        Voltar para a Página Inicial
      </Button>

      <FormularioProduto
        onSubmit={produtoEditando ? handleUpdateProduto : handleAddProduto}
        produtoEditando={produtoEditando}
      />

      <Table className="border-collapse border mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Disponível</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell>{produto.id}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>{produto.descricao}</TableCell>
              <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
              <TableCell>
                {produto.disponivel ? "Disponível" : "Não Disponível"}
              </TableCell>
              <TableCell className="gap-10">
                <Button
                  className="text-white"
                  onClick={() => setProdutoEditando(produto)}
                >
                  Editar
                </Button>
                <Button
                  className="bg-red-500 text-white ml-4"
                  onClick={() => handleDeleteProduto(produto.id!)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProdutosPage;
