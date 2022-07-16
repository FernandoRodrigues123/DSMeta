import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../../models/sale";
import { BASE_URL } from "../../../utils/request";
import NotificationButon from '../notification-buton'
import './styles.css'   
function SalesCard() {

const min = new Date(new Date().setDate(new Date().getDate() - 365));
const max = new Date();

    const [minDate, setmiDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);



    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);

        console.log(dmin)

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
           setSales(response.data.content)
        })
    },[minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setmiDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
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
                        {
                            sales.map(sale =>{
                                return(
                                    <tr key={sale.id}>
                            <td className="show992">{sale.id}</td>
                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                            <td>{sale.sallerName}</td>
                            <td className="show992">{sale.visited}</td>
                            <td className="show992">{sale.deals}</td>
                            <td>{sale.amount}</td>
                            <td>
                                <NotificationButon />
                            </td>
                        </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCard