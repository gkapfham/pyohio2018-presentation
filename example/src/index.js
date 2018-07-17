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

{/* Define the colors for the theme */}
const theme = createTheme({
  primary: '#bdbdbd',
  secondary: '#d84315',
  tertiary: '#1565c0',
  darktext: '#212121',
  lighttext: '#9e9e9e'
});

{/* Create a emotion-styled Fill with padding */}
const PaddedFill = styled(Fill)`
  margin-right: 100px;
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

export const Twitter = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" color="#1565c0"/>
  </div>
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

    {/* Create the Deck of slides, with no controls and no progress bars */}
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
        controls={false}
        progress={'none'}
      >

        {/* Slide { */}
        <Slide transition={['zoom']} bgColor="primary">

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
        <Slide transition={['slide']} bgColor="primary">

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

        <Slide transition={['slide']} transitionDuration={500} margin="50px 0px 0px -125px" bgColor="primary">

        <Layout>

        <Appear>
        <PaddedFill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </PaddedFill>
        </Appear>

        <Appear>
        <PaddedFill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </PaddedFill>
        </Appear>

        <Appear>
        <PaddedFill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </PaddedFill>
        </Appear>

        </Layout>

        <Layout>

        <PaddedFill>
        <Text textSize="1em" bold>
        &nbsp;
        </Text>
        </PaddedFill>
        </Layout>

        <Layout>

        <Appear>
        <Fill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </Fill>
        </Appear>

        <Appear>
        <Fill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </Fill>
        </Appear>

        <Appear>
        <Fill>
        <Text textSize="2em" bold>
        <Archive/>
        </Text>
        <Heading size={2}>Process</Heading>
        </Fill>
        </Appear>

        </Layout>

        </Slide>

        <Slide transitionIn={['slide']} transitionOut={['slide', 'zoom']} transitionDuration={500} bgColor="primary">
          <Heading size={1} fit caps lineHeight={2} textColor="black">
            Spectacle Again
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            A ReactJS Presentation Library
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
        </Slide>

      </Deck>
    );
  }
}

