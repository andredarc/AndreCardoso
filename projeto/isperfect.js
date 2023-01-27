// Programa Javascript para checar se o numero é perfeito
// ou não
 
// Returne true se n é perfeito
function isPerfect(n)
{
    // amarzenando a soma dos divisores
    sum = 1;
 
    // encontrando divisores possiveis
    for (let i=2; i*i<=n; i++)
    {
        if (n%i==0)
        {
            if(i*i!=n)
                sum = sum + i + n/i;
            else
                sum=sum+i;
        }
    }
    // Se a soma dos divisores for igual a
    // n, então n é um número perfeito
    if (sum == n && n != 1)
        return true;
 
    return false;

    
    
}
document.getElementById("h").innerText = ("Abaixo estão todos os números perfeitos até 10000" + "<br>");
for (let n =2; n<10000; n++)
    if (isPerfect(n))
    console.log(n + " é um número perfeito" + "<br>");

btnVerificar.addEventListener('click', function () {
    sortNumbers(n.value);
});