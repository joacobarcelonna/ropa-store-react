import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
// eslint-disable-next-line
const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'No tenes productos en tu carrito.';

  return (
    <div className="checkout">
      <h1>
        Carrito de compra
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          Producto
                        </th>
                        <th>
                          Descripcion
                        </th>
                        <th>
                          Cantidad
                        </th>
                        <th>
                          Precio
                        </th>
                        <th>
                          Borrar
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItems.map((item, pos) => {
                        return (
                          <tr key={pos}>
                            <td>
                              <Item {...item} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                <h3>
                                  Total: ${total}
                                </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Button onClick={() => history.goBack()}>
                                    Continuar Comprando
                                  </Button>
                                </td>
                                <td>
                                  <Button>
                                    Pagar
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
            <p>
              {errMsg}
            </p>
          )}
      </div>
    </div>
  );
};

export default Checkout;

