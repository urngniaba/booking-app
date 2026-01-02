// components/Connection.tsx

"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Connection() {
  const { data: session } = useSession();
  return (
    <>
      <div className="max- h-screen bg-yellow-200 flex flex-col justify-center items-center">
        NEXT AUTH
      </div>
      {session && <p className="mt-4">Bienvenue {session?.user?.name}</p>}
      <div className="max- h-screen bg-green-200 flex flex-col justify-center items-center gap-3">
        <button
          onClick={() => signIn("github")}
          className="bg-gray-300 hover:bg-gray-400 rounded-md p-3"
        >
          Se connecter avec Github
        </button>
        <button
          onClick={() => signIn("google")}
          className="bg-gray-300 hover:bg-gray-400 rounded-md p-3"
        >
          Se connecter avec Google
        </button>

        <button
          onClick={() => signOut()}
          className="bg-gray-300 hover:bg-gray-400 rounded-md p-3"
        >
          Se deconnecter
        </button>
      </div>
    </>
  );
}
