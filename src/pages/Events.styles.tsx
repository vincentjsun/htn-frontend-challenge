import React from "react";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  TextField,
  TextFieldProps,
  Select,
  Button,
  ButtonProps,
} from "@mui/material";

interface StandardTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

interface ContainerProps extends BoxProps {
  children: React.ReactNode;
}

interface SearchFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: TextFieldProps["sx"];
  placeholder?: TextFieldProps["placeholder"];
  size?: TextFieldProps["size"];
  variant?: TextFieldProps["variant"];
}

interface FilterSelectProps {
  children: React.ReactNode;
  value: string;
  onChange: (e: any) => void;
  size?: "small" | "medium";
}

interface ResetButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<ContainerProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      padding: {
        xs: "16px",
        sm: "24px",
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const PageHeader: React.FC<ContainerProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 0,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const PageTitle: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="h3"
    component="h1"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      background: "linear-gradient(90deg, #ff4d4d 0%, #ff8533 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  ...props
}) => (
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Search events..."
    size="medium"
    value={value}
    onChange={onChange}
    sx={{
      "& .MuiInputBase-root": {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
          borderWidth: "1px",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
          borderWidth: "2px",
        },
      },
      "& .MuiOutlinedInput-input": {
        color: "black",
      },
      "& .MuiInputLabel-root": {
        color: "black",
      },
      mb: 3,
      mt: 2,
      ...props.sx,
    }}
    {...props}
  />
);

export const EventsGrid: React.FC<ContainerProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(auto-fill, minmax(350px, 1fr))",
      },
      gap: {
        xs: 2,
        sm: "20px",
      },
      "& .event-item": {
        width: "1fr",
        margin: "0 auto",
        cursor: "grab",
        transition: "all 0.3s ease",
        position: "relative",
        zIndex: 1,
        "&:active": {
          cursor: "grabbing",
        },
        "&.dragging": {
          zIndex: 999,
          opacity: 0.5,
          transform: "scale(1.05)",
        },
        "&.will-move": {
          transform: "translateX(calc(10%))",
        },
        "&.will-move-back": {
          transform: "translateX(calc(-10%))",
        },
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const HeaderControls: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      alignItems: "center",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const StyledFilterSelect: React.FC<FilterSelectProps> = ({
  children,
  ...props
}) => (
  <Select
    sx={{
      minWidth: 120,
      "& .MuiSelect-select": {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: "black",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
        borderWidth: "1px",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
        borderWidth: "1px",
      },
    }}
    {...props}
  >
    {children}
  </Select>
);

export const StyledResetButton: React.FC<ResetButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#ff4d4d",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "1rem",
      color: "white",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#e63939",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);
