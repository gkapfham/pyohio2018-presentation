import React, { Component } from 'react';

import styled from 'react-emotion';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

require('normalize.css');

{/* Font used for all questions in section slides */}
var questionFont = "Permanent Marker";

{/* FontAwesome: Define the colors for the theme */}
var primary = '#bdbdbd';
var secondary =  '#d84315';
var secondarylight = "#ff6e40";
var tertiary = '#1565c0';
var lighttext = '#9e9e9e';
var darktext = '#212121';
var lighttext = '#9e9e9e';

{/* Spectacle: Define the colors for the theme */}
const theme = createTheme({
  primary: '#bdbdbd',
  secondary: '#d84315',
  secondarylight: "#ff6e40",
  tertiary: '#1565c0',
  darktext: '#212121',
  lighttext: '#9e9e9e'
});

{/* Create a emotion-styled Fill with padding */}
const PaddedFill = styled(Fill)`
  margin-right: 110px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const LeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  margin-left: -100px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fit with padding */}
const PaddedFit = styled(Fit)`
  margin-right: 100px;
  justify-content: space-between;
`;

{/* Import all of the libraries from FontAwesomeIcon */}
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

{/* Add all of the libraries to the main library */}
library.add(fab, far, fas)

{/* Declare all of the specific icons used in the slides */}

export const Archive = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'archive']} size="3x" color="#212121"/>
  </div>
)

export const GitHub = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'github']} size="3x" color={darktext}/>
  </div>
)

export const Comments = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} size="2x" transform="down-2, left-5" color={darktext}/>
)

export const CommentsShiftUp = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} size="2x" transform="down-1, left-5" color={darktext}/>
)

export const Python = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'python']} size="3x" color={darktext}/>
  </div>
)

export const Travis = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'user-secret']} size="3x" color={darktext}/>
  </div>
)

export const Twitter = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" color="#1565c0"/>
  </div>
)

export const Map = () => (
  <FontAwesomeIcon icon={['fas', 'map']} size="2x" transform="down-3, left-2" color="#212121"/>
)

export const Web = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'globe']} size="3x" color="#1565c0"/>
  </div>
)

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {

    {/* Create the Deck of slides with no controls and no progress bars */}
    return (
      <Deck
        transition={['slide']}
        transitionDuration={0}
        theme={theme}
        controls={false}
        progress={'none'}
      >

        {/* Slide { */}
        <Slide bgColor="primary">

          <Text textSize="3em" textColor="darktext" bold>
            A Hands-On Guide to Teaching Programming with
          </Text>

          <Text textSize="2.1em" textColor="secondary" bold>
            GitHub, Travis CI, and Python
          </Text>

          <Layout>
            <Text height="20px">
            &nbsp;
            </Text>
          </Layout>

          <Text bold caps textColor="tertiary">
            Gregory M. Kapfhammer
          </Text>

          <Text bold textColor="tertiary">
            July 28 at PyOhio 2018
          </Text>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide margin={-10} bgColor="primary">

          <Layout>
            <Fill>
              <Text bold fit textColor="darktext">
                Hi! My name is
              </Text>
            </Fill>
          </Layout>

          <Layout>
            <Text height="20px">
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Text bold fit caps textColor="secondary">
                Gregory M. Kapfhammer
              </Text>
            </Fill>
          </Layout>

          <Layout>
            <Text height="20px">
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Twitter/>
            </Fit>
            <Fit>
              <Text bold margin="10px 0px 0px 25px" textSize="2em" textColor="tertiary">
                @GregKapfhammer
              </Text>
            </Fit>
          </Layout>

          <Layout>
            <Text height="20px">
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Web/>
            </Fit>
            <Fit>
              <Text bold margin="10px 0px 0px 25px" textSize="2em" textColor="tertiary">
                www.gregorykapfhammer.com
              </Text>
            </Fit>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold fit textSize="3em" textColor="darktext">
                  <Map/>
                  Roadmap for this Talk
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Text height="40px">
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="2em" textColor="secondary">
                  Ask and answer questions about the teaching of programming
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Text height="20px">
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="2em" textColor="tertiary">
                  Like, "How can I automatically grade student submissions?"
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={1000} bgColor="primary">

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="3em" textColor="darktext">
                  Exploring these Technologies
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Text height="50px">
              &nbsp;
            </Text>
          </Layout>

        <Layout>

          <Appear order={2} transitionDuration={100}>
            <LeftShiftPaddedFill>
              <Text textSize="2em" bold>
                <Travis/>
              </Text>
              <Heading size={2}>Travis</Heading>
            </LeftShiftPaddedFill>
          </Appear>

          <Appear order={1} transitionDuration={100}>
            <PaddedFill>
              <Text textSize="2em" bold>
                <GitHub/>
              </Text>
              <Heading size={2}>GitHub</Heading>
            </PaddedFill>
          </Appear>

          <Appear order={3} transitionduration={100}>
            <PaddedFill>
              <Text textSize="2em" bold>
                <Python/>
              </Text>
              <Heading size={2}>Python</Heading>
            </PaddedFill>
          </Appear>

        </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation { */}

        {/* Slide { */}
        <Slide bgColor="primary">

          <Layout>
            <Text  textSize="2em" margin={-2} fill textColor="darktext" bold textAlign="left">
            <CommentsShiftUp/>
            </Text>
            <Text textSize="4.25em" margin={-8} fill textColor="darktext" bold textAlign="left">
              Why would I
            </Text>
          </Layout>

          <Layout>
            <Text textFont={questionFont} textSize="4em" fill textColor="secondary" textAlign="left">
              decide to use GitHub and Travis CI?
            </Text>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation } */}

        {/* SECTION: Configure { */}

        {/* Slide { */}
        <Slide bgColor="primary">

          <Layout>
            <Text textSize="2em" margin={-2} fill textColor="darktext" bold textAlign="left">
            <Comments/>
            </Text>
            <Text textSize="5em" margin={-8} fill textColor="darktext" bold textAlign="left">
              How do I
            </Text>
          </Layout>

          <Layout>
            <Text textFont={questionFont} textSize="4em" fill textColor="secondary" textAlign="left">
              configure and use GitHub Classroom?
            </Text>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Configure } */}

        {/* SECTION: Check { */}

        {/* Slide { */}
        <Slide bgColor="primary">

          <Layout>
            <Text textSize="2em" margin={-2} fill textColor="darktext" bold textAlign="left">
            <Comments/>
            </Text>
            <Text textSize="5em" margin={-8} fill textColor="darktext" bold textAlign="left">
              How do I
            </Text>
          </Layout>

          <Layout>
            <Text textFont={questionFont} textSize="4em" fill textColor="secondary" textAlign="left">
              automatically check student submissions?
            </Text>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Check } */}


      </Deck>
    );
  }
}
