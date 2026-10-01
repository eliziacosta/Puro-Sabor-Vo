import { useState } from "react"
import logo from "../assets/logo.jpeg"

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-[#FFF5F8] px-5 py-3">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Puro Sabor de Vó"
            className="h-20 w-20 rounded-full object-contain"
          />

          <p className="hidden max-w-[220px] font-serif text-lg italic leading-tight text-[#5A2E1F] lg:block">
            Doces feitos com carinho
            <br />
            para tornar seus momentos
            <br />
            ainda mais especiais!
          </p>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#inicio"
            className="rounded-full bg-[#F7C8D8] px-6 py-2 font-medium text-[#E754A6]"
          >
            Início
          </a>

          <a
            href="#cardapio"
            className="font-medium text-[#5A2E1F] transition hover:text-[#E754A6]"
          >
            Cardápio
          </a>

          <a
            href="#sobre"
            className="font-medium text-[#5A2E1F] transition hover:text-[#E754A6]"
          >
            Sobre
          </a>

          <a
            href="#contato"
            className="font-medium text-[#5A2E1F] transition hover:text-[#E754A6]"
          >
            Contato
          </a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#contato"
            className="rounded-full bg-[#E754A6] px-6 py-3 font-semibold text-white transition hover:bg-[#C27BA0]"
          >
            Fale Conosco
          </a>

          <span className="text-3xl text-[#5A2E1F]">
            ♡
          </span>
        </div>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="text-3xl text-[#5A2E1F] md:hidden"
        >
          {menuAberto ? "×" : "☰"}
        </button>
      </div>

      {menuAberto && (
        <nav className="mx-auto mt-4 flex max-w-[1400px] flex-col gap-2 border-t border-[#F7C8D8] pt-4 md:hidden">
          <a
            href="#inicio"
            onClick={() => setMenuAberto(false)}
            className="rounded-xl px-4 py-3 font-medium text-[#5A2E1F] hover:bg-[#F7C8D8]"
          >
            Início
          </a>

          <a
            href="#cardapio"
            onClick={() => setMenuAberto(false)}
            className="rounded-xl px-4 py-3 font-medium text-[#5A2E1F] hover:bg-[#F7C8D8]"
          >
            Cardápio
          </a>

          <a
            href="#sobre"
            onClick={() => setMenuAberto(false)}
            className="rounded-xl px-4 py-3 font-medium text-[#5A2E1F] hover:bg-[#F7C8D8]"
          >
            Sobre
          </a>

          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="rounded-xl px-4 py-3 font-medium text-[#5A2E1F] hover:bg-[#F7C8D8]"
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header