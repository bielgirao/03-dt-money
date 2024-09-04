import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighLight, TransactionContainer, TransactionsTable} from "./styles.ts";
import {SearchForm} from "./components/SearchForm";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                    <tr>
                        <td width="50%">Website development</td>
                        <td>
                            <PriceHighLight variant="income">
                                $12,000.00
                            </PriceHighLight>
                        </td>
                        <td>Sale</td>
                        <td>04/13/2024</td>
                    </tr>
                    <tr>
                        <td width="50%">Groceries</td>
                        <td>
                            <PriceHighLight variant="expense">
                                - $12,000.00
                            </PriceHighLight>
                        </td>
                        <td>Shopping</td>
                        <td>04/13/2024</td>
                    </tr>
                    <tr>
                        <td width="50%">Family Dinner</td>
                        <td>
                            <PriceHighLight variant="expense">
                                - $5,000.00
                            </PriceHighLight>
                        </td>
                        <td>Food</td>
                        <td>04/13/2024</td>
                    </tr>
                    <tr>
                        <td width="50%">Monthly Salary</td>
                        <td>
                            <PriceHighLight variant="income">
                                $19,000.00
                            </PriceHighLight>
                        </td>
                        <td>Salary</td>
                        <td>04/13/2024</td>
                    </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionContainer>
        </div>
    );
}
