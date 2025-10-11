const questions = {
  "ACRONIMOS":[
    {question:"¿Qué significa IRS?", options:["Internal Revenue Service","Income Return System"], answer:"Internal Revenue Service", points:100},
    {question:"¿Qué significa CEO?", options:["Chief Executive Officer","Central Employment Office"], answer:"Chief Executive Officer", points:200},
    {question:"¿Qué significa AI?", options:["Artificial Intelligence","Automatic Input"], answer:"Artificial Intelligence", points:300},
    {question:"¿Qué significa VAT?", options:["Value Added Tax","Virtual Asset Transfer"], answer:"Value Added Tax", points:400},
    {question:"¿Qué significa FY?", options:["Fiscal Year","Financial Yield"], answer:"Fiscal Year", points:500},
    {question:"¿Qué significa KPI?", options:["Key Performance Indicator","Knowledge Process Input"], answer:"Key Performance Indicator", points:100},
    {question:"¿Qué significa HR?", options:["Human Resources","High Revenue"], answer:"Human Resources", points:200},
    {question:"¿Qué significa R&D?", options:["Research & Development","Review & Data"], answer:"Research & Development", points:300},
    {question:"¿Qué significa VPN?", options:["Virtual Private Network","Variable Payment Node"], answer:"Virtual Private Network", points:400},
    {question:"¿Qué significa API?", options:["Application Programming Interface","Automated Processing Input"], answer:"Application Programming Interface", points:500}
  ],
  "TAX":[
    {question:"El Formulario 1040 es para individuos.", options:["Verdadero","Falso"], answer:"Verdadero", points:100},
    {question:"El K-1 reporta ingresos de partnerships.", options:["Verdadero","Falso"], answer:"Verdadero", points:200},
    {question:"El EIN identifica entidades extranjeras.", options:["Verdadero","Falso"], answer:"Falso", points:300},
    {question:"La tasa federal es del 21% para corporaciones.", options:["Verdadero","Falso"], answer:"Verdadero", points:400},
    {question:"El 1099 se usa solo para salarios.", options:["Verdadero","Falso"], answer:"Falso", points:500},
    {question:"El Formulario W-2 lo entrega el empleador.", options:["Verdadero","Falso"], answer:"Verdadero", points:100},
    {question:"El SALT deduction es deducción estatal y local.", options:["Verdadero","Falso"], answer:"Verdadero", points:200},
    {question:"Form 5471 reporta ownership en foreign corporations.", options:["Verdadero","Falso"], answer:"Verdadero", points:300},
    {question:"El self-employment tax aplica solo a empleados.", options:["Verdadero","Falso"], answer:"Falso", points:400},
    {question:"El standard deduction es opcional.", options:["Verdadero","Falso"], answer:"Verdadero", points:500}
  ],
  "CULTURA POP":[
    {question:"¿Quién es el protagonista de 'Stranger Things'?", options:["Eleven","Mike"], answer:"Eleven", points:100},
    {question:"¿Cómo se llama la espada de 'Star Wars'?", options:["Sable de luz","Espada láser"], answer:"Sable de luz", points:200},
    {question:"Anime donde se usa 'Sharingan'?", options:["Naruto","One Piece"], answer:"Naruto", points:300},
    {question:"Juego donde aparece 'Mario'", options:["Super Mario","Zelda"], answer:"Super Mario", points:400},
    {question:"Serie con zombies y Rick Grimes", options:["The Walking Dead","Breaking Bad"], answer:"The Walking Dead", points:500},
    {question:"Personaje de 'Pokémon' con gorra roja", options:["Ash","Gary"], answer:"Ash", points:100},
    {question:"Libro de magos creado por J.K. Rowling", options:["Harry Potter","Percy Jackson"], answer:"Harry Potter", points:200},
    {question:"Superhéroe con escudo y traje azul", options:["Capitán América","Iron Man"], answer:"Capitán América", points:300},
    {question:"El universo de 'MCU' es de qué compañía", options:["Marvel","DC"], answer:"Marvel", points:400},
    {question:"Villano de 'Black Panther'", options:["Killmonger","Thanos"], answer:"Killmonger", points:500}
  ],
  "DEPORTES":[
    {question:"País que ganó el Mundial 2018", options:["Francia","Croacia"], answer:"Francia", points:100},
    {question:"Jugador con más goles en la historia del fútbol", options:["Cristiano Ronaldo","Messi"], answer:"Cristiano Ronaldo", points:200},
    {question:"Deporte olímpico de piscina", options:["Natación","Vela"], answer:"Natación", points:300},
    {question:"Número de jugadores en un equipo de baloncesto", options:["5","6"], answer:"5", points:400},
    {question:"Torneo de tenis sobre césped más famoso", options:["Wimbledon","Roland Garros"], answer:"Wimbledon", points:500},
    {question:"País de origen del fútbol", options:["Inglaterra","Brasil"], answer:"Inglaterra", points:100},
    {question:"Jugador argentino apodado 'Kun'", options:["Aguero","Messi"], answer:"Aguero", points:200},
    {question:"Serie de carreras de autos F1", options:["Formula 1","NASCAR"], answer:"Formula 1", points:300},
    {question:"Equipo NBA con más títulos", options:["Boston Celtics","Lakers"], answer:"Boston Celtics", points:400},
    {question:"Atleta jamaicano récord 100m", options:["Usain Bolt","Carl Lewis"], answer:"Usain Bolt", points:500}
  ],
  "MUSICA":[
    {question:"Banda de 'Bohemian Rhapsody'", options:["Queen","The Beatles"], answer:"Queen", points:100},
    {question:"Cantante de 'Shape of You'", options:["Ed Sheeran","Bruno Mars"], answer:"Ed Sheeran", points:200},
    {question:"Instrumento principal de una guitarra", options:["Cuerdas","Percusión"], answer:"Cuerdas", points:300},
    // {question:"Banda de rock británica 'Coldplay'", options:["Coldplay","Oasis"], answer:"Coldplay", points:400},
    {question:"Cantante 'Bad Guy'", options:["Billie Eilish","Ariana Grande"], answer:"Billie Eilish", points:500},
    {question:"Banda 'Nirvana' género musical", options:["Grunge","Pop"], answer:"Grunge", points:100},
    {question:"Cantante de 'Thriller'", options:["Michael Jackson","Prince"], answer:"Michael Jackson", points:200},
    {question:"Instrumento de percusión", options:["Batería","Violín"], answer:"Batería", points:300},
    {question:"Género musical de 'Taylor Swift' album 1989", options:["Pop","Country"], answer:"Pop", points:400},
    {question:"Banda de 'Smells Like Teen Spirit'", options:["Nirvana","Pearl Jam"], answer:"Nirvana", points:500}
  ],
  "CINES Y SERIES":[
    {question:"Director de 'Jurassic Park'", options:["Steven Spielberg","James Cameron"], answer:"Steven Spielberg", points:100},
    {question:"Película con 'Darth Vader'", options:["Star Wars","Star Trek"], answer:"Star Wars", points:200},
    {question:"Serie 'Breaking Bad' protagonista", options:["Walter White","Jesse Pinkman"], answer:"Walter White", points:300},
    {question:"Actor que interpreta a 'Iron Man'", options:["Robert Downey Jr.","Chris Evans"], answer:"Robert Downey Jr.", points:400},
    {question:"Saga de magos adolescente", options:["Harry Potter","Percy Jackson"], answer:"Harry Potter", points:500},
    {question:"Película con Titanic", options:["Titanic","Avatar"], answer:"Titanic", points:100},
    {question:"Director de 'Inception'", options:["Christopher Nolan","Quentin Tarantino"], answer:"Christopher Nolan", points:200},
    {question:"Serie de zombies AMC", options:["The Walking Dead","Fear the Walking Dead"], answer:"The Walking Dead", points:300},
    {question:"Película de superhéroes 'Black Panther'", options:["Marvel","DC"], answer:"Marvel", points:400},
    {question:"Actor que interpreta a 'Spider-Man' MCU", options:["Tom Holland","Andrew Garfield"], answer:"Tom Holland", points:500}
  ]
};
