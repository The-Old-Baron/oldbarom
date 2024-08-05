import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Login.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { signIn } from 'aws-amplify/auth';
import  { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text, Heading, useAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Loading from '../../../components/Loading/Loading';
import TemeSwitcher from '../../../components/ThemeSwitch/Switcher';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

Amplify.configure(awsconfig);
library.add(fab);

const components = {
    Header() {
        const { tokens } = useTheme();

    return (
      <div>
        <h1 className="text-center text-xl-start">Welcome Back</h1>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
          </div>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View  padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};
export default class Login extends Component {
  static propTypes = {
    userHasAuthenticated: PropTypes.func.isRequired,
  };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            await signIn(this.state.email, this.state.password);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
            console.log(e);
            console.log(e.message);
        }
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    
    
    render() {
      const childProps = {
        isAuthenticated: this.state.isAuthenticated,
        userHasAuthenticated: this.userHasAuthenticated,
      };
        if (this.props.user) {
          this.props.navigate('/home');
          return null; // Não renderiza nada se o usuário estiver logado
        }
        return (
          <div>
            
            <Loading />
            <div className="page-wrapper">
              <section className="position-relative h-100 pt-3">
                <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                  <div
                    className="w-100 align-self-end pt-1 pt-md-4 "
                    style={{ maxWidth: "526px" }}
                  >
                    <p className="text-center text-xl-start pb-3 mb-3">
                      Don’t have an account yet?{" "}
                      <a href="account-signup.html">Register here.</a>
                    </p>
                    <Authenticator >
              {({ signOut, user }) => (
                <main>
                  <Heading level={1}>Hello {user.username}</Heading>
                  <Button onClick={signOut}>Sign out</Button>
                </main>
              )}
            </Authenticator>
                    <a href="" className="btn btn-link btn-lg w-100">
                      Forgot your password?
                    </a>
                    <hr className="my-4" />
                    <h6 className="text-center mb-4">
                      Or sign in with your social network
                    </h6>
                    <div className="row row-cols-1 row-cols-sm-2">
                      <div className="col mb-3">
                        <a
                          href="#"
                          className="btn btn-icon btn-secondary btn-google btn-lg w-100"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "google"]}
                            className="fs-xl me-2"
                          />
                          Google
                        </a>
                      </div>
                      <div className="col mb-3">
                        <a
                          href="#"
                          className="btn btn-icon btn-secondary btn-facebook btn-lg w-100"
                        >
                          <FontAwesomeIcon
                            icon="fa-brands fa-facebook"
                            className="fs-xl me-2"
                          />
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
                  style={{ backgroundImage: "url(/img/account/signin-bg.jpg)" }}
                ></div>
              </section>
            </div>
            <div style={{ display: "none" }}>
              <TemeSwitcher />
            </div> 
          </div>
        );
    }
}