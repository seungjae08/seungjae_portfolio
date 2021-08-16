import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../asset/Image.jpg'
import Button from '@material-ui/core/Button'
import Me from '../asset/account_circle.png'
import Portfolio from '../asset/view_list.png'
import Resume from '../asset/resume.png'
import AboutMe from './pages/AboutMe';
import AboutPortfolio from './pages/AboutPortfolio';
import AboutResume from './pages/AboutResume';

function FirstSection (){
  const contents = [ '지지않는','포기하지 않는', '노력하는', '운동하는', '쉬지않는', '풀스택' ];
  const [content,setContent] = useState(contents[0]);
  const [number, setNumber] = useState(0);
  const [opacity,setOpacity] = useState(0);
  const [page,setPage] = useState('AboutMe')

  const RenderPageFunction = (pageState)=>{
    switch(pageState){
      case 'AboutMe':
        return <AboutMe opacity={opacity} />
      case 'AboutPortfolio':
        return <AboutPortfolio opacity={opacity} />
      case 'AboutResume':
        return <AboutResume opacity={opacity} />
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      if(number!==contents.length-1 ){
        setContent(contents[number+1])
        setNumber(number+1);
      }else{
        setContent(contents[0])
        setNumber(0)
      }
    },3000)
    
  },[contents])

  return (
    <Wrap>
      <ContentsWrap>
        <Contents>
          <ImageWrap>
            <img src={Image} alt='image'></img>
          </ImageWrap>
          <MainText>
            <ContentFirst><Emphasis>{content}</Emphasis> <span>개발자</span></ContentFirst>
            <ContentSeconds>한승재입니다.</ContentSeconds>
          </MainText>
        </Contents>
        <Explanation>
          <p>
            안녕하세요 개발자 한승재 입니다.
          </p>
          <p>
            해당 페이지는 React, Styled-Components를 이용해 완성했습니다.
          </p>
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
      <Options>
        <MtButton onClick={()=>{setPage('AboutMe')}}>
          <img src={Me} alt="About Me"></img>
        </MtButton>
        <MtButton onClick={()=>{setPage('AboutPortfolio')}}>
          <img src={Portfolio} alt="About Me"></img>
        </MtButton>
        <MtButton onClick={()=>{setPage('AboutResume')}}>
          <img src={Resume} alt='About Resume'></img>
        </MtButton>
      </Options>
      <RenderPage id='parallex'>
        {RenderPageFunction(page)}
      </RenderPage>
    </Wrap>
  )
}

export default FirstSection;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #334257;
`
const ContentsWrap =styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`
const Contents = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100%;
  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`
const MainText = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContentFirst = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 600;
  color:#EEEEEE;
  margin: 10px 0px;
  animation-duration: 3s;
  animation-name: opacityAction;
  animation-iteration-count: infinite;

  @keyframes opacityAction{
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    33% { 
      opacity: 1;
      transform: translateX(0px);
    }
    100%{
      opacity: 0;
      transform: translateX(-10px);
    }
  }
`
const ContentSeconds = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 600;
  color:#EEEEEE;
  margin: 10px 0px;
`
const Emphasis = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 30px;
  font-weight: 700;
  color:#548CA8;
  border-radius: 50px;
  padding: 10px 30px;
  
`

const Explanation = styled.div`
  margin:30px 0px;
  p{
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 600;
    color:#EEEEEE;
  }
`
const Options = styled.div`
  width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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