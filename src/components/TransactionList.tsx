import { ChevronRight } from "lucide-react";

type Transaction = {
  description: string;
  amount: string;
  balance?: string;
};

type GroupedTransactions = {
  [date: string]: Transaction[];
};

const groupedTransactions: GroupedTransactions = {
    "DEC 28, 2024": [
      {
        description: "Conference registration fee - Financial Summit",
        amount: "-$1,200.00",
        balance: "$251,199.75"
      },
      {
        description: "Corporate bond purchase",
        amount: "-$15,000.00",
        balance: "$266,199.75"
      }
    ],
    "DEC 27, 2024": [
      {
        description: "Monthly subscription - Bloomberg Terminal",
        amount: "-$2,500.00",
        balance: "$268,699.25"
      },
      {
        description: "Office utilities payment",
        amount: "-$1,850.00",
        balance: "$270,549.25"
      },
      {
        description: "Team building expense - Workshop",
        amount: "-$1,600.00",
        balance: "$272,149.50"
      },
      {
        description: "Employee lunch expense",
        amount: "-$240.50",
        balance: "$272,390.75"
      }
    ],
    "DEC 26, 2024": [
      {
        description: "Office coffee service expense",
        amount: "-$125.45",
        balance: "$272,515.30"
      },
      {
        description: "Office supplies purchase - Staples",
        amount: "-$320.75",
        balance: "$272,836.55"
      },
      {
        description: "Investment portfolio deposit",
        amount: "+$25,000.00",
        balance: "$247,836.75"
      }
    ],
    "DEC 25, 2024": [
      {
        description: "Dividend payout to stakeholders",
        amount: "-$17,250.00",
        balance: "$265,086.85"
      },
      {
        description: "Employee holiday distribution",
        amount: "-$10,000.00",
        balance: "$275,086.35"
      },
      {
        description: "Technology infrastructure upgrade",
        amount: "-$8,000.00",
        balance: "$283,086.25"
      },
      {
        description: "Client deposit - New account opening",
        amount: "+$34,500.00",
        balance: "$248,586.15"
      }
    ],
    "DEC 24, 2024": [
      {
        description: "Corporate insurance premium payment",
        amount: "-$12,500.00",
        balance: "$261,086.65"
      },
      {
        description: "Client account transfer",
        amount: "-$34,000.00",
        balance: "$295,086.45"
      },
      {
        description: "Payment for legal consultation - Contract review",
        amount: "-$5,000.00",
        balance: "$300,086.35"
      }
    ]
  };

const TransactionList = () => {
  return (
    <div className="space-y-8">
      {Object.entries(groupedTransactions).map(
        ([date, transactions]: [string, Transaction[]]) => (
          <div key={date}>
            <p
              className="text-gray-600 font-medium mb-0 bg-customGrey px-4 py-0 -mx-4 rounded mt-8"
              style={{ backgroundColor: "#f5f6f8" }}
            >
              {date}
            </p>
            <div className="space-y-0">
              {transactions.map((transaction: Transaction, index: number) => (
                <div
                  key={index}
                  className="-mx-4 flex justify-between items-center border-b pb-3 pt-3 bg-white text-black px-4"
                  style={{ border: "1px solid #ddd" }}
                >
                  <div className="flex-grow">
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-gray-500 text-sm">{transaction.balance}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p
                      className={`${
                        transaction.amount.startsWith("+")
                          ? "text-green-500"
                          : "text-gray-500"
                      } font-medium`}
                    >
                      {transaction.amount}
                    </p>
                    <ChevronRight className="text-customBlue" size={26} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TransactionList;
