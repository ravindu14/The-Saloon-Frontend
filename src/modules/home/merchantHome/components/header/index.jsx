import HeaderNavigation from './HeaderNavigation';
import SaloonLogo from './HeaderLogo';
import {
  HeaderBreadcrumbs,
  HeaderContainer,
  LeftContainer,
  LineSeparator,
  RightContainer,
} from './StyledComponents';

type LayoutProps = {};

const Header = (props: LayoutProps) => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <SaloonLogo />
        <LineSeparator />
        <HeaderBreadcrumbs>Merchant Dashboard</HeaderBreadcrumbs>
      </LeftContainer>
      <RightContainer>
        <HeaderNavigation />
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
