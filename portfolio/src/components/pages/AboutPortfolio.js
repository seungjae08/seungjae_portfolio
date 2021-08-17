import styled from 'styled-components';
import dualtalk from '../../asset/portfolio/dualtalk.png';
import changsung2 from '../../asset/portfolio/changsung2.png';
import opencv from '../../asset/portfolio/opencv.png';
import videosynthesis from '../../asset/portfolio/videosynthesis.png';
function AboutPortfolio({opacity}){
  

  return (
    <Wrap>
      <IntroduceWrap>
        <IntroduceTitle>
          My Recent Work
        </IntroduceTitle>
      </IntroduceWrap>
      <Line />
      <FramerWrap>
        <PortfolioEle>
          <MouseOff>
            <img src={dualtalk} alt='dualtalk'>
            </img>
          </MouseOff>
          
        </PortfolioEle>
        <PortfolioEle>
          <MouseOff>
            <img src={changsung2} alt='changsung'>
            </img>
          </MouseOff>
          
        </PortfolioEle>      
        <PortfolioEle>
          <MouseOff>
            <img src={videosynthesis} alt='videosynthesis'>
            </img>
          </MouseOff>
        </PortfolioEle>
        <PortfolioEle>
          <MouseOff>
            <img src={opencv} alt='opencv'>
            </img>
          </MouseOff>
        </PortfolioEle>
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
  margin-top: 40px;

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
  color:#FF2626;
  margin: 10px 0px;
  text-align: center;
`
const Line = styled.div`
  background-color: #FF2626;
  height: 1px;
  width: 90%;
  margin: 20px 0px;
`

const FramerWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const PortfolioEle = styled.div`
  width: 30vw;
  height: 40vh;
  background-color: white;
  border-radius: 30px;
  margin:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
`
const MouseOff = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:hover{
    img{
      visibility: hidden;
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1{
    position: absolute;
    padding: 0px;
  }
`