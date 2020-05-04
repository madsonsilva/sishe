class ReportView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {

        return `
        <table id="tabelaForm" class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th><center>Data:</th>
                        <th><center>Hora de Início:</th>
                        <th><center>Hora de Término:</th>
                        <th><center>Fator Multiplicativo:</th>
                        <th><center>Total de Minutos:</th>
                        <th><center>Demanda:</th>
                        <th><center>Justificativa:</th>
                        <th><center>Especificação:</th>
                        <th><center>Serviços Prestados:</th>
                        <th colspan="3"><center>Ações:</th>
                    </tr>
                </thead>
                <tbody>
                ${model.listReport.map(n => {
            return `
                    <tr>
                        <td id="dataTabela"><center>${DateHelper.dataParaTexto(n.data)}</td>
                        <td id="inicioTabela"><center>${n.inicio}</td>
                        <td id="terminoTabela"><center>${n.termino}</td>
                        <td id="fatormultiplicativo"><center>${DateHelper.verificaFeriadoParainutosCompensacao(n.data)} </td>
                        <td id="minutosTabela"><center>${n.minutos}</td>
                        <td id="demandaTabela">${n.demanda}</td>
                        <td id="justificativaTabela">${n.justificativa}</td>
                        <td id="especificacaoTabela">${n.especificacao}</td>
                        <td id="servicosPrestadosTabela">${n.servicoPrestado}</td>
                        <td><button id="btnEditar" class="btn btn-primary text-center" type="button" onclick="reportController.editarForm(this)">Editar</button></td>
                        <td><button id="btnExcluir" class="btn btn-primary text-center" type="button" onclick="reportController.excluirForm(this)">Excluir</button></td>
                    </tr>
                    `
        }).join('')}
                <tfoot>
                    <th colspan="3">Total de Minutos Para Compensação:</th>
                    <td colspan="2"><center>
                        ${model.minutosTotal}  
                    </td>
                </tfoot>
        </table>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}


/*   */