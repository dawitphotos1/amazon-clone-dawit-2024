
import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#36d7b7" />{" "}
      {/* we get the code after we select on react spinners web site */}
    </div>
  );
}

export default Loader;
