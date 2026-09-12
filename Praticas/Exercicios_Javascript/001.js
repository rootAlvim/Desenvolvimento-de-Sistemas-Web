function duration(x) {
    let hora = Math.trunc(x / 3600);
    let minutos = Math.trunc((x - (hora * 3600)) / 60);
    let segundos = (x - (hora * 3600)) - (Math.trunc((x - (hora * 3600)) / 60) * 60)

    return `${hora}h ${minutos}min ${segundos}s`;
}

