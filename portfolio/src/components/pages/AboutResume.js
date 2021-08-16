import styled from 'styled-components';

function AboutResume({opacity}){
  return (
    <Wrap>
      <IntroduceWrap>
        <IntroduceTitle>
          Resume
        </IntroduceTitle>
      </IntroduceWrap>
    </Wrap>
  )
}

export default AboutResume;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  color:#EEEEEE;
  margin: 10px 0px;
`