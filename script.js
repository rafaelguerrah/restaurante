function Calcular(){
    const kg = Number(document.querySelector("#inKg").value);
    const gr = Number(document.querySelector("#inGr").value);
    const resp = document.querySelector("h3");
    const imagem = document.querySelector("body");

    const conver= kg /1000;
    const valorP = gr * conver;
    resp.innerText=`O valor a ser pago R$:${valorP.toFixed(2)}`;
    imagem.style.backgroundImage = "url('img/outra.jpg')";
    imagem.style.backgroundSize = "cover";
}