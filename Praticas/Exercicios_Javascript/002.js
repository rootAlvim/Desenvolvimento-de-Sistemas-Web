
function calc_celcius(x) {
    let Fahrenheit = (x * 1.8) + 32;
    let Kelvin = x + 273.15;
    return `Celsius: ${x}°C  Fahrenheit: ${Fahrenheit}°F  Kelvin: ${Kelvin}K`

}
console.log(calc_celcius(36))