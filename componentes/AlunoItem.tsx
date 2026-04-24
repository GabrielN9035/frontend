import { User } from "lucide-react";
import Link from "next/link";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({id, nome}: Props){
    console.log(id, nome)
    return (
        <Link href={`/aluno/${id}`}>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
                <User size={20} className="text-black" />
                <span className="text-black">{nome}</span>
            </li>
        </Link>
    )
}