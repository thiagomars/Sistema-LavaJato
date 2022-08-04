let listaServicos = [
    "Lavagem simples",
    "lavagem do motor"
];

let servicos = [
    {
        "id": 1,
        "inicio": "data",
        "fim": "data",
        "status": "finalizado",
        "cliente": "Marques Marques",
        "telefone": 88993186440,
        "marca": "honda",
        "modelo": "moto",
        "placa": "ABC-1234",
        "servico": ["lavagem simples", "lavagem motor"],
        "preco": 99.99
    }
]

function addServico(){
    servicos.push({
        "id": servicos.length + 1,
        "inicio": document.getElementById("registro").value,
        "fim": document.getElementById("final").value,
        "status": document.getElementById("status").options[document.getElementById("status").selectedIndex].value,
        "cliente": document.getElementById("registro").value,
        "telefone": document.getElementById("registro").value,
        "marca": document.getElementById("registro").value,
        "modelo": document.getElementById("registro").value,
        "placa": document.getElementById("registro").value,
        "servico": ["lavagem simples", "lavagem motor"],
        "preco": document.getElementById("registro").value
    })

    // Guardando localmente
    localStorage.setItem(2, JSON.stringify(servicos));

}








function mostrarServicos(){
    document.getElementById("inserir-service-fundo").style.display = "flex"
}

function sumirServicos(){
    document.getElementById("inserir-service-fundo").style.display = "none"
}

