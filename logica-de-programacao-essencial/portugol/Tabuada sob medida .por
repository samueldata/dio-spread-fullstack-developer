programa {
	funcao inicio() {
		inteiro contador, limite, resultado, tabuada
		contador = 0
		escreva("Insira o n�mero que deseja a tabuada: ")
		leia(tabuada)
		escreva("Insira o limite da multiplica��o: ")
		leia(limite)
		faca {
		    resultado = tabuada * contador
		    escreva (tabuada + " X " + contador + " = " + resultado + "\n")
		    contador ++
		} enquanto (contador <= limite)
	}
}
