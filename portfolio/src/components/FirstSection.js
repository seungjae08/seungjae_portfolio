import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Background from '../asset/background_1.jpeg';
import Button from '@material-ui/core/Button'
import Me from '../asset/account_circle.png'
import Portfolio from '../asset/view_list.png'
import Resume from '../asset/resume.png'
import AboutMe from './pages/AboutMe';
import AboutPortfolio from './pages/AboutPortfolio';
import AboutResume from './pages/AboutResume';

function FirstSection (){  
  const [header,setHeader] = useState(false);
  const [scroll,setScroll] = useState(0);
  const [firstSection,setFirstSection ] = useState(0);
  const onScroll = ()=>{
    setScroll(window.scrollY)
  }
  useEffect(()=>{
    const firstEle = document.getElementById('first');
    setFirstSection(firstEle.clientHeight)
    window.addEventListener('scroll',onScroll);
    return ()=>{ window.removeEventListener('scroll',onScroll)}
  },[])
  useEffect(()=>{
    if(scroll>0){
      if(scroll>firstSection){
        setHeader(true)
      }else{
        setHeader(false)
      }
    }
  },[scroll])
  return (
    <Wrap id='scrollEvent'>
      <Options header={header}>
        <MtButton onClick={()=>{}}>
          <img src={Me} alt="About Me"></img>
        </MtButton>
        <MtButton onClick={()=>{}}>
          <img src={Portfolio} alt="About Me"></img>
        </MtButton>
        <MtButton onClick={()=>{}}>
          <img src={Resume} alt='About Resume'></img>
        </MtButton>
      </Options>
      <ContentsWrap id='first' background={Background}>
        <Contents>
            <ContentFirst>개발자</ContentFirst>
            <ContentSeconds>한승재입니다.</ContentSeconds>
        </Contents>
        <Explanation>
          <p>
            모든 컴퓨팅 기술을 배우고 노력하는 개발자입니다.<br/>
            노력은 배신하지 않는다는 신념으로 꾸준히 학습하는 중입니다.<br/>
            저에 관해 궁금하신점은 seungjae08@gmail.com으로 연락주시길 바랍니다.
          </p>
          <p>
            Javascript와 Python에 강점을 가지고 있으며 <br/>
            현재는 프론트엔드에 집중해 공부를 하고 있습니다. <br/>
            방문해주셔서 감사합니다!
          </p>
          <p>
            @ 2021.8
          </p>
        </Explanation>
      </ContentsWrap>
      <AboutMe />
      <AboutPortfolio />
    </Wrap>
  )
}

export default FirstSection;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFE6E6;
`
const ContentsWrap =styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background-image: ${({background})=>`url(${background})`};
  background-size: cover;
`
const Contents = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const ContentFirst = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 600;
  color:#FF2626;
  margin: 10px 0px;
`
const ContentSeconds = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 600;
  color:#EEEEEE;
  margin: 10px 0px;
`
const Explanation = styled.div`
  margin:30px 0px;
  display: flex;
  flex-direction:column;
  align-items: center;
  p{
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 300;
    color:#EEEEEE;
    text-align: center;
  }
`
const Options = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in;
  background-color: ${({header})=>header?"rgba( 0, 0, 0, 0.5 )":"none"};
`
const MtButton = styled(Button)`
  width: 30px;
  padding: 0px;
`
const RenderPage = styled.div`
  margin: 20px;
  width: 60%;
  height: calc(100% - 40px);
  border-radius: 20px;
  background-color: #476072;
  overflow: scroll;
`