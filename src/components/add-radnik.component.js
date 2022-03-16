import React, { Component } from "react";
import RadnikDataService from "../services/radnik.service";

export default class AddRadnik extends Component {
  constructor(props) {
    super(props);
    this.onChangeIme = this.onChangeIme.bind(this);
    this.onChangePrezime = this.onChangePrezime.bind(this);
    this.onChangeImeOca = this.onChangeImeOca.bind(this);
    this.saveRadnik = this.saveRadnik.bind(this);
    this.newRadnik = this.newRadnik.bind(this);

    this.state = {
      id: null,
      ime: "",
      prezime: "",
      imeOca: "",

      submitted: false
    };
  }

  onChangeIme(e) {
    this.setState({
      ime: e.target.value
    });
  }

  onChangePrezime(e) {
    this.setState({
      prezime: e.target.value
    });
  }

  onChangeImeOca(e) {
    this.setState({
     imeOca: e.target.value
    });
  }

  saveRadnik() {
    var data = {
      ime: this.state.ime,
      prezime: this.state.prezime,
      imeOca: this.state.imeOca
    };

    RadnikDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          ime: response.data.ime,
          prezime: response.data.prezime,
          imeOca: response.data.imeOca,

          submitted: true
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newRadnik() {
    this.setState({
      id: null,
      ime: "",
      prezime: "",
      imeOca: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Uspješno ste dodali!</h4>
            <button className="btn btn-success" onClick={this.newRadnik}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="ime">Ime</label>
              <input
                type="text"
                className="form-control"
                id="ime"
                required
                value={this.state.ime}
                onChange={this.onChangeIme}
                name="ime"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prezime">Prezime</label>
              <input
                type="text"
                className="form-control"
                id="prezime"
                required
                value={this.state.prezime}
                onChange={this.onChangePrezime}
                name="prezime"
              />
            </div>

            <div className="form-group">
              <label htmlFor="imeOca">Ime oca</label>
              <input
                type="text"
                className="form-control"
                id="imeOca"
                required
                value={this.state.imeOca}
                onChange={this.onChangeImeOca}
                name="imeOca"
              />
            </div>

            <button onClick={this.saveRadnik} className="btn btn-success">
              Dodaj
            </button>
          </div>
        )}
      </div>
    );
  }
}
