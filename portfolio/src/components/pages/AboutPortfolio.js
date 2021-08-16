import styled from 'styled-components';
import {useState} from 'react';
function AboutPortfolio({opacity}){
  const [scroll,setScroll] = useState(0);

  useState(()=>{
    const scrollEle = document.getElementById('parallex');
    setScroll(scrollEle.scrollTop);
  },[scroll])
  return (
    <Wrap>
      <IntroduceWrap>
        <IntroduceTitle>
          Portfolio
        </IntroduceTitle>
      </IntroduceWrap>
      <Line />
      <FramerWrap>
        <PortfolioWrap>
          <PortfolioEle>

          </PortfolioEle>
          <PortfolioEle>

          </PortfolioEle>
        </PortfolioWrap>
        <PortfolioWrap>
          <PortfolioEle>

          </PortfolioEle>
          <PortfolioEle>

          </PortfolioEle>
        </PortfolioWrap>
        
      </FramerWrap>
    </Wrap>
  )
}

export default AboutPortfolio;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: Initialframes;
  animation-duration: 2s;

  @keyframes Initialframes {
    0%{ opacity: 0; transform:translateX(-50px)}
    100%{opacity: 1; transform:translateX(0%)}
  }
`
const IntroduceWrap= styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
const IntroduceTitle = styled.h1`
  font-family: 'Noto Sans KR';
  font-size: 40px;
  font-weight: 600;
  color:#548CA8;
  margin: 10px 0px;
`
const Line = styled.div`
  background-color: #548CA8;
  height: 1px;
  width: 90%;
  margin: 20px 0px;
`

const FramerWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
const PortfolioEle = styled.div`
  width: 45%;
  height: 50vh;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PortfolioWrap = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 10px 0px;
`