//Fun��o do Algoritmo: Calcular a m�dia aritm�tica
//Programador: Samuel

programa {
	funcao inicio() {
	    real nota1,nota2,nota3,nota4,media
	    cadeia aluno
	    
	    escreva("Digite o nome do aluno: ")
	    leia(aluno)
	    escreva("Digite a nota 1: ")
	    leia(nota1)
	    escreva("Digite a nota 2: ")
	    leia(nota2)
	    escreva("Digite a nota 3: ")
	    leia(nota3)
	    escreva("Digite a nota 4: ")
	    leia(nota4)
	    
	    media = (nota1+nota2+nota3+nota4)/4
	    
	    escreva("O aluno: " + aluno + " obteve a m�dia: " + media)
	    //Verificar se a m�dia � maior ou igual a 7
	    se(media>=7) {
	        escreva("\n" + "Parab�ns! Voc� foi aprovado")
	    } 
	    
	    //Caso a m�dia seja menor que 7
	    senao {
	        escreva("\n" + "voc� foi reprovado.")
	    }
	}
}
