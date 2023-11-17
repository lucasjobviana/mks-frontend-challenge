import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const TopMenuWrapper = styled.header`
  width: 100vw;
  height: 11.15vh;
  top: 0;
  background: #0F52BA;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 4rem;
  padding-left: 4rem;
`;

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 37px;
  border-radius: 0.5rem;
  background: #FFF;
  display: flex;
  align-items: center;
  font-size: 8px;
  cursor: pointer;
  justify-content: space-evenly;
`;

export const CompanyTitleWrapper = styled.span`
  width: 155px;
  color: #fff;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const MainWrapper = styled.main`
   width: 65vw;
   height: auto;  
  margin-top: 09.77vh;
   display: flex;
   gap: 22px;
   justify-content: space-between;
    align-items: space-around;
   flex-wrap: wrap;
  
`;

export const ShopMenuWrapper = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  min-width: 375px;
  height: 100vh;
  background: #0F52BA;
  color: #FFF;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;
    align-items: flex-start;
    font-size: 1.5rem;
    h1 {
      max-width: 200px;
 
    }
    button {
      background: black;
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 50%;
      font-size: 1.5rem;

    }
  }
  .products {
    margin: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  .price {
    position: absolute;
    bottom: 55px;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .finally {
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
    padding: 15px;
    background: black;
    color: white;
    width: 100%;
  }
`;

export const ProductInCartCardWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  height: 60px;
  color: black;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  h4 {
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
  }
  .qtd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    border: 0.3px solid black;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    button {
      background: white;
      margin: 3px;
      cursor: pointer;
    }
  }
  .rmv {
    position: absolute;
    width: 15px; 
    right: -7px;
    top: -7px;
    background: black;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const FooterWrapper = styled.footer`
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 34px;
  background: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductCardWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0.5px 0.5px 5px black;
  width: 210px;
  height: 16.8rem;
  position: relative;

  .body{
    height: 70%;
     
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 130px;
  }

  .body > .info {
    width: 100%;
    position: absolute;
    height: 15%;
    bottom: 33%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  h4 {
    max-width: 55%;
    position: absolute;
    left: 10px;
  }

  h3 {
    background: #2C2C2C;
    color: white;
    border-radius: 4px;
    padding: 0.2rem;
    position: absolute;
    right: 10px;
  }

  p {
    position: absolute;
    top: 100%;
    font-size: 1px;
    margin-left: 0.5rem;
    margin-right: 1.0rem;
    text-align: justify;
  }

  button {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .buyButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
     
    * {
      margin: 5px;
    }
  }
`;