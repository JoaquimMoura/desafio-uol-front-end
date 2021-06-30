import React, { Component } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ApiService from '../services/ApiService';

class AddPlantaoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataPlantao: '',
            name: ''
        }
        this.savePlantao = this.savePlantao.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    savePlantao(e) {
        e.preventDefault();
        let plantao = {
            dataPlantao: this.state.dataPlantao,
            name: this.state.name
        };
        ApiService.savePlantao(plantao)
            .then(res => {
                this.setState({ message: 'Plantão added successfully.' });
                this.props.history.push('/list-plantoes');
            });
    }

    onChange(e) { this.setState({ [e.target.name]: e.target.value }); }

    render() {
        return (
            <div>
                <h2 className="text-center">Adicionar</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="dataPlantao">Data Plantao: </label>
                        <input id="dataPlantao" name="dataPlantao" type="date" placeholder="dataPlantao" className="form-control" value={this.state.dataPlantao} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Nome Responsável:</label>
                        <input id="name" name="name" type="text" placeholder="Nome Responsável" className="form-control" value={this.state.name} onChange={this.onChange} />
                    </div>

                    <div>
                        <button className="btn btn-success" onClick={this.savePlantao}>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPlantaoComponent;