import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* Esquerda*/}
      <div className="flex flex-col h-full justify-center p-8 max-w-[500px] mx-auto">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          O ComandFácil é uma ferramenta prática e intuitiva que simplifica
          tarefas do dia a dia, automatizando comandos e otimizando processos.
          Com sua interface amigável, é ideal para quem busca agilidade e
          eficiência, seja em projetos pessoais ou profissionais.
        </p>

        <Button variant="default" className="text-white">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      {/* Direita*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
