const provinceData = {
    // Abruzzo
    "L'Aquila": { regione: 'Abruzzo', codice: 'REMI_AQ', var: '81', comuni: ["L'Aquila", "Avezzano", "Sulmona", "Castel di Sangro"] },
    "Chieti": { regione: 'Abruzzo', codice: 'REMI_CH', var: '82', comuni: ["Chieti", "Lanciano", "Vasto", "Francavilla al Mare"] },
    "Pescara": { regione: 'Abruzzo', codice: 'REMI_PE', var: '83', comuni: ["Pescara", "Montesilvano", "Spoltore", "Penne"] },
    "Teramo": { regione: 'Abruzzo', codice: 'REMI_TE', var: '84', comuni: ["Teramo", "Giulianova", "Roseto degli Abruzzi", "Martinsicuro"] },

    // Basilicata
    "Potenza": { regione: 'Basilicata', codice: 'REMI_PZ', var: '91', comuni: ["Potenza", "Melfi", "Rionero in Vulture", "Lavello"] },
    "Matera": { regione: 'Basilicata', codice: 'REMI_MT', var: '92', comuni: ["Matera", "Policoro", "Pisticci", "Bernalda"] },

    // Calabria
    "Catanzaro": { regione: 'Calabria', codice: 'REMI_CZ', var: '101', comuni: ["Catanzaro", "Lamezia Terme", "Soverato", "Sellia Marina"] },
    "Cosenza": { regione: 'Calabria', codice: 'REMI_CS', var: '102', comuni: ["Cosenza", "Rende", "Corigliano-Rossano", "Castrovillari"] },
    "Crotone": { regione: 'Calabria', codice: 'REMI_KR', var: '103', comuni: ["Crotone", "Cirò Marina", "Isola di Capo Rizzuto", "Cutro"] },
    "Reggio Calabria": { regione: 'Calabria', codice: 'REMI_RC', var: '104', comuni: ["Reggio Calabria", "Gioia Tauro", "Palmi", "Siderno"] },
    "Vibo Valentia": { regione: 'Calabria', codice: 'REMI_VV', var: '105', comuni: ["Vibo Valentia", "Pizzo", "Serra San Bruno", "Tropea"] },

    // Campania
    "Avellino": { regione: 'Campania', codice: 'REMI_AV', var: '111', comuni: ["Avellino", "Ariano Irpino", "Montoro", "Solofra"] },
    "Benevento": { regione: 'Campania', codice: 'REMI_BN', var: '112', comuni: ["Benevento", "Montesarchio", "San Giorgio del Sannio", "Sant'Agata de' Goti"] },
    "Caserta": { regione: 'Campania', codice: 'REMI_CE', var: '113', comuni: ["Caserta", "Aversa", "Santa Maria Capua Vetere", "Mondragone"] },
    "Napoli": { regione: 'Campania', codice: 'REMI_NA', var: '114', comuni: ["Napoli", "Torre del Greco", "Giugliano in Campania", "Pozzuoli", "Casoria"] },
    "Salerno": { regione: 'Campania', codice: 'REMI_SA', var: '115', comuni: ["Salerno", "Battipaglia", "Nocera Inferiore", "Scafati", "Cava de' Tirreni"] },

    // Emilia-Romagna
    "Bologna": { regione: 'Emilia-Romagna', codice: 'REMI_BO', var: '65', comuni: ["Bologna", "Imola", "San Lazzaro di Savena", "Casalecchio di Reno"] },
    "Ferrara": { regione: 'Emilia-Romagna', codice: 'REMI_FE', var: '66', comuni: ["Ferrara", "Cento", "Comacchio", "Argenta"] },
    "Forlì-Cesena": { regione: 'Emilia-Romagna', codice: 'REMI_FC', var: '67', comuni: ["Forlì", "Cesena", "Cesenatico", "Savignano sul Rubicone"] },
    "Modena": { regione: 'Emilia-Romagna', codice: 'REMI_MO', var: '68', comuni: ["Modena", "Carpi", "Sassuolo", "Formigine"] },
    "Parma": { regione: 'Emilia-Romagna', codice: 'REMI_PR', var: '69', comuni: ["Parma", "Fidenza", "Salsomaggiore Terme", "Collecchio"] },
    "Piacenza": { regione: 'Emilia-Romagna', codice: 'REMI_PC', var: '70', comuni: ["Piacenza", "Fiorenzuola d'Arda", "Castel San Giovanni", "Rottofreno"] },
    "Ravenna": { regione: 'Emilia-Romagna', codice: 'REMI_RA', var: '71', comuni: ["Ravenna", "Faenza", "Lugo", "Cervia"] },
    "Reggio Emilia": { regione: 'Emilia-Romagna', codice: 'REMI_RE', var: '72', comuni: ["Reggio Emilia", "Correggio", "Scandiano", "Casalgrande"] },
    "Rimini": { regione: 'Emilia-Romagna', codice: 'REMI_RN', var: '73', comuni: ["Rimini", "Riccione", "Santarcangelo di Romagna", "Bellaria-Igea Marina"] },

    // Friuli-Venezia Giulia
    "Gorizia": { regione: 'Friuli-Venezia Giulia', codice: 'REMI_GO', var: '121', comuni: ["Gorizia", "Monfalcone", "Gradisca d'Isonzo", "Cormons"] },
    "Pordenone": { regione: 'Friuli-Venezia Giulia', codice: 'REMI_PN', var: '122', comuni: ["Pordenone", "Sacile", "San Vito al Tagliamento", "Spilimbergo"] },
    "Trieste": { regione: 'Friuli-Venezia Giulia', codice: 'REMI_TS', var: '123', comuni: ["Trieste", "Muggia", "San Dorligo della Valle", "Duino-Aurisina"] },
    "Udine": { regione: 'Friuli-Venezia Giulia', codice: 'REMI_UD', var: '124', comuni: ["Udine", "Codroipo", "Tolmezzo", "Cervignano del Friuli"] },

    // Lazio
    "Frosinone": { regione: 'Lazio', codice: 'REMI_FR', var: '131', comuni: ["Frosinone", "Cassino", "Alatri", "Sora"] },
    "Latina": { regione: 'Lazio', codice: 'REMI_LT', var: '132', comuni: ["Latina", "Aprilia", "Terracina", "Formia"] },
    "Rieti": { regione: 'Lazio', codice: 'REMI_RI', var: '133', comuni: ["Rieti", "Fara in Sabina", "Cittaducale", "Poggio Mirteto"] },
    "Roma": { regione: 'Lazio', codice: 'REMI_RM', var: '134', comuni: ["Roma", "Fiumicino", "Guidonia Montecelio", "Pomezia", "Tivoli"] },
    "Viterbo": { regione: 'Lazio', codice: 'REMI_VT', var: '135', comuni: ["Viterbo", "Civita Castellana", "Tarquinia", "Vetralla"] },

    // Liguria
    "Genova": { regione: 'Liguria', codice: 'REMI_GE', var: '141', comuni: ["Genova", "Rapallo", "Chiavari", "Sestri Levante"] },
    "Imperia": { regione: 'Liguria', codice: 'REMI_IM', var: '142', comuni: ["Imperia", "Sanremo", "Ventimiglia", "Taggia"] },
    "La Spezia": { regione: 'Liguria', codice: 'REMI_SP', var: '143', comuni: ["La Spezia", "Sarzana", "Lerici", "Santo Stefano di Magra"] },
    "Savona": { regione: 'Liguria', codice: 'REMI_SV', var: '144', comuni: ["Savona", "Albenga", "Cairo Montenotte", "Varazze"] },

    // Lombardia
    "Bergamo": { regione: 'Lombardia', codice: 'REMI_BG', var: '35', comuni: ["Bergamo", "Dalmine", "Seriate", "Treviglio"] },
    "Brescia": { regione: 'Lombardia', codice: 'REMI_BS', var: '36', comuni: ["Brescia", "Desenzano del Garda", "Lumezzane", "Montichiari"] },
    "Como": { regione: 'Lombardia', codice: 'REMI_CO', var: '37', comuni: ["Como", "Cantù", "Erba", "Mariano Comense"] },
    "Cremona": { regione: 'Lombardia', codice: 'REMI_CR', var: '38', comuni: ["Crema", "Cremona", "Casalmaggiore"] },
    "Lecco": { regione: 'Lombardia', codice: 'REMI_LC', var: '39', comuni: ["Lecco", "Merate", "Calolziocorte"] },
    "Lodi": { regione: 'Lombardia', codice: 'REMI_LO', var: '40', comuni: ["Lodi", "Codogno", "Sant'Angelo Lodigiano"] },
    "Mantova": { regione: 'Lombardia', codice: 'REMI_MN', var: '41', comuni: ["Mantova", "Castiglione delle Stiviere", "Suzzara", "Viadana"] },
    "Milano": { regione: 'Lombardia', codice: 'REMI_MI', var: '34', comuni: ["Milano", "Cinisello Balsamo", "Legnano", "Rho", "Sesto San Giovanni"] },
    "Monza e Brianza": { regione: 'Lombardia', codice: 'REMI_MB', var: '42', comuni: ["Monza", "Seregno", "Lissone", "Desio", "Cesano Maderno"] },
    "Pavia": { regione: 'Lombardia', codice: 'REMI_PV', var: '43', comuni: ["Pavia", "Vigevano", "Voghera", "Mortara"] },
    "Sondrio": { regione: 'Lombardia', codice: 'REMI_SO', var: '44', comuni: ["Sondrio", "Morbegno", "Tirano", "Chiavenna"] },
    "Varese": { regione: 'Lombardia', codice: 'REMI_VA', var: '45', comuni: ["Varese", "Busto Arsizio", "Gallarate", "Saronno"] },

    // Marche
    "Ancona": { regione: 'Marche', codice: 'REMI_AN', var: '151', comuni: ["Ancona", "Senigallia", "Jesi", "Fabriano", "Osimo"] },
    "Ascoli Piceno": { regione: 'Marche', codice: 'REMI_AP', var: '152', comuni: ["Ascoli Piceno", "San Benedetto del Tronto", "Grottammare", "Monteprandone"] },
    "Fermo": { regione: 'Marche', codice: 'REMI_FM', var: '153', comuni: ["Fermo", "Porto Sant'Elpidio", "Sant'Elpidio a Mare", "Porto San Giorgio"] },
    "Macerata": { regione: 'Marche', codice: 'REMI_MC', var: '154', comuni: ["Macerata", "Civitanova Marche", "Recanati", "Tolentino"] },
    "Pesaro e Urbino": { regione: 'Marche', codice: 'REMI_PU', var: '155', comuni: ["Pesaro", "Fano", "Urbino", "Mondolfo"] },

    // Molise
    "Campobasso": { regione: 'Molise', codice: 'REMI_CB', var: '161', comuni: ["Campobasso", "Termoli", "Bojano", "Larino"] },
    "Isernia": { regione: 'Molise', codice: 'REMI_IS', var: '162', comuni: ["Isernia", "Venafro", "Agnone", "Frosolone"] },

    // Piemonte
    "Alessandria": { regione: 'Piemonte', codice: 'REMI_AL', var: '171', comuni: ["Alessandria", "Casale Monferrato", "Novi Ligure", "Tortona", "Valenza"] },
    "Asti": { regione: 'Piemonte', codice: 'REMI_AT', var: '172', comuni: ["Asti", "Canelli", "Nizza Monferrato", "San Damiano d'Asti"] },
"Biella": { regione: 'Piemonte', codice: 'REMI_BI', var: '173', comuni: ["Biella", "Cossato", "Vigliano Biellese"] },
        "Cuneo": { regione: 'Piemonte', codice: 'REMI_CN', var: '174', comuni: ["Cuneo", "Alba", "Bra", "Fossano", "Mondovì"] },
        "Novara": { regione: 'Piemonte', codice: 'REMI_NO', var: '175', comuni: ["Novara", "Arona", "Borgomanero"] },
        "Torino": { regione: 'Piemonte', codice: 'REMI_TO', var: '176', comuni: ["Torino", "Moncalieri", "Collegno", "Rivoli"] },
        "Verbano-Cusio-Ossola": { regione: 'Piemonte', codice: 'REMI_VB', var: '177', comuni: ["Verbania", "Domodossola", "Omegna"] },
        "Vercelli": { regione: 'Piemonte', codice: 'REMI_VC', var: '178', comuni: ["Vercelli", "Borgosesia"] },

        // Puglia
        "Bari": { regione: 'Puglia', codice: 'REMI_BA', var: '181', comuni: ["Bari", "Altamura", "Molfetta", "Bitonto", "Corato"] },
        "Barletta-Andria-Trani": { regione: 'Puglia', codice: 'REMI_BT', var: '182', comuni: ["Barletta", "Andria", "Trani", "Bisceglie", "Canosa di Puglia"] },
        "Brindisi": { regione: 'Puglia', codice: 'REMI_BR', var: '183', comuni: ["Brindisi", "Fasano", "Ostuni", "Francavilla Fontana"] },
        "Foggia": { regione: 'Puglia', codice: 'REMI_FG', var: '184', comuni: ["Foggia", "Cerignola", "Manfredonia", "San Severo"] },
        "Lecce": { regione: 'Puglia', codice: 'REMI_LE', var: '185', comuni: ["Lecce", "Nardò", "Galatina", "Gallipoli", "Tricase"] },
        "Taranto": { regione: 'Puglia', codice: 'REMI_TA', var: '186', comuni: ["Taranto", "Martina Franca", "Massafra", "Manduria"] },

        // Sardegna
        "Cagliari": { regione: 'Sardegna', codice: 'REMI_CA', var: '191', comuni: ["Cagliari", "Quartu Sant'Elena", "Selargius", "Monserrato"] },
        "Nuoro": { regione: 'Sardegna', codice: 'REMI_NU', var: '192', comuni: ["Nuoro", "Siniscola", "Macomer", "Dorgali"] },
        "Oristano": { regione: 'Sardegna', codice: 'REMI_OR', var: '193', comuni: ["Oristano", "Terralba", "Bosa", "Cabras"] },
        "Sassari": { regione: 'Sardegna', codice: 'REMI_SS', var: '194', comuni: ["Sassari", "Alghero", "Porto Torres", "Ozieri"] },
        "Sud Sardegna": { regione: 'Sardegna', codice: 'REMI_SU', var: '195', comuni: ["Carbonia", "Iglesias", "Guspini", "Villacidro"] },

        // Sicilia
        "Agrigento": { regione: 'Sicilia', codice: 'REMI_AG', var: '201', comuni: ["Agrigento", "Sciacca", "Canicattì", "Licata", "Favara"] },
        "Caltanissetta": { regione: 'Sicilia', codice: 'REMI_CL', var: '202', comuni: ["Caltanissetta", "Gela", "Niscemi", "San Cataldo"] },
        "Catania": { regione: 'Sicilia', codice: 'REMI_CT', var: '203', comuni: ["Catania", "Acireale", "Misterbianco", "Paternò", "Giarre"] },
        "Enna": { regione: 'Sicilia', codice: 'REMI_EN', var: '204', comuni: ["Enna", "Piazza Armerina", "Nicosia", "Leonforte"] },
        "Messina": { regione: 'Sicilia', codice: 'REMI_ME', var: '205', comuni: ["Messina", "Barcellona Pozzo di Gotto", "Milazzo", "Taormina"] },
        "Palermo": { regione: 'Sicilia', codice: 'REMI_PA', var: '206', comuni: ["Palermo", "Bagheria", "Carini", "Monreale", "Termini Imerese"] },
        "Ragusa": { regione: 'Sicilia', codice: 'REMI_RG', var: '207', comuni: ["Ragusa", "Vittoria", "Modica", "Comiso", "Pozzallo"] },
        "Siracusa": { regione: 'Sicilia', codice: 'REMI_SR', var: '208', comuni: ["Siracusa", "Augusta", "Avola", "Floridia", "Lentini"] },
        "Trapani": { regione: 'Sicilia', codice: 'REMI_TP', var: '209', comuni: ["Trapani", "Marsala", "Mazara del Vallo", "Alcamo", "Castelvetrano"] },

        // Toscana
        "Arezzo": { regione: 'Toscana', codice: 'REMI_AR', var: '211', comuni: ["Arezzo", "Cortona", "Sansepolcro", "Montevarchi", "San Giovanni Valdarno"] },
        "Firenze": { regione: 'Toscana', codice: 'REMI_FI', var: '212', comuni: ["Firenze", "Empoli", "Scandicci", "Sesto Fiorentino", "Campi Bisenzio"] },
        "Grosseto": { regione: 'Toscana', codice: 'REMI_GR', var: '213', comuni: ["Grosseto", "Follonica", "Orbetello", "Monte Argentario"] },
        "Livorno": { regione: 'Toscana', codice: 'REMI_LI', var: '214', comuni: ["Livorno", "Cecina", "Rosignano Marittimo", "Piombino"] },
        "Lucca": { regione: 'Toscana', codice: 'REMI_LU', var: '215', comuni: ["Lucca", "Viareggio", "Capannori", "Camaiore", "Massarosa"] },
        "Massa-Carrara": { regione: 'Toscana', codice: 'REMI_MS', var: '216', comuni: ["Massa", "Carrara", "Montignoso", "Aulla"] },
        "Pisa": { regione: 'Toscana', codice: 'REMI_PI', var: '217', comuni: ["Pisa", "Cascina", "San Giuliano Terme", "Pontedera"] },
        "Pistoia": { regione: 'Toscana', codice: 'REMI_PT', var: '218', comuni: ["Pistoia", "Montecatini-Terme", "Pescia", "Monsummano Terme"] },
        "Prato": { regione: 'Toscana', codice: 'REMI_PO', var: '219', comuni: ["Prato", "Montemurlo", "Carmignano", "Poggio a Caiano"] },
        "Siena": { regione: 'Toscana', codice: 'REMI_SI', var: '220', comuni: ["Siena", "Poggibonsi", "Colle di Val d'Elsa", "Monteriggioni"] },

        // Trentino-Alto Adige
        "Bolzano": { regione: 'Trentino-Alto Adige', codice: 'REMI_BZ', var: '231', comuni: ["Bolzano", "Merano", "Bressanone", "Brunico", "Laives"] },
        "Trento": { regione: 'Trentino-Alto Adige', codice: 'REMI_TN', var: '232', comuni: ["Trento", "Rovereto", "Pergine Valsugana", "Arco", "Riva del Garda"] },

        // Umbria
        "Perugia": { regione: 'Umbria', codice: 'REMI_PG', var: '241', comuni: ["Perugia", "Foligno", "Città di Castello", "Spoleto", "Assisi"] },
        "Terni": { regione: 'Umbria', codice: 'REMI_TR', var: '242', comuni: ["Terni", "Orvieto", "Narni", "Amelia"] },

        // Valle d'Aosta
        "Aosta": { regione: "Valle d'Aosta", codice: 'REMI_AO', var: '251', comuni: ["Aosta", "Saint-Vincent", "Sarre", "Châtillon", "Saint-Christophe"] },

        // Veneto
        "Belluno": { regione: 'Veneto', codice: 'REMI_BL', var: '261', comuni: ["Belluno", "Feltre", "Cortina d'Ampezzo", "Pieve di Cadore"] },
        "Padova": { regione: 'Veneto', codice: 'REMI_PD', var: '262', comuni: ["Padova", "Abano Terme", "Este", "Cittadella", "Monselice"] },
        "Rovigo": { regione: 'Veneto', codice: 'REMI_RO', var: '263', comuni: ["Rovigo", "Adria", "Lendinara", "Porto Viro"] },
        "Treviso": { regione: 'Veneto', codice: 'REMI_TV', var: '264', comuni: ["Treviso", "Conegliano", "Castelfranco Veneto", "Montebelluna"] },
        "Venezia": { regione: 'Veneto', codice: 'REMI_VE', var: '265', comuni: ["Venezia", "Chioggia", "San Donà di Piave", "Mestre", "Jesolo"] },
        "Verona": { regione: 'Veneto', codice: 'REMI_VR', var: '266', comuni: ["Verona", "Villafranca di Verona", "San Bonifacio", "Legnago"] },
        "Vicenza": { regione: 'Veneto', codice: 'REMI_VI', var: '267', comuni: ["Vicenza", "Bassano del Grappa", "Schio", "Thiene"] }
    };

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
