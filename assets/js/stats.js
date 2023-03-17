const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        showTable(data.events) 
    })

function showTable(arrayEvents) {
    let highestAttendance = arrayEvents.filter(evento => evento.assistance).reduce((eventoUno, eventoDos) => 
        // if((eventoUno.assistance / eventoUno.capacity) > (eventoDos.assistance / eventoDos.capacity)) return eventoUno
        // return eventoDos
        (eventoUno.assistance / eventoUno.capacity) > (eventoDos.assistance / eventoDos.capacity) ? eventoUno : eventoDos
    )

    let lowestAttendance = arrayEvents.filter(evento => evento.assistance).reduce((eventoUno, eventoDos) => {
        if((eventoUno.assistance / eventoUno.capacity) < (eventoDos.assistance / eventoDos.capacity)) return eventoUno
        return eventoDos
    })

    let largerCapacity = arrayEvents.reduce((eventoUno, eventoDos) => {
        if(eventoUno.capacity > eventoDos.capacity) return eventoUno
        return eventoDos
    })

    let table = document.getElementById("first-table");
    table.innerHTML = `
        <tr>
            <td>${highestAttendance.name}  (${(highestAttendance.assistance * 100 / highestAttendance.capacity).toFixed(2)}%)</td>
            <td>${lowestAttendance.name} (${(lowestAttendance.assistance * 100 / lowestAttendance.capacity).toFixed(2)}%)</td>
            <td>${largerCapacity.name} (${(largerCapacity.capacity)})</td>
        </tr>
`
}