interface WalletBalance {
  currency: string;
  amount: number;
}

// FormattedWalletBalance should be extends WalletBalance and add value formatted:string
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

const noPriority = -99;

// Delete type Props and used Boxprops
const WalletPage: React.FC<BoxProps> = (props: BoxProps) => {
  const { children, ...rest } = props;

  const balances = useWalletBalances();
  const prices = usePrices();

  //   const getPriority = (blockchain: any): number => {
  //     switch (blockchain) {
  //       case 'Osmosis':
  //         return 100
  //       case 'Ethereum':
  //         return 50
  //       case 'Arbitrum':
  //         return 30
  //       case 'Zilliqa':
  //         return 20
  //       case 'Neo':
  //         return 20
  //       default:
  //         return -99
  //     }
  //   }

  //  Change to object to clean
  const priority = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };

  const sortedBalances = useMemo(() => {
    return (
      balances
        .filter((balance: WalletBalance) => {
          const balancePriority = priority[balance.blockchain] || noPriority;
          // shorten returns with operator
          return balancePriority > -99 && balance.amount <= 0;
        })
        // Give variables meaningful names , (I don't know what is "lhs" and "rhs" so i don't change it)
        .sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = priority[lhs.blockchain] || noPriority;
          const rightPriority = priority[rhs.blockchain] || noPriority;
          // shorten returns with operator
          // if true return negative numbers
          // if false return positive  numbers
          return leftPriority - rightPriority;
        })
    );
  }, [balances, prices]);

  // Function is declared but its value is never read
  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed(),
    };
  });

  // used formattedBalances to format
  const rows = formattedBalances.map((balance: FormattedWalletBalance) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow
        className={classes.row}
        // Do not use index as a key
        // key={index}
        key={`${balance.currency}-${balance.amount}`}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};

// Missing export
export default WalletPage;
