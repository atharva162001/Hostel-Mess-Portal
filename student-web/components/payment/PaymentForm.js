import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      // Send the payment method ID to your server to complete the payment
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
