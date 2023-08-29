


import { useState } from "react";
import questionsAndAnswers from "./Question";
import { useNavigate } from "react-router-dom";
import './Ques.css';
var ansarr = [];
const Ques = () => {
    const navigate = useNavigate();
    const [ans, setans] = useState("-1")
    const [ind, setind] = useState(0);
    const [qn, setqn] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
        setans(event.target.value)
    };

    return (
        <>
        {/* <h1>ans = {ans}</h1> */}
            <p className="ques">{qn}. {questionsAndAnswers[ind].question}</p>

            <label>
                <input
                    type="radio"
                    name="option"
                    value= "0"
                    id="Option 1"
                    className="inp"
                    checked={selectedOption === "Option 1"}
                    onChange={handleOptionChange}
                />
                {questionsAndAnswers[ind].options[0]}
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="option"
                    value="1"
                    id="Option 2"
                    className="inp"
                    checked={selectedOption === "Option 2"}
                    onChange={handleOptionChange}
                />
                {questionsAndAnswers[ind].options[1]}
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="option"
                    id="Option 3"
                    value="2"
                    className="inp"
                    checked={selectedOption === "Option 3"}
                    onChange={handleOptionChange}
                />
                {questionsAndAnswers[ind].options[2]}
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="3"
                    name="option"
                    id="Option 4"
                    className="inp"
                    checked={selectedOption === "Option 4"}
                    onChange={handleOptionChange}
                />
                {questionsAndAnswers[ind].options[3]}
            </label>
            <br />

            <button className="next" onClick={() => {
                if (ind < 9 && selectedOption) {
                    ansarr.push(ans);
                    console.log(ansarr)
                    setind(ind + 1);
                    setans("-1")
                    setqn(qn + 1);
                    setSelectedOption(null); // Reset selected option for the next question
                } else if(ind == 9) {
                    ansarr.push(ans);
                    console.log(ansarr)
                    localStorage.setItem("response",ansarr);
                    navigate("/lastpage");
                }
            }}>Next</button>
        </>
    );
}

export default Ques;