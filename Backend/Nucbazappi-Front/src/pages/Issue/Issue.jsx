import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled } from './IssueStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';
import {
  issueInitialValues,
  issueValidationSchema,
  validateInitialValues,
  validateValidationSchema,
} from '../../formik';
import { setCurrentUser, setVerified } from '../../redux/user/userSlice';
import { ADMIN } from '../../utils';
import { createIssue } from '../../axios/axios-issue';

const Issue = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.rol !== ADMIN) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={issueInitialValues}
        validationSchema={issueValidationSchema}
        onSubmit={async values => {
          await createIssue(
            values.title,
            values.description,
            values.priority,
            currentUser
          );
          navigate('/');
        }}
      >
        <Form>
          <LoginInput name='title' type='text' placeholder='title' />
          <LoginInput
            name='description'
            type='text'
            placeholder='description'
          />
          <LoginInput name='priority' type='number' placeholder='priority' />
          <Submit>Crear</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Issue;
