import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const sendSubmit = () => {
    navigate("/quiz");
  };
  return (
    <Container className="content">
      <h1 id="quiz-title">Good luck ಠ_ಠ</h1>
      <h2 class="question-text">
        Do you think you can beat our phishing quiz?
      </h2>
      <p className="description">
        {" "}
        There are many social engineering attacks on internet however not all of
        them are good enough to trick users. However there are some scams that
        are identical to original websites and usually most of the users get
        tricked by them.
      </p>
      <p className="description">
        Do you think you are smart enough to handle these attacks?
      </p>
      <p className="description">
        We are challenging you with our phishing quiz which will show you
        examples of really good social engineering attacks on internet. We hope
        you can pass!
      </p>
      <p>""</p>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={sendSubmit}
        style={{
          fontWeight: 600,
        }}
      >
        Start Quiz
      </Button>
    </Container>
  );
};

export default Home;
