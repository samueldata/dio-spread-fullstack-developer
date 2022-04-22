programa {
	funcao inicio() {
	    real janeiro,fevereiro,marco,abril,total,media
	    cadeia vendedor
	    
	    escreva("Digite o nome do vendedor: ")
	    leia(vendedor)
	    escreva("Digite a quantidade de vendas em Janeiro: ")
	    leia(janeiro)
	    escreva("Digite a quantidade de vendas em Fevereiro: ")
	    leia(fevereiro)
	    escreva("Digite a quantidade de vendas em Março: ")
	    leia(marco)
	    escreva("Digite a quantidade de vendas em Abril: ")
	    leia(abril)
	    
	    total = (janeiro+fevereiro+marco+abril)
	    escreva("o total de vendas de " + vendedor + " foi de: " + total)
	    media = (total)/4
	    escreva("a média de vendas de " + vendedor + " foi de: " + media)
	   
	}
}
