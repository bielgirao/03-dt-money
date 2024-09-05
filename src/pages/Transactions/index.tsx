import {useContext} from "react";
import {TransactionsContext} from "../../contexts/TransactionsContext.tsx";
import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {SearchForm} from "./components/SearchForm";
import {PriceHighLight, TransactionContainer, TransactionsTable} from "./styles.ts";
import {dateFormatter, priceFormatter} from "../../utils/formatter.ts";


export function Transactions() {
    const {transactions} = useContext(TransactionsContext);

    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type === "expense" && '- '}
                                            {priceFormatter.format(transaction.amount)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionContainer>
        </div>
    );
}
