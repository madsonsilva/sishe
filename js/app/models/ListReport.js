class ListReport {

    constructor() {

        this._listReport = [];

    }

    adiciona(report) {

        this._listReport.push(report);

    }

    get listReport() {

        return [].concat(this._listReport);
    }

    retornaArray(){
        this._listReport.map()
    }

    esvazia(){
        this._listReport = [];
    }

    get minutosTotal() {
        
        return this._listReport.reduce((total, n) => total + n.minutosTotal, 0);
     }

     slice(posicao){
        this._listReport.splice(posicao, 1);
     }

     lenght(){
        return this._listReport.length;
     }
}