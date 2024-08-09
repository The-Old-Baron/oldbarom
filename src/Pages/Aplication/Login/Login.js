import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import  { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text, Heading, useAuthenticator } from '@aws-amplify/ui-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '@aws-amplify/ui-react/styles.css';
import "./Login.css";

import PropTypes from 'prop-types';

import { UserContext } from './UserContext';

import Loading from '../../../components/Loading/Loading';
import TemeSwitcher from '../../../components/ThemeSwitch/Switcher';

import awsconfig from '../../../aws-exports';

Amplify.configure(awsconfig);
library.add(fab);

const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <div>
          <View textAlign="center" padding={tokens.space.large}>
            <Image
              alt="Amplify logo"
              src="/logo512.png"  
              width="100px"
              height="100px"
              textAlign="center"
            />
          </View>
        </div>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View  padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved 2024
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
          className="text-primary"
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
      return (
        <Heading
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text></Text>;
    },
  },
  
  SetupTotp: {
    Header() {
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

export default class Login extends Component {

  static contextType = UserContext;

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
    try {
      window.location.href = '/aplications';
    } catch (e) {
      console.error(e.message);
    }
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
    
  render() {
    const {setUser}= this.context;

    return (
      <div>
        <Loading />
        <div className="page-wrapper">
          <section className="position-relative h-100">
            <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
              <div
                className="w-100 align-self-end "
                style={{ maxWidth: "526px" }}
              >
                <Authenticator components={components} >
                  {({ signOut, user }) => {
                    setUser(user);
                    this.handleSubmit();
                    return (
                      <div id="loader-wrapper">
                        <div id="loader"></div>
                        <div class="loader-section section-left"></div>
                        <div class="loader-section section-right"></div>
                      </div>
                    );
                  }}
                </Authenticator>
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