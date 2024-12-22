import { targetDate1, targetDate2 } from '../hora.js';

        function getBoliviaTime() {
            const now = new Date();
            const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convertimos a UTC
            return new Date(utcTime - 4 * 60 * 60000); // Ajustamos a UTC-4
        }

        const urlBefore = "./MainFolder/index.html";
        const urlAfter = "../Carta/index.html";

        function redirectBasedOnTime() {
            const currentTime = getBoliviaTime();
            console.log("Hora actual en Bolivia:", currentTime);

            if (currentTime >= targetDate2) {
                window.location.href = urlAfter;
            }
        }

        window.onload = function() {
            redirectBasedOnTime();
            setInterval(redirectBasedOnTime, 10);
        }