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
    "Biella": { regione: 'Piemonte', codice:
