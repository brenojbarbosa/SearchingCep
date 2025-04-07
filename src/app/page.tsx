'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import InputCep from './components/InputCep'
import Mensagem from './components/Mensagem'
import { Endereco } from './components/types/types'
import EnderecoCard from './components/EnderecoCard'
import Image from 'next/image'

export default function Home() {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState<Endereco | null>(null)
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  const buscarCep = async () => {
    setErro("")
    setEndereco(null)
    const cepLimpo = cep.replace(/\D/g, "")

    if (cepLimpo.length !== 8) {
      setErro("CEP inválido. Deve conter 8 números.")
      return
    }

    setCarregando(true)

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const data: Endereco = await res.json()

      if (data.erro) {
        setErro("CEP não encontrado.")
      } else {
        setEndereco(data)
      }
    } catch (e) {
      setErro("Erro ao buscar o CEP. Tente novamente.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Image
        src="/desenhocep.svg"
        alt="Ilustração de busca de CEP"
        width={300}
        height={300}
        className="mb-4"
      />
      
      <InputCep cep={cep} onChange={(e) => setCep(e.target.value)} onClick={buscarCep} />
      {carregando && <Mensagem tipo="carregando" texto="Carregando..." />}
      {erro && <Mensagem tipo="erro" texto={erro} />}
      {endereco && <EnderecoCard endereco={endereco} />}
    </main>
  )
}
