import { Endereco } from './types/types'
interface Props {
  endereco: Endereco
}

export default function EnderecoCard({ endereco }: Props) {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title text-success">Endereço Encontrado</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>CEP:</strong> {endereco.cep}</li>
          <li className="list-group-item"><strong>Logradouro:</strong> {endereco.logradouro || 'N/A'}</li>
          <li className="list-group-item"><strong>Complemento:</strong> {endereco.complemento || 'N/A'}</li>
          <li className="list-group-item"><strong>Bairro:</strong> {endereco.bairro || 'N/A'}</li>
          <li className="list-group-item"><strong>Cidade:</strong> {endereco.localidade}</li>
          <li className="list-group-item"><strong>UF:</strong> {endereco.uf}</li>
        </ul>
      </div>
    </div>
  )
}
