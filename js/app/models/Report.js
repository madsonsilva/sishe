class Report {

    constructor(data, inicio, termino, minutos,
        demanda, justificativa, especificacao, servicoPrestado, informacoesComplementares) {

        this._data = new Date(data.getTime());
        this._inicio = inicio;
        this._termino = termino;
        this._minutos = minutos;
        this._demanda = demanda;
        this._justificativa = justificativa;
        this._especificacao = especificacao;
        this._servicoPrestado = servicoPrestado;
        this._informacoesComplementares = informacoesComplementares;
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get inicio() {
        return this._inicio;
    }

    get termino() {
        return this._termino;
    }

    get minutos() {
        return this._minutos;
    }

    get demanda() {
        return this._demanda;
    }

    get justificativa() {
        return this._justificativa;
    }

    get especificacao() {
        return this._especificacao;
    }

    get servicoPrestado() {
        return this._servicoPrestado;
    }

    get informacoesComplementares() {
        return this._informacoesComplementares;
    }

    get minutosTotal() {
        return (parseInt(this._minutos) * DateHelper.verificaFeriadoParainutosCompensacao(this._data));
    }
}