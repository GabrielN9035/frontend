import { Link, User } from "lucide-react";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({id, nome}: Props){
    return (
        <Link href={'/aluno/${id}'}>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
            <User size={20} className="text-gray-700" />
            <span className="text-gray-700">{nome}</span>
        </li>
        </Link>
    )
}