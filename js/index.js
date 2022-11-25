const cara = document.getElementById('cara');
const sello = document.getElementById('sello');
const gana= document.getElementById('ganadas');
const pierde = document.getElementById('perdidas');
const partida = document.getElementById('partidas');
const resultado= document.getElementById('resultado');
const termina = document.getElementById('Finalizar');
const DineroTotal = document.getElementById('dinero');
const monedav = document.getElementById('moneda');

let Ganadas = 0, 
    Perdidas = 0, 
    Dineros = 0,
    TotalPartidas = 0,
    total = 0,
    min = 1,
    max = 10;

termina.addEventListener('click', ()=>{
      if(Dineros <0){
            Swal.fire({title: `Muchas gracias por jugar` , text: `Perdiste el total de: $ ${Dineros}`, icon:`error`  } );
            Ganadas = 0
            Perdidas = 0
            TotalPartidas = 0
            Dineros = 0,
            gana.innerText= "Ganados = 0";
            pierde.innerHTML= "<i class='fa-solid fa-x'></i> Perdida = 0";
            partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = 0";
            resultado.innerHTML= "Por favor tire la moneda para jugar";  
            DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
      }else{
            Swal.fire({title: `Muchas gracias por jugar` , text:`Ganaste el total de: $ ${Dineros}` , icon:`success`}); 
            Ganadas = 0
            Perdidas = 0
            TotalPartidas = 0
            Dineros = 0,
            gana.innerText= "Ganados = 0";
            pierde.innerHTML= "<i class='fa-solid fa-x'-></i> Perdida = 0";
            partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = 0";
            resultado.innerHTML= "Por favor tire la moneda para jugar";  
            DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
      }
     
})

cara.addEventListener('click', ()=>{
    let apuesta = document.getElementById('Apuestas').value;
    apuesta = parseFloat(apuesta)
    if(apuesta >= 5000){
            let aleatorio =  Math.random() * (max-min) +min;
            console.log(aleatorio);
            if (aleatorio => 6) {
                money = 1;
            }
            if (aleatorio <= 5) {
                money = 0;
            }
            if(money == 1){    
                gana.innerText= Ganadas
                Ganadas= Ganadas+1
                TotalPartidas = TotalPartidas+1
                total = total + apuesta;
                apuestaganada = apuesta * 0.75;
                Dineros = Dineros + apuestaganada;
                resultado.innerHTML= "El resultado fue: Cara"; 
                ganadas.innerHTML = "<i class='fa-solid fa-check'></i> Ganados = " + Ganadas;
                partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = " + TotalPartidas;
                DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
                monedav.innerHTML = "<img src='./img/cara.png' class='monedacaracallo'>";
            }
            else if(money == 0){
                pierde.innerHTML=Perdidas; 
                Perdidas = Perdidas+1 
                TotalPartidas = TotalPartidas+1
                total = total - apuesta;
                Dineros = Dineros - apuesta;
                resultado.innerHTML= "El resultado fue: Sello";  
                pierde.innerHTML = "<i class='fa-solid fa-x'-></i> Perdida = " + Perdidas;
                partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = " + TotalPartidas;
                DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
                monedav.innerHTML = "<img src='./img/sello.png' class='monedasellocallo'>";
            }
    }else{
        Swal.fire({title: `Por favor ingrese un valor superior a 5000 para poder jugar`, icon:`error`});
    }
})

sello.addEventListener('click', ()=>{
    let apuesta = document.getElementById('Apuestas').value;
    apuesta = parseFloat(apuesta)
    if(apuesta >= 5000){
        let aleatorio =  Math.random() * (max-min) +min;
            console.log(aleatorio);
            if (aleatorio => 6) {
                money = 1;
            }
            if (aleatorio <= 5) {
                money = 0;
            }
            if(money == 1){    
                gana.innerText= Ganadas
                Ganadas= Ganadas+1
                TotalPartidas = TotalPartidas+1
                total = total + apuesta;
                apuestaganada = apuesta * 0.75;
                Dineros = Dineros + apuestaganada;
                resultado.innerHTML= "El resultado fue: Sello";  
                ganadas.innerHTML = "<i class='fa-solid fa-check'></i> Ganados = " + Ganadas;
                partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = " + TotalPartidas;
                DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
                monedav.innerHTML = "<img src='./img/sello.png' class='monedasellocallo'>";
            }
            else if(money == 0){
                pierde.innerHTML=Perdidas; 
                Perdidas = Perdidas+1 
                TotalPartidas = TotalPartidas+1
                total = total - apuesta;
                Dineros = Dineros - apuesta;
                resultado.innerHTML= "El resultado fue: Cara"; 
                pierde.innerHTML = "<i class='fa-solid fa-x'-></i> Perdida = " + Perdidas;
                partida.innerHTML = "<i class='fa-brands fa-bitcoin'></i> Partidas = " + TotalPartidas;
                DineroTotal.innerHTML = "<i class='fa-solid fa-money-bill'></i> Dinero que tiene sin apuesta: "+Dineros;
                monedav.innerHTML = "<img src='./img/cara.png' class='monedacaracallo'>";
            }
    }else{
        Swal.fire({title: `Por favor ingrese un valor superior a 5000 para poder jugar`, icon:`error`});
    }
})
