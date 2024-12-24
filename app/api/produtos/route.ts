import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Recupera todos os produtos
export async function GET() {
  try {
    const produtos = await prisma.produto.findMany();
    return NextResponse.json(produtos);
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
    return NextResponse.json(
      { message: "Erro ao obter produtos", error: String(error) },
      { status: 500 }
    );
  }
}

// POST: Cria um novo produto
export async function POST(req: NextRequest) {
  try {
    const { nome, descricao, preco, disponivel } = await req.json();

    // Validação de campos obrigatórios
    if (!nome || !descricao || !preco || disponivel === undefined) {
      return NextResponse.json({ message: "Dados inválidos ou incompletos" }, { status: 400 });
    }

    const produto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco: parseFloat(preco), // Certifique-se de que o preco é um número válido
        disponivel,
      },
    });

    return NextResponse.json(produto, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return NextResponse.json(
      { message: "Erro ao criar produto", error: String(error) },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um produto existente
export async function PUT(req: NextRequest) {
  try {
    const { id, nome, descricao, preco, disponivel } = await req.json();

    // Validação de campos obrigatórios
    if (!id || !nome || !descricao || !preco || disponivel === undefined) {
      return NextResponse.json({ message: "Dados inválidos ou incompletos" }, { status: 400 });
    }

    const produto = await prisma.produto.update({
      where: { id },
      data: { nome, descricao, preco: parseFloat(preco), disponivel },
    });

    return NextResponse.json(produto);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar produto", error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE: Exclui um produto pelo ID (ID na URL)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // Pegando o ID da URL

    if (!id) {
      return NextResponse.json({ message: "ID não fornecido" }, { status: 400 });
    }

    // Convertendo o id para número, caso seja string
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      return NextResponse.json({ message: "ID inválido" }, { status: 400 });
    }

    // Excluindo o produto do banco de dados
    await prisma.produto.delete({ where: { id: idNumber } });

    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
    return NextResponse.json(
      { message: "Erro ao excluir produto", error: String(error) },
      { status: 500 }
    );
  }
}
