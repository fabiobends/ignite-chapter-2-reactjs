import { useEffect } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../services/api";
import { currencyFormatter, dateFormatter } from "../../utils/formatters";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => console.log(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ title, category, type, id, amount, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>{currencyFormatter(amount)}</td>
                <td>{category}</td>
                <td>{dateFormatter(new Date(createdAt))}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
}
