import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-custom flex items-center justify-center overflow-hidden">
      <div className="bg-white w-1/3 rounded-2xl">
        <img src="/assets/logo.svg" alt="" className="mt-[32px] mx-auto" />
        <div className="w-full mx-auto text-center">
          <h1 className="text-6xl font-bold">Login</h1>
          <p className="text-xl font-semibold pb-4">Acesse sua conta</p>
        </div>
         <div className="flex justify-center flex-col w-full mx-auto items-center space-y-4">
           <div className="relative w-4/5 flex justify-center">
             <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
             <input
               type="text"
               placeholder="Email"
               className="border h-[48px] w-full rounded px-12 outline-none text-lg"
             />
           </div>
           <div className="relative w-4/5 flex justify-center">
             <FaUnlockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
             <input
               type="password"
               placeholder="Senha"
               className="border h-[48px] w-full rounded px-12 outline-none text-lg"
             />
           </div>
          <div className="flex w-[80%] justify-between hidden">
            <p className="text-red-600 font-semibold">Email incorreto</p>
            <p className="text-red-600 font-semibold">Senha incorreta</p>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <Link href="/" className="text-gray-500 font-semibold py-2">Esqueceu a Senha</Link>
          <button className="bg-red-700 text-[#fff] h-[48px] w-4/5 mx-auto rounded-lg text-2xl mb-[32px]">Login</button>
        </div>
      </div>
    </div>
  );
}
