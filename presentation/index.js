import React, { Component } from 'react';

{/* Support style modification with emotion */}
import styled from 'react-emotion';

{/* Load in the components provided by spectacle */}
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
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
} from 'spectacle';

{/* Load in the external plugins */}
import Terminal from "spectacle-terminal";
import CodeSlide from 'spectacle-code-slide';

{/* Use the preloader for the images */}
import preloader from 'spectacle/lib/utils/preloader';

{/* Import the theme */}
import createTheme from "../default";

require('normalize.css');

{/* Load all of the images */}
const images = {
  CreateOrganization: require('../assets/images/CreateOrganization.png'),
  StartingOrganization: require('../assets/images/StartingOrganization.png'),
  GrantAccess: require('../assets/images/GrantAccess.png'),
  CreateRoster: require('../assets/images/CreateRoster.png'),
  StartCreatingAssignments: require('../assets/images/StartCreatingAssignments.png'),
  CreateAssignment: require('../assets/images/CreateAssignment.png'),
  ExampleAssignments: require('../assets/images/ExampleAssignments.png'),
};
preloader(images);

{/* Minimal horizontal padding between rows */}
var minimalHorizontalPadding = 20;

{/* Standard horizontal padding between rows */}
var standardHorizontalPadding = 40;

{/* Standard all-side margin size */}
var standardMargin = 40;

{/* Font used for all questions in section slides */}
var questionFont = "Roboto Slab";

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

{/* Create a emotion-styled PlainCite without italics */}
const PlainCite = styled(Cite)`
  font-style: normal;
  margin-left: 30px;
`;

{/* Create a emotion-styled SpacedBlockQuote that breathes */}
const SpacedQuote = styled(Quote)`
  line-height: 1.1;
`;

{/* Create a emotion-styled UpHeading that shifts up */}
const UpHeading = styled(Heading)`
  margin-top: -50px;
`;

{/* Create a emotion-styled BigImage that shifts left */}
const BigImage = styled(Image)`
  max-width: 110%;
  width: 110%;
`;

{/* Create a emotion-styled Fill with padding */}
const PaddedFill = styled(Fill)`
  margin-right: 110px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const LeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -100px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const BigLeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -120px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const BottomPaddedFill = styled(Fill)`
  margin-bottom: 40px;
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
    <FontAwesomeIcon icon={['fab', 'github']} transform="grow-20" color={darktext}/>
)

export const Comments = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} size="2x" transform="down-2, left-5" color={darktext}/>
)

export const CommentsShiftUp = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} transform="grow-8, left-2" color={darktext}/>
)

export const Python = () => (
    <FontAwesomeIcon icon={['fab', 'python']} transform="grow-20" color={darktext}/>
)

export const RepoFull = () => (
    <FontAwesomeIcon icon={['fas', 'square']} transform="grow-20" color={darktext}/>
)

export const RepoMinus = () => (
    <FontAwesomeIcon icon={['fas', 'minus-square']} transform="grow-20" color={darktext}/>
)

export const Toggle = () => (
    <FontAwesomeIcon icon={['fas', 'toggle-on']} transform="grow-20" color={darktext}/>
)

export const Travis = () => (
    <FontAwesomeIcon icon={['fas', 'user-secret']} transform="grow-20" color={darktext}/>
)

export const Twitter = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" transform="left-2" color="#1565c0"/>
  </div>
)

export const Map = () => (
  <FontAwesomeIcon icon={['fas', 'map']} size="2x" transform="down-3, left-2" color="#212121"/>
)

