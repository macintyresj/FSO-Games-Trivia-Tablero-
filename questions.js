const questions = {
  ACRONIMOS: [
    {question: "IRS refers to?", options: ["Internal Revenue Service", "Income Return System", "Internal Review System"], answer: "Internal Revenue Service", points: 10000},
    {question: "What does BTC mean in tax context?", options: ["Business Tax Compliance", "Bank Tax Credit", "Basic Tax Calculation", "Business Trust Corporation"], answer: "Business Tax Compliance", points: 25000},
    {question: "FSO refers to?", options: ["Financial Service Office", "Federal Securities Organization", "Finance and Strategy Office", "Foreign Service Operations"], answer: "Financial Service Office", points: 15000},
    {question: "What does AICPA stand for?", options: ["American Institute of Certified Public Accountants", "Association of International Corporate and Public Accountants", "Accounting Institute of Certified Professionals in America", "American Internal Corporate Public Auditors"], answer: "American Institute of Certified Public Accountants", points: 35000},
    {question: "CR stands for in GDS?", options: ["Corporate Responsibility", "Capital Reporting", "Compliance Review", "Cash Reconciliation"], answer: "Corporate Responsibility", points: 25000},
    {question: "TARAS means?", options: ["Tax Accounting and Risk Advisory Services", "Tax and Revenue Audit Service", "Transaction Accounting Risk Assessment Service", "Trust and Accounting Regulatory Advisory System"], answer: "Tax Accounting and Risk Advisory Services", points: 25000},
    {question: "EBII stands for?", options: ["Excess Business Interest Income", "Estimated Business Investment Income", "Excess Bonus Investment Interest", "Effective Business Income Increment"], answer: "Excess Business Interest Income", points: 25000},
    {question: "EBIE stands for?", options: ["Excess Business Interest Expense", "Estimated Bonus Interest Expense", "Excess Book Interest Expense", "Effective Business Investment Expense"], answer: "Excess Business Interest Expense", points: 25000},
    {question: "ATI refers to?", options: ["Adjusted Taxable Income", "Annual Taxable Investment", "Accounting Taxable Income", "Accumulated Taxable Income"], answer: "Adjusted Taxable Income", points: 35000},
    {question: "UBTI means?", options: ["Unrelated Business Taxable Income", "Universal Business Taxable Investment", "Undistributed Business Taxable Income", "United Business Tax Indicator"], answer: "Unrelated Business Taxable Income", points: 10000},
    {question: "PTIN stands for?", options: ["Preparer Tax Identification Number", "Professional Tax Identification Number", "Primary Taxpayer Identification Number", "Partnership Tax Identification Number"], answer: "Preparer Tax Identification Number", points: 15000},
    {question: "EIN stands for?", options: ["Employer Identification Number", "Employee Identification Number", "Entity Identification Number", "Enterprise Internal Number"], answer: "Employer Identification Number", points: 15000},
    {question: "SSN refers to?", options: ["Social Security Number", "Standard Service Number", "Social Savings Number", "State Security Number"], answer: "Social Security Number", points: 15000},
    {question: "GTP means?", options: ["Global Tax Platform", "General Tax Procedure", "Government Tax Policy", "Global Transaction Protocol"], answer: "Global Tax Platform", points: 10000},
    {question: "AFS refers to?", options: ["Audited Financial Statement", "Accounting Financial Summary", "Annual Fiscal Statement", "Adjusted Financial Schedule"], answer: "Audited Financial Statement", points: 10000},
    {question: "CAM stands for?", options: ["Chart of Accounts Module", "Capital Accounting Management", "Corporate Audit Module", "Cash Allocation Module"], answer: "Chart of Accounts Module", points: 50000},
    {question: "SOW stands for?", options: ["Sales order Worksheet", "Service oriented Workflow", "Statement of Work", "Scope of Work"], answer: "Statement of Work", points: 50000},
    {question: "BCP stands for?", options: ["Business continuity Plan", "Business change Process", "Business comunication Plan", "Business continuity Protocol"], answer: "Business continuity Plan", points: 50000},
    {question: "what is FDAP?", options: ["Fixed, Determinable, Annual or Periodical Income", "Foreign Derived Annual Profit", "Federal Deductible Adjusted Payment", "Final Deferred Asset Profit"], answer: "Fixed, Determinable, Annual or Periodical Income", points: 15000}
  ],
  TAX: [
    {question: "What’s the difference between a favorable and an unfavorable M-1?", options: ["Favorable reduces taxable income; unfavorable increases it", "Favorable increases taxable income; unfavorable reduces it", "Favorable has no effect; unfavorable increases it", "Favorable decreases book income; unfavorable increases book income"], answer: "Favorable reduces taxable income; unfavorable increases it", points: 10000},
    {question: "When you are working on a fund that is initial, which election allows recognition of deductions without doing economic performance year by year?", options: ["Capitalization of amortization expenses election", "Recurring item election", "Bond depreciation election"], answer: "Recurring item election", points: 10000},
    {question: "Do partnerships pay taxes?", options: ["Yes", "No"], answer: "No", points: 10000},
    {question: "How are most Private Equity firms structured?", options: ["Corporations", "Sole Proprietorship", "Partnerships", "Trusts"], answer: "Partnerships", points: 10000},
    {question: "Can you name at least 4 types of taxpayers?", options: ["Individual, Estate, Trust, C Corporation, S Corporation, LLC, Partnership, Foreign governments"], answer: "Individual, Estate, Trust, C Corporation, S Corporation, LLC, Partnership, Foreign governments", points: 10000},
    {question: "Which partnership is required to file entire Schedule M-3 with Form 1065?", options: ["$5M assets & $20M receipts", "$40M assets & $30M receipts", "$9M assets & $34M receipts", "$10M assets & $36M receipts"], answer: "$10M assets & $36M receipts", points: 25000},
    {question: "How many times do you need to renew your PTIN?", options: ["Once a year", "Every 2 years", "Every 3 years", "Only at hire"], answer: "Once a year", points: 10000},
    {question: "When do you need to prepare a 1042 return?", options: ["When you have foreign partners with allocated FDAP income", "Every year regardless", "Only for domestic partnerships", "Never"], answer: "When you have foreign partners with allocated FDAP income", points: 10000},
    {question: "Partnerships do not pay taxes. True or False?", options: ["True", "False"], answer: "True", points: 10000},
    {question: "Which of the following factors is generally not included in state apportionment formulas?", options: ["Property", "Payroll", "Sales", "Employee count"], answer: "Employee count", points: 15000},
    {question: "Which entities can elect to be taxed as a corporation?", options: ["Limited Partnership", "Limited Liability Partnership", "Limited Liability Company", "Trust"], answer: "Limited Liability Company", points: 15000},
    {question: "Which lines in the K-1 are income lines?", options: ["1 through 5", "1 through 11", "1 through 13", "1 through 9"], answer: "1 through 11", points: 10000},
    {question: "What’s the Form we use to report true-ups/true-downs?", options: ["Form 8082", "Form 8080", "Form 8004", "Form 8085"], answer: "Form 8082", points: 10000},
    {question: "What is the primary tax characteristic of a partnership?", options: ["Taxed at the entity level", "Pass-through entity", "Subject to corporate tax rates", "Other"], answer: "Pass-through entity", points: 10000},
    {question: "What information does Schedule D provide?", options: ["Short Term/Long term capital gain/losses", "Short Term/Long term capital gain/losses"], answer: "Short Term/Long term capital gain/losses", points: 10000},
    {question: "What type of M-1 adjustment is tax exempt income?", options: ["Favorable", "Unfavorable", "Both Favorable and Unfavorable", "None of those"], answer: "Favorable", points: 15000},
    {question: "Which forms should be issued to foreign partners allocated ECI?", options: ["Form 8805", "Form 1042", "Form 1065"], answer: "Form 8805", points: 15000},
    {question: "Which is a permanent M-1 adjustment?", options: ["Depreciation", "Bad debt expense", "Tax-exempt interest income", "Accrued bonuses"], answer: "Tax-exempt interest income", points: 10000},
    {question: "Where can you get information for Schedule B-1?", options: ["FDR tab", "PDI for entity type"], answer: "FDR tab and PDI for entity type", points: 10000},
    {question: "Which form reports effectively connected income (ECI) for a partnership?", options: ["K-1", "1065", "8805", "1120"], answer: "K-1", points: 15000},
    {question: "In which part of the K-1 are partner deductions reported?", options: ["Part II", "Part III", "Schedule A", "Section 199A"], answer: "Part III", points: 15000},
    {question: "What is the general due date to file Form 1065?", options: ["March 15", "April 15", "May 15", "January 31"], answer: "March 15", points: 15000},
    {question: "What is the main difference between ECI and FDAP?", options: ["ECI is connected with a US trade or business, FDAP is not", "ECI is taxed at a flat rate, FDAP is progressive", "ECI applies only to individuals, FDAP only to corporations", "ECI is exempt income, FDAP is deductible"], answer: "ECI is connected with a US trade or business, FDAP is not", points: 30000},
    {question: "Which form is filed to claim the Foreign Tax Credit?", options: ["Form 1116", "Form 2555", "Form 8621", "Form 8886"], answer: "Form 1116", points: 30000},
    {question: "What information is detailed in Section L of the K-1?", options: ["Capital account analysis", "Income distribution summary", "Partner’s address", "Passthrough credits"], answer: "Capital account analysis", points: 30000},
    {question: "What does the True-Up file represent?", options: ["The reconciliation between draft and final versions", "A preliminary estimate of tax", "The support file for estimates", "The annual federal summary"], answer: "The reconciliation between draft and final versions", points: 30000},
    {question: "What is the main purpose of Form 8886?", options: ["To disclose reportable transactions", "To claim investment credits", "To report foreign source income", "To request tax refunds"], answer: "To disclose reportable transactions", points: 30000},
    {question: "What is the impact of a foreign partnership on the determination of ECI?", options: ["It may generate ECI if the activity is effectively connected to the US", "It always generates FDAP automatically", "It has no impact on ECI", "It must only be reported on Form 5471"], answer: "It may generate ECI if the activity is effectively connected to the US", points: 50000},
    {question: "In which cases must a K-3 be attached to a K-1?", options: ["When there are foreign income or credit items", "Only if there is more than one foreign partner", "When the entity is registered outside the US", "When losses exceed $2M"], answer: "When there are foreign income or credit items", points: 50000},
    {question: "What review should be done before delivering the Federal Summary K-1?", options: ["Validate that data matches the workbook and true-up file", "Review only Section L", "Verify the number of active partners", "Check estimated income amounts"], answer: "Validate that data matches the workbook and true-up file", points: 50000},
    {question: "What does a reclassification in the Suite imply?", options: ["Adjusting the income type or entity based on new information", "Modifying the applied effective tax rate", "Changing the filing jurisdiction", "Duplicating prior year results"], answer: "Adjusting the income type or entity based on new information", points: 50000},
    {question: "What is the main criterion to determine if income is subject to withholding?", options: ["The source of the income and the type of beneficiary", "The total accumulated gains", "The preparer’s residency", "The existence of operating losses"], answer: "The source of the income and the type of beneficiary", points: 50000}
  ],
  "Música": [
    // 10k
    {question: "¿Quién es el cantante principal de Coldplay?", options: ["Chris Martin", "Bono", "Adam Levine", "Bruno Mars"], answer: "Chris Martin", points: 10000},
    {question: "¿Qué artista lanzó el álbum '30' en 2021?", options: ["Adele", "Taylor Swift", "Beyoncé", "Billie Eilish"], answer: "Adele", points: 10000},
    {question: "¿Qué cantante lanzó el éxito 'As It Was' en 2022?", options: ["Harry Styles", "Ed Sheeran", "Justin Bieber", "Shawn Mendes"], answer: "Harry Styles", points: 10000},

    // 15k
    {question: "¿Quién ganó el MTV Video Music Award al Video del Año en 2022?", options: ["Lil Nas X", "Beyoncé", "Taylor Swift", "Doja Cat"], answer: "Lil Nas X", points: 15000},
    {question: "¿Qué grupo de K-pop es conocido por éxitos como 'Dynamite' y 'Butter'?", options: ["BTS", "BLACKPINK", "EXO", "TWICE"], answer: "BTS", points: 15000},
    {question: "¿Qué artista es conocido como el 'Rey del Pop'?", options: ["Michael Jackson", "Prince", "Justin Timberlake", "Bruno Mars"], answer: "Michael Jackson", points: 15000},

    // 25k
    {question: "¿Qué cantante encabezó el espectáculo de medio tiempo del Super Bowl en 2023?", options: ["Rihanna", "Beyoncé", "Shakira", "Taylor Swift"], answer: "Rihanna", points: 25000},
    {question: "¿Qué banda lanzó el álbum 'Music of the Spheres'?", options: ["Coldplay", "Imagine Dragons", "Maroon 5", "OneRepublic"], answer: "Coldplay", points: 25000},
    {question: "¿Quién ganó el Grammy al Álbum del Año en 2023?", options: ["Harry Styles", "Beyoncé", "Taylor Swift", "Bruno Mars"], answer: "Harry Styles", points: 25000},

    // 35k
    {question: "¿Qué artista es conocido por la canción 'Levitating'?", options: ["Dua Lipa", "Ariana Grande", "Lady Gaga", "Billie Eilish"], answer: "Dua Lipa", points: 35000},
    {question: "¿Qué artista lanzó el álbum 'Midnights' en 2022?", options: ["Taylor Swift", "Adele", "Olivia Rodrigo", "Billie Eilish"], answer: "Taylor Swift", points: 35000},
    {question: "¿Quién es el cantante principal de Imagine Dragons?", options: ["Dan Reynolds", "Brandon Flowers", "Adam Levine", "Chris Martin"], answer: "Dan Reynolds", points: 35000},

    // 50k
    {question: "¿Qué rapero lanzó 'Mr. Morale & The Big Steppers' en 2022?", options: ["Kendrick Lamar", "Drake", "J. Cole", "Travis Scott"], answer: "Kendrick Lamar", points: 50000},
    {question: "¿Qué artista ganó Billboard Artista del Año 2022?", options: ["Bad Bunny", "Taylor Swift", "Drake", "Beyoncé"], answer: "Bad Bunny", points: 50000},
    {question: "¿Qué cantante es conocida por la canción 'Flowers' lanzada en 2023?", options: ["Miley Cyrus", "Dua Lipa", "Selena Gomez", "Adele"], answer: "Miley Cyrus", points: 50000}
  ],

  "Cine y Series": [
    // 10k
    {question: "¿Qué película ganó el Oscar a Mejor Película en 2022?", options: ["CODA", "Dune", "Belfast", "West Side Story"], answer: "CODA", points: 10000},
    {question: "¿Quién interpreta a Eleven en la serie 'Stranger Things'?", options: ["Millie Bobby Brown", "Sadie Sink", "Natalia Dyer", "Maya Hawke"], answer: "Millie Bobby Brown", points: 10000},
    {question: "¿Qué director es conocido por la trilogía 'The Dark Knight'?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], answer: "Christopher Nolan", points: 10000},

    // 15k
    {question: "En 'Game of Thrones', ¿quién se sienta en el Trono de Hierro al final?", options: ["Bran Stark", "Daenerys Targaryen", "Jon Snow", "Sansa Stark"], answer: "Bran Stark", points: 15000},
    {question: "¿Qué película incluye la canción 'Let It Go'?", options: ["Frozen", "Moana", "Enredados", "Coco"], answer: "Frozen", points: 15000},
    {question: "¿Quién dirigió la película 'Avatar: The Way of Water'?", options: ["James Cameron", "Peter Jackson", "Ridley Scott", "Steven Spielberg"], answer: "James Cameron", points: 15000},

    // 25k
    {question: "¿Qué actor interpreta a Doctor Strange en el Universo Cinematográfico de Marvel?", options: ["Benedict Cumberbatch", "Robert Downey Jr.", "Chris Hemsworth", "Tom Holland"], answer: "Benedict Cumberbatch", points: 25000},
    {question: "¿Qué serie tiene a los personajes Eleven, Mike, Dustin y Lucas?", options: ["Stranger Things", "The Umbrella Academy", "The Witcher", "Locke & Key"], answer: "Stranger Things", points: 25000},
    {question: "¿Qué película ganó la Palma de Oro en Cannes 2023?", options: ["Anatomy of a Fall", "Oppenheimer", "The Fabelmans", "Past Lives"], answer: "Anatomy of a Fall", points: 25000},

    // 35k
    {question: "¿Qué actriz interpreta a la Princesa Leia en Star Wars?", options: ["Carrie Fisher", "Natalie Portman", "Daisy Ridley", "Felicity Jones"], answer: "Carrie Fisher", points: 35000},
    {question: "¿En qué año se estrenó la primera película de Harry Potter?", options: ["2001", "1999", "2002", "2000"], answer: "2001", points: 35000},
    {question: "¿Quién dirigió 'Everything Everywhere All At Once'?", options: ["Dan Kwan y Daniel Scheinert", "Wes Anderson", "Spike Lee", "Greta Gerwig"], answer: "Dan Kwan y Daniel Scheinert", points: 35000},

    // 50k
    {question: "¿Qué actor ha interpretado más personajes de Marvel en películas live-action?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Tom Holland"], answer: "Robert Downey Jr.", points: 50000},
    {question: "¿Qué franquicia cinematográfica tiene a un personaje llamado Dominic Toretto?", options: ["Rápidos y Furiosos", "Misión Imposible", "James Bond", "The Transporter"], answer: "Rápidos y Furiosos", points: 50000},
    {question: "¿Qué película animada ganó el Oscar a Mejor Película Animada en 2023?", options: ["Pinocho de Guillermo del Toro", "Puss in Boots: The Last Wish", "Mundos Extraños", "Minions: El Ascenso de Gru"], answer: "Pinocho de Guillermo del Toro", points: 50000}
  ],

  "Cultura Pop": [
    // 10k
    {question: "¿Qué red social es conocida por videos cortos y tendencias?", options: ["TikTok", "Instagram", "Snapchat", "Twitter"], answer: "TikTok", points: 10000},
    {question: "¿Qué serie popular tiene a Ted, Barney y Robin?", options: ["How I met your mother", "Friends", "The Big Bang Theory", "Modern Family"], answer: "Cómo Conocí a Tu Madre", points: 10000},
    {question: "¿Quién es el cantante principal de la banda Coldplay?", options: ["Chris Martin", "Bono", "Adam Levine", "Bruno Mars"], answer: "Chris Martin", points: 10000},

    // 15k
    {question: "¿Qué cantante es conocida como la 'Reina del Pop'?", options: ["Madonna", "Beyoncé", "Lady Gaga", "Britney Spears"], answer: "Madonna", points: 15000},
    {question: "¿Quién es la fundadora del Met Gala?", options: ["Anna Wintour", "Vogue", "Rihanna", "Karl Lagerfeld"], answer: "Anna Wintour", points: 15000},
    {question: "¿Qué actor interpreta a Deadpool en las películas?", options: ["Ryan Reynolds", "Hugh Jackman", "Chris Pratt", "Tom Hardy"], answer: "Ryan Reynolds", points: 15000},

    // 25k
    {question: "¿Qué marca de moda es conocida por su logo con dos G entrelazadas?", options: ["Gucci", "Chanel", "Prada", "Louis Vuitton"], answer: "Gucci", points: 25000},
    {question: "¿Qué artista pintó 'Girl with Balloon'?", options: ["Banksy", "Van Gogh", "Picasso", "Andy Warhol"], answer: "Banksy", points: 25000},
    {question: "¿Qué serie de Netflix presenta el Upside Down?", options: ["Stranger Things", "The Witcher", "Locke & Key", "The Umbrella Academy"], answer: "Stranger Things", points: 25000},

    // 35k
    {question: "¿Qué reality show es famoso por la frase 'You’re fired'?", options: ["The Apprentice", "Survivor", "Big Brother", "MasterChef"], answer: "The Apprentice", points: 35000},
    {question: "¿Qué cantante es conocida por la canción 'Levitating'?", options: ["Dua Lipa", "Ariana Grande", "Lady Gaga", "Billie Eilish"], answer: "Dua Lipa", points: 35000},
    {question: "¿Qué actor interpreta al Joker en la película de 2019?", options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], answer: "Joaquin Phoenix", points: 35000},

    // 50k
    {question: "¿Qué cantante encabezó el espectáculo de medio tiempo del Super Bowl en 2023?", options: ["Rihanna", "Beyoncé", "Shakira", "Taylor Swift"], answer: "Rihanna", points: 50000},
    {question: "¿Qué artista ganó Billboard Artista del Año 2022?", options: ["Bad Bunny", "Taylor Swift", "Drake", "Beyoncé"], answer: "Bad Bunny", points: 50000},
    {question: "¿Qué grupo de K-pop tiene éxitos globales como 'Butter' y 'Dynamite'?", options: ["BTS", "BLACKPINK", "EXO", "TWICE"], answer: "BTS", points: 50000}
  ],

  "Deportes": [
    // 10k
    {question: "¿Quién es el atleta más rápido en la historia de los 100mts llanos?", options: ["Carl Lewis", "Jesse Owens", "Usain Bolt", "Asafa Powell"], answer: "Usain Bolt", points: 10000},
    {question: "¿Qué país ganó la Copa Mundial FIFA 2022?", options: ["Argentina", "Francia", "Brasil", "Alemania"], answer: "Argentina", points: 10000},
    {question: "¿Quién es conocido como 'La Pulga' en el fútbol?", options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"], answer: "Lionel Messi", points: 10000},

    // 15k
    {question: "¿Qué tenista ha ganado más títulos de Grand Slam?", options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Serena Williams"], answer: "Novak Djokovic", points: 15000},
    {question: "¿Qué jugador de baloncesto es conocido como 'King James'?", options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"], answer: "LeBron James", points: 15000},
    {question: "¿Qué país organizó los Juegos Olímpicos de 2016?", options: ["Brasil", "China", "Reino Unido", "Rusia"], answer: "Brasil", points: 15000},

    // 25k
    {question: "¿Qué equipo ha ganado más títulos de la UEFA Champions League?", options: ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"], answer: "Real Madrid", points: 25000},
    {question: "¿Qué equipo de la NFL tiene más victorias en Super Bowl?", options: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers"], answer: "Pittsburgh Steelers", points: 25000},
    {question: "¿Quién tiene el récord de más goles en la historia de la Copa del Mundo?", options: ["Marta", "Miroslav Klose", "Ronaldo Nazário", "Pelé"], answer: "Miroslav Klose", points: 25000},

    // 35k
    {question: "¿Qué piloto de Fórmula 1 ha ganado 7 campeonatos mundiales?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"], answer: "Lewis Hamilton", points: 35000},
    {question: "¿En qué deporte se disputa la Ryder Cup?", options: ["Golf", "Tenis", "Cricket", "Fútbol"], answer: "Golf", points: 35000},
    {question: "¿Qué país ganó la primera Copa Mundial Femenina de Fútbol?", options: ["Estados Unidos", "Noruega", "Alemania", "China"], answer: "Estados Unidos", points: 35000},

    // 50k
    {question: "¿Qué boxeador era conocido como 'The Greatest' y 'The People's Champion'?", options: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Manny Pacquiao"], answer: "Muhammad Ali", points: 50000},
    {question: "¿Qué país ha ganado más medallas de oro olímpicas en la historia?", options: ["Estados Unidos", "Rusia", "China", "Alemania"], answer: "Estados Unidos", points: 50000},
    {question: "¿Cuál es el equipo de baloncesto más exitoso de la NBA?", options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"], answer: "Boston Celtics", points: 50000}
  ]
};
