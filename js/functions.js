function submitFormUser(){

  /*
   * @author: Raiff Santos
   * pegando formulário e valores passados nos INPUT do formulário
   */
  var formulario = document.getElementById("cadastro-usuario");

  var cidade_id = document.getElementById("cidade_id").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirme_senha = document.getElementById("confirme_senha").value;
  var cnh = document.getElementById("cnh").value;
  //var termos = document.getElementsByName('termos');
  


  /*
   * Status para validação dos campos. O formulário so é
   * submetido se todos os campos estiverem com status = 1
   */
  var status_cid_id = 0;
  var status_nome = 0; 
  var status_email = 0; 
  var status_senha = 0 
  var status_cnh = 0;
  var status_termos = 0;



  /*
   * Validação de todos os campos do formulário
   */
  if(cidade_id == "" || cidade_id == 0 || cidade_id == null || cidade_id == "#" || isNaN(cidade_id)){
    alert("escolha uma cidade");
  }else{
      status_cid_id = 1;
  }

  if(nome == ""){
    document.getElementById("alerta-input-nome").innerHTML = "* Campo Nome é obrigatório!";
  }else{
    document.getElementById("alerta-input-nome").innerHTML = "";
    status_nome = 1;
  }

  if(email == ""){
    document.getElementById("alerta-input-email").innerHTML = "* Informe um E-mail válido!";
  }else{
    document.getElementById("alerta-input-email").innerHTML = "";
    status_email = 1;
  }

  if(senha == "" || confirme_senha == "" || senha != confirme_senha || senha == null || confirme_senha == null){
    document.getElementById("alerta-input-senha").innerHTML = "* As senhas estão divergindo!";
  }else{
    document.getElementById("alerta-input-senha").innerHTML = "";
    status_senha = 1;
  }

  if(cnh == "" || cnh.length < 11 || isNaN(cnh)){
    document.getElementById("alerta-input-cnh").innerHTML = "* Campo CNH é obrigatório";
  }else{
    document.getElementById("alerta-input-cnh").innerHTML = "";
    status_cnh = 1;
  }


    
  /*
   * Verifica status dos campos e submete o formulário
   */
  if(status_cid_id == 1 && status_nome == 1 && status_email == 1 && status_senha == 1 && status_cnh == 1){
    formulario.submit();
  }
}