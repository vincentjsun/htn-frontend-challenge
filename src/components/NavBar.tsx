import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Logo,
  DesktopMenuBox,
  UserMenuBox,
  StyledNavButton,
  StyledAppBar,
} from "./NavBar.styles";

const pages = [{ name: "Events", path: "/" }];

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <StyledAppBar>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Logo />

          <DesktopMenuBox>
            {pages.map((page) => (
              <StyledNavButton key={page.name} component={Link} to={page.path}>
                {page.name}
              </StyledNavButton>
            ))}
          </DesktopMenuBox>

          <UserMenuBox>
            {isLoggedIn ? (
              <StyledNavButton onClick={handleSignOut}>
                Sign Out
              </StyledNavButton>
            ) : (
              <StyledNavButton component={Link} to="/login">
                Login
              </StyledNavButton>
            )}
          </UserMenuBox>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default NavBar;
