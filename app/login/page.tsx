import LoginForm from "@/componentes/LoginForm";

import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-9 text-center w-full">Login</h1>
      
      <LoginForm onSend={loginAction}/>
    </div>
  );
}