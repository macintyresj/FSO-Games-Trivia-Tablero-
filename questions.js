const questions = {
  ACRONIMOS: [
    {question: "IRS refers to?", options: ["Income Return System", "Internal Revenue Service", "Internal Review System"], answer: "Internal Revenue Service", points: 1000},
    {question: "What does BTC mean in tax context?", options: [ "Bank Tax Credit", "Basic Tax Calculation", "Business Tax Compliance", "Business Trust Corporation"], answer: "Business Tax Compliance", points: 2500},
    {question: "FSO refers to?", options: [ "Federal Securities Organization", "Finance and Strategy Office", "Foreign Service Operations", "Financial Service Office"], answer: "Financial Service Office", points: 1500},
    {question: "What does AICPA stand for?", options: [ "Association of International Corporate and Public Accountants", "American Institute of Certified Public Accountants", "Accounting Institute of Certified Professionals in America", "American Internal Corporate Public Auditors"], answer: "American Institute of Certified Public Accountants", points: 3500},
    {question: "CR stands for in GDS?", options: [ "Capital Reporting", "Compliance Review", "Cash Reconciliation", "Corporate Responsibility"], answer: "Corporate Responsibility", points: 2500},
    {question: "TARAS means?", options: ["Tax Accounting and Risk Advisory Services", "Tax and Revenue Audit Service", "Transaction Accounting Risk Assessment Service", "Trust and Accounting Regulatory Advisory System"], answer: "Tax Accounting and Risk Advisory Services", points: 2500},
    {question: "EBII stands for?", options: ["Estimated Business Investment Income","Excess Business Interest Income",  "Excess Bonus Investment Interest", "Effective Business Income Increment"], answer: "Excess Business Interest Income", points: 2500},
    {question: "EBIE stands for?", options: [ "Estimated Bonus Interest Expense", "Excess Book Interest Expense","Excess Business Interest Expense", "Effective Business Investment Expense"], answer: "Excess Business Interest Expense", points: 2500},
    {question: "ATI refers to?", options: ["Annual Taxable Investment", "Accounting Taxable Income", "Adjusted Taxable Income", "Accumulated Taxable Income"], answer: "Adjusted Taxable Income", points: 3500},
    {question: "UBTI means?", options: [ "Universal Business Taxable Investment", "Undistributed Business Taxable Income", "United Business Tax Indicator"], answer: "Unrelated Business Taxable Income", points: 1000},
    {question: "PTIN stands for?", options: ["Preparer Tax Identification Number", "Professional Tax Identification Number", "Primary Taxpayer Identification Number", "Partnership Tax Identification Number"], answer: "Preparer Tax Identification Number", points: 1500},
    {question: "EIN stands for?", options: [ "Employee Identification Number", "Employer Identification Number","Entity Identification Number", "Enterprise Internal Number"], answer: "Employer Identification Number", points: 1500},
    {question: "SSN refers to?", options: ["Standard Service Number", "Social Savings Number","Social Security Number",  "State Security Number"], answer: "Social Security Number", points: 1500},
    {question: "GTP means?", options: ["Global Tax Platform", "General Tax Procedure", "Government Tax Policy", "Global Transaction Protocol"], answer: "Global Tax Platform", points: 1000},
    {question: "AFS refers to?", options: [ "Accounting Financial Summary", "Annual Fiscal Statement", "Adjusted Financial Schedule", "Audited Financial Statement",], answer: "Audited Financial Statement", points: 1000},
    {question: "CAM stands for?", options: ["Chart of Accounts Module", "Capital Accounting Management", "Corporate Audit Module", "Cash Allocation Module"], answer: "Chart of Accounts Module", points: 5000},
    {question: "SOW stands for?", options: ["Sales order Worksheet", "Service oriented Workflow", "Statement of Work", "Scope of Work"], answer: "Statement of Work", points: 5000},
    {question: "BCP stands for?", options: [ "Business change Process", "Business comunication Plan", "Business continuity Plan", "Business continuity Protocol"], answer: "Business continuity Plan", points: 5000},
    {question: "what is FDAP?", options: [ "Foreign Derived Annual Profit", "Fixed, Determinable, Annual or Periodical Income", "Federal Deductible Adjusted Payment", "Final Deferred Asset Profit"], answer: "Fixed, Determinable, Annual or Periodical Income", points: 1500}
  ],
  TAX: [
    {question: "What’s the difference between a favorable and an unfavorable M-1?", options: ["Favorable reduces taxable income; unfavorable increases it", "Favorable increases taxable income; unfavorable reduces it", "Favorable has no effect; unfavorable increases it", "Favorable decreases book income; unfavorable increases book income"], answer: "Favorable reduces taxable income; unfavorable increases it", points: 1000},
    {question: "When you are working on a fund that is initial, which election allows recognition of deductions without doing economic performance year by year?", options: ["Capitalization of amortization expenses election", "Recurring item election", "Bond depreciation election"], answer: "Recurring item election", points: 1000},
    {question: "Do partnerships pay taxes?", options: ["Yes", "No"], answer: "No", points: 1000},
    {question: "How are most Private Equity firms structured?", options: ["Corporations", "Sole Proprietorship", "Partnerships", "Trusts"], answer: "Partnerships", points: 1000},
    // {question: "Can you name at least 4 types of taxpayers?", options: ["Individual, Estate, Trust, C Corporation, S Corporation, LLC, Partnership, Foreign governments"], answer: "Individual, Estate, Trust, C Corporation, S Corporation, LLC, Partnership, Foreign governments", points: 1000},
    {question: "Which partnership is required to file entire Schedule M-3 with Form 1065?", options: ["$5M assets & $20M receipts", "$40M assets & $30M receipts", "$9M assets & $34M receipts", "$10M assets & $36M receipts"], answer: "$10M assets & $36M receipts", points: 2500},
    {question: "How many times do you need to renew your PTIN?", options: ["Once a year", "Every 2 years", "Every 3 years", "Only at hire"], answer: "Once a year", points: 1000},
    {question: "When do you need to prepare a 1042 return?", options: ["When you have foreign partners with allocated FDAP income", "Every year regardless", "Only for domestic partnerships", "Never"], answer: "When you have foreign partners with allocated FDAP income", points: 1000},
    {question: "Partnerships do not pay taxes. True or False?", options: ["True", "False"], answer: "True", points: 1000},
    {question: "Which of the following factors is generally not included in state apportionment formulas?", options: ["Property", "Payroll", "Sales", "Employee count"], answer: "Employee count", points: 1500},
    {question: "Which entities can elect to be taxed as a corporation?", options: ["Limited Partnership", "Limited Liability Partnership", "Limited Liability Company", "Trust"], answer: "Limited Liability Company", points: 1500},
    {question: "Which lines in the K-1 are income lines?", options: ["1 through 5", "1 through 11", "1 through 13", "1 through 9"], answer: "1 through 11", points: 1000},
    {question: "What’s the Form we use to report true-ups/true-downs?", options: ["Form 8082", "Form 8080", "Form 8004", "Form 8085"], answer: "Form 8082", points: 1000},
    {question: "What is the primary tax characteristic of a partnership?", options: ["Taxed at the entity level", "Pass-through entity", "Subject to corporate tax rates", "Other"], answer: "Pass-through entity", points: 1000},
    {question: "What information does Schedule D provide?", options: ["Short Term/Long term capital gain/losses", "Short Term/Long term capital gain/losses"], answer: "Short Term/Long term capital gain/losses", points: 1000},
    {question: "What type of M-1 adjustment is tax exempt income?", options: ["Favorable", "Unfavorable", "Both Favorable and Unfavorable", "None of those"], answer: "Favorable", points: 1500},
    {question: "Which forms should be issued to foreign partners allocated ECI?", options: ["Form 8805", "Form 1042", "Form 1065"], answer: "Form 8805", points: 1500},
    {question: "Which is a permanent M-1 adjustment?", options: ["Depreciation", "Bad debt expense", "Tax-exempt interest income", "Accrued bonuses"], answer: "Tax-exempt interest income", points: 1000},
    // {question: "Where can you get information for Schedule B-1?", options: ["FDR tab", "PDI for entity type"], answer: "FDR tab and PDI for entity type", points: 1000},
    // {question: "Which form reports effectively connected income (ECI) for a partnership?", options: ["K-1", "1065", "8805", "1120"], answer: "K-1", points: 1500},
    {question: "In which part of the K-1 are partner deductions reported?", options: ["Part II", "Part III", "Schedule A", "Section 199A"], answer: "Part III", points: 1500},
    {question: "What is the general due date to file Form 1065?", options: ["January 31", "March 15", "April 15", "May 15"], answer: "March 15", points: 1500},
    {question: "What is the main difference between ECI and FDAP?", options: ["ECI applies only to individuals, FDAP only to corporations","ECI is connected with a US trade or business, FDAP is not", "ECI is taxed at a flat rate, FDAP is progressive", "ECI is exempt income, FDAP is deductible"], answer: "ECI is connected with a US trade or business, FDAP is not", points: 3500},
    {question: "Which form is filed to claim the Foreign Tax Credit?", options: [ "Form 2555", "Form 8621", "Form 1116","Form 8886"], answer: "Form 1116", points: 3500},
    {question: "What information is detailed in Section L of the K-1?", options: ["Capital account analysis", "Income distribution summary", "Partner’s address", "Passthrough credits"], answer: "Capital account analysis", points: 3500},
    {question: "What does the True-Up file represent?", options: ["The reconciliation between draft and final versions", "A preliminary estimate of tax", "The support file for estimates", "The annual federal summary"], answer: "The reconciliation between draft and final versions", points: 3500},
    {question: "What is the main purpose of Form 8886?", options: ["To claim investment credits", "To report foreign source income","To disclose reportable transactions", "To request tax refunds"], answer: "To disclose reportable transactions", points: 3500},
    {question: "What is the impact of a foreign partnership on the determination of ECI?", options: ["When losses exceed $2M", "It always generates FDAP automatically", "It may generate ECI if the activity is effectively connected to the US", "It has no impact on ECI", "It must only be reported on Form 5471"], answer: "It may generate ECI if the activity is effectively connected to the US", points: 5000},
    {question: "In which cases must a K-3 be attached to a K-1?", options: ["When there are foreign income or credit items", "Only if there is more than one foreign partner", "When the entity is registered outside the US", ], answer: "When there are foreign income or credit items", points: 5000},
    {question: "What review should be done before delivering the Federal Summary K-1?", options: [ "Review only Section L", "Verify the number of active partners", "Check estimated income amounts", "Validate that data matches the workbook and true-up file"], answer: "Validate that data matches the workbook and true-up file", points: 5000},
    {question: "What does a reclassification in the Suite imply?", options: ["Adjusting the income type or entity based on new information", "Modifying the applied effective tax rate", "Changing the filing jurisdiction", "Duplicating prior year results"], answer: "Adjusting the income type or entity based on new information", points: 5000},
    {question: "What is the main criterion to determine if income is subject to withholding?", options: ["The total accumulated gains", "The preparer’s residency", "The source of the income and the type of beneficiary", "The existence of operating losses"], answer: "The source of the income and the type of beneficiary", points: 5000}
  ],
  "Música": [
    // 1k
    {question: "¿Quién es el cantante principal de Coldplay?", options: ["Bono", "Adam Levine", "Chris Martin", "Bruno Mars"], answer: "Chris Martin", points: 1000},
    {question: "¿Qué artista lanzó el álbum '30' en 2021?", options: ["Taylor Swift", "Adele", "Beyoncé", "Billie Eilish"], answer: "Adele", points: 1000},
    {question: "¿Qué cantante lanzó el éxito 'As It Was' en 2022?", options: [ "Ed Sheeran", "Justin Bieber", "Harry Styles", "Shawn Mendes"], answer: "Harry Styles", points: 1000},

    // 1.5k
    {question: "¿Quién ganó el MTV Video Music Award al Video del Año en 2022?", options: ["Beyoncé", "Taylor Swift","Lil Nas X",  "Doja Cat"], answer: "Lil Nas X", points: 1500},
    {question: "¿Qué grupo de K-pop es conocido por éxitos como 'Dynamite' y 'Butter'?", options: ["EXO", "BTS","BLACKPINK",  "TWICE"], answer: "BTS", points: 1500},
    {question: "¿Qué artista es conocido como el 'Rey del Pop'?", options: ["Michael Jackson", "Prince", "Justin Timberlake", "Bruno Mars"], answer: "Michael Jackson", points: 1500},

    // 2.5k
    {question: "¿Qué cantante encabezó el espectáculo de medio tiempo del Super Bowl en 2023?", options: ["Shakira", "Rihanna", "Beyoncé", "Taylor Swift"], answer: "Rihanna", points: 2500},
    {question: "¿Qué banda lanzó el álbum 'Music of the Spheres'?", options: ["Imagine Dragons", "Maroon 5", "OneRepublic", "Coldplay"], answer: "Coldplay", points: 2500},
    {question: "¿Quién ganó el Grammy al Álbum del Año en 2023?", options: ["Beyoncé", "Harry Styles", "Taylor Swift", "Bruno Mars"], answer: "Harry Styles", points: 2500},

    // 3.5k
    {question: "¿Qué artista es conocido por la canción 'Levitating'?", options: ["Ariana Grande", "Lady Gaga", "Dua Lipa", "Billie Eilish"], answer: "Dua Lipa", points: 3500},
    {question: "¿Qué artista lanzó el álbum 'Midnights' en 2022?", options: ["Adele", "Olivia Rodrigo", "Taylor Swift", "Billie Eilish"], answer: "Taylor Swift", points: 3500},
    {question: "¿Quién es el cantante principal de Imagine Dragons?", options: [ "Adam Levine", "Dan Reynolds", "Brandon Flowers", "Chris Martin"], answer: "Dan Reynolds", points: 3500},

    // 5k
    {question: "¿Qué rapero lanzó 'Mr. Morale & The Big Steppers' en 2022?", options: [ "Drake", "J. Cole", "Travis Scott", "Kendrick Lamar"], answer: "Kendrick Lamar", points: 5000},
    {question: "¿Qué artista ganó Billboard Artista del Año 2022?", options: [ "Taylor Swift", "Drake", "Bad Bunny", "Beyoncé"], answer: "Bad Bunny", points: 5000},
    {question: "¿Qué cantante es conocida por la canción 'Flowers' lanzada en 2023?", options: [ "Dua Lipa", "Miley Cyrus", "Selena Gomez", "Adele"], answer: "Miley Cyrus", points: 5000}
  ],

  "Cine y Series": [
    // 1k
    {question: "¿Qué película ganó el Oscar a Mejor Película en 2022?", options: ["CODA", "Dune", "Belfast", "West Side Story"], answer: "CODA", points: 1000},
    {question: "¿Quién interpreta a Eleven en la serie 'Stranger Things'?", options: [ "Sadie Sink", "Natalia Dyer", "Millie Bobby Brown", "Maya Hawke"], answer: "Millie Bobby Brown", points: 1000},
    {question: "¿Qué director es conocido por la trilogía 'The Dark Knight'?", options: [ "Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"], answer: "Christopher Nolan", points: 1000},

    // 1.5k
    {question: "En 'Game of Thrones', ¿quién se sienta en el Trono de Hierro al final?", options: ["Daenerys Targaryen", "Bran Stark", "Jon Snow", "Sansa Stark"], answer: "Bran Stark", points: 1500},
    {question: "¿Qué película incluye la canción 'Let It Go'?", options: ["Moana", "Enredados", "Coco", "Frozen"], answer: "Frozen", points: 1500},
    {question: "¿Quién dirigió la película 'Avatar: The Way of Water'?", options: [ "Peter Jackson", "Ridley Scott", "Steven Spielberg", "James Cameron",], answer: "James Cameron", points: 1500},

    // 2.5k
    {question: "¿Qué actor interpreta a Doctor Strange en el Universo Cinematográfico de Marvel?", options: [ "Robert Downey Jr.","Benedict Cumberbatch", "Chris Hemsworth", "Tom Holland"], answer: "Benedict Cumberbatch", points: 2500},
    {question: "¿Qué serie tiene a los personajes Eleven, Mike, Dustin y Lucas?", options: [ "The Umbrella Academy", "The Witcher","Stranger Things","Locke & Key"], answer: "Stranger Things", points: 2500},
    {question: "¿Qué película ganó la Palma de Oro en Cannes 2023?", options: ["Anatomy of a Fall", "Oppenheimer", "The Fabelmans", "Past Lives"], answer: "Anatomy of a Fall", points: 2500},

    // 3.5k
    {question: "¿Qué actriz interpreta a la Princesa Leia en Star Wars?", options: [ "Natalie Portman", "Daisy Ridley", "Felicity Jones", "Carrie Fisher",], answer: "Carrie Fisher", points: 3500},
    {question: "¿En qué año se estrenó la primera película de Harry Potter?", options: [ "1999","2000", "2001", "2002"], answer: "2001", points: 3500},
    {question: "¿Quién dirigió 'Everything Everywhere All At Once'?", options: [ "Wes Anderson", "Spike Lee", "Dan Kwan y Daniel Scheinert", "Greta Gerwig"], answer: "Dan Kwan y Daniel Scheinert", points: 3500},

    // 5k
    {question: "¿Qué actor ha interpretado más personajes de Marvel en películas live-action?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Tom Holland"], answer: "Robert Downey Jr.", points: 5000},
    {question: "¿Qué franquicia cinematográfica tiene a un personaje llamado Dominic Toretto?", options: ["Rápidos y Furiosos", "Misión Imposible", "James Bond", "The Transporter"], answer: "Rápidos y Furiosos", points: 5000},
    {question: "¿Qué película animada ganó el Oscar a Mejor Película Animada en 2023?", options: ["Puss in Boots: The Last Wish", "Mundos Extraños", "Pinocho de Guillermo del Toro",  "Minions: El Ascenso de Gru"], answer: "Pinocho de Guillermo del Toro", points: 5000}
  ],

  "Cultura Pop": [
    // 1k
    {question: "¿Qué red social es conocida por videos cortos y tendencias?", options: ["Instagram", "Snapchat", "TikTok", "Twitter"], answer: "TikTok", points: 1000},
    {question: "¿Qué serie popular tiene a Ted, Barney y Robin?", options: ["Friends", "The Big Bang Theory", "How I met your mother", "Modern Family"], answer: "How I met your mother", points: 1000},
    {question: "¿Cuál de estos personajes NO pertenece a DC", options: [ "Batman", "Wonder Woman", "Black Widow", "Flash"], answer: "Black Widow", points: 1000},

    // 1.5k
    {question: "¿Qué cantante es conocida como la 'Reina del Pop'?", options: ["Beyoncé", "Madonna",  "Lady Gaga", "Britney Spears"], answer: "Madonna", points: 1500},
    {question: "¿Quién es la fundadora del Met Gala?", options: ["Vogue", "Rihanna", "Anna Wintour", "Karl Lagerfeld"], answer: "Anna Wintour", points: 1500},
    {question: "¿Qué actor interpreta a Deadpool en las películas?", options: ["Ryan Reynolds", "Hugh Jackman", "Chris Pratt", "Tom Hardy"], answer: "Ryan Reynolds", points: 1500},

    // 2.5k
    {question: "¿Qué marca de moda es conocida por su logo con dos G entrelazadas?", options: ["Chanel", "Prada", "Gucci", "Louis Vuitton"], answer: "Gucci", points: 2500},
    {question: "¿Qué artista pintó 'Girl with Balloon'?", options: ["Van Gogh", "Picasso", "Banksy", "Andy Warhol"], answer: "Banksy", points: 2500},
    {question: "¿Qué serie de Netflix presenta el Upside Down?", options: ["Stranger Things", "The Witcher", "Locke & Key", "The Umbrella Academy"], answer: "Stranger Things", points: 2500},

    // 3.5k
    {question: "¿Qué reality show es famoso por la frase 'You’re fired'?", options: ["Survivor", "The Apprentice", "Big Brother", "MasterChef"], answer: "The Apprentice", points: 3500},
    {question: "¿En qué año se estrenó la primera película de 'Jurassic Park'?", options: [ "1985", "1990", "1993", "1999"], answer: "1993", points: 3500},
    {question: "¿Qué actor interpreta al Joker en la película de 2019?", options: [ "Heath Ledger", "Jared Leto", "Jack Nicholson", "Joaquin Phoenix"], answer: "Joaquin Phoenix", points: 3500},

    // 5k
    {question: "¿Cómo se llama la nave piloteada por Han Solo?", options: ["X-Wing", "Millenial Falcon", "Y-Wing", "Tie Fighter"], answer: "Millenial Falcon", points: 5000},
    {question: "¿Quién es el creador de la seri 'Dragon Ball'?", options: [ "Eiichiro Oda", "Akira Toriyama","Masashi Kishimoto", "Takehiko Inoue"], answer: "Bad Bunny", points: 5000},
    {question: "¿Quién es el creador de la serie de cómics 'The Walking dead'?", options: ["Stan Lee", "Robert Kirkman", "Neil Gaiman", "Frank Miller"], answer: "Robert Kirkman", points: 5000}
  ],

  "Deportes": [
    // 1k
    {question: "¿Quién es el atleta más rápido en la historia de los 100mts llanos?", options: ["Carl Lewis", "Jesse Owens", "Usain Bolt", "Asafa Powell"], answer: "Usain Bolt", points: 1000},
    {question: "¿Qué país ganó la Copa Mundial FIFA 2022?", options: ["Argentina", "Francia", "Brasil", "Alemania"], answer: "Argentina", points: 1000},
    {question: "¿Quién es conocido como 'La Pulga' en el fútbol?", options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"], answer: "Lionel Messi", points: 1000},

    // 1.5k
    {question: "¿Qué tenista ha ganado más títulos de Grand Slam?", options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Serena Williams"], answer: "Novak Djokovic", points: 1500},
    {question: "¿Qué jugador de baloncesto es conocido como 'King James'?", options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"], answer: "LeBron James", points: 1500},
    {question: "¿Qué país organizó los Juegos Olímpicos de 2016?", options: ["Brasil", "China", "Reino Unido", "Rusia"], answer: "Brasil", points: 1500},

    // 2.5k
    {question: "¿Qué equipo ha ganado más títulos de la UEFA Champions League?", options: ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"], answer: "Real Madrid", points: 2500},
    {question: "¿Qué equipo de la NFL tiene más victorias en Super Bowl?", options: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers"], answer: "Pittsburgh Steelers", points: 2500},
    {question: "¿Quién tiene el récord de más goles en la historia de la Copa del Mundo?", options: ["Marta", "Miroslav Klose", "Ronaldo Nazário", "Pelé"], answer: "Miroslav Klose", points: 2500},

    // 3.5k
    {question: "¿Qué piloto de Fórmula 1 ha ganado 7 campeonatos mundiales?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"], answer: "Lewis Hamilton", points: 3500},
    {question: "¿En qué deporte se disputa la Ryder Cup?", options: ["Golf", "Tenis", "Cricket", "Fútbol"], answer: "Golf", points: 3500},
    {question: "¿Qué país ganó la primera Copa Mundial Femenina de Fútbol?", options: ["Estados Unidos", "Noruega", "Alemania", "China"], answer: "Estados Unidos", points: 3500},

    // 5k
    {question: "¿Qué boxeador era conocido como 'The Greatest' y 'The People's Champion'?", options: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Manny Pacquiao"], answer: "Muhammad Ali", points: 5000},
    {question: "¿Qué país ha ganado más medallas de oro olímpicas en la historia?", options: ["Estados Unidos", "Rusia", "China", "Alemania"], answer: "Estados Unidos", points: 5000},
    {question: "¿Cuál es el equipo de baloncesto más exitoso de la NBA?", options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"], answer: "Boston Celtics", points: 5000}
  ]
};


