"use client";

import { useState } from "react";

export default function CriarAnuncio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priceInCents: Number(price) * 100,
        sellerId,
        categoryId,
      }),
    });

    if (!response.ok) {
      alert("Erro ao criar anúncio");
      return;
    }

    alert("Anúncio criado com sucesso!");

    setTitle("");
    setDescription("");
    setPrice("");
    setSellerId("");
    setCategoryId("");
  }

  return (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">

    {/* HEADER */}
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
            VendeAí
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            O marketplace do seu bairro
          </p>
        </div>

        <a
          href="/anuncios"
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-semibold transition-all duration-200"
        >
          ← Ver anúncios
        </a>

      </div>
    </header>

    {/* CONTEÚDO */}
    <section className="max-w-4xl mx-auto px-6 py-12">

      {/* CARD */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">

        {/* CABEÇALHO DO CARD */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-7 border-b border-blue-100">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl shadow-md">
              📢
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Criar anúncio
              </h2>

              <p className="text-gray-500 mt-1">
                Preencha as informações abaixo para publicar seu produto.
              </p>
            </div>

          </div>

        </div>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col gap-6"
        >

          {/* TÍTULO */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              🏷️ Título do anúncio
            </label>

            <input
              placeholder="Ex: Bicicleta Caloi"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

          {/* DESCRIÇÃO */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              📝 Descrição
            </label>

            <textarea
              placeholder="Descreva seu produto..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 bg-white outline-none resize-y focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

          {/* PREÇO */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              💰 Preço
            </label>

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                R$
              </span>

              <input
                type="number"
                placeholder="0,00"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
                min="0"
                step="0.01"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>
          </div>

          {/* VENDEDOR + CATEGORIA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* VENDEDOR */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                👤 ID do vendedor
              </label>

              <input
                placeholder="Ex: seller-1"
                value={sellerId}
                onChange={(event) => setSellerId(event.target.value)}
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>

            {/* CATEGORIA */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                🏷️ ID da categoria
              </label>

              <input
                placeholder="Ex: category-1"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>

          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            className="mt-3 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base font-bold shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            🚀 Publicar anúncio
          </button>

        </form>

      </div>

      {/* DICA */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 flex items-start gap-3">

        <span className="text-xl">
          💡
        </span>

        <div>
          <p className="font-semibold text-blue-900 text-sm">
            Dica
          </p>

          <p className="text-blue-700 text-sm mt-1">
            Capriche no título e na descrição para que seu produto seja
            encontrado com mais facilidade.
          </p>
        </div>

      </div>

    </section>

    {/* FOOTER */}
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        © 2026 VendeAí — O marketplace do seu bairro
      </div>
    </footer>

  </main>
);

}
