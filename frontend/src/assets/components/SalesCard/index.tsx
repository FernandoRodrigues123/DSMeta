import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButon from '../notification-buton'
import './styles.css'   
function SalesCard() {

const min = new Date(new Date().setDate(new Date().getDate() - 365));
const max = new Date();

    const [minDate, setmiDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(() => {
        axios.get("http://localhost:8080/sales").then(response => {
            console.log(response.data);
        })
    },[])

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