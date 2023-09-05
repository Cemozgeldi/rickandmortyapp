"use client";
import Characters from "@/components/Characters";
import { QueryClient, QueryClientProvider } from "react-query";
import Episodes from "@/components/Episodes";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const queryClient = new QueryClient();
export default function Home() {
  const [currentPage, setCurrentPage] = useState("characters");
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col text-center justify-between  gap-16">
        <h1 className="mt-10">Rick & Morty App</h1>
        <Navbar changePage={setCurrentPage} />
        <div className="content">
          {currentPage === "characters" ? <Characters /> : <Episodes />}
        </div>
      </main>
    </QueryClientProvider>
  );
}
