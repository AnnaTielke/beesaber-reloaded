import {
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBSwitch,
} from 'mdb-react-ui-kit';
import styled from 'styled-components';

import tokens from '@/tokens';

const NavBar = styled(MDBNavbar)`
  background-color: ${tokens.color.page.bgColor.light};
  list-style: none;
  padding: 0 1rem;

  .nav-link {
    color: ${tokens.color.white.light};
  }

  .active {
    background-color: ${tokens.color.white.light};
    color: ${tokens.color.page.bgColor.main};
  }
`;

const NavigationItems = styled.div`
  display: flex;
`;

type Props = {
  activeitem: string;
  setIsPlayedByHive: (isOn: boolean) => void;
  toggleTab: (id: string) => void;
};

const ScoreNavbar = ({
  activeitem,
  setIsPlayedByHive,
  toggleTab,
}: Props): JSX.Element => (
  <NavBar>
    <NavigationItems>
      <MDBNavbarItem>
        <MDBNavbarLink
          to="#"
          active={activeitem === '1'}
          onClick={() => toggleTab('1')}
          role="tab"
        >
          Recent
        </MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink
          to="#"
          active={activeitem === '2'}
          onClick={() => toggleTab('2')}
          role="tab"
        >
          Top
        </MDBNavbarLink>
      </MDBNavbarItem>
    </NavigationItems>
    <MDBNavbarItem>
      <MDBSwitch
        label="songs only shared by hive "
        onChange={(isOn: boolean) => setIsPlayedByHive(isOn)}
      />
    </MDBNavbarItem>
  </NavBar>
);

export default ScoreNavbar;
