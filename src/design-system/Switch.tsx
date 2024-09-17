import { styled } from "@/styles";
import * as RadixSwitch from "@radix-ui/react-switch";

export const Switch = RadixSwitch;

export const SwitchRoot = styled(Switch.Root, {
  width: "30px",
  height: "15px",
  backgroundColor: "$midnight",
  borderRadius: "$pill",
  position: "relative",
  border: "none",
  outline: "none",
  cursor: "pointer",
  "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  boxShadow: "0 0 0 2px #0e0e0e50",

  "&[data-state='checked']": {
    backgroundColor: "$midnight",
  },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: "10px",
  height: "10px",
  borderRadius: "7px",
  backgroundColor: "$offWhite",
  transition: "transform 300ms",
  transform: "translateX(3px)",
  willChange: "transform background-color",
  cursor: "pointer",
  border: "1px solid $midnight",

  "&[data-state='checked']": {
    transform: "translateX(17px)",
    transition: "transform 300ms",
    willChange: "transform background-color",
    backgroundColor: "$white",
  },
});
