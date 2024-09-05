import {SummaryContainer, SummaryCard} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react';

import {priceFormatter} from "../../utils/formatter.ts";
import {useSummary} from "../../hooks/useSummary.ts";

export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomes</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format(summary.incomes)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Expenses</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format(summary.expenses)}</strong>
            </SummaryCard>
            <SummaryCard variant='green' >
                <header>
                    <span>Balance</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}
