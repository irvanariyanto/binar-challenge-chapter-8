import React from "react";
import Input from "../components/Input";
import Result from "../components/Result";

class CreatePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      experience: 0,
      showResult: false,
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(event, stateName) {
    this.setState({
      [stateName]: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Create Player</h1>
        <div className="container mt-5">
          <Input value={this.state.username} onChange={(event) => this.onChangeInput(event, "username")} label="Username"/>
          <Input value={this.state.email} onChange={(event) => this.onChangeInput(event, "email")} label="Email"/>
          <Input value={this.state.password} onChange={(event) => this.onChangeInput(event, "password")} label="Password"/>
          <Input value={this.state.experience} onChange={(event) => this.onChangeInput(event, "experience")} label="Experience"/>
          
          
          
          <button type="submit" className="btn btn-outline-dark" onClick={() => {
            if (this.state.username && this.state.email && this.state.password) {
              this.setState({showResult: true})
            }
          }}>Create</button>
          <button type="submit" className="btn btn-outline-danger" onClick={() => this.setState({showResult: false})}>Reset</button>

          {
            this.state.showResult ? <div className="d-flex mt-3">
              <div className="justify-content-center align-items-center">

                <Result username={this.state.username} email={this.state.email} password={this.state.password} experience={this.state.experience}/>
              </div>
            </div> : <div className="mt-5"><h1>No content</h1></div>
          }
        </div>
      </>
    )
  }
}

export default CreatePlayer;
