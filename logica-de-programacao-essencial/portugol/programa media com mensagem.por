//Função do Algoritmo: Calcular a média aritmética
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
	    
	    escreva("O aluno: " + aluno + " obteve a média: " + media)
	    //Verificar se a média é maior ou igual a 7
	    se(media>=7) {
	        escreva("\n" + "Parabéns! Você foi aprovado")
	    } 
	    
	    //Caso a média seja menor que 7
	    senao {
	        escreva("\n" + "você foi reprovado.")
	    }
	}
}
