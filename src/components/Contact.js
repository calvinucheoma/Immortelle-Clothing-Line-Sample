import React from 'react';
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { GiLoveLetter } from 'react-icons/gi';
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Contact Me</h3>
        <div>
          <p className="contact__text">
            You can contact me to place your orders or for further enquiries on
            the following platforms:
          </p>
        </div>
        <ul className="contact__icons">
          <li>
            <a
              href="https://instagram.com/immortelle_by_hector?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: '#FFC0CB.' }}>
                <FaInstagram />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+2347034640951"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: '#4FCE5D' }}>
                <FaWhatsapp />
              </i>
            </a>
          </li>
          <li>
            <i style={{ color: 'red' }}>
              <GiLoveLetter />
            </i>
          </li>
          <li>
            <a
              href="tel:+2347034640951"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: 'green' }}>
                <FaPhone />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact__text {
    line-height: 2;
    color: var(--clr-grey-5);
    text-align: center;
  }

  .contact__icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    list-style-type: none;
  }

  i {
    font-size: 2rem;
    margin-right: 2rem;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    /* .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    } */
    .contact__text {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
