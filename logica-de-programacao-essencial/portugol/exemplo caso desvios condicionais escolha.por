programa {
	funcao inicio() {
		escreva("1 - Abrir Netflix 2 - Abrir Amazon Prime 3 - Abrir HBO Go 4 - Sair")
	    inteiro menu = 0
	    
	    escreva("\n" + "Sua op��o: ")
	    leia(menu)
	    escolha (menu) {
        caso 1:     //Testa se o valor � igual a 1
	        escreva ("Ok!! Abrir Netflix!!")
	    pare
	    
        caso 2://Testa se o valor � igual a 2
	        escreva("Ok!! Abrir Amazon Prime!!")
	    pare 
	   caso 3: //Testa se o valor � igual a 3
	        escreva("Ok!! Abrir HBO GO!!")
	    pare
	    caso 4: //Testa se o valor � igual a 4
	   
	        escreva("Saindo do menu...")
	    pare
	    
	    caso contrario:
	        escreva("Voc� deve escolher entre as op��es 1, 2, 3 ou 4")
	    }
}
}