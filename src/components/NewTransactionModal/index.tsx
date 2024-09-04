import * as Dialog from "@radix-ui/react-dialog";
import {Overlay, Content, CloseButton, TransactionType, TransactionTypeButton} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Description" required />
                    <input type="number" placeholder="Amount" required />
                    <input type="text" placeholder="Category" required />

                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Income
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='expense' value='expense'>
                            <ArrowCircleDown size={24} />
                            Expense
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Add Transaction</button>
                </form>
            </Content>
        </Dialog.Portal>
    );
}
