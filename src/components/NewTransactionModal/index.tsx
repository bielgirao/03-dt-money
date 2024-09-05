import * as Dialog from "@radix-ui/react-dialog";
import {Overlay, Content, CloseButton, TransactionType, TransactionTypeButton} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";
import * as z from 'zod';
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(),
    amount: z.number(),
    category: z.string(),
    type: z.enum(['income','expense'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting,
            isValid
        }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        {...register("description")}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        required
                        {...register("amount", { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        required
                        {...register("category")}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({field}) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp size={24} />
                                        Income
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant='expense' value='expense'>
                                        <ArrowCircleDown size={24} />
                                        Expense
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                    >
                        Add Transaction
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
}
