programa {
    funcao inicio() {
        inteiro contador = 0
        cadeia contato[][] = {{"João","São Paulo","(11) 9999-5241"},{"Maria","Ribeirão Preto","(16)9999-8596"},{"Ana","Manaus","(92)9999-8574"}}
        faca {
        escreva("Nome: " + contato[contador][0] + " | Cidade: " + contato[contador][1] + " | Telefone: " + contato[contador][2] + "\n")
        contador++
        } enquanto (contador<=2)
    }
        
}