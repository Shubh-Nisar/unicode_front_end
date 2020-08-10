import React, { useState } from 'react';
import quiz from '../Quiz.json';
import '../Result/Result.css';

// THE RESULT SCREEN //
const Result = props => {
    console.log(props.answers);
    var result = 0;
    // DISPLAY SINGLE QS INSIDE OF A li tag //
const data = props.answers.map((elem) => <li key={elem.questionNo}>
    <div className='Result-block'>
        <div className='Result-block__elem--qs'>
            Q{elem.questionNo+1}. {quiz.questions[elem.questionNo].question}
        </div>
        <hr />
        <div className='Result-block__elem--ans'>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 0 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 0 ? 'red' : ''}
            >
                a. {quiz.questions[elem.questionNo].answers[0]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 1 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 1 ? 'red' : ''}
            >
                b. {quiz.questions[elem.questionNo].answers[1]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 2 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 2 ? 'red' : ''}
            >
                c. {quiz.questions[elem.questionNo].answers[2]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 3 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 3 ? 'red' : ''}
            >
                d. {quiz.questions[elem.questionNo].answers[3]}
            </p>
        </div>
    </div>
</li>);
    // CALCULATE THE USER RESULT //
    const resultCalculate = () => {
        const resultArr = props.answers.filter((elem) => elem.correct === true);
        result = resultArr.length
        console.log(result);
    };

    resultCalculate();

    return (
        <div>
            <div className='Result-block--result'>
                <p>
                    Result Summary
                </p>
            </div>
            {data}
            <div className='Result-block--result'>
                <p>
                    Result: {result} / {props.answers.length}
                </p>
            </div>
        </div>
    );
};

export default Result;