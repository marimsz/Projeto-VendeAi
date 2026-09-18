"use client";

import { useEffect, useState } from "react"

interface Anuncio {
 data : {
  title: string
 description: string
 priceInCents: number
 sellerId: string
 categoryId: string
 status: string
 }
 
}

export default function Anuncios() {
 const [anuncios, setAnuncios] = useState<Anuncio[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  async function buscarAnuncios() {
   const response = await fetch(
    "http://localhost:3001/products"
   )

   const data = await response.json()

    console.log("DATA:", data)
console.log("PRIMEIRO:", data[0])
console.log("PREÇO:", data[0]?.priceInCents)

   setAnuncios(data)
   setLoading(false)
  }

  buscarAnuncios()
 }, [])

 if (loading) {
  return (
   <main className="min-h-screen flex items-center justify-center">
    <p>Carregando anúncios...</p>
   </main>
  )
 }

 return (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">

    {/* HEADER */}
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-10">
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
          href="/criar-anuncio"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          + Criar anúncio
        </a>

      </div>
    </header>

    {/* CONTEÚDO */}
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* TÍTULO */}
      <div className="mb-10">

        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
            🛍️
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900">
            Anúncios
          </h2>
        </div>

        <p className="text-gray-500 ml-14">
          Encontre produtos anunciados por vendedores da nossa comunidade.
        </p>

      </div>

      {/* LISTA */}
      {anuncios.length === 0 ? (

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-16 text-center">

          <div className="text-6xl mb-5">
            📦
          </div>

          <h3 className="text-xl font-bold text-gray-800">
            Nenhum anúncio encontrado
          </h3>

          <p className="text-gray-500 mt-2 mb-6">
            Ainda não existem produtos publicados.
          </p>

          <a
            href="/criar-anuncio"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Criar primeiro anúncio
          </a>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {anuncios.map((anuncio, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* ÁREA DA IMAGEM */}
              <div className="relative h-44 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">

                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  🛍️
                </span>

                {/* BADGE */}
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  NOVO
                </span>

              </div>

              {/* INFORMAÇÕES */}
              <div className="p-5">

                {/* CATEGORIA */}
                <div className="mb-3">
                  <span className="inline-flex items-center bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                    🏷️ {anuncio.data.categoryId}
                  </span>
                </div>

                {/* TÍTULO */}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition">
                  {anuncio.data.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-[40px]">
                  {anuncio.data.description}
                </p>

                {/* PREÇO */}
                <p className="text-2xl font-extrabold text-blue-600 mt-5">
                  R$ {(anuncio.data.priceInCents / 100).toFixed(2)}
                </p>

                {/* VENDEDOR */}
                <div className="border-t border-gray-100 mt-5 pt-4 flex items-center gap-2 text-sm text-gray-500">

                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    👤
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Vendedor
                    </p>

                    <p className="font-medium text-gray-700">
                      {anuncio.data.sellerId}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

    {/* FOOTER */}
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        © 2026 VendeAí — O marketplace do seu bairro
      </div>
    </footer>

  </main>
)
 
}