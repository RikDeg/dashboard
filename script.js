function updateClocks() {
    const now = new Date();

    // Configurazione Bergamo
    const bgTimeStr = now.toLocaleTimeString('it-IT', {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const bgDateStr = now.toLocaleDateString('it-IT', {
        timeZone: 'Europe/Rome',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    document.getElementById('clock1').innerText = bgTimeStr;
    document.getElementById('date1').innerText = bgDateStr;

    // Configurazione St. Louis (America/Chicago)
    const slTimeStr = now.toLocaleTimeString('it-IT', {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const slDateStr = now.toLocaleDateString('it-IT', {
        timeZone: 'America/Chicago',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    document.getElementById('clock2').innerText = slTimeStr;
    document.getElementById('date2').innerText = slDateStr;
}

// Avvio immediato e aggiornamento ogni secondo
setInterval(updateClocks, 1000);
updateClocks();
