var vm = new Vue({

	el:'#Titulo',

	data:{
			email : '',
			documento: '', 
			emailRegex: new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i),
			correo:'',
			correoValido:false

	},

	computed:{

					emailError(){

						if (this.correoValido == false){

							return " email-error"

						}else {

							return "";

						}



					}



	}, 

	methods:{


						validardocumento(){

						  if (this.emailRegex.test(this.correo)==false) {
							      this.correoValido=false;
							    } 

							else {

								  this.correoValido=true;
							    }
				

				}



	} 

	


	



});
