import axios from 'axios';
import { BASE_URL } from '../../../utils/request';
import icon from '../../img/notificacao-botao.svg'
import './styles.css'

type props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        
    })
}
function NotificationButon({saleId} : props) {
    return (

        < div className=" dsmeta-botao-notificar" onClick={() => handleClick(saleId)}>
           <img src={icon} alt="notificar"></img>
        </ div >

    )
}

export default NotificationButon