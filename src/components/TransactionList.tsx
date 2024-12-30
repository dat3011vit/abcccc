import { ChevronRight } from "lucide-react";

type Transaction = {
    description: string;
    amount: string;
    balance?: string;
    isPending?: boolean;
  };

type GroupedTransactions = {
  [date: string]: Transaction[];
};

const groupedTransactions: GroupedTransactions = {
    "PENDING": [
    {
      description: "DDA CHECK",
      amount: "-$5,000.00",
      balance: "DEC 30, 2024",
      isPending: true
    },
  ],

  "DEC 30, 2024": [   
    {
      description: "Purchase of office furniture for new branch",
      amount: "-$7,500.00",
      balance: "$130,925.00",
    },
  ],

  "DEC 29, 2024": [   
    {
      description: "DDA DEBIT",
      amount: "-$5,500.00",
      balance: "$138,425.00",
    },
    {
      description: "Final invoice payment - Vendor services",
      amount: "-$4,200.00",
      balance: "$143,925.00",
    },
  ],

  "DEC 28, 2024": [   
    {
      description: "DDA DEBIT",
      amount: "-$5,500.00",
      balance: "$148,125.00",
    },
    {
      description: "FED WIRE TRANSFER CREDIT 2412276WIRE-IN",
      amount: "+$20,000.00",
      balance: "$153,625.00",
    },
    {
      description: "Conference registration fee - Financial Summit",
      amount: "-$1,200.00",
      balance: "$133,625.00",
    },
    {
      description: "Corporate bond purchase",
      amount: "-$15,000.00",
      balance: "$134,825.00",
    },
  ],
  "DEC 27, 2024": [
    {
      description: "Incoming Payment - Atlantic Finance Group",
      amount: "+$18,625.00",
      balance: "$149,825.00",
    },
    {
      description: "Office utilities payment",
      amount: "-$1,850.00",
      balance: "$131,200.00",
    },
    {
      description: "Team building expense - Workshop",
      amount: "-$1,600.00",
      balance: "$133,050.00",
    },
    {
      description: "Employee lunch expense",
      amount: "-$240.50",
      balance: "$134,650.00",
    },
  ],
  "DEC 26, 2024": [
    {
      description: "Office coffee service expense",
      amount: "-$125.45",
      balance: "$134,890.50",
    },
    {
      description: "Office supplies purchase - Staples",
      amount: "-$320.75",
      balance: "$135,015.95",
    },
    {
      description: "Investment portfolio deposit",
      amount: "+$25,000.00",
      balance: "$135,336.70",
    },
  ],
  "DEC 25, 2024": [
    {
      description: "Employee holiday distribution",
      amount: "-$10,000.00",
      balance: "$110,336.70",
    },
    {
      description: "Technology infrastructure upgrade",
      amount: "-$8,000.00",
      balance: "$120,336.70",
    },
    {
      description: "Client deposit - New account opening",
      amount: "+$34,500.00",
      balance: "$128,336.70",
    },
    {
      description: "Payment for legal consultation - Contract review",
      amount: "-$5,000.00",
      balance: "$93,836.70",
    },
  ],
  "DEC 24, 2024": [
    {
      description: "Corporate insurance premium payment",
      amount: "-$12,500.00",
      balance: "$98,836.70",
    },
    {
      description: "Client account transfer",
      amount: "-$13,120.00",
      balance: "$111,336.70",
    },
  ],
  "DEC 23, 2024": [
    {
      description: "Corporate insurance premium payment",
      amount: "-$12,500.00",
      balance: "$98,836.70"
    },
    {
      description: "Client account transfer",
      amount: "-$13,120.00",
      balance: "$111,336.70"
    }
  ],
  "DEC 22, 2024": [
    {
      description: "Corporate insurance premium payment",
      amount: "-$12,500.00",
      balance: "$98,836.70"
    },
    {
      description: "Client account transfer",
      amount: "-$13,120.00",
      balance: "$111,336.70"
    }
  ],
  "DEC 21, 2024": [
    {
      description: "Corporate insurance premium payment",
      amount: "-$12,500.00",
      balance: "$98,836.70"
    },
    {
      description: "Client account transfer",
      amount: "-$13,120.00",
      balance: "$111,336.70"
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
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        {transaction.isPending && (
                          <span className="bg-customBlue text-white font-bold mt-1 text-sm px-3 py-0">
                            PENDING
                          </span>
                        )}
                        <span>{transaction.balance}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p
                        className={`${
                          transaction.amount.startsWith("+")
                            ? "text-green-500"
                            : "text-gray-500"
                        } font-medium whitespace-nowrap`}
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
