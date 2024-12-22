// Función para obtener la fecha y hora ajustada a Bolivia (UTC-4)
function getBoliviaTime() {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convertimos a UTC
    return new Date(utcTime - 4 * 60 * 60000); // Ajustamos a UTC-4
}

const myDate = getBoliviaTime();
const xmas = Date.parse(`Dec 25, ${myDate.getFullYear()} 00:00:00 GMT-0400`);
const today = myDate.getTime();

const daysToChristmas = Math.round((xmas - today) / (1000 * 60 * 60 * 24));

if (daysToChristmas === 0)
    $('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0)
    $('#days').text(`Christmas was ${-1 * daysToChristmas} days ago.`);

if (daysToChristmas > 0)
    $('#days').text(`${daysToChristmas} days to Christmas!`);

// Make snow
snowDrop(150, randomInt(1035, 1280));
snow(150, 150);

function snow(num, speed) {
    if (num > 0) {
        setTimeout(function () {
            $('#drop_' + randomInt(1, 250)).addClass('animate');
            num--;
            snow(num, speed);
        }, speed);
    }
}

function snowDrop(num, position) {
    if (num > 0) {
        var drop = `<div class="drop snow" id="drop_${num}"></div>`;

        $('body').append(drop);
        $(`#drop_${num}`).css('left', position); // Asigna la posición horizontal aleatoria
        num--;
        // Cambiamos el rango de posición para abarcar el ancho completo de la pantalla
        snowDrop(num, randomInt(0, window.innerWidth)); 
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



