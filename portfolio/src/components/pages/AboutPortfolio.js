import styled from 'styled-components';
import dualtalk from '../../asset/portfolio/dualtalk.png';
import changsung2 from '../../asset/portfolio/changsung2.png';
import opencv from '../../asset/portfolio/opencv.png';
import videosynthesis from '../../asset/portfolio/videosynthesis.png';
function AboutPortfolio({opacity}){
  //window.open('https://gjto.xinapse.ai','_blank','width=400,height=650')
  // window.open('https://jardin.xinapse.ai','_blank','width=400,height=650')

  return (
    <Wrap id='AboutPortfolio'>
      <IntroduceWrap>
        <IntroduceTitle>
          My Recent Work
        </IntroduceTitle>
      </IntroduceWrap>
      <Line />
      <FramerWrap>
        <PortfolioExplanation>
          해당 프로젝트 모두 혼자서 작업했음을 알립니다.
        </PortfolioExplanation>
        <PortfolioEle>
          <img src={dualtalk} alt='dualtalk'>
          </img>
          <div>
            <h1>Dualtalk</h1>
            <ChatbotButton>
              <button onClick={()=>{
                window.open('https://vp-platform.xinapse.ai/dualtalk','_blank','width=400,height=650')
              }}>Dualtalk</button>
              <button onClick={()=>{
                window.open('https://gjto.xinapse.ai','_blank','width=400,height=650')
              }}>광주관광재단</button>
              <button onClick={()=>{
                window.open('https://jardin.xinapse.ai','_blank','width=400,height=650')
              }}>자뎅</button>
              <button onClick={()=>{
                window.open('https://mdtpcb.com','_blank','width=400,height=650')
              }}>매드트로닉</button>
            </ChatbotButton>
            <button onClick={()=>{
              window.open('https://plucky-entree-df6.notion.site/Chatbot-Plaform-7c12f06c1003419faf796cf25c944396','_blank')
            }}>프로젝트 설명</button>
          </div>
        </PortfolioEle>
        <PortfolioEle>
          <img src={changsung2} alt='changsung'>
          </img>
          <div>
            <h1>창업성공프로젝트</h1>
            <button onClick={()=>{
              window.open('http://robo-advisor.xinapse.ai:28087/','_blank')
            }}>홈페이지로</button>
            <button onClick={()=>{
              window.open('https://plucky-entree-df6.notion.site/100d1dafb618480e98b68a0d87eb9c4a','_blank')
            }}>프로젝트 설명</button>
          </div>
        </PortfolioEle>      
        <PortfolioEle>
          <img src={videosynthesis} alt='videosynthesis'>
          </img>
          <div>
            <h1>비디오합성</h1>
            <button onClick={()=>{window.open('https://plucky-entree-df6.notion.site/Video-Synthesis-1831dbc868e54e58bc0a8b0c649e7b37')}}>프로젝트 설명</button>
          </div>
        </PortfolioEle>
        <PortfolioEle>
          <img src={opencv} alt='opencv'>
          </img>
          <div>
            <h1>Machine Learning RC</h1>
            <button 
              onClick={()=>{window.open('https://drive.google.com/file/d/1pN7E1f2rLbxfY3rs7N_EYnRn1mt__pdv/view?usp=sharing','_blank')}}>홈페이지로</button>
            <button>프로젝트 설명</button>
          </div>
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
  color:#C9D6DF;
  margin: 10px 0px;
  text-align: center;
`
const Line = styled.div`
  background-color: #C9D6DF;
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
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  margin:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }
  div{
    width: 300px;
    height: 300px;
    position: absolute;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
    background-color: #52616B;
    border-radius: 30px;
    color:#F0F5F9;
    button{
      padding: 10px 20px;
      border-radius: 20px;
      margin: 10px 5px;
      background-color: #F0F5F9;
      border: 0px;
      color:#52616B;
      font-family: 'Noto Sans KR';
      font-size: 20px;
      font-weight: 600;
      transition: all 0.3s ease-in;
    }
    button:hover{
      background-color: #52616B;
      color: #F0F5F9;
      text-decoration: underline;
      transition: all 0.3s ease-in;
    }
  }
  &:hover{
    img{
      opacity: 0;
    }
    div{
      opacity: 1;
    }
  }
`
const ChatbotButton = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`
const PortfolioExplanation = styled.div`
  width: 90%;
  text-align: center;
  color:#52616B;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 600;
`