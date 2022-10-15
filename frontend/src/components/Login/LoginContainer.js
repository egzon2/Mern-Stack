import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Reusables/Message';
import Loader from '../Reusables/Loader';
import { login } from '../../actions/userActions';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section id="login-container" className="section-padding">
      <Container className="container py-12 px-6 h-full pt-10">
        <div className="xl:w-11/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <Row className="justify-content-center">
              <Col lg={6} md={10} sm={12} xs={12} style={{ padding: '50px' }}>
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="mb-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Welcome back
                        </h1>
                      </div>
                      {loading && <Loader />}
                      {error && <Message variant="danger">{error}</Message>}

                      <form
                        onSubmit={submitHandler}
                        className="mx-auto max-w-screen-md mt-8"
                      >
                        <Form.Group controlId="email" className="mb-4">
                          <Form.Label for="email">Email</Form.Label>

                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="password" className="mb-4">
                          <Form.Label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </Form.Label>

                          <div className="relative">
                            <Form.Control
                              type="password"
                              placeholder="Enter password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            ></Form.Control>
                          </div>
                        </Form.Group>

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
                          Sign In
                        </button>
                        <div className="mb-4 mt-2">
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?{' '}
                            <Link
                              to={
                                redirect
                                  ? `/register?redirect=${redirect}`
                                  : '/register'
                              }
                              className="register-link font-medium text-amber-500 hover:underline dark:text-amber-400"
                              style={{ color: '#0066b2', paddingLeft: '7px' }}
                            >
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                lg={6}
                md={10}
                sm={12}
                xs={12}
                style={{ backgroundColor: 'black', padding: '10px' }}
              >
                <div>
                  <div className="text-white px-4 py-3 md:p-10 md:mx-6">
                    <img
                      src="https://i.im.ge/2022/09/12/1M8nD0.amazon-1869030-1.png"
                      width={100}
                      height={100}
                    />
                    <h1 className="text-[2.5rem] mb-6 leading-10">
                      Travel the world from home with Amazon.
                    </h1>
                    <p className="text-m">
                      Amazon Explore allows customers to bring global flavors,
                      sounds, scenes, and culture into their homes with the help
                      of local experts.
                    </p>

                    <div className="flex items-center">
                      <div className="flex mb-5 -space-x-4 pt-6">
                        <img
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{ borderRadius: '50px' }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          width={50}
                        ></img>
                        <img
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '10px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          width={50}
                        ></img>
                        <img
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '20px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                          width={50}
                        ></img>
                        <img
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          style={{
                            borderRadius: '50px',
                            position: 'relative',
                            right: '30px',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                          width={50}
                        ></img>
                      </div>

                      <div className="ml-5 border-l-2 pl-5">
                        <a className="">
                          <p className="font-light text-gray-100 dark:text-gray-400">
                            Over <span className="font-bold">15.7k</span> Happy
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

export default Login;
