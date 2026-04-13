export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-9 text-center w-full">Login</h1>

      <div className="bg-gray-600 rounded-2xl shadow-md p-9 w-full max-w-md">
        <div className="flex flex-col space-y-10">
          <input
            type="email"
            placeholder="Email"
            className="p-4 border rounded"
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-4 border rounded"
          />

          <button className="bg-blue-900 text-black p-4 rounded hover:bg-blue-900">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}