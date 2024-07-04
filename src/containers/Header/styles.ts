import styled from "styled-components";


export const HomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: url('src/assets/bg-header.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const HeaderContaineFilterr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .55);
`;

export const HeaderTop = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const HeaderLogo = styled.img`
  width: 350px;
  background: url('src/assets/logo.png');

`;

export const HeaderTitle = styled.div`
  width: 300px;
  height: 150px;
  background-color: white;
`;

export const HeaderCardWrapper = styled.div`
  width: 100%;
  height: 25vh;
  background-color: rgba(255, 192, 1, .65);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const Card = styled.div`
  background-color: red;
  width: 400px;
  height: 160px;
  margin-left: 64px;
  margin-right: 64px;
  margin-top: -65px;
  border: 8px solid white;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 1;
`;

export const TextHolder = styled.h4`
  color: white;
  background-color: black;
  margin-bottom: -20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  z-index: 1;
`;

// export const Item1 = styled.div`
//         background-color: blue;
//         grid-row: 1 / 3;
//         grid-column: 1 / 5;
// `;
// export const Item2 = styled.div`
//         background-color:red;
//         grid-row: span 2;
//         grid-column: span 2;
// `;
// export const Logo = styled.img`
//         width: 250px;
//         display: flex;
//         align-items: start;
//         position: absolute;
//         margin-bottom: 350px;
//         margin-left: 24px;

// `

// export const HeaderWrapperC = styled.header`
//         display: flex;
//         align-items: flex-end;
//         width: 100%;
//         height: 550px;

// `

// export const CardContainer = styled.div`
//         background-color: rgba(255, 192, 1, 0.75);
//         width: 100%;
//         height: 20%;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         position: absolute;
//         z-index: 1;

// `

// export const HeaderWrapper = styled.header`

//         background-color: rgba(0,0,0,.35);
//         width: 100%;
//         height: 550px;

// `

// export const HeaderWrapperB = styled.header`
//         background: url('src/assets/bg-header.jpg') no-repeat center center/cover;
//         background-color: #000;
//         width: 100%;
//         height: 550px;

// `
