import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Progress from '../Components/Progress';
import SkyblueButton from '../Components/SkyblueButton';
import { check, next } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, idx) => {
          return (
            <li key={idx}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
              {idx === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </React.Fragment>
  );
}
