
///versao 1.0




	function mascara(param_campo, param_funcao){
	
	if(param_campo == null)
	return;
	
	
	v_obj=param_campo;
	v_fun=param_funcao;
	setTimeout("execmascara()",1);

	}










	function execmascara(){

	v_obj.value=v_fun(v_obj.value);
	}




	
	
	
	
	
	
	function formatarSomenteNum(valor){
    
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
                                              
    return valor;
	}





	
	
	
	
	
	function formatarData(valor){

	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	//limita o campo a 8 digitos (sem contar as barras invertidas)
	if( valor.length > 8)
	valor=valor.substring(0, 8);   
	
    valor=valor.replace(/(\d{2})(\d)/,"$1/$2")       //Coloca um / entre o segundo e o terceiro dígitos
    valor=valor.replace(/(\d{2})(\d)/,"$1/$2")       //Coloca um / entre o quarto e o quinto dígitos
        
	return valor;
	}



	
	
	
	
	
	
	function formatarCPF( valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	//limita o campo a 11 digitos (sem contar os pontos e traço)
	if( valor.length > 11)
	valor=valor.substring(0, 11);   
	
	valor=valor.replace(/(\d{3})(\d)/,"$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
    valor=valor.replace(/(\d{3})(\d)/,"$1.$2");      //Coloca um ponto entre o terceiro e o quarto dígitos, de novo (para o segundo bloco de números)
    valor=valor.replace(/(\d{3})(\d)/,"$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    
	return valor;
	}
	
	
	
	
	

	
	
	
	function formatarCNPJ(valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	if( valor.length > 15)
	valor=valor.substring(0, 15);   
	

	if(valor.length == 14)
	valor=valor.replace(/(\d{2})(\d)/,"$1.$2");       
	else if(valor.length == 15)
	valor=valor.replace(/(\d{3})(\d)/,"$1.$2");       
	
	
	
	valor=valor.replace(/(\d{3})(\d)/,"$1.$2");    
	valor=valor.replace(/(\d{3})(\d)/,"$1/$2");    
	valor=valor.replace(/(\d{4})(\d)/,"$1-$2");    
		
	return valor;
	}
	
	
	
	
	
	
	
	
	
	function formatarCEP(valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	//limita o campo a 8 digitos (sem contar o traço)
	if( valor.length > 8)
	valor=valor.substring(0, 8);   
	
	valor=valor.replace(/(\d{5})(\d)/,"$1-$2");       //Coloca um ponto entre o terceiro e o quarto dígitos

	return valor;
	}
	
	

	
	
	
	
	
	function formatarTEL(valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	//limita o campo a 9 digitos (sem contar o traço)
	if( valor.length > 9)
	valor=valor.substring(0, 9);   
	
	if(valor.length == 8)
	valor=valor.replace(/(\d{4})(\d)/,"$1-$2");       
	else if(valor.length == 9)
	valor=valor.replace(/(\d{5})(\d)/,"$1-$2");       
	
	return valor;
	}
	
	
	
	
	
	
	
	
	
	
	function formatarMonetario(valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	if(valor.length ==0)
	return 0,00;
	
	if(valor.length ==1)
	return "0,0"+valor;
	
	if(valor.length ==2)
	return "0,"+valor;
	
	var valor = valor+'';
	valor = valor.replace(/([0-9]{2})$/g, ",$1");
	if( valor.length > 6 )
	valor = valor.replace(/([0-9]{3}).([0-9]{2}$)/g, ".$1,$2");
 
	
	return valor;
	}
	
	
	
	
	
	
	
	
	
	function formatarPorcentagem( valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito

	if(valor.length== 0)
	valor = '0';
	
	if(valor.length== 4)
	valor = valor.substring(0, 3);
	
	return valor+'%';
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	function formatarCPFCNPJ( valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	if( valor.length > 11)
	return formatarCNPJ(valor); 
	
	return formatarCPF(valor); 
	}
	
	
	
	
	

	

	
	
	
	function formatarTEL( valor){
	
	valor=valor.replace(/\D/g,"");                  //Remove tudo o que não é dígito
	
	if( valor.length > 11)
	valor=valor.substring(0, 11);   
	
		if(valor.length >=3){
		valor=valor.replace(/(\d{0})(\d)/,"($1$2"); 
		valor=valor.replace(/(\d{2})(\d)/,"$1)$2"); 
		}
	
	
	if(valor.length == 12)
	valor=valor.replace(/(\d{4})(\d)/,"$1-$2");       
	if(valor.length == 13)
	valor=valor.replace(/(\d{5})(\d)/,"$1-$2");       
	
	return valor;
	}
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	