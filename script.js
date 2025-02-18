const provinceData = {
    // Abruzzo
    "L'Aquila": { regione: 'Abruzzo', codice: 'REMI_AQ', var: '81', comuni: ["L'Aquila", "Avezzano", "Sulmona", "Castel di Sangro"] },
    "Chieti": { regione: 'Abruzzo', codice: 'REMI_CH', var: '82', comuni: ["Chieti", "Lanciano", "Vasto", "Francavilla al Mare"] },
    // ... [tutti i dati delle province che abbiamo generato prima]
};

document.addEventListener('DOMContentLoaded', function() {
    const provinciaSelect = document.getElementById('provincia');
    const resultGroup = document.getElementById('resultGroup');
    const codiceRemiSpan = document.getElementById('codiceRemi');
    const regioneSpan = document.getElementById('regione');
    const provinciaSpan = document.getElementById('provinciaSelected');
    const comuniList = document.getElementById('comuniList');

    // Popola il select con le province
    Object.keys(provinceData).sort().forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia;
        option.textContent = `${provincia} (${provinceData[provincia].regione})`;
        provinciaSelect.appendChild(option);
    });

    // Gestisci il cambio di provincia
    provinciaSelect.addEventListener('change', function() {
        const selectedProvincia = this.value;
        
        if (selectedProvincia) {
            const data = provinceData[selectedProvincia];
            
            // Mostra il codice RE.MI
            codiceRemiSpan.textContent = `34722${data.var}`;
            
            // Aggiorna i dettagli
            regioneSpan.textContent = data.regione;
            provinciaSpan.textContent = selectedProvincia;
            
            // Aggiorna la lista dei comuni
            comuniList.innerHTML = '';
            data.comuni.forEach(comune => {
                const li = document.createElement('li');
                li.textContent = comune;
                comuniList.appendChild(li);
            });
            
            // Mostra i risultati
            resultGroup.style.display = 'block';
        } else {
            resultGroup.style.display = 'none';
        }
    });
});
