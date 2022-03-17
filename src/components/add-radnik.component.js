import React, { Component } from "react";
import RadnikDataService from "../services/radnik.service";

export default class AddRadnik extends Component {
  constructor(props) {
    super(props);
    this.onChangeJMB = this.onChangeJMB.bind(this);
    this.onChangeJMBG = this.onChangeJMBG.bind(this);
    this.onChangeIme = this.onChangeIme.bind(this);
    this.onChangePrezime = this.onChangePrezime.bind(this);
    this.onChangeImeOca = this.onChangeImeOca.bind(this);
    this.onChangeSpol = this.onChangeSpol.bind(this);
    this.onChangeDatumRodjenja = this.onChangeDatumRodjenja.bind(this);
    this.onChangeMjestoRodjenja = this.onChangeMjestoRodjenja.bind(this);
    this.onChangeOpcinaRodjenja = this.onChangeOpcinaRodjenja.bind(this);
    this.onChangeDrzavaRodjenja = this.onChangeDrzavaRodjenja.bind(this);
    this.onChangeOpcinaStanovanja = this.onChangeOpcinaStanovanja.bind(this);
    this.onChangeMjestoStanovanja = this.onChangeMjestoStanovanja.bind(this);
    this.onChangeUlica = this.onChangeUlica.bind(this);
    this.onChangeBrojUlice = this.onChangeBrojUlice.bind(this);
    this.onChangeNetoOsnovica = this.onChangeNetoOsnovica.bind(this);
    this.onChangeOrgDio = this.onChangeOrgDio.bind(this);
    this.onChangeOrgJedinica = this.onChangeOrgJedinica.bind(this);
    this.onChangeDatumZaposlenja = this.onChangeDatumZaposlenja.bind(this);
    this.onChangeRadnoMjesto = this.onChangeRadnoMjesto.bind(this);
    this.saveRadnik = this.saveRadnik.bind(this);
    this.newRadnik = this.newRadnik.bind(this);

    this.state = {
      id: null,
      jmb: "",
      jmbg: "",
      ime: "",
      prezime: "",
      imeOca: "",
      spol: "",
      datumRodjenja: "",
      mjestoRodjenja: "",
      opcinaRodjenja: "",
      drzavaRodjenja: "",
      opcinaStanovanja: "",
      mjestoStanovanja: "",
      ulica: "",
      brojUlice: "",
      netoOsnovica: "",
      orgDio: "",
      orgJedinica: "",
      datumZaposlenja: "",
      radnoMjesto: "",

      submitted: false
    };
  }

  onChangeJMB(e) {
    this.setState({
      jmb: e.target.value
    });
  }

