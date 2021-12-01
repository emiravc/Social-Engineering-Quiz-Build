import { Link } from "react-router-dom";
import { useUpdateScoreContext } from "../Context/ResultContext";
import { useUpdateResponseContext } from "../Context/ResultContext";
import "./Header.css";
const Header = () => {

  const updateResponse = useUpdateResponseContext();
  const updateScore = useUpdateScoreContext();

  const resetCounter = () => {
    updateResponse(0);
    updateScore(0);
  }

  return (
    <div className="header">
      <Link to="/" onClick={resetCounter} className="link">
        Social Engineering Quiz{" "}
      </Link>
      <hr className="divider" />
    </div>
  );
};
export default Header;
