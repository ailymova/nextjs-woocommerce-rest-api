import { useContext, useState } from 'react';
import { AppContext } from '../context';
import Address from './user-address';
import { setStatesForCountry, handleBillingDifferentThanShipping, handleCreateAccount } from '../../utils/checkout';
import CheckboxField from './form-elements/checkbox-field';
import YourOrder from './your-order';
import PaymentModes from './payment-modes';
import cx from 'classnames';

/* const defaultCustomerInfo = {
  firstName: 'Laura',
  lastName: 'Mayo',
  address1: '123 Abc farm',
  address2: 'Hill Road',
  city: 'Mexico City',
  country: 'MX',
  state: 'Ciudad de México',
  postcode: '03660',
  email: 'aily.mova@gmail.com',
  phone: '5555555555',
  company: 'Lau Mayo Corp',
  errors: null,
}; */

const defaultCustomerInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  country: '',
  state: '',
  postcode: '',
  email: '',
  phone: '',
  company: '',
  errors: null,
};

export default function CheckoutForm({ countriesData }) {
  // console.log(countriesData);

  const { billingCountries, shippingCountries } = countriesData || {};
  const initialState = {
    billing: {
      ...defaultCustomerInfo,
    },
    shipping: {
      ...defaultCustomerInfo,
    },
    createAccount: false,
    orderNotes: '',
    billingDifferentThanShipping: false,
    paymentMethod: 'cod',
  };

  const [cart, setCart] = useContext(AppContext);
  const [input, setInput] = useState(initialState);
  const [requestError, setRequestError] = useState(null);
  const [theShippingStates, setTheShippingStates] = useState([]);
  const [theBillingStates, setTheBillingStates] = useState([]);
  const [isFetchingShippingStates, setIsFetchingShippingStates] = useState(false);
  const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});

  const handleFormSubmit = () => {};

  const handleOnChange = async (event, isShipping = false, isBillingOrShipping = false) => {
    const { target } = event || {};
    if ('createAccount' === target.name) {
      handleCreateAccount(input, setInput, target);
    } else if ('billingDifferentThanShipping' === target.name) {
      handleBillingDifferentThanShipping(input, setInput, target);
    } else if (isBillingOrShipping) {
      if (isShipping) {
        await handleShippingChange(target);
      } else {
        await handleBillingChange(target);
      }
    } else {
      const newState = { ...input, [target.name]: target.value };
      setInput(newState);
    }
    console.log(input);
  };

  const handleShippingChange = async target => {
    const newState = { ...input, shipping: { ...input?.shipping, [target.name]: target.value } };
    setInput(newState);
    await setStatesForCountry(target, setTheShippingStates, setIsFetchingShippingStates);
  };

  const handleBillingChange = async target => {
    const newState = { ...input, billing: { ...input?.billing, [target.name]: target.value } };
    setInput(newState);
    await setStatesForCountry(target, setTheBillingStates, setIsFetchingBillingStates);
  };

  return (
    <>
      {cart ? (
        <form onSubmit={handleFormSubmit} className="woo-next-checkout-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              {/* Shipping Details */}
              <div className="shipping-details">
                <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
                <Address
                  states={theShippingStates}
                  countries={shippingCountries}
                  input={input?.shipping}
                  handleOnChange={event => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                />
              </div>
              <div>
                <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Billing different than shipping"
                  containerClassNames="mb-4 pt-4"
                />
              </div>
              {/* Billing Details */}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                  <Address
                    states={theBillingStates}
                    countries={billingCountries.length ? billingCountries : shippingCountries}
                    input={input?.billing}
                    handleOnChange={event => handleOnChange(event, false, true)}
                    isFetchingStates={isFetchingBillingStates}
                    isShipping={false}
                  />
                </div>
              ) : null}
            </div>
            {/* Order & Payments */}
            <div className="your-orders">
              {/* Order */}
              <h2 className="text-xl font-medium mb-4">Your Order</h2>
              <YourOrder cart={cart} />

              {/* Payments */}
              <h2 className="text-xl font-medium mb 4">Select your mode of payment</h2>
              <PaymentModes input={input} handleOnChange={handleOnChange} />

              <div className="woo-next-place-order-btn-wrap mt-5">
                <button
                  disabled={isOrderProcessing}
                  className={cx('bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full', { 'opacity-50': isOrderProcessing })}
                  type="submit">
                  Place Order
                </button>
              </div>
              {/* Checkout Loading */}
              {isOrderProcessing && <p>Processing Order...</p>}
              {requestError && <p>Error: {requestError} :( Please try again</p>}
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
