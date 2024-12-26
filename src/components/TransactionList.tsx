import { ChevronRight } from 'lucide-react'; // Thêm import này ở đầu file


type Transaction = {
    description: string;
    amount: string;
    balance?: string;
};

type GroupedTransactions = {
    [date: string]: Transaction[];
};

const groupedTransactions: GroupedTransactions = {
    "JAN 24, 2024": [
        { description: "TF 0335#7700-396", amount: "+$0.12" },
        { description: "INTERAC E-TRANSFER FEE", amount: "-$1.50" },
    ],
    "JAN 23, 2024": [
        { description: "Deposit - Payroll", amount: "+$2000.00" },
        { description: "Service Fee", amount: "-$20.00" },
    ],
    "JAN 22, 2024": [
        { description: "Deposit - Payroll", amount: "+$2000.00" },
        { description: "Service Fee", amount: "-$20.00" },
    ],
    "JAN 21, 2024": [
        { description: "Deposit - Payroll", amount: "+$2000.00" },
        { description: "Service Fee", amount: "-$20.00" },
    ],
};

const calculateBalances = (
    transactions: GroupedTransactions,
    initialBalance: number
): GroupedTransactions => {
    let currentBalance = initialBalance;
    return Object.entries(transactions).reduce((acc, [date, items]) => {
        const dayTransactions = items.map((transaction) => {
            const amountValue = parseFloat(transaction.amount.replace(/[+$]/g, ""));
            currentBalance += transaction.amount.startsWith("+")
                ? amountValue
                : -amountValue;

            return {
                ...transaction,
                balance: `$${currentBalance.toFixed(2)}`,
            };
        });

        return { ...acc, [date]: dayTransactions };
    }, {} as GroupedTransactions);
};

const TransactionList = () => {
    const initialBalance = 10000;
    const transactionsWithBalances = calculateBalances(
        groupedTransactions,
        initialBalance
    );

    return (
        <div className="space-y-8">
            {Object.entries(transactionsWithBalances).map(([date, transactions]: [string, Transaction[]]) => (
                <div key={date}>
                    <p
                        className="text-gray-600 font-medium mb-4 bg-customGrey px-4 py-0 -mx-4 rounded"
                        style={{ backgroundColor: '#f5f6f8' }}
                    >
                        {date}
                    </p>
                    <div className="space-y-0">
                        {transactions.map((transaction: Transaction, index: number) => (
                            <div
                                key={index}
                                className="-mx-4 flex justify-between items-center border-b pb-3 pt-3 bg-white text-black px-4"
                            >
                                <div className="flex-grow">
                                    <p className="font-medium">{transaction.description}</p>
                                    <p className="text-gray-500 text-sm">{transaction.balance}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p
                                        className={
                                            transaction.amount.startsWith("+")
                                                ? "text-green-500"
                                                : "text-gray-500"
                                        }
                                    >
                                        {transaction.amount}
                                    </p>
                                    <ChevronRight className="text-customBlue" size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
