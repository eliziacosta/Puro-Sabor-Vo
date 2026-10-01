import { useEffect, useState } from "react"

function ProductModal({ produto, onClose }) {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(
    produto.tamanhos?.[0] || null
  )

  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(
    produto.quantidades?.[0] || null
  )

  const [saborSelecionado, setSaborSelecionado] = useState(
    produto.sabores?.[0] || null
  )

  useEffect(() => {
    setTamanhoSelecionado(produto.tamanhos?.[0] || null)
    setQuantidadeSelecionada(produto.quantidades?.[0] || null)
    setSaborSelecionado(produto.sabores?.[0] || null)
  }, [produto])

  const obterPreco = () => {
    if (produto.opcoes === "trufa" && saborSelecionado) {
      return saborSelecionado.preco
    }

    if (produto.quantidades && quantidadeSelecionada) {
      return quantidadeSelecionada.preco
    }

    if (produto.tamanhos && tamanhoSelecionado) {
      return tamanhoSelecionado.preco
    }

    return produto.preco
  }

  const preco = obterPreco()

  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const obterNomeSabor = () => {
    if (!saborSelecionado) return null

    if (typeof saborSelecionado === "string") {
      return saborSelecionado
    }

    return saborSelecionado.nome
  }

  const pedirWhatsApp = () => {
  let mensagem = `Olá! Gostaria de fazer um pedido:%0A%0A`

  mensagem += `*${produto.nome}*%0A`

  if (produto.opcoes === "bolo") {
    if (tamanhoSelecionado) {
      mensagem += `Peso: ${tamanhoSelecionado.nome}%0A`
    }
  }

  if (produto.opcoes === "doce") {
    if (quantidadeSelecionada) {
      mensagem += `Quantidade: ${quantidadeSelecionada.nome}%0A`
    }
  }

  if (produto.opcoes === "trufa") {
    if (quantidadeSelecionada) {
      mensagem += `Quantidade: ${quantidadeSelecionada.nome}%0A`
    }
  }

  if (produto.opcoes === "kit") {
    if (tamanhoSelecionado) {
      mensagem += `Para: ${tamanhoSelecionado.nome}%0A`
    }
  }

  if (produto.opcoes === "festa") {
    if (tamanhoSelecionado) {
      mensagem += `Quantidade: ${tamanhoSelecionado.nome}%0A`
    }
  }

  if (produto.opcoes === "sobremesa") {
    if (tamanhoSelecionado) {
      mensagem += `Tamanho: ${tamanhoSelecionado.nome}%0A`
    }
  }

  if (saborSelecionado) {
    mensagem += `Sabor: ${obterNomeSabor()}%0A`
  }

  mensagem += `%0AValor: ${formatarPreco(preco)}`

  window.open(
    `https://wa.me/5533987095269?text=${mensagem}`,
    "_blank"
  )
}

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3b211b]/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-[#FFF8FA] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-4xl">
              {produto.icon}
            </span>

            <h2 className="mt-3 font-serif text-3xl italic text-[#5A2E1F]">
              {produto.nome}
            </h2>

            <p className="mt-1 text-sm leading-5 text-[#8B5E3C]">
              {produto.descricao}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7E1E6] text-xl text-[#5A2E1F] transition hover:bg-[#E754A6] hover:text-white"
          >
            ×
          </button>
        </div>

        {produto.tamanhos && (
          <div className="mt-7">
            <h3 className="font-semibold text-[#5A2E1F]">
              Escolha uma opção
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {produto.tamanhos.map((tamanho) => (
                <button
                  key={tamanho.nome}
                  onClick={() => setTamanhoSelecionado(tamanho)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    tamanhoSelecionado?.nome === tamanho.nome
                      ? "border-[#E754A6] bg-[#F7D4DF]"
                      : "border-[#E8CBD3] bg-white hover:border-[#E754A6]"
                  }`}
                >
                  <span className="block text-sm font-semibold text-[#5A2E1F]">
                    {tamanho.nome}
                  </span>

                  <span className="mt-1 block text-sm text-[#8B5E3C]">
                    {formatarPreco(tamanho.preco)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {produto.quantidades && (
          <div className="mt-7">
            <h3 className="font-semibold text-[#5A2E1F]">
              Escolha a quantidade
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {produto.quantidades.map((quantidade) => (
                <button
                  key={quantidade.nome}
                  onClick={() =>
                    setQuantidadeSelecionada(quantidade)
                  }
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    quantidadeSelecionada?.nome === quantidade.nome
                      ? "border-[#E754A6] bg-[#F7D4DF]"
                      : "border-[#E8CBD3] bg-white hover:border-[#E754A6]"
                  }`}
                >
                  <span className="block text-sm font-semibold text-[#5A2E1F]">
                    {quantidade.nome}
                  </span>

                  <span className="mt-1 block text-sm text-[#8B5E3C]">
                    {formatarPreco(quantidade.preco)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {produto.sabores && (
          <div className="mt-7">
            <h3 className="font-semibold text-[#5A2E1F]">
              Escolha o sabor
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {produto.sabores.map((sabor) => {
                const nome =
                  typeof sabor === "string"
                    ? sabor
                    : sabor.nome

                const selecionado =
                  typeof saborSelecionado === "string"
                    ? saborSelecionado === nome
                    : saborSelecionado?.nome === nome

                return (
                  <button
                    key={nome}
                    onClick={() => setSaborSelecionado(sabor)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selecionado
                        ? "border-[#E754A6] bg-[#E754A6] text-white"
                        : "border-[#E8CBD3] bg-white text-[#5A2E1F] hover:border-[#E754A6]"
                    }`}
                  >
                    {nome}

                    {typeof sabor === "object" && (
                      <span className="ml-1 text-xs">
                        {formatarPreco(sabor.preco)}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {produto.itens && produto.opcoes === "festa" && (
          <div className="mt-7">
            <h3 className="font-semibold text-[#5A2E1F]">
              O que vem na caixa?
            </h3>

            <div className="mt-3 space-y-2">
              {produto.itens.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white px-4 py-3 text-sm text-[#5A2E1F]"
                >
                  <span className="mr-2 text-[#E754A6]">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {produto.itens && produto.opcoes === "kit" && (
          <div className="mt-7">
            <h3 className="font-semibold text-[#5A2E1F]">
              O que vem no kit?
            </h3>

            <div className="mt-3 space-y-2">
              {produto.itens.map((item) => {
                const tamanhoCorrespondente =
                  produto.tamanhos?.find(
                    (tamanho) =>
                      tamanho.nome === item.pessoas
                  )

                const selecionado =
                  tamanhoSelecionado?.nome === item.pessoas

                return (
                  <button
                    key={item.pessoas}
                    onClick={() =>
                      tamanhoCorrespondente &&
                      setTamanhoSelecionado(
                        tamanhoCorrespondente
                      )
                    }
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      selecionado
                        ? "border-[#E754A6] bg-[#F7D4DF]"
                        : "border-[#E8CBD3] bg-white hover:border-[#E754A6]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-[#5A2E1F]">
                        {item.pessoas}
                      </p>

                      {tamanhoCorrespondente && (
                        <span className="font-semibold text-[#D96F96]">
                          {formatarPreco(
                            tamanhoCorrespondente.preco
                          )}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm leading-5 text-[#8B5E3C]">
                      {item.descricao}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-[#F7E1E6] p-5">
          <p className="text-sm text-[#8B5E3C]">
            Valor
          </p>

          <p className="mt-1 font-serif text-3xl italic text-[#5A2E1F]">
            {formatarPreco(preco)}
          </p>
        </div>

        <button
          onClick={pedirWhatsApp}
          className="mt-4 w-full rounded-full bg-[#5A2E1F] py-3.5 font-semibold text-white transition hover:bg-[#E754A6]"
        >
          Pedir pelo WhatsApp →
        </button>
      </div>
    </div>
  )
}

export default ProductModal