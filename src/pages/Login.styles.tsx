import React from "react";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  TextField,
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Card,
  CardContent,
} from "@mui/material";

interface StandardTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

interface ContainerBoxProps extends BoxProps {
  children: React.ReactNode;
}

interface LoginTextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  type?: string;
}

interface LoginButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const LoginContainer: React.FC<ContainerProps> = ({
  children,
  ...props
}) => (
  <Container maxWidth="sm" {...props}>
    {children}
  </Container>
);

export const ContentBox: React.FC<ContainerBoxProps> = ({
  children,
  ...props
}) => (
  <Card
    elevation={3}
    sx={{
      marginTop: 12,
      borderRadius: 2,
      maxWidth: 450,
      width: "100%",
      mx: "auto",
    }}
  >
    <CardContent
      sx={{
        padding: 4,
        "&:last-child": {
          paddingBottom: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Box>
    </CardContent>
  </Card>
);

export const LoginTitle: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    component="h1"
    variant="h3"
    sx={{
      mb: 4,
      fontFamily: "Helvetica Neue",
      fontWeight: 500,
      color: "#333",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const LoginForm: React.FC<ContainerBoxProps> = ({
  children,
  ...props
}) => (
  <Box
    component="form"
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const LoginTextField: React.FC<LoginTextFieldProps> = ({
  error,
  helperText,
  ...props
}) => (
  <TextField
    fullWidth
    required
    variant="outlined"
    error={error}
    helperText={helperText}
    sx={{
      "& .MuiInputBase-root": {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: "1rem",
      },
      "& .MuiInputLabel-root": {
        fontWeight: 500,
        color: "#666",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ddd",
          borderRadius: "8px",
        },
        "&:hover fieldset": {
          borderColor: "#646cff",
        },
      },
    }}
    {...props}
  />
);

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    size="large"
    sx={{
      marginTop: "1rem",
      padding: "0.8rem",
      backgroundColor: "#646cff",
      color: "white",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      "&:hover": {
        backgroundColor: "#535bf2",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);
