import CursosItem from "@/componentes/CursoItem";
import { getCursos } from "./actions";
import Link from "next/link";
    
export default async function CursosPage() {
    const cursos= await getCursos();


    return (
        <div className="w-full min-h-screen flex justify-center items-start bg-gray-700 p-8">

            <div className="w-full max-w-2xl">

                <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">
                    Lista de Cursos
                </h1>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <ul className="space-y-3">
                        {cursos.map((curso) => (
                            <CursosItem key={curso.id} nome={curso.nome} id={curso.id}/>
                        ))}
                    </ul>
                </div>
            </div>
            <Link href="/curso/cadastro"
            className="px-5 py-2 bg-white text-black mt-5 rounded-lg">Cadastro Curso</Link>
        </div>
    );
}





// a div maior tem que o cupar toda a largura e toda a altura da tela
//centralizar tudo na horizontal
//título deve ser grande e em negrito e na parte superior da tela
//a div menor deve ser branca, com bordas arredondadas e uma sombra leve
//tudo deve ter um espeçamento interno
