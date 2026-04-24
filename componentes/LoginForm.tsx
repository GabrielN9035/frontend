"use client"; 

import {useState} from "react";
import { useRouter } from "next/navigation";

interface Props {
    onSend: (email: string, password: string) => Promise<void|string>;
}

export default function LoginForm({onSend}: Props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
      const response = await onSend(email, password);

      if(response) {
        alert(response);
        return;
      }

      router.push("/");

    }

    return (
        <div className="bg-gray-600 rounded-2xl shadow-md p-9 w-full max-w-md">
        <div className="flex flex-col space-y-10">
          <input
            type="email"
            placeholder="Email"
            className="p-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-gray-300 text-black p-4 rounded hover:bg-blue-900 cursor-pointer" onClick={handleSubmit}>
            Entrar
          </button>
        </div>
      </div>
    )
}