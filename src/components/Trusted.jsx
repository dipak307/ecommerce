import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies </h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="./images/1stLogo.png"
              alt="trusted-brands"
              className="first"
            />
          </div>
          <div className="slide">
            <img
              src="./images/2ndLogo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/3rdLogo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/4thLogo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/5thLogo.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    ${'' /* color:blue; */}
    font-size: 2rem;
    font-weight: bold;
    ${'' /* background-color:green; */}
  }

  img {
    min-width: 10rem;
    height: 10rem;
    border-radius: 2rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;