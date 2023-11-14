import styled from "styled-components";


export const HomeWrapper = styled.div`
  width: 100vw;
  height: 1024px;
  overflow: hidden;
  background: #FFF;
  display: flex;
  flex-direction: column;
`;

export const TopMenuWrapper = styled.header`
  width: 100vw;
  height: 100px;
  background: #0F52BA;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
`;

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #FFF;
`;

export const CompanyTitleWrapper = styled.span`
font-family: 'Montserrat';
font-style: normal;
line-height: 48%;
color: #FFFFFF;
`;

export const Main_Style = styled.main`
   min-height: 444px;
`;

export const Footer_Style = styled.footer`
  width: 100vw;
  height: 34px;
  background: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;
