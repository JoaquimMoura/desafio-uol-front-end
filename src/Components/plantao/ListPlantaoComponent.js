import React, { Component } from 'react'
import ApiService from "../services/ApiService";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class ListPlantaoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plantoes: [],
            message: null
        }

        this.addPlantao = this.addPlantao.bind(this);
        this.reloadPlantaoList = this.reloadPlantaoList.bind(this);
    }

    componentDidMount() {
        this.reloadPlantaoList();
    }

    reloadPlantaoList() {
        ApiService.findPlantao()
            .then((res) => {
                this.setState({ plantoes: res.data })
            });
    }

    addPlantao() {
        window.localStorage.removeItem("plantaoId");
        this.props.history.push('/add-plantao');
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="text-center">IMs PP - Quem resolve</h2>
                    <h6 className="text-center">Próximos Dias</h6>
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={() => this.addPlantao()}>
                        Adicionar <AddIcon />
                    </Button>
                </div>
                <div>
                    <MaUTable>
                        <TableBody>
                            {
                                this.state.plantoes.map(
                                    plantao => 
                                        <TableRow key={plantao.id}>
                                            <TableCell align="center" >{plantao.dataPlantao}</TableCell>
                                            <TableCell align="center">{plantao.name}
                                                <WhatsAppIcon />
                                            </TableCell>
                                        </TableRow>
                                )
                            }
                        </TableBody>
                    </MaUTable>
                </div>
            </div>
        )
    }
}

export default ListPlantaoComponent;