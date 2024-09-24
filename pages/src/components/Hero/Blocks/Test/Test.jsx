import { Button, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', color: "#56e5ab" }}>
            <CircularProgress variant="determinate" {...props} size="6rem" color="inherit" />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'black', fontSize: "32px", fontWeight: "bold" }}

                >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};
function TestPage() {
    const questions = [
        {
            questionText: 'Математика',
            answerOptions: [
                { answerText: 'Мне легко давалась математика', isCorrect: 4 },
                { answerText: 'Справлялся с несложными задачами', isCorrect: 2 },
                { answerText: 'Я не дружил с математикой совсем', isCorrect: 1 },
            ],
        },
        {
            questionText: 'Эстетика',
            answerOptions: [
                { answerText: 'Я чувствую эстетику во всём', isCorrect: 0 },
                { answerText: 'Мне главное, чтоб все работало, красоту пусть наводит кто-то другой', isCorrect: 3 },
                { answerText: 'Мне важен баланс', isCorrect: 2 },
            ],
        },
        {
            questionText: 'Где бы вы хотели работать?',
            answerOptions: [
                { answerText: 'В уютном офисе серьезной компании', isCorrect: 3 },
                { answerText: 'В офисе небольшой компании, но со свободой действий', isCorrect: 2 },
                { answerText: 'У себя дома, за креслом и монитором', isCorrect: 1 },
            ],
        },
        {
            questionText: 'Где вы любили сидеть в школе?',
            answerOptions: [
                { answerText: 'За передними партами, поближе к доске и учителю', isCorrect: 2 },
                { answerText: 'Где то по середине', isCorrect: 2 },
                { answerText: 'На "камчатке", сидя на задних партах', isCorrect: 1 },
            ],
        },
        {
            questionText: 'Насколько вы "командный" игрок?',
            answerOptions: [
                { answerText: 'Предпочитаю работать в одиночку', isCorrect: 3 },
                { answerText: 'Чувствую себя сильнее в команде', isCorrect: 1 },
                { answerText: 'Мне без разницы', isCorrect: 2 },
            ],
        }, {
            questionText: 'Вы "теоретик" или "практик"?',
            answerOptions: [
                { answerText: 'Практика и только практика. Теория для неуверенных', isCorrect: 0 },
                { answerText: 'Я теоретик. Прежде всего, ознакомлюсь с документацией', isCorrect: 4 },
                { answerText: 'Стараюсь искать баланс', isCorrect: 2 },
            ],
        }, {
            questionText: 'Что для меня важнее?',
            answerOptions: [
                { answerText: 'Простота использования', isCorrect: 2 },
                { answerText: 'Богатый функционал', isCorrect: 3 },
                { answerText: 'Внешний вид', isCorrect: 1 },
            ],
        }, {
            questionText: 'Мне привычно работать',
            answerOptions: [
                { answerText: 'По ночам', isCorrect: 2 },
                { answerText: 'Днём', isCorrect: 3 },
                { answerText: 'Как проснусь', isCorrect: 1 },
            ],
        }, {
            questionText: 'Уже пробовал программировать',
            answerOptions: [
                { answerText: 'Уже пробовал программировать', isCorrect: 3 },
                { answerText: 'Я с компьютером на "ты"', isCorrect: 2 },
                { answerText: 'С телефоном дружу лучше, чем с компьютером', isCorrect: 0 },
            ],
        }, {
            questionText: 'Еще один тупой вопрос',
            answerOptions: [
                { answerText: 'Уже пробовал программировать', isCorrect: 3 },
                { answerText: 'Я с компьютером на "ты"', isCorrect: 2 },
                { answerText: 'С телефоном дружу лучше, чем с компьютером', isCorrect: 0 },
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(0)

    const handleAnswerOptionClick = (isCorrect) => {

        setScore(score + isCorrect);


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            if (score < 14) {
                setResult(1)
            } else if (score < 24) {
                setResult(2)
            } else {
                setResult(3)
            }
        }
    };
    const WhoAmI = () => {
        if (result == 1) {
            return (
                <div className='result'>
                    <h4>Из тебя выйдет отличный <br></br>Ui/Ux Дизайн</h4>
                    <p className='FeDesc'>UI/UX-дизайнеры отвечают за то, чтобы сайты и приложения были не только красивыми, но и удобными. Они создают макеты и прототипы, тестируют пользовательские сценарии.</p>
                    <img src="/media/uiux.jpg" alt="курсы веб-дизайна в бишкеке" className='desc_image' />
                </div>
            )
        } else if (result == 2) {
            return (
                <div className='result'>
                    <h4>Из тебя выйдет отличный <br></br>Веб-разработчик</h4>

                    <p className='FeDesc'>
                        Веб-разработчики создают визуальную часть сайтов и веб-приложений. Они работают с HTML, CSS, JavaScript, чтобы сделать сайты интерактивными и удобными для пользователей.
                    </p>
                    <img src="/media/fe.jpg" alt="курсы фронтенд бишкек" className='desc_image' />

                </div>
            )
        } else {
            return (
                <div className='result'>
                    <h4>Из тебя выйдет отличный <br></br>Python разработчик</h4>

                    <p className='FeDesc'>Python-разработчики создают серверную логику, обрабатывают данные, создают веб-сервисы и боты. Этот язык также часто используется в машинном обучении и науке о данных.</p>
                    <img src="/media/python.jpg" alt="курсы питона в бишкеке" className='desc_image' />

                </div>
            )
        }
    }
    const StyledTest = styled.div`
    .result{
        display: flex;
        flex-direction: column;
        h4{
            font-size: 32px;
            line-height: 130%;
            margin-bottom: 12px;
        }
    }
        .desc_image{
            width: 46%;
            align-self: flex-end;
            justify-self: end;
        }
        .FeDesc{
            font-size: 28px;
        }
        .App{
            display: flex;
            justify-content: center;
            gap: 12%;
            .illustration{
                margin-left: -8vw;
                justify-self: start;
                align-self: flex-start;
                margin-top: 10vh;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 30vw;

                }
            }
            .section{
                display: flex;
                flex-direction: column;
                gap: 70px;
                max-width: 50%;
                justify-self: start !important;
                align-self: flex-start !important;
                margin-top: 6%;
                .hear{
                    font-size: 34px;
                    
                }
                .seci{
                    margin-left: 20px;
                    box-shadow: -10px -10px 0px 10px #56e5ab, 10px 10px 0px 10px #1b2e35;      
                    padding: 24px;
                    .question-section{
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                        align-items: flex-start;
                        font-size: 32px;
                        height: 92px;
                        margin-bottom: 24px;
                    }
                    .answer-section{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 24px;
                        button{
                            font-size: x-large;
                            padding: 12px 24px;
                            cursor: pointer;
                            text-align: start;
                            font-family: "Roboto";
                            border: 0px solid    black;
                            color: white;
                            background: #000000;
                            font-size: 22   px;
                            transition: 0.2s;
                            /* border-radius: 15px; */
                            height: 82px;
                        }
                        button:hover{
                            background-color: #56e5ab;
                            transform: scaleX(110%);
                            margin-left: 5%;
                        ;
                        }
                        button:active{

                        }
                    }
                }
            }
            
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        @media only screen and (max-width: 920px){
            .result{
                display: flex;
                flex-direction: column;
                h4{
                    font-size: 28px;
                    line-height: 130%;
                    margin-bottom: 12px;
                }
            }
                .desc_image{
                    width: 40%;
                    align-self: flex-end;
                    justify-self: end;
                    margin-top: 4%;
                }
                .FeDesc{
                    font-size: 20px;
                }
            .App{
                flex-direction: column-reverse;
                gap: 2%;
                justify-content: start;
                align-self: flex-start;
                .illustration{
                    margin-top: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    margin-left: 2%;
                    /* height: 14vh; */
                    margin-top: 24px;
                    img{
                        margin-left: 0;
                        width: 20vh;
                        position: absolute;
                        bottom: 10vh;
                       
                    }
                }
                .section{
                    max-width: 96%;
                    z-index: 9999;
                    .hear{
                        font-size: 26px;
                    }
                    .seci{
                        margin-left: 0;
                        padding: 12px 12px 12px 12px;
                        .question-section{
                            display: flex;
                            flex-direction: row;
                            gap: 12px;
                            height: 96px;
                            .question-text{
                                font-size: 26px;
                            }
                        }
                        
                        .answer-section{
                            margin-top: 12px;
                            button{
                                font-size: 16px;
                                height: 62px;
                            }                            
                        }
                    }
                }
            }
        }
    `
    return (
        <StyledTest>
            <Container className='App'>
                <div className='illustration'>
                    <img
                        src="/media/test.jpg"
                        alt="Направления айти в бишкеке"
                    />
                </div>
                <div className='section'>
                    <h3 className='hear'>
                        Этот тест поможет тебе определиться с выбором направления
                    </h3>
                    {showScore ? (
                        <WhoAmI />
                    ) : (

                        <div className='seci'>

                            <div className='question-section'>

                                <h3 className='question-text'>{questions[currentQuestion].questionText}</h3>
                                <CircularProgressWithLabel value={(currentQuestion + 1) * 10} />
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button key={currentQuestion} variant='contained' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </div>


                    )}
                </div>

            </Container>
        </StyledTest>
    )
}

export default TestPage