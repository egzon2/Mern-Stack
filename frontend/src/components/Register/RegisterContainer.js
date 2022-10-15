import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Reusables/Message';
import Loader from '../Reusables/Loader';
import { toast } from 'react-toastify';
import { register } from '../../actions/userActions';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import firebaseApp from '../../firebase/firebaseInit';
const RegisterContainer = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warning('Passwords do not match!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <section id="register-container" className="section-padding">
      <Container class="container py-12 px-6 h-full pt-10">
        <div class="xl:w-11/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <Row className="justify-content-center">
              <Col lg={6} md={10} sm={12} xs={12} style={{ padding: '50px' }}>
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div className="mb-4">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Create Account
                        </h1>
                      </div>
                      {loading && <Loader />}
                      {error && <Message variant="danger">{error}</Message>}
                      {/* <div className="register-form"> */}
                      <form
                        onSubmit={submitHandler}
                        className="mx-auto max-w-screen-md mt-8"
                      >
                        <Form.Group controlId="name" className="mb-4">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="name"
                            placeholder="Enter name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email" className="mb-4">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="password" className="mb-4">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group
                          controlId="confirmPassword"
                          className="mb-4"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <div className="mb-4 ">
                          <button
                            type="submit"
                            className="register-btn w-full text-white"
                            style={{
                              background: '#0066b2',
                              width: '100%',
                              margin: '20px 0',
                              padding: '10px 0',
                              borderRadius: '10px',
                            }}
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="mb-4">
                          Already have an account?
                          <Link
                            to={
                              redirect
                                ? `/login?redirect=${redirect}`
                                : '/login'
                            }
                            className="login-link"
                            style={{ color: '#0066b2', paddingLeft: '7px' }}
                          >
                            Login
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                lg={6}
                md={10}
                sm={12}
                xs={12}
                style={{ backgroundColor: 'black', padding: '10% 10px' }}
              >
                <div>
                  <div class="text-white px-4 py-3 md:p-10 md:mx-6">
                    <img
                      src="https://i.im.ge/2022/09/12/1M8nD0.amazon-1869030-1.png"
                      width={100}
                      height={100}
                    />
                    <h1 class="text-[2.5rem]  mb-6 leading-10">
                      Travel the world from home with Amazon.
                    </h1>
                    <p class="text-m">
                      Amazon Explore allows customers to bring global flavors,
                      sounds, scenes, and culture into their homes with the help
                      of local experts.
                    </p>

                    <div class="flex items-center">
                      <div class="flex mb-5 -space-x-4 pt-6">
                        <img
                          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{ borderRadius: '50px' }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          width={50}
                        ></img>
                        <img
                          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '10px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          width={50}
                        ></img>
                        <img
                          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '20px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                          width={50}
                        ></img>
                        <img
                          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '30px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                          width={50}
                        ></img>
                      </div>

                      <div class="ml-5 border-l-2 pl-5">
                        <a class="">
                          <p class="font-light text-gray-100 dark:text-gray-400">
                            Over <span class="font-bold">15.7k</span> Happy
                            Customers
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegisterContainer;
