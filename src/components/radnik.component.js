import React, { Component } from "react";
import RadnikDataService from "../services/radnik.service";

export default class Radnik extends Component {
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

    this.getRadnik = this.getRadnik.bind(this);
    this.updateRadnik = this.updateRadnik.bind(this);
    this.deleteRadnik = this.deleteRadnik.bind(this);

    this.state = {
      currentRadnik: {
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
        radnoMjesto: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getRadnik(this.props.match.params.id);
  }

  onChangeJMB(e) {
    const jmb = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRadnik: {
          ...prevState.currentRadnik,
          jmb: jmb
        }
      };
    });
  }

  onChangeJMBG(e) {
    const jmbg = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRadnik: {
          ...prevState.currentRadnik,
          jmbg: jmbg
        }
      };
    });
  }

  onChangeIme(e) {
    const ime = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRadnik: {
          ...prevState.currentRadnik,
          ime: ime
        }
      };
    });
  }

  onChangePrezime(e) {
    const prezime = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        prezime: prezime
      }
    }));
  }

  onChangeImeOca(e) {
    const imeOca = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        imeOca: imeOca
      }
    }));
  }

  onChangeSpol(e) {
    const spol = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        spol: spol
      }
    }));
  }

  onChangeDatumRodjenja(e) {
    const datumRodjenja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        datumRodjenja: datumRodjenja
      }
    }));
  }

  onChangeMjestoRodjenja(e) {
    const mjestoRodjenja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        mjestoRodjenja: mjestoRodjenja
      }
    }));
  }

  onChangeOpcinaRodjenja(e) {
    const opcinaRodjenja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        opcinaRodjenja: opcinaRodjenja
      }
    }));
  }

  onChangeDrzavaRodjenja(e) {
    const drzavaRodjenja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        drzavaRodjenja: drzavaRodjenja
      }
    }));
  }

  onChangeOpcinaStanovanja(e) {
    const opcinaStanovanja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        opcinaStanovanja: opcinaStanovanja
      }
    }));
  }
  onChangeMjestoStanovanja(e) {
    const mjestoStanovanja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        mjestoStanovanja: mjestoStanovanja
      }
    }));
  }

  onChangeUlica(e) {
    const ulica = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        ulica: ulica
      }
    }));
  }

  onChangeBrojUlice(e) {
    const brojUlice = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        brojUlice: brojUlice
      }
    }));
  }

  onChangeNetoOsnovica(e) {
    const netoOsnovica = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        netoOsnovica: netoOsnovica
      }
    }));
  }

  onChangeOrgDio(e) {
    const orgDio = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        orgDio: orgDio
      }
    }));
  }

  onChangeOrgJedinica(e) {
    const orgJedinica = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        orgJedinica: orgJedinica
      }
    }));
  }

  onChangeDatumZaposlenja(e) {
    const datumZaposlenja = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        datumZaposlenja: datumZaposlenja
      }
    }));
  }

  onChangeRadnoMjesto(e) {
    const radnoMjesto = e.target.value;

    this.setState((prevState) => ({
      currentRadnik: {
        ...prevState.currentRadnik,
        radnoMjesto: radnoMjesto
      }
    }));
  }

  getRadnik(id) {
    RadnikDataService.get(id)
      .then((response) => {
        this.setState({
          currentRadnik: response.data
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateRadnik() {
    RadnikDataService.update(
      this.state.currentRadnik.id,
      this.state.currentRadnik
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "Radnik je uspješno ažuriran!"
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteRadnik() {
    RadnikDataService.delete(this.state.currentRadnik.id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/radnici");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentRadnik } = this.state;

    return (
      <div>
        {currentRadnik ? (
          <div className="edit-form">
            <h4>Radnici</h4>
            <form>
              <div className="form-group">
                <label htmlFor="jmb">JMB</label>
                <input
                  type="text"
                  className="form-control"
                  id="jmb"
                  required
                  value={currentRadnik.jmb}
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
                  value={currentRadnik.jmbg}
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
                  value={currentRadnik.ime}
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
                  value={currentRadnik.prezime}
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
                  value={currentRadnik.imeOca}
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
                  value={currentRadnik.spol}
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
                  value={currentRadnik.datumRodjenja}
                  onChange={this.onChangeDrzavaRodjenja}
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
                  value={currentRadnik.mjestoRodjenja}
                  onChange={this.onChangeMjestoRodjenja}
                  name="mjestoRodjenja"
                />
              </div>
              <div className="form-group">
                <label htmlFor="opcinaRodjenja">Općina rođenja</label>
                <input
                  type="text"
                  className="form-control"
                  id="opcinaRodjenja"
                  required
                  value={currentRadnik.opcinaRodjenja}
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
                  value={currentRadnik.drzavaRodjenja}
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
                  value={currentRadnik.opcinaStanovanja}
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
                  value={currentRadnik.mjestoStanovanja}
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
                  value={currentRadnik.ulica}
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
                  value={currentRadnik.brojUlice}
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
                  value={currentRadnik.netoOsnovica}
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
                  value={currentRadnik.orgDio}
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
                  value={currentRadnik.orgJedinica}
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
                  value={currentRadnik.datumZaposlenja}
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
                  value={currentRadnik.radnoMjesto}
                  onChange={this.onChangeRadnoMjesto}
                  name="radnoMjesto"
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteRadnik}
            >
              Izbriši
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateRadnik}
            >
              Ažuriraj
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Molimo Vas kliknite na Radnika...</p>
          </div>
        )}
      </div>
    );
  }
}
