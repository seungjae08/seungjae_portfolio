import './fonts/fonts.css';
import FirstSection from './components/FirstSection';
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <FirstSection />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100vw;
  overflow: scroll;
`
