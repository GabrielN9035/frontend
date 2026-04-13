import AlunoItem from "@/componentes/AlunoItem";
import { User } from "lucide-react";

export default async function AlunosPage() {

    const alunos= await fetch("http://localhost:8080/alunos").then((res) => res.json(),
    );

    console.log(alunos);

    return (
        <div className="w-full min-h-screen flex justify-center items-start bg-gray-700 p-8">

            <div className="w-full max-w-2xl">

                <h1 className="text-4xl font-bold mb-8 text-center text-blue-200">
                    Lista de Alunos
                </h1>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <ul className="space-y-3">
                        <AlunoItem id={1} nome="Aluno 1" />
                    </ul>
                </div>
            </div>
        </div>
    );
}





// a div maior tem que o cupar toda a largura e toda a altura da tela
//centralizar tudo na horizontal
//título deve ser grande e em negrito e na parte superior da tela
//a div menor deve ser branca, com bordas arredondadas e uma sombra leve
//tudo deve ter um espeçamento interno
