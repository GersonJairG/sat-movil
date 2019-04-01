var vm = new Vue({

	el:'#Titulo',

	data:{
	
		  services: [

			  			 { 	'name': 'Consulta Normal',
			  			 	'working': true,
			  			 	'selected': true

						 },

						 { 	'name': 'Reporte de materias',
			  			 	'working': true,
			  			 	'selected': false

						 },

						 { 	'name': 'Reporte de notas',
			  			 	'working': true,
			  			 	'selected': false

						 },

						 { 	'name': 'Certificado de estudio',
			  			 	'working': true,
			  			 	'selected': false

						 },

						 {

						 	'name': 'Traslado',
			  			 	'working': true,
			  			 	'selected': false
						 }



					]


	},

	computed:{

				    paintCheck(){


				    		this.services.forEach(function(service){

				    			
				    			if(service.selected == true){

				    					return " check-selected";

				    			}

				    			return "";



				    		})


				    }



	}, 

	methods:{




					checkSelected(numbercheck){

							if (this.services[numbercheck].selected==true){

									this.services[numbercheck].selected=false;

							}else if(this.services[numbercheck].selected==false){


								this.services[numbercheck].selected=true;


							}

					}


						


	} 

	


	



});