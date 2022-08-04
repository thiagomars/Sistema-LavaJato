/**
 * Início da função de buscar o CEP
*/
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

/**
*  Inicio das funções de criação 
*  do DashBoard
*/

google.charts.load('current', { 'packages': ['corechart'] });

function desenharPizza() {

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'serviços');
    tabela.addColumn('number', 'valores');
    tabela.addRows([

        ['Lavagem simples', 31],
        ['Lavagem do motor', 10],
        ['aaa', 20]
    ]);

    var options = {
        backgroundColor: '#f7f7f7',
        pieHole: '0.3',
        pieSliceText: 'label',
        chartArea:{left:8, top:8, bottom:8, right:9, width:'100%', height:'100%'}
    }

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, options)
}

google.charts.setOnLoadCallback(desenharPizza);

/**
 * Voltar para a página inicial
 * botton CANCELAR
 */

function pagInicial(){
    window.location.assign("../index.html");
}

/**
*  Inicio do trecho em JQUERY
*/

$(document).ready(function(){

    //Menu para display na vertical
    if($("#icone-menu").is(":visible")){
        //Iniciar com o menu fechado
        $(".option").slideUp(0);

        //animação do menu
        $("#icone-menu").mouseenter(function(){
            $(".option").slideDown(300);

            $("#clientes").mouseenter(function(){
                $("#clientes .item").slideDown();
            });
            $("#clientes").mouseout(function(){
                $("#clientes .item").slideUp(300);
            });
            
            $("#carros").mouseenter(function(){
                $("#carros .item").slideDown();
            });
            $("#carros").mouseout(function(){
                $("#carros .item").slideUp(300);
            });
        
            $("#service").mouseenter(function(){
                $("#service .item").slideDown();
            });
            $("#service").mouseout(function(){
                $("#service .item").slideUp(300);
            });

        })

        //recolher menu caso seja clicado fora dele
        
        $("nav").mouseleave(function(){
            $(".option").slideUp(300);
        })
    }

    //Menu para display na horizontal
    //iniciar com os submenu's fechados
    $("#clientes .item").slideUp(300);
    $("#carros .item").slideUp(300);
    $("#service .item").slideUp(300);

    //Animação do menu
    $("#clientes").mouseenter(function(){
        $("#clientes .item").slideDown();
    });
    $("#clientes").mouseleave(function(){
        $("#clientes .item").slideUp(300);
    });
    
    $("#carros").mouseenter(function(){
        $("#carros .item").slideDown();
    });
    $("#carros").mouseleave(function(){
        $("#carros .item").slideUp(300);
    });

    $("#service").mouseenter(function(){
        $("#service .item").slideDown();
    });
    $("#service").mouseleave(function(){
        $("#service .item").slideUp(300);
    });

    
    inserirHistorico();




    var agora = new Date();
    var dia = ("0" + agora.getDate()).slice(-2);
    var mes = ("0" + (agora.getMonth() + 1)).slice(-2);
    var dataHoje = agora.getFullYear()+"-"+(mes)+"-"+(dia);
    $('#filter-data-inicial').val(dataHoje);
    $('#filter-data-final').val(dataHoje);

});

function mostrarMais(){
    for(let i = 0; i < 3; i++){
        $("#history").append = $("#history").append(`
        <div class="registro">
            <img src="imgs/ideia.png">
            <div class="dados-cliente">
                <p>Cliente: José Santos</p>
                <p>Serviço: Lavagem Simples</p>
            </div>
            <div class="dados-carro">
                <p>Placa: ABC-1234</p>
                <p>Modelo: Carro</p>
            </div>
        </div>
    `);
    }
}

function inserirHistorico(dados){
    $("#history").append = $("#history").append(`
        <div class="registro">
            <img src="imgs/ideia.png">
            <div class="dados-cliente">
                <p>Cliente: José Santos</p>
                <p>Serviço: Lavagem Simples</p>
            </div>
            <div class="dados-carro">
                <p>Placa: ABC-1234</p>
                <p>Modelo: Carro</p>
            </div>
        </div>
    `);
}





