import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import sudoku from './img/sudoku-demo.png'; // Tell webpack this JS file uses this image
import Background from './components/Background';
import TwoZeroFourEightDemo from './img/2048.png';
import DobutsuShogi from './img/dobutsu-shogi.png';
import Siege from './img/siege.png';
import Snake from './img/snake.png';
import Typography from '@material-ui/core/Typography';

const WIDTH = '325px';
const MEDIA_HEIGHT = '140px';

const DisplayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Filler = styled.div`
  width: ${WIDTH};
  margin: 10px;
`;
const Copyright = styled.div`
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: center;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '/',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    this.setState({ redirect: url });
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <DisplayContainer>
          <ProjectCard
            width={WIDTH}
            height={MEDIA_HEIGHT}
            img={Snake}
            title='Snake'
            subTitle='developed in 2019'
            description='A simple retro pixel snake game that brings back memory'
            handleClick={() => {
              this.handleClick('/snake');
            }}
            stacks={['React']}
          />
          {/* <ProjectCard
            width={WIDTH}
            height={MEDIA_HEIGHT}
            img={TwoZeroFourEightDemo}
            title='Tetrix'
            subTitle='developed in 2019'
            description="Who doesn't love tetrix ? Another epic childhood memory."
            handleClick={() => {
              this.handleClick('/tetrix');
            }}
          /> */}
          <ProjectCard
            width={WIDTH}
            height={MEDIA_HEIGHT}
            img={TwoZeroFourEightDemo}
            title='2048 Clone'
            subTitle='developed in 2020'
            description='A clone of 2048, with Score recorded in the local storage'
            handleClick={() => {
              this.handleClick('/2048');
            }}
            stacks={['React']}
          />
          <ProjectCard
            width={WIDTH}
            img={sudoku}
            height={MEDIA_HEIGHT}
            title='Sudoku Solver'
            subTitle='developed in 2020'
            description='Solving sudoku puzzle with input number provided, returning all possible solutions.'
            handleClick={() => {
              this.handleClick('/sudokusolver');
            }}
            stacks={['React', 'Lambda']}
          />
          <ProjectCard
            width={WIDTH}
            img={DobutsuShogi}
            height={MEDIA_HEIGHT}
            title='Dobutsu Shogi'
            subTitle='developed in 2020'
            description='Familarise yourself with Mini Shogi. Have fun with your friend!'
            handleClick={() => {
              this.handleClick('/dobutsushogi');
            }}
            stacks={['React']}
          />
          <ProjectCard
            width={WIDTH}
            img={Siege}
            height={MEDIA_HEIGHT}
            title='Siege'
            subTitle='developed in 2020'
            description="Love to play game of Go but don't have much time? Try Siege"
            handleClick={() => {
              this.handleClick('/siege');
            }}
            stacks={['React']}
          />
          {/* <ProjectCard
            width={WIDTH}
            img={Siege}
            height={MEDIA_HEIGHT}
            title="Logic Simulator"
            description="Want to build your own abstructive logic gates ? Put your hands on it"
            handleClick={() => {
              this.handleClick("/logicsimulator");
            }}
          /> */}
          <Filler />
          <Filler />
          <Filler />
          <Filler />
          <Filler />
          <Filler />
        </DisplayContainer>
        <Redirect to={this.state.redirect} />
        <Copyright>
          <Typography variant='p' component='p' color='#3b3e40'>
            Copyright &copy; 2021 Jiajin Zheng. All rights reserved.
          </Typography>
        </Copyright>
      </React.Fragment>
    );
  }
}
export default Home;
