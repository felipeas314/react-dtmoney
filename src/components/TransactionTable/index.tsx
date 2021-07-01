import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
        api.get('/transactions')
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$10000</td>
                        <td>Desenvolvimento</td>
                        <td>02/02/0202</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1100,00</td>
                        <td>Casa</td>
                        <td>02/02/0202</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}