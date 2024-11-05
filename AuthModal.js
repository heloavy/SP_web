import { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem;
  border: none;
  background: ${props => props.active ? '#ff6b35' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Form submitted:', formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <TabContainer>
          <Tab 
            active={isLogin} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </Tab>
          <Tab 
            active={!isLogin} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </Tab>
        </TabContainer>

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          )}
          
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          
          <SubmitButton type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AuthModal; 