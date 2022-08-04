let clientes = [
    {
        "id": "1",
        "nome": "Thiago Marques",
        "telefone": 88993186440,
        "cpf/cnpj": "00012345678",
        "cep": 62504070,
        "estado": "ce",
        "cidade":"itapipoca",
        "bairro": "violete",
        "rua": "coronel mingueira",
        "numero": "2339",
        "complemento": "nenhum"
    },
    {
        "id": "2",
        "nome": "Thiago Thiago",
        "telefone": 88993186440,
        "cpf/cnpj": "00012345678",
        "cep": 62504070,
        "estado": "ce",
        "cidade":"itapipoca",
        "bairro": "violete",
        "rua": "coronel mingueira",
        "numero": "2339",
        "complemento": "nenhum"
    },
    {
        "id": "3",
        "nome": "Marques Marques",
        "telefone": 88993186440,
        "cpf/cnpj": "00012345678",
        "cep": 62504070,
        "estado": "ce",
        "cidade":"itapipoca",
        "bairro": "violete",
        "rua": "coronel mingueira",
        "numero": "2339",
        "complemento": "nenhum"
    }
];

function addCliente(){
    clientes.push({
        "id": clientes.length + 1,
        "nome": document.getElementById("nome_cliente").value,
        "telefone": document.getElementById("telefone").value,
        "cpf/cnpj": document.getElementById("cpf-cnpj").value,
        "cep": document.getElementById("cep").value,
        "estado": document.getElementById("uf").value,
        "cidade":document.getElementById("cidade").value,
        "bairro": document.getElementById("bairro").value,
        "rua": document.getElementById("rua").value,
        "numero": document.getElementById("numero").value,
        "complemento": document.getElementById("complemento").value
    });
    
    // Guardando localmente
    localStorage.setItem(1, JSON.stringify(clientes));

    alert("Cliente cadastrado com sucesso!");
    window.location.assign("../index.html");
}


