import { questionBank } from "../../components/QuestionBank/QuestionBank";

// For linking question number to number of questions attempted -------------------
import { useResponseContext } from "../../components/Context/ResultContext";
// --------------------------------------------------------------------------------

const Quiz = () => {

    // to access number of questions attempted ------------------------------------
    const numResponses = useResponseContext();
    // ----------------------------------------------------------------------------

    return (
        questionBank[numResponses]
    );
}

export default Quiz
