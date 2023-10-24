const OrderTable = (props) => {
    let companyName = props.companyName;
    let orders = props.orders;

    const orderRows = orders.map(order => (
        React.createElement('tr', { key: order.id },
          React.createElement('td', null, order.id),
          React.createElement('td', null, order.address),
          React.createElement('td', null, order.task),
          React.createElement('td', null,
            React.createElement('img', { src: order.photoUrl, alt: 'Order Photo' })
          )
        )
    ));

    return (
        React.createElement('div', null,
          React.createElement('h1', null, `Company: ${companyName}`),
          React.createElement('table', null,
            React.createElement('thead', null,
              React.createElement('tr', null,
                React.createElement('th', null, 'Order ID'),
                React.createElement('th', null, 'Address'),
                React.createElement('th', null, 'Task'),
                React.createElement('th', null, 'Photo')
              )
            ),
            React.createElement('tbody', null, orderRows)
          )
        )
    );
};

OrderTable.propTypes = {
  companyName: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

const orders = [
    {
      id: 1,
      address: 'Example street 1, 12',
      task: 'Check service',
      photoUrl: './images/order-1.jfif'
    },
    {
      id: 2,
      address: 'Example street 2, 9',
      task: 'Check dishes quality',
      photoUrl: './images/order-2.jfif'
    },
    {
      id: 3,
      address: 'Example street 3, 15',
      task: 'Check service',
      photoUrl: './images/order-3.jfif'
    }
];

ReactDOM.render(
    React.createElement(OrderTable, { companyName: 'Dodo Pizza', orders: orders }),
    document.getElementById('root')
);