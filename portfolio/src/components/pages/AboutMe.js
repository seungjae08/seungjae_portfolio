import styled from 'styled-components';
import My from '../../asset/my_picture.jpg'

import JS from '../../asset/js.png'
import TS from '../../asset/typescript.png';
import ReactImg from '../../asset/react.png';
import Redux from '../../asset/redux.png';
import vueImg from '../../asset/vue.png'
import StyledComponents from '../../asset/styled-component.png';
import nextjs from '../../asset/nextjs.png';
import chartjs from '../../asset/chartjs.png';
import apexcharts from '../../asset/apexcharts.png';
import sass from '../../asset/sass.png';
import FramerMotionImg from '../../asset/Framer-motion.png';

import Python from '../../asset/Python.png';
import NodeJS from '../../asset/NodeJS.jpeg';
import Express from '../../asset/Express.png';
import Django from '../../asset/Django.png';
import Flask from '../../asset/Flask.png';
import Nginx from '../../asset/nginx.png';
import Torchserve from '../../asset/TorchServe.png';
import GRPC from '../../asset/grpc.png';

import EC2 from '../../asset/ec2.png';
import LoadBalancer from '../../asset/loadBalancer.png';
import S3 from '../../asset/S3.png';
import RDS from '../../asset/RDS.png';
import ACM from '../../asset/ACM.png';

import Docker from '../../asset/Docker.png';

function AboutMe({opacity}){
  return (
    <Wrap id='AboutMe'>
      <IntroduceWrap>
        <IntroduceTitle>
          Introduce
        </IntroduceTitle>
        <IntroduceContentsWrap>
          <MyImage src={My}>
          </MyImage>
          <Information>
            <p>이름 : 한승재</p>
            <p>생년월일 : 1996.08.14</p>
            <p>학력 : 삼육대학교 컴퓨터 메카트로닉스 공학부</p>
            <p>이메일 : seungjae08@gmail.com</p>
            <p>github : <a href='https://github.com/seungjae08'>seungjae github</a></p>
          </Information>
        </IntroduceContentsWrap>
        <IntroduceContents>
            안녕하세요. <br /> FrontEnd 한승재입니다. <br />
            FullStack을 넘어 모든분야를 공부하는 개발자가 꿈입니다. <br />
            15살에 C언어를 처음 접하며 테트리스와 같은 게임을 만들며 개발해왔습니다. <br />
            취업때문에 기계공학으로 대학을 진학해 4.34이란 학점으로 졸업했습니다. <br />
            개발을 이어나갔고 결국 제가 이루고 싶은 개발자로 진로를 변경해 꿈을 이루고 있습니다. <br />
            꾸준함, 노력이란 재능을 타고나 어떤 공부도 포기하지 않고 열심히 할 자신이 있습니다. 
          </IntroduceContents>
      </IntroduceWrap>
      <Line />
      <TechStack>
        <TechStackTitle>FRONTEND</TechStackTitle>
        <TechWrap>
          <TechEle><TechImage src={JS} alt='techImage'/> Javascript</TechEle>
          <TechEle><TechImage src={TS} alt='techImage'/> Typescript</TechEle>
          <TechEle><TechImage src={ReactImg} alt='techImage'/> React</TechEle>
          <TechEle><TechImage src={Redux} alt='techImage'/> Redux</TechEle>
          <TechEle><TechImage src={vueImg} alt='techImage'/> Vue</TechEle>
          <TechEle><TechImage src={StyledComponents} alt='techImage'/> Styled<br/>Components</TechEle>
          <TechEle><TechImage src={nextjs} alt='techImage'/> NextJS</TechEle>
          <TechEle><TechImage src={chartjs} alt='techImage'/> ChartJS</TechEle>
          <TechEle><TechImage src={apexcharts} alt='techImage'/> ApexCharts</TechEle>
          <TechEle><TechImage src={sass} alt='techImage'/> Sass</TechEle>
          <TechEle><TechImage src={FramerMotionImg} alt='techImage'/> FramerMotion</TechEle>
        </TechWrap>
        <TechStackTitle>BACKEND</TechStackTitle>
        <TechWrap>
          <TechEle><TechImage src={Python} alt='techImage'/> Python</TechEle>
          <TechEle><TechImage src={NodeJS} alt='techImage'/> NodeJS</TechEle>
          <TechEle><TechImage src={Express} alt='techImage'/> Express</TechEle>
          <TechEle><TechImage src={Django} alt='techImage'/> Django</TechEle>
          <TechEle><TechImage src={Flask} alt='techImage'/> Flask</TechEle>
          <TechEle><TechImage src={Nginx} alt='techImage'/> Nginx</TechEle>
          <TechEle><TechImage src={Torchserve} alt='techImage'/> TorchServe</TechEle>
          <TechEle><TechImage src={GRPC} alt='techImage'/> gRPC</TechEle>
        </TechWrap>
        <TechStackTitle>AWS</TechStackTitle>
        <TechWrap>
          <TechEle><TechImage src={EC2} alt='techImage'/> EC2</TechEle>
          <TechEle><TechImage src={LoadBalancer} alt='techImage'/> LoadBalancer</TechEle>
          <TechEle><TechImage src={S3} alt='techImage'/> S3</TechEle>
          <TechEle><TechImage src={RDS} alt='techImage'/> RDS</TechEle>
          <TechEle><TechImage src={ACM} alt='techImage'/> ACM</TechEle>
        </TechWrap>
        <TechStackTitle>INFRA STACK</TechStackTitle>
        <TechWrap>
          <TechEle><TechImage src={Docker} alt='techImage'/> Docker</TechEle>
        </TechWrap>
      </TechStack>
    </Wrap>
  )
}

export default AboutMe;
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
  align-items: center;
`
const IntroduceTitle = styled.h1`
  font-family: 'Noto Sans KR';
  font-size: 40px;
  font-weight: 600;
  color:#C9D6DF;
  margin: 10px 0px;
  width: 100%;
`
const IntroduceContents = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  color:#1E2022;
  margin: 30px 10px;
  text-align: center;
`
const Information = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  color:#1E2022;
  margin: 30px 10px;
`
const Line = styled.div`
  background-color: #C9D6DF;
  height: 1px;
  width: 90%;
  margin: 20px 0px;
`
const TechStack = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
const TechStackTitle = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 30px;
  font-weight: 300;
  color:#C9D6DF;
  margin: 0px 10px;
`
const TechWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const TechEle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 10px;
  color:#000000;
`
const TechImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 10px;
  transition: all 0.2s ease-in;
  &:hover{
    transform: scale(1.5);
  }
`
const MyImage = styled.img`
  height: 345px;
  border-radius: 30px;
`
const IntroduceContentsWrap = styled.div`
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`