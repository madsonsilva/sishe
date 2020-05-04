class ReportController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputCompetencia = $('#competencia');
        this._inputAnoCompetencia = $('#anoCompetencia');
        this._inputOrgaoRequisitante = $('#orgaoRequisitante');
        this._inputNome = $('#nome');
        this._inputMatricula = $('#matricula');
        this._inputData = $('#data');
        this._inputInicio = $('#inicio');
        this._inputTermino = $('#termino');
        this._inputMinutos = $('#minutos');
        this._inputDemanda = $('#demanda');
        this._inputJustificativa = $('#justificativa');
        this._inputEspecificacao = $('#especificacao');
        this._inputServicoPrestado = $('#servicoPrestado');
        this._inputInformacoesCompensacao = $('#informacoesCompensacao');
        this._listReport = new ListReport();

        this._reportView = new ReportView($('#reportView'));
        this._reportView.update(this._listReport);
    }

    adiciona(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);
        this._inputAnoCompetencia = $('#anoCompetencia');
        this._inputNome = $('#nome');
        this._inputMatricula = $('#matricula');
        this._inputMatricula.readOnly = true;
        this._inputNome.readOnly = true;
        this._listReport.adiciona(this._criaReport());
        this._reportView.update(this._listReport);
        this._limpaFormDetalhado();
    }

    generatorDocument() {
        this._inputMatricula.readOnly = false;
        this._inputNome.readOnly = false;
		console.log(DateHelper.anoCompetencia(this._inputAnoCompetencia.value));
		console.log(this._inputAnoCompetencia.value);
        GeneratorReport.generatorReportThree(DateHelper.anoCompetencia(this._inputAnoCompetencia.value), this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value, this._inputCompetencia.value);
        GeneratorReport.generatorReportTwo(DateHelper.anoCompetencia(this._inputAnoCompetencia.value), this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value, this._inputCompetencia.value, this._inputInformacoesCompensacao.value, this._listReport);
        GeneratorReport.generatorReportOne(DateHelper.anoCompetencia(this._inputAnoCompetencia.value), this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value, this._listReport);
        this._limparFormTotal();

    }

    _criaReport() {

        return new Report(
            DateHelper.textoParaData(this._inputData.value),
            this._inputInicio.value,
            this._inputTermino.value,
            this._inputMinutos.value,
            this._inputDemanda.value,
            this._inputJustificativa.value,
            this._inputEspecificacao.value,
            this._inputServicoPrestado.value
        );
    }

    _limpaFormDetalhado() {

        this._inputData.value = '';
        this._inputInicio.value = '';
        this._inputTermino.value = '';
        this._inputMinutos.value = '';
        this._inputDemanda.value = '';
        this._inputJustificativa.value = '';
        this._inputEspecificacao.value = '';
        this._inputServicoPrestado.value = '';
        document.getElementById("spanDemanda").style.display = 'none';
        document.getElementById("spanJustificativa").style.display = 'none';
        document.getElementById("spanEspecificacao").style.display = 'none';
        document.getElementById("spanServicoPrestado").style.display = 'none';

        this._inputData.focus();
    }

    _limparFormTotal() {
        this._inputNome.value = '';
        this._inputMatricula.value = '';
        this._inputCompetencia.value = 'Janeiro';
        this._inputOrgaoRequisitante.value = 'D2DP';
        this._inputInformacoesCompensacao.value = '';
        document.getElementById("spanInfoCompensacao").style.display = 'none';
        this._limpaFormDetalhado();
        this._listReport.esvazia();
        this._reportView.update(this._listReport);
        this._inputCompetencia.focus();
    }

    excluirForm(button) {

        let linha = button.parentNode.parentNode;
        let data = linha.childNodes[1].textContent;
        let inicio = linha.childNodes[3].textContent;
        let termino = linha.childNodes[5].textContent;


        var arrayDatas = [];
        var arrayInicio = [];
        var arrayTermino = [];

        this._listReport.listReport.map(campo => {
            arrayDatas.push(DateHelper.dataParaTexto(campo.data));
            arrayInicio.push(campo.inicio);
            arrayTermino.push(campo.termino);
        }).join('');

        var indices = [];
        var idx = arrayDatas.indexOf(data);
        while (idx != -1) {
            indices.push(idx);
            idx = arrayDatas.indexOf(data, idx + 1);
        }
        var i = 0;
        while (i < indices.length) {
            if (arrayInicio[indices[i]] == inicio && arrayTermino[indices[i]] == termino) {
                this._listReport.slice(arrayDatas.indexOf(data, indices[i]));
                this._reportView.update(this._listReport);
                break;
            }
            else {
                i = i + 1;
            }
        }


    }

    editarForm(button) {
        let linha = button.parentNode.parentNode;
        let data = linha.childNodes[1].textContent;
        let inicio = linha.childNodes[3].textContent;
        let termino = linha.childNodes[5].textContent;
        let minutos = linha.childNodes[9].textContent;
        let demanda = linha.childNodes[11].textContent;
        let justificativa = linha.childNodes[13].textContent;
        let especificacao = linha.childNodes[15].textContent;
        let servicoPrestado = linha.childNodes[17].textContent;


        document.getElementById("data").value = DateHelper.formataData(data);
        document.getElementById("inicio").value = inicio;
        document.getElementById("termino").value = termino;
        document.getElementById("minutos").value = parseInt(minutos);
        document.getElementById("demanda").value = demanda;
        document.getElementById("justificativa").value = justificativa;
        document.getElementById("especificacao").value = especificacao;
        document.getElementById("servicoPrestado").value = servicoPrestado;

        this._inputData.focus();

        this.excluirForm(button);


    }

}