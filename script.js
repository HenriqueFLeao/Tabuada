function calcular(){
    var num = document.getElementById('txtNum').value
    var res = document.getElementById('resSele')
    

    if(num.length == 0){
        alert('Porfavor, digite um número')
    } else {
        var n = Number(num)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)

        }
    }
}