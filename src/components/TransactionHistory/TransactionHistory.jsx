import PropTypes from 'prop-types';
import { Transaction, TransactionHeading, TransactionRow} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <TransactionHeading>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHeading>

      <tbody>
        {items.map(item => (
          <TransactionRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransactionRow>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
