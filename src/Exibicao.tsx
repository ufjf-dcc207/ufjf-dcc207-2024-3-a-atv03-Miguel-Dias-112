
import './Exibicao.css'
interface ExibicaoProps {
    inicio: Date;
    fim: Date;
    local: string;
    children: React.ReactNode;
}
function Exibicao({ inicio, fim, local,children }: ExibicaoProps) {

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
        <div className='animais'>
            {children}
        </div>
    </div>
  )
}

export default Exibicao