  onChangeJMBG(e) {
    this.setState({
      jmbg: e.target.value
    });
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

  onChangeSpol(e) {
    this.setState({
      spol: e.target.value
    });
  }

  onChangeDatumRodjenja(e) {
    this.setState({
      datumRodjenja: e.target.value
    });
  }

  onChangeMjestoRodjenja(e) {
    this.setState({
      mjestoRodjenja: e.target.value
    });
  }

  onChangeOpcinaRodjenja(e) {
    this.setState({
      opcinaRodjenja: e.target.value
    });
  }

  onChangeDrzavaRodjenja(e) {
    this.setState({
      drzavaRodjenja: e.target.value
    });
  }

  onChangeOpcinaStanovanja(e) {
    this.setState({
      opcinaStanovanja: e.target.value
    });
  }

  onChangeMjestoStanovanja(e) {
    this.setState({
      mjestoStanovanja: e.target.value
    });
  }

  onChangeUlica(e) {
    this.setState({
      ulica: e.target.value
    });
  }

  onChangeBrojUlice(e) {
    this.setState({
      brojUlice: e.target.value
    });
  }

  onChangeNetoOsnovica(e) {
    this.setState({
      netoOsnovica: e.target.value
    });
  }

  onChangeOrgDio(e) {
    this.setState({
      orgDio: e.target.value
    });
  }

  onChangeOrgJedinica(e) {
    this.setState({
      orgJedinica: e.target.value
    });
  }

  onChangeDatumZaposlenja(e) {
    this.setState({
      datumZaposlenja: e.target.value
    });
  }

  onChangeRadnoMjesto(e) {
    this.setState({
      radnoMjesto: e.target.value
    });
  }

  saveRadnik() {
    var data = {
      jmb: this.state.jmb,
      jmbg: this.state.jmbg,
      ime: this.state.ime,
      prezime: this.state.prezime,
      imeOca: this.state.imeOca,
      spol: this.state.spol,
      datumRodjenja: this.state.datumRodjenja,
      mjestoRodjenja: this.state.mjestoRodjenja,
      opcinaRodjenja: this.state.opcinaRodjenja,
      drzavaRodjenja: this.state.drzavaRodjenja,
      opcinaStanovanja: this.state.opcinaStanovanja,
      mjestoStanovanja: this.state.mjestoStanovanja,
      ulica: this.state.ulica,
      brojUlice: this.state.brojUlice,
      netoOsnovica: this.state.netoOsnovica,
      orgDio: this.state.orgDio,
      orgJedinica: this.state.orgJedinica,
      datumZaposlenja: this.state.datumZaposlenja,
      radnoMjesto: this.state.radnoMjesto
    };
    console.log("Ovdje su podaci var data:",data);

    RadnikDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          jmb: response.data.jmb,
          jmbg: response.data.jmbg,
          ime: response.data.ime,
          prezime: response.data.prezime,
          imeOca: response.data.imeOca,
          spol: response.data.spol,
          datumRodjenja: response.data.datumRodjenja,
          mjestoRodjenja: response.data.mjestoRodjenja,
          opcinaRodjenja: response.data.opcinaRodjenja,
          drzavaRodjenja: response.data.drzavaRodjenja,
          opcinaStanovanja: response.data.opcinaStanovanja,
          mjestoStanovanja: response.data.mjestoStanovanja,
          ulica: response.data.ulica,
          brojUlice: response.data.brojUlice,
          netoOsnovica: response.data.netoOsnovica,
          orgDio: response.data.orgDio,
          orgJedinica: response.data.orgJedinica,
          datumZaposlenja: response.data.datumZaposlenja,
          radnoMjesto: response.data.radnoMjesto,
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
      jmb: "",
      jmbg: "",
      ime: "",
      prezime: "",
      imeOca: "",
      spol: "",
      datumRodjenja: "",
      mjestoRodjenja: "",
      opcinaRodjenja: "",
      drzavaRodjenja: "",
      opcinaStanovanja: "",
      mjestoStanovanja: "",
      ulica: "",
      brojUlice: "",
      netoOsnovica: "",
      orgDio: "",
      orgJedinica: "",
      datumZaposlenja: "",
      radnoMjesto: "",

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
              <label htmlFor="jmb">JMB</label>
              <input
                type="text"
                className="form-control"
                id="jmb"
                required
                value={this.state.jmb}
                onChange={this.onChangeJMB}
                name="jmb"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jmbg">JMBG</label>
              <input
                type="text"
                className="form-control"
                id="jmbg"
                required
                value={this.state.jmbg}
                onChange={this.onChangeJMBG}
                name="jmbg"
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="spol">Spol</label>
              <input
                type="text"
                className="form-control"
                id="spol"
                required
                value={this.state.spol}
                onChange={this.onChangeSpol}
                name="spol"
              />
            </div>
            <div className="form-group">
              <label htmlFor="datumRodjenja">Datum rođenja</label>
              <input
                type="text"
                className="form-control"
                id="datumRodjenja"
                required
                value={this.state.datumRodjenja}
                onChange={this.onChangeDatumRodjenja}
                name="datumRodjenja"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mjestoRodjenja">Mjesto rođenja</label>
              <input
                type="text"
                className="form-control"
                id="mjestoRodjenja"
                required
                value={this.state.mjestoRodjenja}
                onChange={this.onChangeMjestoRodjenja}
                name="mjestoRodjenja"
              />
            </div>
            <div className="form-group">
              <label htmlFor="opcinaRodjenja">OpĆina rođenja</label>
              <input
                type="text"
                className="form-control"
                id="opcinaRodjenja"
                required
                value={this.state.opcinaRodjenja}
                onChange={this.onChangeOpcinaRodjenja}
                name="opcinaRodjenja"
              />
            </div>
            <div className="form-group">
              <label htmlFor="drzavaRodjenja">Država rođenja</label>
              <input
                type="text"
                className="form-control"
                id="drzavaRodjenja"
                required
                value={this.state.drzavaRodjenja}
                onChange={this.onChangeDrzavaRodjenja}
                name="drzavaRodjenja"
              />
            </div>

            <div className="form-group">
              <label htmlFor="opcinaStanovanja">Općina stanovanja</label>
              <input
                type="text"
                className="form-control"
                id="opcinaStanovanja"
                required
                value={this.state.opcinaStanovanja}
                onChange={this.onChangeOpcinaStanovanja}
                name="opcinaStanovanja"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mjestoStanovanja">Mjesto stanovanja</label>
              <input
                type="text"
                className="form-control"
                id="mjestoStanovanja"
                required
                value={this.state.mjestoStanovanja}
                onChange={this.onChangeMjestoStanovanja}
                name="mjestoStanovanja"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ulica">Ulica</label>
              <input
                type="text"
                className="form-control"
                id="ulica"
                required
                value={this.state.ulica}
                onChange={this.onChangeUlica}
                name="ulica"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brojUlice">Broj ulice</label>
              <input
                type="text"
                className="form-control"
                id="brojUlice"
                required
                value={this.state.brojUlice}
                onChange={this.onChangeBrojUlice}
                name="brojUlice"
              />
            </div>
            <div className="form-group">
              <label htmlFor="netoOsnovica">Neto osnovica</label>
              <input
                type="text"
                className="form-control"
                id="netoOsnovica"
                required
                value={this.state.netoOsnovica}
                onChange={this.onChangeNetoOsnovica}
                name="netoOsnovica"
              />
            </div>
            <div className="form-group">
              <label htmlFor="orgDio">Organizacijski dio</label>
              <input
                type="text"
                className="form-control"
                id="orgDio"
                required
                value={this.state.orgDio}
                onChange={this.onChangeOrgDio}
                name="orgDio"
              />
            </div>

            <div className="form-group">
              <label htmlFor="orgJedinica">Organizacijska jedinica</label>
              <input
                type="text"
                className="form-control"
                id="orgJedinica"
                required
                value={this.state.orgJedinica}
                onChange={this.onChangeOrgJedinica}
                name="orgJedinica"
              />
            </div>

            <div className="form-group">
              <label htmlFor="datumZaposlenja">Datum zaposlenja</label>
              <input
                type="text"
                className="form-control"
                id="datumZaposlenja"
                required
                value={this.state.datumZaposlenja}
                onChange={this.onChangeDatumZaposlenja}
                name="datumZaposlenja"
              />
            </div>
            <div className="form-group">
              <label htmlFor="radnoMjesto">Radno mjesto</label>
              <input
                type="text"
                className="form-control"
                id="radnoMjesto"
                required
                value={this.state.radnoMjesto}
                onChange={this.onChangeRadnoMjesto}
                name="radnoMjesto"
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
