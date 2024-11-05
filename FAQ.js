import { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  className: 'FAQContainer';
`;

const FAQItem = styled.div`
  className: 'FAQItem';
`;

const Question = styled.button`
  className: 'Question';
`;

const Answer = styled.div`
  className: 'Answer';
  &[data-isopen="${props => props.isOpen}"] {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of books do you publish?",
      answer: "We specialize in educational materials, including textbooks, workbooks, and supplementary materials for early childhood education through elementary levels."
    },
    {
      question: "How long does the publishing process take?",
      answer: "The typical publishing process takes 3-6 months, depending on the complexity of the project and the chosen package."
    },
    {
      question: "Do you offer digital publishing options?",
      answer: "Yes, we offer both traditional print and digital publishing options, including eBooks and interactive digital resources."
    },
    {
      question: "What support do you provide to authors?",
      answer: "We provide comprehensive support including editing, design, marketing, and distribution services based on the chosen publishing package."
    }
  ];

  return (
    <FAQContainer>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </Question>
          <Answer isOpen={openIndex === index} data-isopen={openIndex === index}>
            {faq.answer}
          </Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
}

export default FAQ; 