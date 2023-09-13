var list = [];
let fim = document.getElementById("fim");

function adicionar(){
    
    
    var inp1 = document.getElementById("txt1");
    var num = Number(inp1.value);
    var tab = document.getElementById("res")
     
    if(inp1.value === "" && inp1 !== null ){
        alert(`Esse campo não pode estar vazio.`)
    } else if(num <=0 || num > 100) {
            alert("Só são aceitos números entre 1 e 100.")
            
        
    } else {
        
        
        if(list.indexOf(num) == -1){
            
            list.push(num);
            let obj = document.createElement("option");
            obj.innerText = `Número ${num} adicionado.`;
            tab.appendChild(obj);
            fim.innerHTML = "";
            

        } else {
            alert(`O número ${num} já foi adicionado, tente outro.`)
            alert(`ja foram adicionados os números ${list}`)
            
        }
        inp1.value = "";
        inp1.focus();
        

    }
    
              
}



function finalizar (){
    if(list.length == 0){
        alert(`É necessário adicionar um número primeiro antes de finalizar.`)
    } else {
        let max = Math.max(...list);
        let min = Math.min(...list);
        let sum = list.reduce(function(a,b){
            return a + b;
        });
        let med = sum/(list.length)
        
        
        let fim = document.getElementById("fim");
        fim.innerHTML +=  `Ao todo, temos ${list.length } elementos<br>`;
        fim.innerHTML +=  `O maior número é: ${max} <br>`;
        fim.innerHTML +=  `O menor número é :${min} <br>`;
        fim.innerHTML +=  `A soma dos números é : ${sum} <br>`;
        fim.innerHTML +=  `A média dos números é : ${med} <br>`;
        
        
    

    }
    

}



function resetar(){
    let res = document.getElementById("res");
    let res1 = document.getElementById("fim");
    var list = [];

    res.innerHTML = ``;
    res1.innerHTML = ``;
}