import { useState } from 'react';
import styled from 'styled-components';
import {
  CreditCard,
  AccountBalance,
  Payment,
  Lock,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';

const PaymentContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const OrderSummary = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PaymentMethod = styled.div`
  flex: 1;
  padding: 1rem;
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.grey};
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.theme.colors.primary};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};

  &:last-child {
    border-bottom: none;
    font-weight: bold;
  }
`;

function PaymentSystem() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Processing payment:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PaymentContainer>
      <h2>Payment Details</h2>
      
      <PaymentGrid>
        <PaymentForm>
          <PaymentMethods>
            <PaymentMethod 
              selected={paymentMethod === 'card'}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard />
              <p>Credit Card</p>
            </PaymentMethod>
            <PaymentMethod
              selected={paymentMethod === 'bank'}
              onClick={() => setPaymentMethod('bank')}
            >
              <AccountBalance />
              <p>Bank Transfer</p>
            </PaymentMethod>
          </PaymentMethods>

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Card Number</Label>
              <Input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Cardholder Name</Label>
              <Input
                type="text"
                name="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={handleChange}
              />
            </FormGroup>

            <CardGrid>
              <FormGroup>
                <Label>Expiry Date</Label>
                <Input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>CVV</Label>
                <Input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </FormGroup>
            </CardGrid>

            <Button type="submit">
              <Lock /> Pay
            </Button>
          </form>
        </PaymentForm>

        <OrderSummary>
          {/* Order summary component */}
        </OrderSummary>
      </PaymentGrid>
    </PaymentContainer>
  );
}

export default PaymentSystem; 