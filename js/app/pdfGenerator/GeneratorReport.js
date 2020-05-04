class GeneratorReport {

    constructor() {

    }

    static generatorReportOne(ano, nome, matricula, orgaoRequisitante, infoTabela) {

        var doc = new jsPDF({
            unit: 'mm',
        });

        //for(let i=0; i<10;i++){

        infoTabela.listReport.map(campo => {
            //Formatando Cabeçalho
            doc.addImage(ImageHelper.logoDataPrev(), 'PNG', 30, 10, 35, 25);
            doc.setFontSize(11);
            doc.setFontType("bold");
            doc.text('RELATÓRIO DIÁRIO DE CONTROLE DE HORA', 190, 25, { align: "right" });
            doc.text(InputHelper.tipoRelatorio(parseInt(campo.minutos)), 190, 30, { align: "right" });

            //Cabeçalho 1
            doc.cell(30, 35, 160, 5, ' ', 0);
            doc.text('Relatório (Sigla) nº____/____', 190, 39, { align: "right" });
            doc.cell(30, 40, 160, 5, ' ');
            doc.text('Requisitante', 110, 44, { align: "center" });

            //Cabeçalho 2
            doc.cell(30, 50, 160, 10, " ");
            doc.text('Nome e sigla do órgão requisitante:', 33, 54);
            doc.setFontType("none");
            doc.text(InputHelper.devolveOrgaoRequisitante(orgaoRequisitante), 33, 59);

            doc.cell(30, 60, 160, 10, " ");
            doc.setFontType("bold");
            doc.text('Departamento ou correlato de vinculação:', 33, 64);
            doc.setFontType("none");
            doc.text('Unidade de Desenvolvimento de Software Ceará - UDCE', 33, 69);

            doc.cell(30, 70, 160, 10, " ");
            doc.setFontType("bold");
            doc.text('Diretoria de vinculação:', 33, 74);
            doc.setFontType("none");
            doc.text('Diretoria de Desenvolvimento e Serviço - DDS', 33, 79);

            doc.cell(30, 80, 160, 10, " ");
            doc.setFontType("bold");
            doc.text('Nome e matrícula do titular do órgão requisitante:', 33, 84);
            doc.setFontType("none");
            doc.text(InputHelper.devolveBoss(orgaoRequisitante), 33, 89);

            doc.setFontType("bold");
            doc.cell(30, 95, 160, 5, " ");
            doc.text('Demanda', 110, 99, { align: "center" });
            doc.cell(30, 100, 160, 25, " ");
            doc.text('Atividade demandada:', 33, 104);
            doc.setFontType("none");
            doc.text(doc.splitTextToSize(campo.demanda, 156), 33, 109);

            doc.setFontType("bold");
            doc.cell(30, 125, 160, 40, " ");
            doc.text(doc.splitTextToSize('Justificativa da necessidade imperiosa da demanda, em razão de motivo de força maior ou da realização ou conclusão de serviço inadiável ou cuja a inexecução possa acarretarmanisfesto prejuízo:', 156), 33, 129);
            doc.setFontType("none");
            doc.text(doc.splitTextToSize(campo.justificativa, 156), 33, 144);

            doc.setFontType("bold");
            doc.cell(30, 165, 160, 25, " ");
            doc.text('Especificação das causas geradoras da demanda:', 33, 169);
            doc.setFontType("none");
            doc.text(doc.splitTextToSize(campo.especificacao, 156), 33, 174);

            doc.setFontType("bold");
            doc.cell(30, 190, 160, 15, " ");
            doc.text('Empregado demandado:', 33, 194);
            doc.setFontType("none");
            doc.text(doc.splitTextToSize(`${nome} - ${matricula} - Analista de Tecnologia da Informação - ${orgaoRequisitante}`,156), 33, 199);
            doc.setFontType("bold");
            doc.cell(30, 205, 160, 5, " ");
            doc.text('Período de realização da sobrejornada:', 33, 209);
            doc.setFontType("none");
            doc.text(DateHelper.dataParaTexto(campo.data), 105, 209);

            doc.setFontType("bold");
            doc.cell(30, 210, 80, 10, " ");
            doc.text('Início:', 33, 214);
            doc.setFontType("none");
            doc.text(`${campo.inicio} horas`, 50, 214);
            doc.setFontType("bold");
            doc.text('Término:', 33, 219);
            doc.setFontType("none");
            doc.text(`${campo.termino} horas`, 50, 219);
            doc.cell(110, 210, 80, 10, " ");
            doc.setFontType("bold");
            doc.text('Total em minutos:', 113, 214);
            doc.setFontType("none");
            doc.text(`${campo.minutos} minutos`, 145, 214);

            doc.setFontType("bold");
            doc.cell(30, 225, 160, 25, " ");
            doc.text('Serviços prestados:', 33, 229);
            doc.setFontType("none");
            doc.text(doc.splitTextToSize(campo.servicoPrestado, 156), 33, 234);

            doc.setFontType("bold");
            doc.cell(30, 255, 160, 5, ' ');
            doc.text('Local e Data:', 33, 259);
            doc.setFontType("none");
            doc.text(`Fortaleza, ${DateHelper.diaUtilAnterior(campo.data, ano)}`, 60, 259);

            doc.setFontType("bold");
            doc.cell(30, 260, 80, 20, " ");
            doc.text('Requisitante:', 33, 264);
            doc.cell(110, 260, 80, 20, " ");
            doc.text('Empregado demandado:', 113, 264);

            doc.addPage('a4', 'p');
        }).join('')

        //Salvando e Gerando Documento
        doc.save('Anexo I - Relatório Diário de Controle de Hora Extra Excedente a 02 (Duas) Horas.pdf');
    }

    static generatorReportTwo(ano, nome, matricula, orgaoRequisitante, competencia, informacoesCompensacao, infoTabela) {

        var doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
        });

        var arrayDatas = [];
        var arrayMinutos = [];

        infoTabela.listReport.map(campo => {
            arrayDatas.push(DateHelper.dataParaTexto(campo.data));
            campo.inicio;
            campo.termino;
            arrayMinutos.push(campo.minutos);
            campo.demanda;
            campo.justificativa;
            campo.especificacao;
            campo.servicoPrestado;
        }).join('')

        //Formatando Cabeçalho
        doc.addImage(ImageHelper.logoDataPrev(), 'PNG', 30, 10, 35, 25);
        doc.setFontSize(11);
        doc.setFontType("bold");
        doc.text('RELATÓRIO MENSAL DE OCORRÊNCIA', 190, 25, { align: "right" });
        doc.text('DE DEMANDA EXTRAORDINÁRIA', 190, 30, { align: "right" });
        //Cabeçalho 1
        doc.cell(30, 35, 160, 5, ' ', 0);
        doc.text(`Mês: ${competencia} / Ano: ${ano}`, 190, 39, { align: "right" });
        doc.cell(30, 40, 160, 5, ' ');
        doc.text('Requisitante', 110, 44, { align: "center" });
        //Cabeçalho 2
        doc.cell(30, 50, 160, 10, " ");
        doc.text('Nome e sigla do órgão requisitante:', 33, 54);
        doc.setFontType("none");
        doc.text(InputHelper.devolveOrgaoRequisitante(orgaoRequisitante), 33, 59);

        doc.cell(30, 60, 160, 10, " ");
        doc.setFontType("bold");
        doc.text('Departamento ou correlato de vinculação:', 33, 64);
        doc.setFontType("none");
        doc.text('Unidade de Desenvolvimento de Software Ceará - UDCE', 33, 69);

        doc.cell(30, 70, 160, 10, " ");
        doc.setFontType("bold");
        doc.text('Diretoria de vinculação:', 33, 74);
        doc.setFontType("none");
        doc.text('Diretoria de Desenvolvimento e Serviço - DDS', 33, 79);

        doc.cell(30, 80, 160, 10, " ");
        doc.setFontType("bold");
        doc.text('Nome e matrícula do titular do órgão requisitante:', 33, 84);
        doc.setFontType("none");
        doc.text(InputHelper.devolveBoss(orgaoRequisitante), 33, 89);
        doc.setFontType("bold");
        doc.cell(30, 95, 160, 15, " ");
        doc.text('Empregado demandado:', 33, 99);
        doc.setFontType("none");
        doc.text(doc.splitTextToSize(`${nome} - ${matricula} - Analista de Tecnologia da Informação - ${orgaoRequisitante}`,156), 33, 104);

        doc.setFontType("bold");

        doc.cell(30, 115, 160, 5, ' ');
        doc.text('Atividade demandada em hora extra:', 110, 119, { align: "center" });

        doc.cell(30, 120, 40, 5, " ");
        doc.text('Data', 50, 124, { align: "center" });
        doc.cell(70, 120, 40, 5, " ");
        doc.text('Total de minutos', 90, 124, { align: "center" });
        doc.cell(110, 120, 40, 5, " ");
        doc.text('Data', 130, 124, { align: "center" });
        doc.cell(150, 120, 40, 5, " ");
        doc.text('Total de minutos', 170, 124, { align: "center" });
        
        doc.setFontType("none");
        var posicaoVertical = 120;
        for(var i= 0; i < arrayDatas.length;i++){
            if(i%2==0){
                posicaoVertical = posicaoVertical+5;
                doc.cell(30, posicaoVertical, 40, 5, " ");
                doc.text(String(arrayDatas[i]), 33, posicaoVertical+4);
                doc.cell(70, posicaoVertical, 40, 5, " ");
                doc.text(String(arrayMinutos[i]  + " minutos"), 73, posicaoVertical+4);
            }else{
                doc.cell(110, posicaoVertical, 40, 5, " ");
                doc.text(String(arrayDatas[i]), 113, posicaoVertical+4);
                doc.cell(150, posicaoVertical, 40, 5, " ");
                doc.text(String(arrayMinutos[i] + " minutos"), 153, posicaoVertical+4);
            }
        }

        if(arrayDatas.length%2!=0){
            doc.cell(110, posicaoVertical, 40, 5, " ");
            doc.cell(150, posicaoVertical, 40, 5, " ");
        }
        posicaoVertical=posicaoVertical+10;
        
        doc.setFontType('bold');
        doc.cell(30, posicaoVertical, 160, 20, " ");
        doc.text('Relatórios diários de demandas extraordinárias anexados:', 33, posicaoVertical+4);
        doc.setFontType('none');
        doc.text("Relatório Individual de Demanda Extraordinária \nRelatório Diário de Controle de Hora Extra", 33, posicaoVertical+8);
        posicaoVertical=posicaoVertical+25;

        doc.setFontType("bold");
        doc.cell(30, posicaoVertical, 160, 15, " ");
        doc.text('Informações Complementares:', 33, posicaoVertical+4);
        doc.setFontType('none');
        doc.text("Não se aplica", 33, posicaoVertical + 8);
        posicaoVertical = posicaoVertical + 20;

        doc.setFontType("bold");
        doc.cell(30, posicaoVertical, 160, 25, " ");
        doc.text('Informações sobre Compensação:', 33, posicaoVertical + 4);
        doc.setFontType('none');
        doc.text(doc.splitTextToSize(informacoesCompensacao, 156), 33, posicaoVertical + 8);
        posicaoVertical = posicaoVertical + 30;

        doc.setFontType("bold");
        doc.cell(30, posicaoVertical, 160, 5, ' ');
        doc.text('Local e Data:', 33, posicaoVertical + 4);
        doc.setFontType("none");
        doc.text(`Fortaleza, ${DateHelper.ultimoUtilMes(competencia, ano)}`, 60, posicaoVertical + 4);
        posicaoVertical = posicaoVertical + 5;

        doc.setFontType("bold");
        doc.cell(30, posicaoVertical, 80, 20, " ");
        doc.text('Gerente de Serviço:', 33, posicaoVertical+4);
        doc.cell(110, posicaoVertical, 80, 20, " ");
        doc.text('Empregado demandado:', 113, posicaoVertical+4);
        posicaoVertical = posicaoVertical + 20;

        doc.setFontType("bold");
        doc.cell(30, posicaoVertical, 80, 20, " ");
        doc.text('Gerente de Divisão ou correlato:', 33, posicaoVertical+4);
        doc.cell(110, posicaoVertical, 80, 20, " ");
        doc.text('Gerente de Departamento ou correlato:', 113, posicaoVertical+4);


        doc.save('Anexo II - Relatório Mensal de Ocorrência de Demanda Extraordinária.pdf');
    }

    static generatorReportThree(ano, nome, matricula, orgaoRequisitante, competencia) {

        var doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
        });

        doc.setFontSize(11);
        doc.addImage(ImageHelper.formTres(), 'PNG', 10, 10, 190, 300);
        doc.text(nome, 25, 51);
        doc.text(matricula, 160, 51);
        doc.text(orgaoRequisitante, 25, 63);
        doc.text(InputHelper.devolveCodigoComponente(orgaoRequisitante), 60, 63);
        doc.text(`${competencia}/ ${ano}`, 120, 63);
        doc.text(`${DateHelper.ultimoUtilMes(competencia, ano)}`, 160, 245);


        doc.save('Anexo III - Relatório Individual de Demanda Extraordinária');
    }



}