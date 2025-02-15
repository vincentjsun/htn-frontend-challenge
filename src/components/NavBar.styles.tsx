import React from "react";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Menu,
  MenuProps,
  AppBar,
  AppBarProps,
} from "@mui/material";
import logo from "../assets/htn_logo.png";

interface ContainerBoxProps extends BoxProps {
  children: React.ReactNode;
}

interface NavButtonProps extends ButtonProps {
  children: React.ReactNode;
  to?: string;
  component?: React.ComponentType<any>;
}

interface NavMenuProps extends MenuProps {
  children: React.ReactNode;
}

interface NavLinkProps extends TypographyProps {
  children: React.ReactNode;
  to?: string;
  component?: React.ComponentType<any>;
}

interface StyledAppBarProps extends AppBarProps {
  children: React.ReactNode;
}

export const Logo: React.FC = () => (
  <Box
    component="img"
    src={logo}
    alt="Hack the North Logo"
    sx={{
      height: 40,
      mr: 2,
    }}
  />
);

export const DesktopMenuBox: React.FC<ContainerBoxProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const UserMenuBox: React.FC<ContainerBoxProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      flexGrow: 0,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const StyledNavButton: React.FC<NavButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    sx={{
      fontFamily: "Helvetica",
      fontSize: "1.1rem",
      fontWeight: 400,
      padding: "8px 16px",
      color: "black",
      textTransform: "none",
      "&:hover": {
        background: "transparent",
        color: "#535bf2",
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Button>
);

export const StyledNavLink: React.FC<NavLinkProps> = ({
  children,
  ...props
}) => (
  <Typography
    sx={{
      textAlign: "center",
      textDecoration: "none",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const StyledNavMenu: React.FC<NavMenuProps> = ({
  children,
  ...props
}) => (
  <Menu
    sx={{
      display: { xs: "block", md: "none" },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Menu>
);

export const StyledUserMenu: React.FC<NavMenuProps> = ({
  children,
  ...props
}) => (
  <Menu
    sx={{
      mt: "45px",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Menu>
);

export const StyledAppBar: React.FC<StyledAppBarProps> = ({
  children,
  ...props
}) => (
  <AppBar
    position="fixed"
    sx={{
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      boxShadow: "none",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1100,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </AppBar>
);
