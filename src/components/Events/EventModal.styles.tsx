import React from "react";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  Button,
  ButtonProps,
} from "@mui/material";

interface ModalContainerProps extends BoxProps {
  children: React.ReactNode;
}

interface StandardTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

interface ActionButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      backgroundColor: "background.paper",
      boxShadow: 24,
      padding: (theme) => theme.spacing(2, 4, 4),
      borderRadius: (theme) => theme.shape.borderRadius,
      maxHeight: "90vh",
      overflow: "auto",
      outline: "none",
      "@media (min-width: 600px)": {
        width: "600px",
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const ModalTitle: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="h4"
    component="h1"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial',
      fontWeight: 500,
      marginBottom: 1,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const ModalDateTime: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="h6"
    component="h2"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial',
      fontWeight: 400,
      color: "text.secondary",
      display: "inline",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const SectionLabel: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="body1"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial',
      fontWeight: "bold",
      display: "inline",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const SectionContent: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="body1"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial',
      display: "inline",
      "& .event-link": {
        color: "#3f7ac2",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const Section: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    sx={{
      marginBottom: 2,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const ButtonContainer: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    sx={{
      marginTop: 3,
      display: "flex",
      gap: 2,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const CloseButton: React.FC<IconButtonProps> = ({ ...props }) => (
  <IconButton
    sx={{
      position: "absolute",
      right: 0,
      top: 0,
      color: "text.secondary",
      "&:focus": {
        outline: "none",
      },
      ...props.sx,
    }}
    {...props}
  />
);

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  href,
  ...props
}) => (
  <Button
    variant="contained"
    sx={{
      fontFamily: "Helvetica, Arial",
      fontSize: "1rem",
      textTransform: "none",
      background: "#42A5F5",
      "&:not(:last-child)": {
        marginRight: 2,
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Button>
);
