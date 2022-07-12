import NotificationButon from "../notification-buton"
import './styles.css'
function Table() {
    return (
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
            </thead>
        </table>
    )
}

export default Table