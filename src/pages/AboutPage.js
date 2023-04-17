import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg-3.jpg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice clothe" />
        <article>
          <div className="title">
            <h2> What I Do</h2>
            <div className="underline"></div>
          </div>
          <p>
            My name is Kingsley and I am the owner and founder of Imortelle
            brand. I am very delighted to have you here and can't wait to show
            you my impressive collection of stylish and sophisticated apparel.
            My brand is all about providing men with the perfect combination of
            comfort, quality, and style, whether you're dressing up for a formal
            event or adding a touch of sophistication to your everyday wardrobe.
            From classic suits to sleek blazers and versatile one-piece
            ensembles, I've got everything you need to look and feel your best.
            I believe that every man deserves to look and feel confident, and
            that's why I offer a diverse range of sizes and styles to suit every
            taste and budget. So, come and explore my website, find your perfect
            fit, and get ready to make a lasting impression wherever you go.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
