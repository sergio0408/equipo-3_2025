function actualizarReloj() {
  const fecha = new Date();

  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const textoFecha = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  document.getElementById("fecha").textContent = textoFecha;

  let horas = fecha.getHours();
  let minutos = String(fecha.getMinutes()).padStart(2, '0');
  let segundos = String(fecha.getSeconds()).padStart(2, '0');
  let ampm = horas >= 12 ? "p.m." : "a.m.";

  horas = horas % 12;
  horas = horas ? horas : 12;

  document.getElementById("reloj").innerHTML =
    `<span style="color:#00FF99">${horas}:${minutos}:${segundos}</span><br><span style="font-size:0.5em">${ampm}</span>`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();