'use client'
import React from 'react'

interface Props {
  cep: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

export default function InputCep({ cep, onChange, onClick }: Props) {
  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ex: 30142272"
        value={cep}
        onChange={onChange}
      />
      <button className="mb-3"  style={{ backgroundColor: '#6f42c1', color: '#fff' }} onClick={onClick}>
        Buscar CEP
      </button>
    </>
  )
}
