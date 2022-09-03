const compra = 100;
const cartao = false;
const convenio = true;
const cartaoEconvenio = cartao && convenio;
const cartaoOUconvenio = cartao || convenio;

function venda(compra, cartaoEconvenio, cartaoOUconvenio) {
  const descontoT = compra * 0.15;
  const descontoM = compra * 0.10;

  if (cartaoEconvenio) {
    console.log(compra - descontoT);
  } else if (cartaoOUconvenio) {
    console.log(compra - descontoM);
  } else {
    console.log(compra);
  }
}

venda(compra, cartaoEconvenio, cartaoOUconvenio);
