pizzaListArray = ["Pizza de Calabresa",
                  "Pizza de Peperonni",
                  "Pizza de Queijo",
                  "Pizza Quatro Queijos",
                  "Pizza Portuguesa",
                  "Pizza Extravaganza",
                  "Pizza de Kitkat"];

function getmenu()
	{    
        // Dê um nome apropriado ao id como pizzaName
        var item = document.getElementById("pizzaName").value; 
       
        //Adicione a função push() para empurrar itens dentro para da array
        pizzaListArray.push()(item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}