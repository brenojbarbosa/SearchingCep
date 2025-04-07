interface Props {
    tipo: 'erro' | 'carregando'
    texto: string
  }
  
  export default function Mensagem({ tipo, texto }: Props) {
    const classe = tipo === 'erro' ? 'danger' : 'info'
    return (
      <div className={`alert alert-${classe} text-center`} role="alert">
        {texto}
      </div>
    )
  }
  