export const Web = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'globe']} size="3x" transform="left-2" color="#1565c0"/>
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
        contentHeight={700}
        contentWidth={1024}
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress={'none'}
      >

        {/* Slide { */}
        <Slide transition={['slide', 'spin']} bgColor="primary">

          <Heading size={1} fit lineHeight={1.2} bold textColor="darktext">
            A Hands-On Guide to!
          </Heading>

          <Heading size={1} fit lineHeight={1.4} bold textColor="darktext">
            Teaching Programming with
          </Heading>

          <Heading size={1} fit lineHeight={1.2} bold textColor="secondary">
            GitHub, Travis CI, and Python
          </Heading>

          <Layout>
            <Text height="20px">
            &nbsp;
            </Text>
          </Layout>

          <Text fit bold textColor="tertiary">
            Gregory M. Kapfhammer
          </Text>

          <Text bold textSize="1.5em" textColor="tertiary">
            July 28 at PyOhio 2018
          </Text>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide margin={-10} transitionDuration={0} transition={['']} bgColor="primary">

          <Layout>
            <BottomPaddedFill>
              <Text bold fit textColor="darktext">
                Hi! My name is
              </Text>
            </BottomPaddedFill>
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
              <Text fill bold textSize="2em" textColor="tertiary">
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
              <Text fill bold textSize="2em" textColor="tertiary">
                www.gregorykapfhammer.com
              </Text>
            </Fit>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">

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
                  Ask and answer questions about effective instruction in the programming field
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Exploring Technologies
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <GitHub/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Travis/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Python/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                GitHub
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Travis
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Python
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading margin={standardMargin} size={1}><GitHub/></Heading>
            <Heading fit size={1} textColor="secondary">GitHub</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading size={1}><Travis/></Heading>
            <Heading fit size={1} textColor="secondary">Travis</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading margin={standardMargin} size={1}><Python/></Heading>
            <Heading fit size={1} textColor="secondary">Python</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['slide']} bgColor="primary">
          <Layout>
            <Heading fit size={1} textColor="darktext">
              <CommentsShiftUp/> Why would I
            </Heading>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
              <Heading caps fill size={1} lineHeight={1.2} textFont={questionFont} textAlign="left" textColor="secondary">
                decide to use GitHub and Travis CI?
              </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation } */}

        {/* SECTION: Configure { */}

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">
          <Layout>
            <Heading fit size={1} textColor="darktext">
              <CommentsShiftUp/> How should I
            </Heading>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
              <Heading caps fill size={1} lineHeight={1.2} textFont={questionFont} textAlign="left" textColor="secondary">
                setup and use GitHub Classroom?
              </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide', 'spin']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Create a GitHub organization for your course</Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.CreateOrganization}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Heading fit size={1} textColor="darktext">
            Now you have an empty organization
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.StartingOrganization}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Heading fit size={1} textColor="darktext">
            Let GitHub Classroom access the organization
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.GrantAccess}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Heading fit size={1} textColor="darktext">
            Create a student roster for the Classroom
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.CreateRoster}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Heading fit size={1} textColor="darktext">
            Create an assignment for your course
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.StartCreatingAssignments}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Create two repositories for each assignment
          </Heading>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Using Travis CI
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <RepoFull/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <RepoMinus/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Toggle/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Starter
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Solution
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Check
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            The starter repository should <em>not</em> pass the tests
          </Heading>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transition={['slide', 'spin']}>
          <Heading fit size={1} textColor="darktext">
            Create an assignment using the solution
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.CreateAssignment}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['slide']}>
          <Heading fit size={1} textColor="darktext">
            A classroom will contain many assignments
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.ExampleAssignments}/>
        </Slide>
        {/* Slide } */}

        {/* SECTION: Configure } */}

        {/* SECTION: Check { */}

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">
          <Layout>
            <Heading fit size={1} textColor="darktext">
              <CommentsShiftUp/> How do you
            </Heading>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
              <Heading fill caps size={1} lineHeight={1.2} textFont={questionFont} textAlign="left" textColor="secondary">
               automatically check student submissions?
              </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={[ "spin", "slide" ]} bgColor="primary">
          <Heading size={ 2 } caps fit textColor="tertiary">Terminal</Heading>
          <Terminal title="1. gkapfham: ~(zsh)" output={[
            "npm test",
            <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
            <div>
              <div>=============================== Coverage summary ===============================</div>
              <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
              <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
              <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
              <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
              <div>================================================================================</div>
            </div>]}
          />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/travis.yml")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [7, 11] },
            { loc: [12, 16] },
          ]}/>
        {/* Slide } */}

        {/* SECTION: Check } */}

        {/* SECTION: Feedback { */}

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">
          <Layout>
            <Heading fit size={1} textColor="darktext">
              <CommentsShiftUp/> What do the
            </Heading>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
              <Heading caps fill size={1} lineHeight={1.2} textFont={questionFont} textAlign="left" textColor="secondary">
               students think about this idea?
              </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['spin']} bgColor="primary">
          <BlockQuote>
            <SpacedQuote textSize="2em" textColor="darktext">

              This approach ensures that the source code and GitHub
              repositories are organized. It is easier for me to help the
              students who are struggling in an introductory course.

            </SpacedQuote>
            <PlainCite bold caps textSize="2em">
              Saejin Mahlau-Heinert
            </PlainCite>
          </BlockQuote>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Feedback } */}

        {/* SECTION: Conclusion { */}

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">
          <Layout>
            <Heading fit size={1} textColor="darktext">
              <CommentsShiftUp/> How can we
            </Heading>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Heading caps fill size={1} lineHeight={1.2} textAlign="left" textColor="secondary">
              improve and study this approach?
            </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}


        {/* SECTION: Conclusion } */}

        {/* Slide { */}
        <Slide bgColor="primary">
        </Slide>
        {/* Slide } */}

      </Deck>
    );
  }
}
