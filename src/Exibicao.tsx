
import './Exibicao.css'
interface ExibicaoProps {
    inicio: Date;
    fim: Date;
    local: string;
}
function Exibicao({ inicio, fim, local }: ExibicaoProps) {

  return (
    <div className='Exibicao'>

        <div className="inicio">
            {inicio.toLocaleDateString()}
        </div>
        <div className="fim">
            {fim.toLocaleDateString()}
        </div>
        <div className="local">
            {local}
        </div>
    </div>
  )
}

export default Exibicao
