import React from 'react';
import { useContext, useState } from 'react';

const ScoreContext = React.createContext();
const UpdateScoreContext = React.createContext();
const ResponseContext = React.createContext();
const UpdateResponseContext = React.createContext();

export const useScoreContext = () => {
    return useContext(ScoreContext);
}

export const useUpdateScoreContext = () => {
    return useContext(UpdateScoreContext);
}

export const useResponseContext = () => {
    return useContext(ResponseContext);
}

export const useUpdateResponseContext = () => {
    return useContext(UpdateResponseContext);
}

export const ResultProvider = ({scoreValue, responseValue, children}) => {
    // we will wrap tabs with Result Provider, these tabs will be the "children"
    const [score, setScore] = useState(scoreValue);
    const [responses, setResponses] = useState(responseValue);

    return (
        <ScoreContext.Provider value={score}>
        <ResponseContext.Provider value={responses}>
            <UpdateScoreContext.Provider value={setScore}>
            <UpdateResponseContext.Provider value={setResponses}>
                {children}
            </UpdateResponseContext.Provider>
            </UpdateScoreContext.Provider>
        </ResponseContext.Provider>
        </ScoreContext.Provider>
    );
};

export default ResultProvider;