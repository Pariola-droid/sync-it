import { styled } from "@/styles";
import Spinner from "./Spinner";

const PageLoader = () => {
  return (
    <StyledPageLoader>
      <Spinner
        size={30}
        style={{
          color: "#0D261E",
        }}
      />
    </StyledPageLoader>
  );
};

const StyledPageLoader = styled("section", {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  backgroundColor: "$faintGreen",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default PageLoader;
