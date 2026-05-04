"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="flex gap-2">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Detalhes do Aluno
                </h1>
                <Link href={`/aluno/${id}/editar`}>
                    <PenBox />
                </Link>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Nome</p>
                        <p className="text-lg font-semibold text-gray-700">
                            {aluno.name || "Carregando..."}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
