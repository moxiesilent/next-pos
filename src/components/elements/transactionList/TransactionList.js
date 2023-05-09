import styles from './index.module.css'

const TransactionList = ({ transactions }) => {
    console.log(transactions);
    return (
        <div className={styles.transaction__list}>
            {transactions.map((transaction, index) => {
                return (
                    <div key={index} className={styles.transaction__card}>
                        <h3>Order Number {transaction.no_order}</h3>
                        <h4>Products </h4>
                        {transaction.products.map((product, index) => {
                            return (
                                <div className={styles.transaction__product}>
                                    <p>{product.product}</p>
                                    <p>{product.quantity}</p>
                                </div>
                            )
                        }
                        )}
                        <div className={styles.transaction__paid_amount}>
                            <p>Paid amount</p>
                            <p>Rp. {transaction.paid_amount}</p>
                        </div>
                        <div className={styles.transaction__total_price}>
                            <p>Total price</p>
                            <p>Rp. {transaction.total_price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TransactionList;