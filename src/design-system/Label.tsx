import { styled } from "@/styles";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = styled(LabelPrimitive.Root, {
  userSelect: "none",
  display: "block",
  mb: "0.75rem",
  color: "$black",
  fontSize: "1rem",
  fontWeight: "$2",
  lineHeight: "normal",
});

export default Label;
