import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "../lib/axios.ts";

interface Transaction {
    id: number;
    description: string;
    type: 'income'|'expense';
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (transaction: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface CreateTransactionInput {
    description: string;
    amount: number;
    category: string;
    type: 'income'|'expense';
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string){
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        });
        setTransactions(response.data);
    }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, amount, category, type } = data;

        const response = await api.post('transactions', {
            description,
            type,
            category,
            amount,
            createdAt: new Date(),
        });

        setTransactions(state=> [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return <TransactionsContext.Provider value={{
        transactions,
        fetchTransactions,
        createTransaction
    }}>
        {children}
    </TransactionsContext.Provider>
}