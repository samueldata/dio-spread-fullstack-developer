programa {
	funcao inicio() {
		inteiro contador, limite, resultado, tabuada
		contador = 0
		escreva("Insira o número que deseja a tabuada: ")
		leia(tabuada)
		escreva("Insira o limite da multiplicação: ")
		leia(limite)
		faca {
		    resultado = tabuada * contador
		    escreva (tabuada + " X " + contador + " = " + resultado + "\n")
		    contador ++
		} enquanto (contador <= limite)
	}
}
