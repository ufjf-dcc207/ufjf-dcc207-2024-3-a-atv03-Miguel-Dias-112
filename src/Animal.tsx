
import './Animal.css'
interface AnimalProps {
    icone: string;
    nome: string;
    peso: number;
    extinção: boolean;
}
function Animal(
    { icone, nome, peso, extinção }: AnimalProps
) {
  return (
    <div className='animal'>
        <div className='icone'>{icone}</div>
        <div className='nome'>{nome}</div>
        {
            peso > 0 ? <div className='peso'>{peso+"kg"}</div> :  <div className='peso'>Desconhecido</div>
        }
        
        <div className='extincao'>
          {extinção ? 'Está em extinção' : 'Não está em extinção'}
        </div>
    </div>
  )
}

export default Animal
