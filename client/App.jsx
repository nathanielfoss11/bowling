import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

class BowlingGame extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      frame: 1,
      ball: 1,
      1: [], 
      2: [],
      3: [], 
      4: [],
      5: [], 
      6: [],
      7: [], 
      8: [],
      9: [], 
      10: [],
      spare: false,
      strikeStreak: 0,
      strikeThrows: [],
    }
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(event) {
    let emptyArr = [];
    let value = Number(event.target.value);
    let currentFrame = this.state.frame;
    let newFrame = this.state.frame + 1;
    let frameScore = this.state[this.state.frame][0] + value;
    let frame = this.state[this.state.frame];
    let strikeThrow = this.state.strikeThrows
    frame.push(Number(value));
    if(this.state.strikeStreak > 0) {
      strikeThrow.push(value);
      this.setState({strikeThrows: strikeThrow});
    }
    if (this.state.ball === 1 && value < 10 && this.state.spare === false) {
      this.setState({ball: 2});
      this.setState({[currentFrame]: frame});

    } else if (this.state.ball === 1 && this.state.spare === true) {
      let lastFrameScore = 10 + value;
      let newScore =  lastFrameScore + this.state.score;
      this.setState({spare: false});
      this.setState({score: newScore});
      this.setState({ball: 2});

    } else if (this.state.ball === 1 && value === 10) {
      let strikeStreak = this.state.strikeStreak + 1;
      if(this.state.strikeStreak === 0) {
        let strikeThrow = this.state.strikeThrows
        strikeThrow.push(value);
      }
      frame.push(0);
      this.setState({frame: newFrame});
      this.setState({strikeStreak: strikeStreak});

    } else if(this.state.ball === 2 && this.state.strikeStreak === 1){
      let lastFrameScore = 10 + frameScore;
      let newScore =  lastFrameScore + frameScore + this.state.score;
      this.setState({frame: newFrame});
      this.setState({strikeStreak: 0});
      this.setState({score: newScore});
      this.setState({ball: 1});
      this.setState({strikeThrows: emptyArr});

    } else if(this.state.ball === 2 && this.state.strikeStreak > 1 && frameScore < 10){
      let streak = this.state.strikeStreak;
      let newScore = this.state.score;
      for (let i = 1; i < strikeThrow.length - 2; i++) {
        newScore += strikeThrow[i] + strikeThrow[i++] + 10
      }
      this.setState({score: newScore})
      this.setState({frame: newFrame});
      this.setState({strikeStreak: 0});
      this.setState({ball: 1});
      this.setState({strikeThrows: emptyArr});

    } else if (this.state.ball === 2 && frameScore === 10) {
      let newScore = this.state.score
      if(this.state.strikeStreak > 0){
        for (let i = 1; i < strikeThrow.length - 1; i++) {
          newScore += strikeThrow[i] + strikeThrow[i+1] + 10
          console.log(strikeThrow[i])
          console.log(strikeThrow[i+1])
        }
        this.setState({score: newScore})
      }
      this.setState({spare: true});
      this.setState({frame: newFrame});
      this.setState({ball: 1});
    } else {
      let newScore = frame[0] + frame[1] + this.state.score;
      this.setState({score: newScore});
      this.setState({[currentFrame]: frame});
      this.setState({ball: 1});
      this.setState({frame: newFrame});
      this.setState({spare: false});
      this.setState({strikeStreak: 0});
      this.setState({strikeThrows: emptyArr});
    }
  }

  render() {
    let frame1Score, frame2Score, frame3Score, frame4Score, frame5Score, frame6Score, frame7Score, frame8Score, frame9Score, frame10Score, frame, score, ball;
    let frame1 = <p>{this.state[1][0] + ` - ${this.state[1][1]}`}</p>
    let frame2 = <p>{this.state[2][0]} - {this.state[2][1]}</p>
    let frame3 = <p>{this.state[3][0]} - {this.state[3][1]}</p>
    let frame4 = <p>{this.state[4][0]} - {this.state[4][1]}</p>
    let frame5 = <p>{this.state[5][0]} - {this.state[5][1]}</p>
    let frame6 = <p>{this.state[6][0]} - {this.state[6][1]}</p>
    let frame7 = <p>{this.state[7][0]} - {this.state[7][1]}</p>
    let frame8 = <p>{this.state[8][0]} - {this.state[8][1]}</p>
    let frame9 = <p>{this.state[9][0]} - {this.state[9][1]}</p>
    let frame10 = <p>{this.state[10][0]} - {this.state[10][1]}</p>
    if(this.state.frame > 1) {
      frame1Score = <p>{this.state[1][0] + this.state[1][1]}</p>
    }
    if(this.state.frame > 2) {
      frame2Score = <p>{this.state[2][0] + this.state[2][1]}</p>
    }
    if(this.state.frame > 3) {
      frame3Score = <p>{this.state[3][0] + this.state[3][1]}</p>
    }
    if(this.state.frame > 4) {
      frame4Score = <p>{this.state[4][0] + this.state[4][1]}</p>
    }
    if(this.state.frame > 5) {
      frame5Score = <p>{this.state[5][0] + this.state[5][1]}</p>
    }
    if(this.state.frame > 6) {
      frame6Score = <p>{this.state[6][0] + this.state[6][1]}</p>
    }
    if(this.state.frame > 7) {
      frame7Score = <p>{this.state[7][0] + this.state[7][1]}</p>
    }
    if(this.state.frame > 8) {
      frame8Score = <p>{this.state[8][0] + this.state[8][1]}</p>
    }
    if(this.state.frame > 9) {
      frame9Score = <p>{this.state[9][0] + this.state[9][1]}</p>
    }
    if(this.state.frame > 10) {
      frame10Score = <p>{this.state[10][0] + this.state[10][1]}</p>
      frame = <p>Frame: Game Over</p>
      ball = <p>Ball: Game Over</p>
      score = <p><b>Final Score: {this.state.score}</b></p>
    } else {
      frame = <p>Frame: {this.state.frame}</p> 
      ball = <p>Ball: {this.state.ball}</p>
      score = <p>Score: {this.state.score}</p>
    }
    return (
      <Container>
        <Col>
          <Row>
            <h1>Bowling Game</h1>
          </Row>
        <Row>
          <Col>
            {score}
          </Col>
          <Col>
            {frame}       
          </Col>
          <Col>
            {ball}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              Frame 1
            </Row>
            <Row>
              {frame1}
            </Row>
            <Row>
              {frame1Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 2
            </Row>
            <Row>
              {frame2}
            </Row>
            <Row>
              {frame2Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 3
            </Row>
            <Row>
              {frame3}
            </Row>
            <Row>
              {frame3Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 4
            </Row>
            <Row>
              {frame4}
            </Row>
            <Row>
              {frame4Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 5
            </Row>
            <Row>
              {frame5}
            </Row>
            <Row>
              {frame5Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 6
            </Row>
            <Row>
              {frame6}
            </Row>
            <Row>
              {frame6Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 7
            </Row>
            <Row>
              {frame7}
            </Row>
            <Row>
              {frame7Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 8
            </Row>
            <Row>
              {frame8}
            </Row>
            <Row>
              {frame8Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 9
            </Row>
            <Row>
              {frame9}
            </Row>
            <Row>
              {frame9Score}
            </Row>
          </Col>
          <Col>
            <Row>
              Frame 10
            </Row>
            <Row>
              {frame10}
            </Row>
            <Row>
              {frame10Score}
            </Row>
          </Col>
        </Row>
            <br />
            <br />
        <Row>
          <Col>
            <Button onClick={this.handlePinClick} value={1}>1</Button>
          </Col>
          <Col>
            <Button onClick={this.handlePinClick} value={2}>2</Button>
          </Col>
          <Col>
            <Button onClick={this.handlePinClick} value={3}>3</Button>
          </Col>
        </Row>
          <Row>
            <Col>
              <Button onClick={this.handlePinClick} value={4}>4</Button>
            </Col>
            <Col>
              <Button onClick={this.handlePinClick} value={5}>5</Button>
            </Col>
            <Col>
              <Button onClick={this.handlePinClick} value={6}>6</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.handlePinClick} value={7}>7</Button>
            </Col>
            <Col>
              <Button onClick={this.handlePinClick} value={8}>8</Button>
            </Col>
            <Col>
              <Button onClick={this.handlePinClick} value={9}>9</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.handlePinClick} value={10}>10</Button>
            </Col>
            <Col>
              <Button onClick={this.handlePinClick} value={0}>0</Button>
            </Col>
            <Col>
              &nbsp;
            </Col>
          </Row>
        </Col>
      </Container>
    )
  }
};

export default BowlingGame;