import { Flex as Row } from "@radix-ui/themes";
import { styled } from "@/styles";
import React, { ForwardedRef, forwardRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Label from "./Label";

export enum InputVariant {
  Primary = "primary",
  PrimaryOutline = "primary-outline",
}

// @ts-ignore
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  isMultiline?: boolean;
  extraSection?: React.ReactNode;
  message?: React.ReactNode;
  messageType?: "info" | "success" | "warning" | "error";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export const Input = forwardRef(
  (
    {
      className,
      isMultiline = false,
      label,
      extraSection,
      type = "text",
      message,
      messageType = "error",
      prefix,
      suffix,
      ...rest
    }: InputProps,
    forwardedRef: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const [inputType, setInputType] = useState(type);

    return (
      <StyledContainer className={className}>
        {label && <Label>{label}</Label>}
        <InputFieldWrapper>
          {prefix}
          {isMultiline ? (
            <StyledInput
              as={TextareaAutosize}
              // @ts-ignore
              ref={forwardedRef as ForwardedRef<HTMLTextAreaElement>}
              type={inputType}
              minRows={2}
              messageState={messageType}
              {...rest}
            />
          ) : (
            <StyledInput
              messageState={messageType}
              ref={forwardedRef as ForwardedRef<HTMLInputElement>}
              type={inputType}
              {...rest}
            />
          )}
          {suffix}
        </InputFieldWrapper>
        {message && <InputMessage type={messageType}>{message}</InputMessage>}
        {extraSection && <ExtraLine>{extraSection}</ExtraLine>}
      </StyledContainer>
    );
  },
);

Input.displayName = "Input";

export default Input;

export const StyledContainer = styled("div", {
  position: "relative",
  flex: 1,
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  width: "100%",
});

const InputFieldWrapper = styled("div", {
  height: "3rem",
  borderRadius: "0.5rem",
  border: "0.75px solid rgba(13, 38, 30, 0.25)",
  fontSize: "1rem",
  fontWeight: "$2",
  color: "$darkerGreen",
  lineHeight: "normal",
  backgroundColor: "$grey",
  overflow: "hidden",
  width: "100%",

  "&:hover": {
    border: "1px solid #0D261E",
  },

  "&::focus": {
    border: "1px solid #0D261E",
  },
});

export const StyledInput = styled("input", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0.875rem 1.25rem",
  flex: "1",
  width: "100%",
  fontWeight: "inherit",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  fontSize: "inherit",
  lineHeight: "inherit",

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  backgroundColor: "transparent",
  color: "$hiContrast",

  "&:-webkit-autofill": {},

  "&:-webkit-autofill::first-line": {
    color: "$hiContrast",
  },

  "&:focus": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8",
  },

  "&::-webkit-autofill": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3",
  },

  "&::placeholder": {
    color: "rgba(13, 38, 30, 0.25)",
  },

  "&:disabled": {
    pointerEvents: "none",
    cursor: "not-allowed",
    boxShadow: "none",
    opacity: 0.5,
  },

  "&:read-only": {
    backgroundColor: "$slate2",

    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$slate7",
    },
  },

  variants: {
    messageState: {
      error: {
        true: { border: "1px solid red" },
      },
      warning: {
        true: { border: "1px solid orange" },
      },
      info: {},
      success: {},
    },

    multiline: {
      true: {
        resize: "none",
        height: "auto",
        lineHeight: "150% !important",
        borderRadius: "$2",
        whiteSpace: "pre-wrap",
      },
    },
  },
});

export const InputMessage = styled("span", {
  marginTop: "6px",
  display: "inline-block",
  fontSize: "12px",
  lineHeight: "$3",
  width: "100%",

  variants: {
    type: {
      error: {
        color: "red",
      },
      warning: {
        color: "orange",
      },
      info: {},
      success: {},
    },
  },
});

export const ExtraLine = styled("div", {
  marginTop: "1.5rem",
  width: "100%",
});
