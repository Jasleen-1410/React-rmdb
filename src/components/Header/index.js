import React from 'react';

import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.png';
import TMDBLogo from '../../images/tmdb-logo.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Headerstyles';

const Header = () => (
    <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
)

export default Header;









// class Header extends React.Component {
//   render(){
//     return (
//         <Wrapper>
//         <Content>
//           {/* <Link to='/'> */}
//             <LogoImg src={RMDBLogo} alt='rmdb-logo' />
//           {/* </Link> */}
//           <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
//         </Content>
//       </Wrapper>
      
//     )
//   }
// }


// class Header extends React.Component {
// render(){
//   return (
//     <Wrapper>
//         <Content>
//           {/* <Link to='/'> */}
//             <LogoImg src={RMDBLogo} alt='rmdb-logo' />
//           {/* </Link> */}
//           <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
//         </Content>
//       </Wrapper>
//   )
// }
// }


// const Container = styled.div`
//   text-align: center;
// `

// const Header = () => React.createElement('div', null, 'This is a little start')
// const Header = () => {
// return(
//     <Container>
//       This is container
//     </Container>
// );
// }

// const Header = () => {

//   return(
//     <Wrapper>
//         <Content>
//         {/* <Link to='/'> */}
//          <LogoImg src={RMDBLogo} alt='rmdb-logo' />
//         {/* </Link> */}
//         <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
//        </Content>
//      </Wrapper>
//   );
//   }


