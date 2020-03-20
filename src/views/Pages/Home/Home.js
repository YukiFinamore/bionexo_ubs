import React, { Component } from 'react';

class Home extends Component {
  state = {
    credentials: {
      login: '',
      password: ''
    }
  }

  render() {
    const submitHandler = this.state.credentials.login && this.state.credentials.password ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Home</h1>
                </div>
              </div>

              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Cadastro</h2>
                    <p>Para realizar um cadastro entre em contato com a MCR.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home