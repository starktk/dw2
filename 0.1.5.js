
function venda(valorCompra, cartao, convenio, primeiraCompra) {



 if (primeiraCompra) {
  let descontoFirstBuy = valorCompra * 0.05;
  if (descontoFirstBuy > 100) {
    descontoFirstBuy = 100;
  }
    const descontoPC = valorCompra - descontoFirstBuy;
    console.log(descontoPC);

    return descontoPC;
  } else {
 
  if (cartao && convenio) {
    let descontoTotal = valorCompra * 0.15;
    if (descontoTotal > 100) {
      descontoTotal = 100;
     }
    const descontT = valorCompra - descontoTotal;
    console.log(descontT);

    return descontT;
  } else if (cartao || convenio ) {
    let descontoMeio = valorCompra * 0.10;
    if (descontoMeio > 100) {
      descontoMeio = 100;
    }
    const descontM = valorCompra - descontoMeio;
    console.log(descontM);

    return descontM;
  } else {
    console.log(valorCompra);
  }
 
 } 
}

venda(1000, true, true, false);
