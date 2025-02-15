import React from "react";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  Card,
  CardProps,
} from "@mui/material";

interface StandardTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

interface ContentGroupProps extends BoxProps {
  children: React.ReactNode;
}

interface StyledCardProps extends CardProps {
  children: React.ReactNode;
}

export const CardTitle: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="h5"
    component="h2"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: 500,
      display: "block",
      width: "100%",
      marginBottom: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      background: "#42A5F5",
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

export const CardTime: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="body1"
    sx={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      lineHeight: 1.6,
      marginBottom: 2,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const CardDescription: React.FC<StandardTypographyProps> = ({
  children,
  ...props
}) => (
  <Typography
    variant="body1"
    sx={{
      fontFamily: "Helvetica Neue",
      lineHeight: 1.6,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const ContentGroup: React.FC<ContentGroupProps> = ({
  children,
  ...props
}) => (
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

export const HeaderGroup: React.FC<ContentGroupProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: 2,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const StyledCard: React.FC<StyledCardProps> = ({
  children,
  ...props
}) => (
  <Card
    sx={{
      width: 315,
      p: 2,
      cursor: "pointer",
      backgroundColor: "#fffff2",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Card>
);

export const ChipContainer: React.FC<ContentGroupProps> = ({
  children,
  ...props
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-start",
      mt: 1,
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Box>
);
