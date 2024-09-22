
function converter() {
    var decimal = 0
    var binario = 0
    var octal = 0
    var hexa = 0
    var base = ipt_base.value;

    var mensagem = ''

    if (base == 'decimal') {
        decimal = Number(ipt_numero.value);
        binario = decimal.toFixed(2);
        octal = decimal.toFixed(8);
        hexa = decimal.toFixed(16);
        
        if (isNaN(decimal)) {
            mensagem = `Número invalido`
        } else {
            mensagem = `
            <b> Binario = ${Math.round(binario)} <br>
            Octal = ${Math.round(octal)} <br>
            Hexadecimal = ${Math.round(hexa)} </b>
            `
        }
    }

    if (base == 'binario') {
        binario = Number(ipt_numero.value);
        decimal = parseInt(binario, 2);
        octal = decimal.toFixed(8);
        hexa = decimal.toFixed(16);

        if (isNaN(binario) || isNaN(decimal) || (binario != 0 && decimal == 1)) {
            mensagem = `Número invalido`
        } else {
            mensagem = `
            <b> Decimal = ${Math.round(decimal)} <br>
            Octal = ${Math.round(octal)} <br>
            Hexadecimal = ${Math.round(hexa)} </b>
            `
        }
    }

    if (base == 'octal') {
        octal = Number(ipt_numero.value);
        decimal = parseInt(octal, 8);
        binario = decimal.toString(2);
        hexa = decimal.toString(16);

        if (isNaN(octal) || isNaN(decimal) || (octal != 0 && decimal == 1)) {
            mensagem = `Número invalido`
        } else {
            mensagem = `
            <b> Decimal = ${Math.round(decimal)} <br>
            Binario = ${Math.round(binario)} <br>
            Hexadecimal = ${hexa} </b>
            `
        }
    }

    if (base == 'hexa') {
        hexa = ipt_numero.value;
        decimal = parseInt(hexa, 16)
        octal = decimal.toString(8)
        binario = decimal.toString(2)

        if (isNaN(decimal) || (hexa != 0 && decimal == 1)) {
            mensagem = `Número invalido`
        } else {
            mensagem = `
            <b> Decimal = ${Math.round(decimal)} <br>
            Binario = ${Math.round(binario)} <br>
            Octal = ${Math.round(octal)} </b>
            `
        }
    }

    div_mensagem.innerHTML = mensagem;
}