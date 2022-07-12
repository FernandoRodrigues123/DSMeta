import NotificationButon from '../notification-buton'
import './styles.css'
function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-container">
                    <input className="dsmeta-form-control" type="text"></input>
                </div>
                <div>
                    <input className="dsmeta-form-control" type="text"></input>
                </div>
            </div>

            <div>
                <table className="tabela">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>total</th>
                            <th>notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#333</td>
                            <td className="show576">01/02/2004</td>
                            <td>Fernando</td>
                            <td className="show992">33</td>
                            <td className="show992">33</td>
                            <td>R$600,00</td>
                            <td>
                                <NotificationButon />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            )
}
   export default SalesCard