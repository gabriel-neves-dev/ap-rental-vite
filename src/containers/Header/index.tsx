import { Button } from "../../components/Button/styles";
import {
  Card,
  HeaderCardWrapper,
  HeaderContaineFilterr,
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
  HeaderTop,
  HomePage,
  TextHolder,
} from "./styles";
import Logo1 from "/src/assets/logo.png";
function Home() {
  return (
    <HomePage>
      <HeaderContainer>
        <HeaderContaineFilterr />
        
        <HeaderTop>
            
          <HeaderLogo src={Logo1}></HeaderLogo>
          <HeaderTitle></HeaderTitle>
        </HeaderTop>

        <HeaderCardWrapper>
          <Card>
            <TextHolder>Hello</TextHolder>
          </Card>

          <Card>
            <TextHolder>Hello</TextHolder>
          </Card>

          <Card>
            <TextHolder>Hello</TextHolder>
          </Card>
        </HeaderCardWrapper>
      </HeaderContainer>
      <Button>fdp</Button>
      <Button>fdp</Button>
      <Button>fdp</Button>
      <Button>fdp</Button>
    </HomePage>

    //   <HeaderWrapperC>
    //     <Logo src={Logo1}></Logo>
    //   <HeaderWrapperB>

    //     <HeaderWrapper></HeaderWrapper>
    //   </HeaderWrapperB>

    //   <CardContainer>
    //     <Card>
    //       <TextHolder>Hello</TextHolder>
    //     </Card>
    //     <Card>
    //       <TextHolder>Hello</TextHolder>
    //     </Card>
    //     <Card>
    //       <TextHolder>Hello</TextHolder>
    //     </Card>
    //   </CardContainer>
    // </HeaderWrapperC>
  );
}

export default Home;
