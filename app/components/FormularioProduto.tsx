import { useState, useEffect } from "react";

interface Produto {
  id?: number; // O `id` é opcional, pois não existe quando estamos criando um novo produto
  nome: string;
  descricao: string;
  preco: number;
  disponivel: boolean;
}

interface FormularioProdutoProps {
  onSubmit: (produto: Produto) => Promise<void>; // Alterado para Promise<void> para suportar funções assíncronas
  produtoEditando: Produto | null;
}

const FormularioProduto: React.FC<FormularioProdutoProps> = ({
  onSubmit,
  produtoEditando,
}) => {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [disponivel, setDisponivel] = useState<boolean>(true);

  useEffect(() => {
    if (produtoEditando) {
      setNome(produtoEditando.nome);
      setDescricao(produtoEditando.descricao);
      setPreco(produtoEditando.preco.toString());
      setDisponivel(produtoEditando.disponivel);
    }
  }, [produtoEditando]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const produto: Produto = {
      nome,
      descricao,
      preco: parseFloat(preco),
      disponivel,
      ...(produtoEditando && { id: produtoEditando.id }), // Só inclui o `id` se estamos editando
    };

    // Agora, chamamos onSubmit, que pode ser uma função assíncrona
    onSubmit(produto).catch((err) => {
      console.error("Erro ao salvar produto:", err);
      alert("Erro ao salvar produto");
    });

    // Resetando o formulário após o submit
    setNome("");
    setDescricao("");
    setPreco("");
    setDisponivel(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {produtoEditando ? "Editar Produto" : "Cadastrar Produto"}
      </h2>
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm font-medium text-gray-600">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Produto"
          className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="descricao" className="text-sm font-medium text-gray-600">
          Descrição
        </label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição do Produto"
          className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="preco" className="text-sm font-medium text-gray-600">
          Preço
        </label>
        <input
          type="number"
          id="preco"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Preço do Produto"
          className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="disponivel"
          checked={disponivel}
          onChange={() => setDisponivel(!disponivel)}
          className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="disponivel" className="text-sm font-medium text-gray-600">
          Disponível
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {produtoEditando ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
};

export default FormularioProduto;
