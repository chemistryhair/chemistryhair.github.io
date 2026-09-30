// EN | PL switch. Translates the rendered page in place from the dictionary
// below; service names stay in English on purpose.
(function () {
  var D = {
    // Navigation & header
    "Services": "Usługi",
    "About": "O nas",
    "Team": "Zespół",
    "Price list": "Cennik",
    "Visit us": "Kontakt",
    "Book": "Umów",
    "Open menu": "Otwórz menu",
    "Close menu": "Zamknij menu",
    "Book an appointment": "Umów wizytę",
    "View services": "Zobacz usługi",
    "Hair: see all services": "Włosy: zobacz wszystkie usługi",
    "A molecule of hair services — cut, colour, bleach, blow-dry and treatment — bonded to a strand of hair": "Cząsteczka usług fryzjerskich — cut, colour, lived-in blonde, blow-dry i treatment — połączona z pasmem włosów",

    // Hero
    "Independent stylist · Colour specialist": "Niezależny stylista · Specjalista od koloru",
    "Cuts, colour and care, mixed with a little science. We get to know your hair, then find the formula that makes it look its best.": "Strzyżenie, koloryzacja i pielęgnacja z odrobiną nauki. Najpierw poznajemy Twoje włosy, a potem dobieramy formułę, dzięki której wyglądają najlepiej.",
    "Care": "Pielęgnacja",

    // Services overview
    "The periodic table of hair": "Układ okresowy włosów",
    "Tap an element to explore it. Every service starts with a consultation, so we can plan the cut or colour around you.": "Dotknij pierwiastka, aby dowiedzieć się więcej. Każda usługa zaczyna się od konsultacji, dzięki której planujemy strzyżenie lub kolor specjalnie dla Ciebie.",

    // Cut
    "Precision cuts that grow out beautifully.": "Precyzyjne strzyżenie, które pięknie odrasta.",
    "Every cut starts with a chat about your hair, your routine and the look you want. We shape it to suit your face and texture, so it still looks good weeks later.": "Każde strzyżenie zaczynamy od rozmowy o Twoich włosach, codziennej pielęgnacji i efekcie, jakiego oczekujesz. Dopasowujemy fryzurę do kształtu twarzy i struktury włosów, tak aby dobrze wyglądała jeszcze przez wiele tygodni.",
    "Every cut starts with a proper consultation: how you wear your hair day to day, how much time you want to spend on it, and what hasn't worked before.": "Każde strzyżenie zaczyna się od rzetelnej konsultacji: jak nosisz włosy na co dzień, ile czasu chcesz poświęcać na ich układanie i co wcześniej się nie sprawdziło.",
    "We shape the cut around your face, your texture and the way your hair grows, then finish with a style and show you how to recreate it at home.": "Dopasowujemy fryzurę do Twojej twarzy, struktury włosów i kierunku ich wzrostu, a na koniec je stylizujemy i pokazujemy, jak odtworzyć ten efekt w domu.",
    "Consultation, wash, cut and blow-dry for a new look.": "Konsultacja, mycie, strzyżenie i modelowanie — dla zupełnie nowego wyglądu.",
    "Keep your shape fresh and easy to manage.": "Odświeżenie fryzury, by zachowała kształt i łatwo się układała.",
    "A quick trim between appointments.": "Szybkie podcięcie między wizytami.",

    // Colour
    "Rich, glossy colour matched to you.": "Głęboki, lśniący kolor dopasowany do Ciebie.",
    "From subtle gloss to a complete change of shade, we mix colour for your skin tone, your lifestyle and how often you want to come back.": "Od delikatnego nabłyszczenia po całkowitą zmianę odcienia — mieszamy kolor pod Twój odcień skóry, styl życia i to, jak często chcesz nas odwiedzać.",
    "Colour is chemistry at its most personal. We look at your skin tone, your natural base and how often you'd like to come back, then mix a formula that's yours.": "Kolor to chemia w najbardziej osobistym wydaniu. Bierzemy pod uwagę Twój odcień skóry, naturalną bazę i to, jak często chcesz przychodzić, a potem mieszamy formułę stworzoną tylko dla Ciebie.",
    "Whether it's covering greys, going richer or refreshing tone with a gloss, we'll talk you through every step before we start.": "Niezależnie od tego, czy chodzi o pokrycie siwych włosów, głębszy kolor czy odświeżenie odcienia glossem, przed rozpoczęciem omówimy z Tobą każdy krok.",
    "We offer semi-permanent, demi-permanent, gloss and permanent colour, and ammonia-free options are available.": "Oferujemy koloryzację półtrwałą, demi-permanentną, gloss oraz trwałą. Dostępne są również farby bez amoniaku.",
    "A patch test at least 48 hours before your appointment is a must for every colour service.": "Przed każdą koloryzacją obowiązkowy jest test uczuleniowy, wykonany co najmniej 48 godzin przed wizytą.",
    "Refresh your roots and cover greys.": "Odświeżenie odrostów i pokrycie siwych włosów.",
    "An all-over change of shade, root to tip.": "Zmiana koloru na całej długości, od nasady po końce.",
    "Refresh tone and add shine between colours.": "Odświeżenie odcienia i dodanie blasku między koloryzacjami.",

    // Lived-in Blonde
    "Soft, dimensional blonde, tailored to you.": "Miękki, wielowymiarowy blond, dopasowany do Ciebie.",
    "A made-to-measure blonde for any hair type — blended light and depth that grows out gently, with no harsh regrowth line.": "Blond szyty na miarę dla każdego rodzaju włosów — płynnie połączone światło i głębia, które łagodnie odrastają, bez wyraźnej linii odrostu.",
    "No two lived-in blondes are alike. We look at your natural base, your texture and how you wear your hair, then place brightness exactly where it flatters you — so it keeps looking good long after you leave the salon.": "Nie ma dwóch takich samych lived-in blonde. Patrzymy na Twoją naturalną bazę, strukturę włosów i sposób, w jaki je nosisz, a potem rozjaśniamy dokładnie tam, gdzie wygląda to najkorzystniej — tak, by efekt cieszył długo po wyjściu z salonu.",
    "Depending on your goals, we may mix hand-painting, fine foils, darker ribbons for depth, a blended root and brighter pieces around the face. Every appointment finishes with a tone to perfect your shade, and we plan your aftercare together.": "W zależności od Twoich oczekiwań łączymy malowanie ręczne, cienkie folie, ciemniejsze pasma dla głębi, rozmyty odrost i jaśniejsze pasma przy twarzy. Każda wizyta kończy się tonowaniem, które dopracowuje odcień, a pielęgnację w domu planujemy razem.",

    // Foilayage
    "Balayage painted inside foils for brighter, blended lift.": "Balayage malowany w foliach — dla jaśniejszego, płynnie przechodzącego rozjaśnienia.",
    "A custom-tailored colour, designed just for you.": "Kolor szyty na miarę, zaprojektowany specjalnie dla Ciebie.",
    "Foilayage combines the soft, hand-painted look of balayage with the extra lift you get from foils. Depending on your hair, we may blend in shatush, fine babylights and deeper tones to add depth, so the result looks natural from every angle.": "Foilayage łączy miękki, ręcznie malowany efekt balayage z mocniejszym rozjaśnieniem, jakie dają folie. W zależności od Twoich włosów możemy dodać shatush, delikatne babylights i ciemniejsze tony dla głębi, aby efekt wyglądał naturalnie z każdej strony.",
    "It's ideal if you love a blended, low-maintenance grow-out but want a brighter, more noticeable result than classic balayage.": "To idealny wybór, jeśli lubisz płynne, niewymagające odrastanie, ale chcesz jaśniejszego i bardziej widocznego efektu niż przy klasycznym balayage.",

    // Global bleach
    "All-over lightening, root to tip, for a bold blonde.": "Rozjaśnienie całych włosów, od nasady po końce — dla wyrazistego blondu.",
    "A global bleach lifts all of your hair to an even, bright base, then we tone it to your chosen blonde — from icy platinum to warm golden.": "Global bleach rozjaśnia wszystkie włosy do równej, jasnej bazy, którą następnie tonujemy do wybranego przez Ciebie blondu — od lodowej platyny po ciepłe złoto.",
    "It's the biggest transformation on our menu, so we always start with a consultation and plan your upkeep and aftercare together.": "To największa metamorfoza w naszej ofercie, dlatego zawsze zaczynamy od konsultacji i wspólnie planujemy dalsze wizyty oraz pielęgnację.",

    // Highlights
    "Foil highlights, from a few pieces to a full head.": "Pasemka w foliach — od kilku pasm po całą głowę.",
    "Classic foil highlights woven through your hair to add brightness, dimension and movement.": "Klasyczne pasemka w foliach, wplecione we włosy, dodają im blasku, głębi i ruchu.",
    "Go subtle with a few face-framing pieces, or brighten everything with a half or full head.": "Postaw na subtelny efekt z kilkoma pasmami wokół twarzy albo rozjaśnij całość — połowę lub całą głowę.",
    "For extra brightness, add back-to-back foils: the foils are placed close together with no gaps between them, for a lighter, more even blonde.": "Dla jeszcze jaśniejszego efektu wybierz back-to-back: folie układamy blisko siebie, bez przerw, dzięki czemu blond jest jaśniejszy i bardziej równomierny.",

    // Airtouch
    "Blown-out, seamless blonde with a soft, natural root.": "Wydmuchany, płynny blond z miękkim, naturalnym odrostem.",
    "Airtouch uses a blow-dryer to separate the finest hairs before lightening, so the colour melts seamlessly from root to end.": "W technice Airtouch przed rozjaśnieniem oddzielamy suszarką najcieńsze włosy, dzięki czemu kolor płynnie przechodzi od nasady po końce.",
    "The result is a soft, natural-looking blonde that grows out beautifully and needs fewer top-ups.": "Efektem jest miękki, naturalnie wyglądający blond, który pięknie odrasta i wymaga rzadszych odświeżeń.",

    // Blow-dry
    "Smooth, bouncy or textured — your call.": "Gładko, sprężyście czy z teksturą — Ty decydujesz.",
    "Walk out with hair that moves. We'll style it the way you like it and show you how to recreate it at home.": "Wyjdź z salonu z włosami pełnymi ruchu. Ułożymy je tak, jak lubisz, i pokażemy, jak powtórzyć ten efekt w domu.",
    "A great blow-dry can change your whole week. Smooth and glossy, big and bouncy, or undone and textured — tell us the look and we'll create it.": "Dobre modelowanie potrafi odmienić cały tydzień. Gładko i lśniąco, z objętością i sprężystością albo swobodnie i z teksturą — powiedz nam, jaki efekt lubisz, a my go stworzymy.",
    "Perfect before an event, a night out, or just because.": "Idealne przed ważnym wydarzeniem, wieczornym wyjściem albo po prostu dla przyjemności.",
    "Wash and blow-dry, smooth, bouncy or textured.": "Mycie i modelowanie — gładko, sprężyście lub z teksturą.",
    "Up-dos and styling for weddings and events.": "Upięcia i stylizacje na śluby i inne okazje.",

    // Treatment
    "Repair, strength and shine.": "Regeneracja, siła i blask.",
    "Treatments that rebuild and protect — especially after colour and lightening — so your hair stays strong, soft and shiny.": "Zabiegi, które odbudowują i chronią — szczególnie po koloryzacji i rozjaśnianiu — aby Twoje włosy pozostały mocne, miękkie i lśniące.",
    "Heat, colour and lightening all take their toll. Our treatments are chosen for your hair's needs — strength, moisture or shine — and can be added to any service.": "Wysoka temperatura, koloryzacja i rozjaśnianie zostawiają ślad na włosach. Nasze zabiegi dobieramy do potrzeb Twoich włosów — siły, nawilżenia lub blasku — i można je dodać do każdej usługi.",
    "Ask us at your consultation which treatment would make the biggest difference for you.": "Zapytaj podczas konsultacji, który zabieg przyniesie Twoim włosom najwięcej korzyści.",
    "Our 4-step treatment by Diana Beauty: a 3-step Pro Repair Complex with keratin, collagen, shea butter and algae extracts, sealed with Shinique Fiber Restore spray. It rebuilds strength, smooths frizz and brings back shine and bounce — ideal after colour or lightening.": "Nasz 4-etapowy zabieg marki Diana Beauty: 3-etapowy Pro Repair Complex z keratyną, kolagenem, masłem shea i ekstraktami z alg, zamknięty sprayem Shinique Fiber Restore. Przywraca włosom siłę, wygładza puszenie i oddaje im blask oraz sprężystość — idealny po koloryzacji lub rozjaśnianiu.",
    "A non-chemical conditioning treatment packed with plant proteins, vitamins, antioxidants and oils. Hair feels softer, looks glossier and is easier to manage — it nourishes without straightening.": "Niechemiczny zabieg pielęgnacyjny pełen roślinnych protein, witamin, antyoksydantów i olejów. Włosy są bardziej miękkie, lśniące i łatwiej się układają — zabieg odżywia, ale nie prostuje.",
    "A plant-based, formaldehyde-free treatment that fills in weak, thinner areas of each strand, so dry or damaged hair looks fuller, shines more and breaks less.": "Roślinny zabieg bez formaldehydu, który wypełnia osłabione, cieńsze miejsca każdego włosa — dzięki temu suche lub zniszczone włosy wyglądają na gęstsze, bardziej lśnią i mniej się łamią.",
    "Repair and smoothing in one. Keratin, 20 amino acids and rich butters and oils rebuild the hair from the inside and tame frizz, leaving it stronger, silkier and easier to detangle while keeping its volume. Great for porous, frizzy or curly hair.": "Regeneracja i wygładzenie w jednym. Keratyna, 20 aminokwasów oraz bogate masła i oleje odbudowują włosy od środka i ujarzmiają puszenie. Włosy są mocniejsze, bardziej jedwabiste i łatwiej się rozczesują, a przy tym zachowują objętość. Świetny wybór dla włosów porowatych, puszących się lub kręconych.",

    // Price list
    "Price list 2027": "Cennik 2027",
    "New prices from 2027": "Nowe ceny od 2027 roku",
    "Prices depend on your hair's length and thickness. Every appointment includes a consultation, and your exact price is confirmed before we start.": "Ceny zależą od długości i gęstości włosów. Każda wizyta obejmuje konsultację, a dokładną cenę potwierdzamy przed rozpoczęciem.",
    "With Caity": "Z Caity",
    "Includes wash and blow-dry. Curly blow-dry on request, extra charge.": "W cenie mycie i modelowanie. Modelowanie loków na życzenie, za dodatkową opłatą.",
    "Short": "Krótkie",
    "Medium": "Średnie",
    "Long": "Długie",
    "Medium long": "Średnio długie",
    "Extra long": "Bardzo długie",
    "Medium (neck length)": "Średnie (do szyi)",
    "Extra long / extra thick": "Bardzo długie / bardzo gęste",
    "Extra long (from)": "Bardzo długie (od)",
    "Price": "Cena",
    "Per hour": "Za godzinę",
    "Half head": "Pół głowy",
    "Full head": "Cała głowa",
    "Root to tips, with blow-dry. Add a haircut to any colour: €35. Bond builder from €25.": "Od nasady po końce, z modelowaniem. Strzyżenie do każdej koloryzacji: 35 €. Bond builder od 25 €.",
    "Root to tips, with blow-dry. Add a haircut to any colour: €35. Bond builder from €25. *Caity prices apply only when your full service is with Caity.": "Od nasady po końce, z modelowaniem. Strzyżenie do każdej koloryzacji: 35 €. Bond builder od 25 €. *Ceny z Caity obowiązują tylko wtedy, gdy całą usługę wykonuje Caity.",
    "Tone-on-tone refresh. Not suitable for covering grey or lifting. Add a haircut to any colour: €35. Bond builder from €25.": "Odświeżenie koloru ton w ton. Nie pokrywa siwych włosów i nie rozjaśnia. Strzyżenie do każdej koloryzacji: 35 €. Bond builder od 25 €.",
    "A made-to-measure blonde for any hair type — blended light and depth that grows out gently, with no harsh regrowth lines. Bond builder from €25. Roots from €25.": "Blond szyty na miarę dla każdego rodzaju włosów — płynnie połączone światło i głębia, które łagodnie odrastają, bez wyraźnej linii odrostu. Bond builder od 25 €. Odrost od 25 €.",
    "Add a haircut: €35. Back to back from €30. Bond builder from €25. Roots from €25.": "Strzyżenie: 35 €. Back to back od 30 €. Bond builder od 25 €. Odrost od 25 €.",
    "On-scalp application with cream lightener for maximum comfort. Includes bond builder and toner. Add a haircut from €35. Longer hair by quotation.": "Aplikacja przy skórze głowy kremowym rozjaśniaczem dla maksymalnego komfortu. W cenie bond builder i toner. Strzyżenie od 35 €. Dłuższe włosy — wycena indywidualna.",
    "Global lightening, removing unwanted colour, correcting tone and removing box dye. Includes bond builder. Consultation and strand test required.": "Rozjaśnianie całych włosów, usuwanie niechcianego koloru, korekta odcienia i usuwanie farby drogeryjnej. W cenie bond builder. Wymagana konsultacja i test na paśmie.",
    "With head massage. Curly blow-dry extra charge.": "Z masażem głowy. Modelowanie loków za dodatkową opłatą.",
    "Non-chemical conditioning treatment with plant-based proteins and vitamins.": "Niechemiczny zabieg pielęgnacyjny z roślinnymi proteinami i witaminami.",
    "Thermo-active keratin smoothing for a sleek, glass-hair finish. Repairs, nourishes and protects from heat, and lasts up to 8 months. Formaldehyde-free, with no harsh fumes.": "Termoaktywne wygładzanie keratynowe dla efektu gładkich, lustrzanych włosów. Regeneruje, odżywia i chroni przed wysoką temperaturą, a efekt utrzymuje się do 8 miesięcy. Bez formaldehydu i drażniących oparów.",
    "Length": "Długość",
    "from": "od",
    "Questions about a price? Call": "Pytania o cenę? Zadzwoń:",
    "or": "lub",
    "Book on Booksy": "Umów się przez Booksy",

    // About
    "About us": "O nas",
    "Good hair is a conversation": "Piękne włosy zaczynają się od rozmowy",
    "Every appointment starts with a proper consultation. We ask how you style your hair, how much time you want to spend on it, and what hasn't worked before — then we plan the cut or colour around you.": "Każda wizyta zaczyna się od rzetelnej konsultacji. Pytamy, jak układasz włosy, ile czasu chcesz im poświęcać i co wcześniej się nie sprawdziło — a potem planujemy strzyżenie lub kolor specjalnie dla Ciebie.",
    "We'll be honest about what your hair can do, and we'll show you how to look after it at home.": "Szczerze powiemy, co jest możliwe przy Twoich włosach, i pokażemy, jak dbać o nie w domu.",
    "The formula": "Formuła",
    "Consult": "Konsultacja",
    "Every service starts with a chat, not the scissors.": "Każda usługa zaczyna się od rozmowy, nie od nożyczek.",
    "Mix": "Mieszanie",
    "Cut and colour planned for how often you want to come back.": "Strzyżenie i kolor zaplanowane pod to, jak często chcesz nas odwiedzać.",
    "Advice and products that suit your hair at home.": "Porady i produkty dopasowane do pielęgnacji Twoich włosów w domu.",

    // Team
    "Meet the stylists": "Poznaj naszych stylistów",
    "The people behind the formula.": "Ludzie, którzy tworzą formułę.",
    "Founder & senior stylist": "Założyciel i starszy stylista",
    "Piotr founded Chemistry Hair Co. and has been working as a stylist for over 16 years.": "Piotr założył Chemistry Hair Co. i pracuje jako stylista od ponad 16 lat.",
    "He specialises in cuts and colour — shaping hair to suit you and mixing colour that's made for you.": "Specjalizuje się w strzyżeniu i koloryzacji — nadaje włosom kształt, który do Ciebie pasuje, i miesza kolor stworzony z myślą o Tobie.",
    "Piotr Bieniasz finishing a client's style with hairspray in the salon": "Piotr Bieniasz wykańcza fryzurę klientki lakierem w salonie",
    "years styling": "lat doświadczenia",
    "Founder": "Założyciel",
    "Junior stylist": "Młodsza stylistka",
    "Caity is a junior stylist and assistant with two years of salon experience — and she's improving her skills every day.": "Caity jest młodszą stylistką i asystentką z dwuletnim doświadczeniem w salonie — i każdego dnia rozwija swoje umiejętności.",
    "She specialises in global colours, treatments and amazing curly blow-dries.": "Specjalizuje się w koloryzacji całych włosów, zabiegach pielęgnacyjnych i wspaniałym modelowaniu loków.",
    "Caitilin Harrison sitting in a styling chair in the salon": "Caitilin Harrison siedzi na fotelu fryzjerskim w salonie",
    "2 yrs": "2 lata",
    "salon experience": "doświadczenia w salonie",
    "Assistant": "Asystentka",
    "Specialises in": "Specjalizacja",

    // Visit / contact
    "Book your appointment": "Umów wizytę",
    "Book online with Booksy in a few taps, or give us a call.": "Umów się online przez Booksy w kilka sekund albo po prostu zadzwoń.",
    "Salon": "Salon",
    "Mobile": "Komórka",
    "Saturday": "Sobota",
    "Other days: check availability on Booksy.": "Pozostałe dni: sprawdź dostępność na Booksy.",
    "Other days: check availability on": "Pozostałe dni: sprawdź dostępność na",
    "Scan to book": "Zeskanuj, aby się umówić",
    "Opens our Booksy page": "Otwiera naszą stronę na Booksy",
    "QR code for booking on Booksy": "Kod QR do rezerwacji na Booksy",
    "Follow us": "Obserwuj nas",
    "@chemistryhair.co on Instagram": "@chemistryhair.co na Instagramie",
    "QR code for Chemistry Hair Co. on Instagram": "Kod QR do profilu Chemistry Hair Co. na Instagramie",
    "Find us": "Jak do nas trafić",
    "Open in Google Maps": "Otwórz w Mapach Google",
    "Opening hours": "Godziny otwarcia",
    "or call": "lub zadzwoń:",

    // Service page chrome & gallery
    "All services": "Wszystkie usługi",
    "Home": "Strona główna",
    "Breadcrumb": "Ścieżka nawigacji",
    "Element": "Pierwiastek",
    "The technique": "Technika",
    "What's included": "Co obejmuje usługa",
    "Salon results": "Efekty z salonu",
    "Gallery": "Galeria",
    "Explore other elements": "Poznaj inne pierwiastki",
    "Specimen": "Próbka",
    "Photo coming soon": "Zdjęcie wkrótce",
    "Previous photo": "Poprzednie zdjęcie",
    "Next photo": "Następne zdjęcie",
    "Close": "Zamknij",

    // Blog
    "Lab notes": "Notatki z laboratorium",
    "Hair tips, colour know-how and aftercare advice from the chair.": "Porady o włosach, wiedza o kolorze i wskazówki pielęgnacyjne prosto z fotela fryzjerskiego.",
    "Latest note": "Najnowszy wpis",
    "All posts": "Wszystkie wpisy",
    "By": "Autor:",
    "min read": "min czytania",
    "Related service": "Powiązana usługa",
    "More lab notes": "Więcej notatek",
    "The first post is on its way.": "Pierwszy wpis już wkrótce.",
    "Foilayage, Airtouch or highlights: which blonde is for you?": "Foilayage, Airtouch czy pasemka: który blond jest dla Ciebie?",
    "Three ways to go lighter, three very different results. Here's how to pick the one that suits your hair and your routine.": "Trzy sposoby na jaśniejsze włosy i trzy zupełnie różne efekty. Podpowiadamy, jak wybrać ten, który pasuje do Twoich włosów i stylu życia.",
    "Most people know they want to be \"blonder\" — but the technique makes a huge difference to how it looks, how it grows out and how often you'll need to come back.": "Większość osób wie, że chce być „bardziej blond” — ale to technika decyduje o tym, jak kolor wygląda, jak odrasta i jak często trzeba będzie wracać do salonu.",
    "Hand-painted like balayage, but inside foils for extra lift. You get a soft, blended root with brighter ends — ideal if you want a noticeable change that still grows out gracefully.": "Malowany ręcznie jak balayage, ale w foliach, co daje mocniejsze rozjaśnienie. Otrzymujesz miękki, rozmyty odrost i jaśniejsze końce — idealne, jeśli chcesz wyraźnej zmiany, która wciąż ładnie odrasta.",
    "The finest hairs are blown out with a dryer before lightening, so the colour melts from root to tip with no harsh lines. It's the most seamless option and usually needs the fewest top-ups.": "Przed rozjaśnieniem najcieńsze włosy są wydmuchiwane suszarką, dzięki czemu kolor płynnie przechodzi od nasady po końce, bez ostrych linii. To najbardziej naturalna opcja, która zwykle wymaga najmniej odświeżeń.",
    "Classic woven foils for brightness and dimension all over. Great for a more uniform, polished blonde, from a few face-framing pieces to a full head.": "Klasyczne pasemka w foliach dla blasku i głębi na całej głowie. Świetne, jeśli chcesz bardziej równomiernego, dopracowanego blondu — od kilku pasm przy twarzy po całą głowę.",
    "Still not sure?": "Wciąż nie wiesz, co wybrać?",
    "Bring a few photos you love to your consultation and we'll decide together what will work best for your hair.": "Przynieś na konsultację kilka zdjęć, które Ci się podobają, a razem zdecydujemy, co najlepiej sprawdzi się na Twoich włosach.",
    "How to prepare for your colour appointment": "Jak przygotować się do koloryzacji",
    "A few simple things before you arrive make your colour last longer and your appointment go smoother.": "Kilka prostych kroków przed wizytą sprawi, że kolor utrzyma się dłużej, a sama wizyta przebiegnie sprawniej.",
    "Before you come in": "Przed wizytą",
    "Bring photos of looks you love — and any you don't.": "Przynieś zdjęcia fryzur, które Ci się podobają — i tych, które Ci się nie podobają.",
    "Tell us about any box dye, henna or treatments from the last couple of years.": "Powiedz nam o farbach drogeryjnych, hennie czy zabiegach z ostatnich kilku lat.",
    "Come with dry hair, styled the way you usually wear it.": "Przyjdź z suchymi włosami, ułożonymi tak, jak zwykle je nosisz.",
    "If it's your first colour with us, book a consultation and patch test first.": "Jeśli to Twoja pierwsza koloryzacja u nas, najpierw umów konsultację i test uczuleniowy.",
    "Afterwards": "Po wizycie",
    "Wait 48 hours before your first wash to let the colour settle.": "Odczekaj 48 godzin przed pierwszym myciem, aby kolor się utrwalił.",
    "Use a colour-safe, sulphate-free shampoo.": "Używaj szamponu do włosów farbowanych, bez siarczanów.",
    "Turn the heat down on your tools and always use a heat protector.": "Zmniejsz temperaturę suszarki i prostownicy i zawsze stosuj ochronę termiczną.",
    "Keeping lightened hair healthy between visits": "Jak dbać o rozjaśnione włosy między wizytami",
    "Blonde needs a little extra care. These are the habits that keep it strong, soft and bright.": "Blond potrzebuje odrobiny dodatkowej troski. Oto nawyki, dzięki którym pozostanie mocny, miękki i jasny.",
    "Lightening opens up the hair so it can take on a new colour — which also makes it more thirsty and fragile. Good aftercare makes the difference between a blonde that shines and one that snaps.": "Rozjaśnianie otwiera strukturę włosa, aby mógł przyjąć nowy kolor — przez to staje się on bardziej spragniony i delikatny. Dobra pielęgnacja decyduje o tym, czy blond będzie lśnił, czy zacznie się łamać.",
    "The essentials": "Podstawy",
    "Book a bond-repair treatment with every lightening service.": "Do każdego rozjaśniania dobierz zabieg odbudowujący wiązania.",
    "Use a purple shampoo once a week to keep brassiness away — not every wash.": "Używaj fioletowego szamponu raz w tygodniu, aby zapobiec żółtym tonom — nie przy każdym myciu.",
    "Deep-condition weekly and use a leave-in on the ends.": "Raz w tygodniu nałóż intensywną odżywkę, a na końce stosuj odżywkę bez spłukiwania.",
    "Book a toner and gloss every 6–8 weeks to refresh the shade.": "Co 6–8 tygodni umów tonowanie i gloss, aby odświeżyć odcień.",

    // Info menu
    "Info": "Info",
    "Info & policies": "Informacje i zasady",
    "FAQ, terms, cancellation, readjustment, privacy": "FAQ, regulamin, odwołania, poprawki, prywatność",
    "Policies": "Zasady",
    "FAQ": "FAQ",
    "Terms & Conditions": "Regulamin",
    "Cancellation Policy": "Zasady odwoływania wizyt",
    "Readjustment Policy": "Zasady poprawek",
    "Privacy Policy": "Polityka prywatności",
    "Terms & conditions": "Regulamin",
    "Cancellation policy": "Zasady odwoływania wizyt",
    "Readjustment policy": "Zasady poprawek",
    "Privacy policy": "Polityka prywatności",
    "Prices": "Ceny",
    "Salon policies": "Zasady salonu",
    "Any questions?": "Masz pytania?",
    "Call": "Zadzwoń:",
    "or email": "lub napisz:",
    "Last updated September 2026": "Ostatnia aktualizacja: wrzesień 2026",

    // Cut & colour pages (new text)
    "My take on a haircut is simple: easy to manage and easy to recreate at home. I create cuts that are wearable every day, not just on the day you leave the salon.": "Moje podejście do strzyżenia jest proste: fryzura ma być łatwa w układaniu i łatwa do odtworzenia w domu. Tworzę cięcia, które sprawdzają się na co dzień, a nie tylko w dniu wyjścia z salonu.",
    "At the moment we work with Alfaparf Milano, an Italian professional colour brand. We love it for the freedom it gives us to create new, unique formulas that are custom-made for each client.": "Obecnie pracujemy na produktach Alfaparf Milano — włoskiej, profesjonalnej marki koloryzacyjnej. Cenimy ją za swobodę, jaką daje w tworzeniu nowych, wyjątkowych formuł, przygotowanych indywidualnie dla każdej klientki i każdego klienta.",
    "We use four different lines:": "Korzystamy z czterech linii:",
    "Evolution of the Color — our OG permanent colour. A low-ammonia, PPD-free formula enriched with hyaluronic acid, giving full grey coverage, up to three levels of lift and long-lasting shine.": "Evolution of the Color — nasza klasyczna farba trwała. Formuła o niskiej zawartości amoniaku, bez PPD, wzbogacona kwasem hialuronowym. Zapewnia pełne pokrycie siwych włosów, rozjaśnienie nawet o trzy tony i długotrwały blask.",
    "Color Wear — we love how versatile this line is, from toning to soft grey coverage. It's a gentle, vegan demi-permanent colour, free from ammonia, MEA and PPD, and its gloss toners give a beautiful soft finish with amazing shine and condition.": "Color Wear — uwielbiamy jej wszechstronność: od tonowania po delikatne pokrycie siwizny. To łagodna, wegańska koloryzacja demi-permanentna, bez amoniaku, MEA i PPD, a jej tonery typu gloss dają piękne, miękkie wykończenie z niesamowitym blaskiem i kondycją włosów.",
    "Evolution of the Color Shine Effect — still very new in the salon, but we live for its grey blending. A permanent colour that's free from ammonia and MEA, it softens regrowth and leaves hair glossy.": "Evolution of the Color Shine Effect — wciąż nowość w salonie, ale już uwielbiamy ją za wtapianie siwych włosów. To farba trwała bez amoniaku i MEA, która łagodzi odrost i nadaje włosom połysk.",
    "rEvolution and Pigments — for creating a shade that's uniquely yours. These highly concentrated colours can be mixed into any formula, from a soft tint to a bold, vivid tone.": "rEvolution i Pigments — do tworzenia odcienia, który jest tylko Twój. Te wysoko skoncentrowane barwniki można dodać do każdej formuły, od delikatnego zabarwienia po odważny, intensywny kolor.",

    // Team bios (new text)
    "Originally from Poland, Piotr graduated from hairdressing college in 2009 and has been perfecting his craft in Ireland since 2010. Over the years he has completed numerous workshops and courses in cutting, colouring and upstyling, including training with Wierzbicki, Schmidt and Maniewski.": "Piotr pochodzi z Polski. Szkołę fryzjerską ukończył w 2009 roku, a od 2010 roku doskonali swój warsztat w Irlandii. Przez lata ukończył liczne warsztaty i kursy ze strzyżenia, koloryzacji i upięć, m.in. u Wierzbickiego, Schmidta i Maniewskiego.",
    "Among his proudest achievements are qualifying as a Kemon Colour Specialist at the Alfaparf Academy in Dublin and completing the Allilon cutting course in London with Johnny Othona, a former Vidal Sassoon stylist. He has also been a finalist several times in both the IHF and Alfaparf competitions.": "Do jego największych osiągnięć należą uzyskanie tytułu Kemon Colour Specialist w Alfaparf Academy w Dublinie oraz ukończenie kursu strzyżenia Allilon w Londynie u Johnny'ego Othony, byłego stylisty Vidal Sassoon. Był też kilkukrotnie finalistą konkursów IHF i Alfaparf.",
    "For Piotr, hairdressing is a journey he enjoys every single day. Chemistry is more than just the name of his salon. It stands for the bond he builds with every client, because that connection is where real chemistry comes from.": "Dla Piotra fryzjerstwo to podróż, którą cieszy się każdego dnia. Chemistry to coś więcej niż nazwa jego salonu. To więź, którą buduje z każdą klientką i każdym klientem, bo właśnie z tej relacji rodzi się prawdziwa chemia.",
    "Caity graduated from GTI hairdressing school in 2025 after three years of training, and has gained valuable experience working in a number of salons, both during and after her studies. In 2025 she joined Chemistry Hair Co. as a Junior Stylist and assistant, and she has already completed Alfaparf Milano colour and cutting courses to keep developing her skills.": "Caity ukończyła szkołę fryzjerską GTI w 2025 roku po trzech latach nauki i zdobyła cenne doświadczenie, pracując w kilku salonach — zarówno w trakcie, jak i po zakończeniu nauki. W 2025 roku dołączyła do Chemistry Hair Co. jako młodsza stylistka i asystentka, a już ukończyła kursy koloryzacji i strzyżenia Alfaparf Milano, stale rozwijając swoje umiejętności.",
    "Caity will look after you during your colour and toner applications, and she's known for stunning blow-dries that really last.": "Caity zaopiekuje się Tobą podczas nakładania koloru i tonera, a słynie z zachwycających modelowań, które naprawdę się trzymają.",

    // Visit page (new text)
    "Payment": "Płatność",
    "Card": "Karta",
    "Cash": "Gotówka",
    "Vouchers available online or in salon": "Vouchery dostępne online lub w salonie",
    "New clients": "Nowi klienci",
    "New clients waiting list": "Lista oczekujących dla nowych klientów",
    "Approx. 8–10 week wait": "Czas oczekiwania ok. 8–10 tygodni",
    "At the moment, the waiting time for new clients is approximately 8–10 weeks, with very limited availability.": "Obecnie czas oczekiwania dla nowych klientów wynosi około 8–10 tygodni, a liczba wolnych terminów jest bardzo ograniczona.",
    "To make the process smooth and efficient, please fill out the short questionnaire linked below. This helps us ensure we're the right fit and manage our client rotation depending on services.": "Aby wszystko przebiegło sprawnie, wypełnij krótką ankietę pod linkiem poniżej. Dzięki niej upewnimy się, że do siebie pasujemy, i lepiej zaplanujemy terminy w zależności od usług.",
    "Fill out the questionnaire": "Wypełnij ankietę",

    // Blog: why blonde fades
    "Why does my blonde fade so quickly?": "Dlaczego mój blond tak szybko blednie?",
    "Your toner looked perfect when you left the salon, but a week later your blonde looks warm and brassy. Here's what's really going on, and how to keep it bright for longer.": "Tuż po wizycie toner wyglądał idealnie, ale tydzień później blond jest ciepły i żółtawy. Wyjaśniamy, co się naprawdę dzieje i jak dłużej zachować jasny odcień.",
    "Toner is what turns lightened hair from yellow or orange into the soft, cool blonde you walk out with. It's a gloss that sits on the hair, not a permanent colour, so it's made to fade gradually with every wash. How fast it fades depends mostly on what happens at home.": "To toner zamienia żółte lub pomarańczowe rozjaśnione włosy w miękki, chłodny blond, z którym wychodzisz z salonu. To gloss, który osiada na powierzchni włosa, a nie trwały kolor, dlatego z każdym myciem stopniowo się wypłukuje. Tempo zależy głównie od tego, co dzieje się w domu.",
    "Your water": "Twoja woda",
    "Tap water carries dissolved minerals, mainly calcium and magnesium, sometimes with traces of iron and copper. The more minerals it carries, the \"harder\" the water. How hard it is varies from one part of Galway to another, depending on where your supply comes from. If you see white build-up on your kettle, taps or showerhead, the same thing is happening to your hair.": "Woda z kranu zawiera rozpuszczone minerały, głównie wapń i magnez, czasem też śladowe ilości żelaza i miedzi. Im więcej minerałów, tym „twardsza” woda. Jej twardość różni się w poszczególnych częściach Galway, w zależności od źródła zaopatrzenia. Jeśli widzisz biały osad na czajniku, kranach czy słuchawce prysznica, to samo dzieje się z Twoimi włosami.",
    "Every time you wash, a little of that mineral build-up is left behind on your hair. Lightened hair is more porous, so it holds on to it easily. Over time, the build-up dulls the shine and pulls your blonde warmer and brassier, and it can stop toner from lasting as long as it should.": "Przy każdym myciu na włosach zostaje odrobina tego mineralnego osadu. Rozjaśnione włosy są bardziej porowate, więc łatwo go zatrzymują. Z czasem osad matowi blask, ociepla blond i nadaje mu żółtawy odcień, a toner utrzymuje się krócej, niż powinien.",
    "You can check the hardness of your water by entering your Eircode on the": "Twardość wody sprawdzisz, wpisując swój Eircode na",
    "Uisce Éireann website": "stronie Uisce Éireann",
    ". Some shower filters can reduce chlorine and certain metals, though they won't fully soften the water. If build-up is a problem for you, ask us about the right treatment.": ". Niektóre filtry prysznicowe zmniejszają ilość chloru i niektórych metali, choć nie zmiękczą wody całkowicie. Jeśli osad jest dla Ciebie problemem, zapytaj nas o odpowiedni zabieg.",
    "Your shampoo": "Twój szampon",
    "Deep-cleansing and clarifying shampoos are made to strip everything from the hair, and that includes your toner. Used too often, they can take your tone out in just a few washes.": "Szampony głęboko oczyszczające usuwają z włosów wszystko — także toner. Używane zbyt często potrafią wypłukać odcień już po kilku myciach.",
    "Everyday supermarket shampoos often aren't made for colour-treated or lightened hair, and many contain strong cleansers that fade colour faster. Choose a gentle shampoo made for colour-treated or blonde hair, and ask us which one is right for you.": "Zwykłe szampony z supermarketu często nie są przeznaczone do włosów farbowanych ani rozjaśnianych, a wiele z nich zawiera silne detergenty, które szybciej wypłukują kolor. Wybierz łagodny szampon do włosów farbowanych lub blond i zapytaj nas, który będzie dla Ciebie odpowiedni.",
    "Heat styling": "Stylizacja na gorąco",
    "Hair dryers, straighteners and curling tongs are some of the biggest reasons a blonde turns warm. High heat fades toner fast, and without a heat protector, a light blonde can turn noticeably warmer after just one wash and style.": "Suszarki, prostownice i lokówki to jedne z głównych powodów, dla których blond się ociepla. Wysoka temperatura szybko wypłukuje toner, a bez ochrony termicznej jasny blond może wyraźnie się ocieplić już po jednym myciu i stylizacji.",
    "Always use a heat protector before blow-drying or styling": "Zawsze stosuj ochronę termiczną przed suszeniem i stylizacją",
    "Turn your tools down to a lower heat setting": "Ustawiaj niższą temperaturę na suszarce i prostownicy",
    "Keep the dryer moving, and don't hold it too close to your hair": "Poruszaj suszarką i nie trzymaj jej zbyt blisko włosów",
    "Avoid going over the same section with a straightener again and again": "Nie prostuj wielokrotnie tego samego pasma",
    "Purple shampoo: a little goes a long way": "Fioletowy szampon: mniej znaczy więcej",
    "Purple shampoo can keep your blonde fresh between visits, but it's easy to overdo. It grabs more strongly on porous ends than on the roots, so heavy use can leave your ends dull or lilac while the top stays warmer. Use it once a week, or as we advise, and don't leave it on longer than the label says.": "Fioletowy szampon pomaga zachować świeży blond między wizytami, ale łatwo z nim przesadzić. Mocniej osiada na porowatych końcach niż u nasady, więc przy częstym stosowaniu końce mogą stać się matowe lub liliowe, a góra pozostanie cieplejsza. Używaj go raz w tygodniu lub zgodnie z naszymi zaleceniami i nie trzymaj dłużej, niż podaje etykieta.",
    "A few more habits that help": "Kilka innych pomocnych nawyków",
    "Wash with lukewarm or cool water, as hot water rinses toner out faster": "Myj włosy letnią lub chłodną wodą, bo gorąca szybciej wypłukuje toner",
    "Wash less often, 2 to 3 times a week if you can": "Myj włosy rzadziej — jeśli możesz, 2–3 razy w tygodniu",
    "Protect your hair from sun, sea water and chlorine": "Chroń włosy przed słońcem, wodą morską i chlorem",
    "Book a toner or gloss refresh every 6 to 8 weeks": "Co 6–8 tygodni umów odświeżenie tonera lub glossu",
    "Why does my blonde look warmer in sunlight?": "Dlaczego mój blond w słońcu wygląda cieplej?",
    "Colour always looks different depending on the light. Warm sunlight and yellow indoor bulbs bring out golden tones, while shade and daylight bulbs make blonde look cooler. Your colour hasn't changed, only the light you're seeing it in.": "Kolor zawsze wygląda inaczej w zależności od światła. Ciepłe słońce i żółte żarówki wydobywają złote tony, a cień i żarówki o świetle dziennym sprawiają, że blond wydaje się chłodniejszy. Twój kolor się nie zmienił — zmieniło się tylko światło.",
    "Not sure what's right for you?": "Nie wiesz, co będzie dla Ciebie najlepsze?",
    "Every blonde is different. At your next appointment, ask us for a home care plan for your hair and your water, and we'll help you keep your blonde bright for longer. You can also read our": "Każdy blond jest inny. Na następnej wizycie poproś nas o plan pielęgnacji domowej dopasowany do Twoich włosów i Twojej wody, a pomożemy Ci dłużej zachować jasny blond. Możesz też przeczytać nasze",
    "to see how we handle toner that fades too soon.": ", aby dowiedzieć się, jak postępujemy, gdy toner zbyt szybko się wypłukuje.",

    // Terms & Conditions
    "The small print, in plain English. By booking with us, you agree to these terms, together with our Cancellation Policy and Privacy Policy.": "Drobny druk, prostym językiem. Rezerwując wizytę, akceptujesz niniejszy regulamin wraz z Zasadami odwoływania wizyt i Polityką prywatności.",
    "Chemistry Hair Co. is run by Piotr Bieniasz. We work from David Martin Hairdressing, New Dock Street 11, The Docks, Galway H91 YC29.": "Chemistry Hair Co. prowadzi Piotr Bieniasz. Pracujemy w David Martin Hairdressing, New Dock Street 11, The Docks, Galway H91 YC29.",
    "In these terms, \"we\", \"us\" and \"our\" mean Chemistry Hair Co., and \"you\" means the client booking or receiving a service.": "W niniejszym regulaminie „my”, „nas” i „nasz” oznaczają Chemistry Hair Co., a „Ty” oznacza osobę rezerwującą lub korzystającą z usługi.",
    "Booking": "Rezerwacja",
    "You can book online through": "Wizytę możesz zarezerwować online przez",
    ", by phone or in person. Your booking is confirmed once you receive a confirmation from Booksy or from us.": ", telefonicznie lub osobiście. Rezerwacja jest potwierdzona, gdy otrzymasz potwierdzenie z Booksy lub od nas.",
    "New clients may be placed on our": "Nowi klienci mogą zostać zapisani na naszą",
    "new clients waiting list": "listę oczekujących dla nowych klientów",
    "before a first appointment is available.": ", zanim zwolni się pierwszy termin.",
    "Please book the service you actually need. If the service booked doesn't match what you'd like on the day, we may need to adjust or rebook your appointment.": "Rezerwuj usługę, której faktycznie potrzebujesz. Jeśli zarezerwowana usługa nie odpowiada temu, czego oczekujesz w dniu wizyty, możemy być zmuszeni ją zmienić lub przełożyć.",
    "Consultations and your hair history": "Konsultacje i historia Twoich włosów",
    "Every appointment starts with a consultation. Please tell us honestly about your hair history, including box dye, henna, keratin or other treatments from the last two years.": "Każda wizyta zaczyna się od konsultacji. Opowiedz nam szczerze o historii swoich włosów, w tym o farbach drogeryjnych, hennie, keratynie czy innych zabiegach z ostatnich dwóch lat.",
    "Please also tell us about anything that could affect your service or your safety, such as allergies, pregnancy, medication, or scalp or skin conditions.": "Poinformuj nas również o wszystkim, co może wpłynąć na usługę lub Twoje bezpieczeństwo, np. o alergiach, ciąży, przyjmowanych lekach czy problemach ze skórą głowy lub skórą.",
    "We can't be responsible for results or damage caused by information that wasn't shared with us during the consultation.": "Nie odpowiadamy za efekty ani szkody wynikające z informacji, których nie przekazano nam podczas konsultacji.",
    "Patch tests": "Testy uczuleniowe",
    "A skin test at least 48 hours before any colour service is required for new colour clients and for anyone who hasn't had colour with us for 6 months. Without a valid test, we can't carry out the colour service.": "Test skórny co najmniej 48 godzin przed koloryzacją jest wymagany od nowych klientów koloryzacji oraz od osób, które nie miały u nas koloryzacji od 6 miesięcy. Bez ważnego testu nie możemy wykonać koloryzacji.",
    "If you have any reaction to a test, please don't come in for your colour, and contact us straight away.": "Jeśli wystąpi jakakolwiek reakcja na test, nie przychodź na koloryzację i od razu się z nami skontaktuj.",
    "Our prices are shown on our": "Nasze ceny znajdziesz w naszym",
    "price list": "cenniku",
    ". They depend on the length and thickness of your hair and the time and product needed, so your exact price is confirmed during your consultation, before we start.": ". Zależą od długości i gęstości włosów oraz potrzebnego czasu i produktu, dlatego dokładną cenę potwierdzamy podczas konsultacji, przed rozpoczęciem usługi.",
    "We may update our prices from time to time. You pay the price in place on the day of your appointment.": "Od czasu do czasu możemy aktualizować ceny. Obowiązuje cena aktualna w dniu wizyty.",
    "Results": "Efekty",
    "We'll always give you our honest opinion about what your hair can achieve. Results can differ from inspiration photos, because every head of hair is different. Colour corrections and big changes to lighter shades may take more than one visit.": "Zawsze szczerze powiemy, co jest możliwe przy Twoich włosach. Efekt może różnić się od zdjęć-inspiracji, bo każde włosy są inne. Korekta koloru i duże zmiany na jaśniejszy odcień mogą wymagać więcej niż jednej wizyty.",
    "If the condition of your hair means a service could cause damage, we may recommend a different service or advise against going ahead.": "Jeśli stan Twoich włosów sprawia, że usługa mogłaby je uszkodzić, możemy zaproponować inną usługę lub odradzić jej wykonanie.",
    "Our right to refuse a service": "Nasze prawo do odmowy usługi",
    "For everyone's safety, we may decline or stop a service if there's a risk to your hair, scalp or health, for example head lice, an infection or open wound on the scalp, or a reaction to a patch test. We may also refuse service in the case of abusive behaviour towards our team or other clients.": "Dla bezpieczeństwa wszystkich możemy odmówić lub przerwać usługę, jeśli istnieje ryzyko dla Twoich włosów, skóry głowy lub zdrowia, np. w przypadku wszawicy, infekcji lub otwartej rany na skórze głowy albo reakcji na test uczuleniowy. Możemy także odmówić usługi w przypadku obraźliwego zachowania wobec naszego zespołu lub innych klientów.",
    "We may also decide not to go ahead after your consultation if we can't agree on a realistic goal. Sometimes a client and stylist have a different vision, and your stylist knows the result you're hoping for can't be achieved. Things that can stand in the way include your existing colour, your hair's texture and condition, how fragile it is, the price, and the number of visits needed to reach your dream hair.": "Po konsultacji możemy też zdecydować, że nie rozpoczniemy usługi, jeśli nie uda się uzgodnić realistycznego celu. Czasem klient i stylista mają różne wizje, a stylista wie, że oczekiwanego efektu nie da się osiągnąć. Przeszkodą może być obecny kolor, struktura i kondycja włosów, ich delikatność, cena oraz liczba wizyt potrzebnych do uzyskania wymarzonej fryzury.",
    "If you don't agree to our terms, policies or price list, we may not be able to go ahead with your appointment.": "Jeśli nie akceptujesz naszego regulaminu, zasad lub cennika, możemy nie być w stanie zrealizować Twojej wizyty.",
    "We accept card and cash. Payment is due at the end of your appointment.": "Przyjmujemy płatności kartą i gotówką. Płatność następuje na koniec wizyty.",
    "Gift vouchers": "Vouchery podarunkowe",
    "Vouchers are available online and in salon. They're valid for at least 5 years from the date of purchase, can be used towards any service, and can't be exchanged for cash.": "Vouchery są dostępne online i w salonie. Są ważne co najmniej 5 lat od daty zakupu, można je wykorzystać na dowolną usługę i nie podlegają wymianie na gotówkę.",
    "Please keep your voucher safe. If it's lost, contact us and we'll try to find a record of the purchase.": "Przechowuj voucher w bezpiecznym miejscu. W razie zgubienia skontaktuj się z nami, a spróbujemy odnaleźć potwierdzenie zakupu.",
    "Products": "Produkty",
    "If a product you bought from us is faulty, bring it back with proof of purchase and we'll replace or refund it. For hygiene reasons, we can't accept returns of opened or used products unless they're faulty. This doesn't affect your rights under Irish consumer law.": "Jeśli kupiony u nas produkt jest wadliwy, przynieś go z dowodem zakupu, a wymienimy go lub zwrócimy pieniądze. Ze względów higienicznych nie przyjmujemy zwrotów otwartych ani używanych produktów, chyba że są wadliwe. Nie wpływa to na Twoje prawa wynikające z irlandzkiego prawa konsumenckiego.",
    "Children": "Dzieci",
    "Children must be looked after by another adult, who isn't having a service, while you're in the chair.": "Gdy siedzisz na fotelu, dziećmi musi opiekować się inna osoba dorosła, która nie korzysta w tym czasie z usługi.",
    "Photos": "Zdjęcia",
    "We love sharing our work. We'll always ask your permission before posting a photo of your hair on our website or social media, and we'll remove it if you change your mind.": "Uwielbiamy dzielić się naszą pracą. Zawsze zapytamy o zgodę, zanim opublikujemy zdjęcie Twoich włosów na stronie lub w mediach społecznościowych, i usuniemy je, jeśli zmienisz zdanie.",
    "Personal belongings": "Rzeczy osobiste",
    "Please keep your belongings with you. We can't be responsible for items lost or damaged in the salon, unless this was caused by our negligence.": "Trzymaj swoje rzeczy przy sobie. Nie odpowiadamy za przedmioty zgubione lub uszkodzone w salonie, chyba że stało się to z naszej winy.",
    "Our website": "Nasza strona internetowa",
    "Everything on this website, including text, photos, logos and illustrations, belongs to Chemistry Hair Co. and may not be copied or used without our permission. We keep the information here as accurate as we can, but services and prices may change.": "Wszystkie treści na tej stronie, w tym teksty, zdjęcia, logotypy i ilustracje, należą do Chemistry Hair Co. i nie mogą być kopiowane ani wykorzystywane bez naszej zgody. Dbamy o aktualność informacji, ale usługi i ceny mogą się zmieniać.",
    "Changes and governing law": "Zmiany i prawo właściwe",
    "We may update these terms from time to time. The version on this page applies to all bookings made after the date shown at the top. These terms are governed by the laws of Ireland, and nothing in them affects your statutory rights as a consumer.": "Od czasu do czasu możemy aktualizować niniejszy regulamin. Wersja na tej stronie obowiązuje wszystkie rezerwacje dokonane po dacie podanej na górze. Regulamin podlega prawu irlandzkiemu i nie narusza Twoich ustawowych praw konsumenta.",

    // Cancellation Policy
    "We understand that plans change. Here's how cancelling, moving and running late work with us.": "Rozumiemy, że plany się zmieniają. Oto jak u nas wygląda odwoływanie i przekładanie wizyt oraz spóźnienia.",
    "Cancelling or moving your appointment": "Odwołanie lub przełożenie wizyty",
    "If you need to cancel or move your appointment, please give us at least 48 hours' notice. That way we can offer your time to someone on our waiting list.": "Jeśli musisz odwołać lub przełożyć wizytę, daj nam znać co najmniej 48 godzin wcześniej. Dzięki temu możemy zaproponować ten termin komuś z listy oczekujących.",
    "You can reschedule anytime through": "Termin możesz zmienić w każdej chwili przez",
    ", or just give us a call on (091) 561 200 or 083 433 6607. Messages on Instagram can sometimes be missed, so please call rather than message.": " albo po prostu zadzwoń pod numer (091) 561 200 lub 083 433 6607. Wiadomości na Instagramie czasem mogą nam umknąć, dlatego prosimy raczej o telefon.",
    "Late cancellations and missed appointments": "Późne odwołania i nieobecności",
    "A late cancellation means cancelling or moving your appointment with less than 48 hours' notice. A missed appointment means not arriving without letting us know.": "Późne odwołanie oznacza odwołanie lub przełożenie wizyty z wyprzedzeniem krótszym niż 48 godzin. Nieobecność oznacza niepojawienie się na wizycie bez uprzedzenia.",
    "If this happens more than once, we'll ask for 50% of your visit's total when you rebook. This comes off your final bill on the day. If that appointment is also cancelled late or missed, the 50% won't be refunded.": "Jeśli zdarzy się to więcej niż raz, przy kolejnej rezerwacji poprosimy o wpłatę 50% wartości wizyty. Kwota ta zostanie odliczona od rachunku w dniu wizyty. Jeśli ta wizyta również zostanie odwołana zbyt późno lub nie przyjdziesz, 50% nie podlega zwrotowi.",
    "Running late": "Spóźnienia",
    "We allow a 15-minute grace period. After that, we may need to shorten your service or rebook you, so the next client isn't kept waiting. An appointment rebooked because of a late arrival may count as a late cancellation.": "Tolerujemy 15 minut spóźnienia. Po tym czasie możemy skrócić usługę lub przełożyć wizytę, aby kolejna osoba nie musiała czekać. Wizyta przełożona z powodu spóźnienia może zostać potraktowana jako późne odwołanie.",
    "If your colour can't go ahead because your patch test wasn't done at least 48 hours before, we'll move your appointment. When this happens at short notice, it counts as a late cancellation.": "Jeśli koloryzacja nie może się odbyć, bo test uczuleniowy nie został wykonany co najmniej 48 godzin wcześniej, przełożymy wizytę. Jeśli stanie się to w ostatniej chwili, traktujemy to jako późne odwołanie.",
    "Emergencies": "Nagłe sytuacje",
    "Genuine emergencies happen to all of us, and we'll always treat them with understanding. Just let us know as early as you can.": "Nagłe sytuacje zdarzają się każdemu i zawsze podchodzimy do nich ze zrozumieniem. Daj nam tylko znać jak najwcześniej.",
    "Thank you for helping us keep appointments available for everyone.": "Dziękujemy, że pomagasz nam dbać o dostępność terminów dla wszystkich.",

    // Readjustment Policy
    "Not quite right?": "Coś nie tak?",
    "We want you to love your hair. If something isn't right, tell us and we'll do our best to put it right.": "Chcemy, żeby Twoje włosy Cię zachwycały. Jeśli coś jest nie tak, powiedz nam, a zrobimy wszystko, aby to poprawić.",
    "Let us know within 72 hours": "Daj nam znać w ciągu 72 godzin",
    "If your result doesn't match what we agreed in your consultation, please contact us within 72 hours of your appointment, and before your first wash at home. We'll invite you back for a fresh look and, where the condition of your hair allows, adjust it free of charge.": "Jeśli efekt nie odpowiada temu, co ustaliliśmy podczas konsultacji, skontaktuj się z nami w ciągu 72 godzin od wizyty i przed pierwszym myciem w domu. Zaprosimy Cię ponownie, żeby przyjrzeć się efektowi, i — jeśli pozwoli na to stan włosów — bezpłatnie go poprawimy.",
    "Please don't have your hair coloured, cut or treated elsewhere, or use toning products at home, in the meantime. Otherwise we won't be able to see what needs fixing.": "W tym czasie nie farbuj, nie strzyż ani nie poddawaj włosów zabiegom gdzie indziej i nie stosuj w domu produktów tonujących. W przeciwnym razie nie będziemy w stanie ocenić, co wymaga poprawy.",
    "Why 72 hours? Colour can change quickly once you leave the salon. Heat styling, sun, chlorine, sea water and purple or toning shampoos all affect how your hair looks, so we need to see it while it's still fresh from your appointment.": "Dlaczego 72 godziny? Kolor może szybko się zmienić po wyjściu z salonu. Stylizacja na gorąco, słońce, chlor, woda morska oraz fioletowe i tonujące szampony wpływają na wygląd włosów, dlatego musimy je zobaczyć, póki efekt wizyty jest jeszcze świeży.",
    "What a readjustment covers": "Co obejmuje poprawka",
    "A tone or colour noticeably different from what we agreed": "Odcień lub kolor wyraźnie inny niż ustalony",
    "Uneven or patchy colour": "Nierównomierny lub plamisty kolor",
    "A cut that's uneven or different from what we agreed": "Strzyżenie nierówne lub inne niż ustalone",
    "Toner that has noticeably gone after your first wash": "Toner, który wyraźnie zniknął po pierwszym myciu",
    "A readjustment covers only the service you originally had.": "Poprawka obejmuje wyłącznie usługę wykonaną pierwotnie.",
    "Toner fading": "Blaknięcie tonera",
    "Toner is a gloss that sits on the hair, so it's made to fade gradually with every wash. If your toner has noticeably gone after your first wash, get in touch and we'll help you out.": "Toner to gloss osiadający na powierzchni włosa, dlatego z każdym myciem stopniowo się wypłukuje. Jeśli wyraźnie zniknął po pierwszym myciu, skontaktuj się z nami, a pomożemy.",
    "After the first week, many things can change your tone, including your water, your shampoo, heat styling without a heat protector, and the sun. For this reason, toner fading after the first week isn't covered by a readjustment. Read our tips on": "Po pierwszym tygodniu na odcień wpływa wiele czynników, m.in. woda, szampon, stylizacja na gorąco bez ochrony termicznej i słońce. Dlatego blaknięcie tonera po pierwszym tygodniu nie jest objęte poprawką. Przeczytaj nasze wskazówki o",
    "why blonde fades so quickly": "tym, dlaczego blond tak szybko blednie",
    "Purple shampoos and colour masks": "Fioletowe szampony i maski koloryzujące",
    "Purple and silver shampoos, colour-depositing masks and other toning products change the colour of your hair. They grab more strongly on porous ends than on the roots, which can leave your colour uneven, for example darker or duller at the ends while the top stays warmer.": "Fioletowe i srebrne szampony, maski koloryzujące i inne produkty tonujące zmieniają kolor włosów. Mocniej osiadają na porowatych końcach niż u nasady, przez co kolor może stać się nierównomierny — np. końce ciemniejsze lub bardziej matowe, a góra cieplejsza.",
    "If your colour has changed after using these products at home, fixing it is a colour correction rather than a readjustment, and it will be booked and priced as a new service. Before you use any toning product, ask us which one is right for your hair and how to use it.": "Jeśli kolor zmienił się po użyciu takich produktów w domu, jego naprawa jest korektą koloru, a nie poprawką, i zostanie zarezerwowana oraz wyceniona jako nowa usługa. Zanim użyjesz produktu tonującego, zapytaj nas, który będzie odpowiedni dla Twoich włosów i jak go stosować.",
    "Colour in different light": "Kolor w różnym świetle",
    "Hair colour always looks different depending on the light. Blonde looks warmer in sunlight and under yellow indoor bulbs, and cooler in shade or under daylight bulbs. A change in how your colour looks in different light isn't a fault, and isn't covered by a readjustment.": "Kolor włosów zawsze wygląda inaczej w zależności od światła. Blond wydaje się cieplejszy w słońcu i przy żółtych żarówkach, a chłodniejszy w cieniu lub przy świetle dziennym. Różnica w wyglądzie koloru w różnym świetle nie jest wadą i nie jest objęta poprawką.",
    "Bleach damage and bond protection": "Uszkodzenia po rozjaśnianiu i ochrona wiązań",
    "Bleach damage is more common than most people think. We always do our best to keep your hair in the best possible condition, which is why we strongly recommend adding a bond protector (bond rebuilder) to every lightening service.": "Uszkodzenia po rozjaśnianiu zdarzają się częściej, niż się wydaje. Zawsze robimy wszystko, by utrzymać Twoje włosy w jak najlepszej kondycji, dlatego zdecydowanie zalecamy dodanie ochrony wiązań (bond rebuilder) do każdego rozjaśniania.",
    "This is an additional cost, but choosing not to use it can affect the condition of your hair and increases the risk of damage. Please note that bond-repair products used at home can't reverse damage once it has happened.": "To dodatkowy koszt, ale rezygnacja z niego może wpłynąć na kondycję włosów i zwiększa ryzyko uszkodzeń. Pamiętaj, że produkty odbudowujące wiązania stosowane w domu nie cofną już powstałych uszkodzeń.",
    "We will always recommend a bond protector. If you decide not to use one, we both accept that your hair's condition may be compromised, and we won't be able to offer a readjustment or accept a complaint about hair condition or damage resulting from that choice.": "Zawsze zalecamy ochronę wiązań. Jeśli z niej zrezygnujesz, obie strony przyjmują, że kondycja włosów może się pogorszyć, a my nie będziemy mogli zaoferować poprawki ani przyjąć reklamacji dotyczącej kondycji włosów lub uszkodzeń wynikających z tej decyzji.",
    "Once bleach damage happens, it can only be improved with a series of treatments or by cutting the damaged hair away. We kindly ask you to think carefully before declining.": "Gdy do uszkodzenia już dojdzie, można je poprawić jedynie serią zabiegów lub ścinając zniszczone włosy. Prosimy, zastanów się dobrze, zanim zrezygnujesz.",
    "Changed your mind?": "Zmiana zdania?",
    "Sometimes a new look just doesn't feel like you, and that's okay. If you'd like something different from what we agreed, we'll happily book you in for a fresh consultation and a new service at our regular prices.": "Czasem nowy wygląd po prostu do Ciebie nie pasuje — i to w porządku. Jeśli chcesz czegoś innego, niż ustaliliśmy, chętnie umówimy Cię na nową konsultację i nową usługę w standardowej cenie.",
    "After 72 hours": "Po 72 godzinach",
    "After 72 hours or your first wash, or if your hair has been coloured, toned or treated elsewhere or at home since your visit, any changes will be booked and charged as a new service. This doesn't affect your rights under Irish consumer law.": "Po 72 godzinach lub po pierwszym myciu, a także jeśli po wizycie włosy były farbowane, tonowane lub poddawane zabiegom gdzie indziej albo w domu, wszelkie zmiany są rezerwowane i rozliczane jako nowa usługa. Nie wpływa to na Twoje prawa wynikające z irlandzkiego prawa konsumenckiego.",

    // Privacy Policy
    "Your privacy matters to us. This page explains what information we collect, why we need it and how we look after it.": "Twoja prywatność jest dla nas ważna. Na tej stronie wyjaśniamy, jakie informacje zbieramy, dlaczego ich potrzebujemy i jak o nie dbamy.",
    "Who we are": "Kim jesteśmy",
    "Chemistry Hair Co. is run by Piotr Bieniasz, who is responsible for your personal data (the \"data controller\"). You can contact us at": "Chemistry Hair Co. prowadzi Piotr Bieniasz, który odpowiada za Twoje dane osobowe (jest ich „administratorem”). Możesz skontaktować się z nami pod adresem",
    "or on (091) 561 200.": "lub pod numerem (091) 561 200.",
    "What we collect": "Jakie dane zbieramy",
    "Your name, phone number and email address": "Imię i nazwisko, numer telefonu i adres e-mail",
    "Your appointment history, services, colour formulas and notes about your hair": "Historię wizyt, usługi, formuły koloru i notatki dotyczące Twoich włosów",
    "Your answers to our new clients questionnaire": "Odpowiedzi z ankiety dla nowych klientów",
    "Health information that matters for your safety, such as allergies, patch test results, pregnancy or scalp conditions": "Informacje zdrowotne ważne dla Twojego bezpieczeństwa, np. alergie, wyniki testów uczuleniowych, ciąża czy problemy ze skórą głowy",
    "Payment records (we don't keep your full card details)": "Dane dotyczące płatności (nie przechowujemy pełnych danych karty)",
    "How we collect it": "Jak zbieramy dane",
    "When you book through Booksy, call, email or message us, fill in our questionnaire, or visit the salon.": "Gdy rezerwujesz przez Booksy, dzwonisz, piszesz e-mail lub wiadomość, wypełniasz ankietę albo odwiedzasz salon.",
    "Why we use it": "W jakim celu je wykorzystujemy",
    "To book and manage your appointments and send you reminders": "Aby rezerwować i obsługiwać Twoje wizyty oraz wysyłać przypomnienia",
    "To plan and carry out your services safely, and keep a record of your colour formulas": "Aby bezpiecznie planować i wykonywać usługi oraz zapisywać formuły Twojego koloru",
    "To manage our new clients waiting list": "Aby prowadzić listę oczekujących dla nowych klientów",
    "To answer your questions": "Aby odpowiadać na Twoje pytania",
    "To keep business and tax records, as required by law": "Aby prowadzić dokumentację firmową i podatkową zgodnie z prawem",
    "To send you news or offers, but only if you've agreed to this. You can opt out at any time.": "Aby wysyłać Ci nowości i oferty — wyłącznie za Twoją zgodą. Możesz z nich zrezygnować w każdej chwili.",
    "Our legal basis": "Podstawa prawna",
    "We use your information to provide the services you ask for, to meet our legal obligations, and for our legitimate interest in running the salon. We only keep health information with your consent, and only to keep you safe during your services.": "Wykorzystujemy Twoje dane, aby świadczyć usługi, o które prosisz, wypełniać obowiązki prawne oraz w ramach naszego prawnie uzasadnionego interesu w prowadzeniu salonu. Informacje zdrowotne przechowujemy wyłącznie za Twoją zgodą i tylko po to, by zapewnić Ci bezpieczeństwo podczas usług.",
    "Who we share it with": "Komu udostępniamy dane",
    "We never sell your data. We only share it with trusted services that help us run the salon, such as Booksy (bookings), Google (email and our questionnaire), Instagram (messages) and our website host, or when the law requires it.": "Nigdy nie sprzedajemy Twoich danych. Udostępniamy je wyłącznie zaufanym usługom, które pomagają nam prowadzić salon, takim jak Booksy (rezerwacje), Google (e-mail i ankieta), Instagram (wiadomości) i dostawca hostingu strony, lub gdy wymaga tego prawo.",
    "How long we keep it": "Jak długo przechowujemy dane",
    "We keep your client record while you're a client and for up to 2 years after your last visit. Some records, such as payment records, are kept longer where tax law requires it. Waiting list answers are deleted once you've been booked in or no longer wish to wait.": "Twoją kartę klienta przechowujemy przez cały okres korzystania z naszych usług i do 2 lat po ostatniej wizycie. Niektóre dane, np. dotyczące płatności, przechowujemy dłużej, jeśli wymaga tego prawo podatkowe. Odpowiedzi z listy oczekujących usuwamy, gdy umówimy Twoją wizytę lub gdy nie chcesz już czekać.",
    "If you haven't booked with us for 12 months or more, your Booksy account will be marked as inactive, and you won't be able to book online. This is how we manage inactive accounts, and it helps us make room for new clients.": "Jeśli nie rezerwujesz u nas wizyty przez 12 miesięcy lub dłużej, Twoje konto w Booksy zostanie oznaczone jako nieaktywne i nie będzie można rezerwować online. W ten sposób zarządzamy nieaktywnymi kontami i robimy miejsce dla nowych klientów.",
    "Whenever you'd like to come back, just get in touch by phone or email and we'll add you to our": "Kiedy tylko zechcesz wrócić, skontaktuj się z nami telefonicznie lub mailowo, a zapiszemy Cię na naszą",
    ". We'll be happy to see you again.": ". Z przyjemnością znów Cię zobaczymy.",
    "Your rights": "Twoje prawa",
    "Ask for a copy of the information we hold about you": "Prawo do kopii danych, które o Tobie przechowujemy",
    "Ask us to correct anything that's wrong": "Prawo do sprostowania nieprawidłowych danych",
    "Ask us to delete your information": "Prawo do usunięcia danych",
    "Object to or restrict how we use it": "Prawo do sprzeciwu lub ograniczenia przetwarzania",
    "Withdraw your consent at any time": "Prawo do wycofania zgody w dowolnym momencie",
    "Ask for your information in a format you can take elsewhere": "Prawo do otrzymania danych w formacie umożliwiającym ich przeniesienie",
    "To use any of these rights, just email us. If you're not happy with how we handle your information, you can contact the Data Protection Commission at": "Aby skorzystać z któregokolwiek z tych praw, po prostu napisz do nas e-mail. Jeśli nie odpowiada Ci sposób, w jaki przetwarzamy Twoje dane, możesz skontaktować się z irlandzkim organem ochrony danych (Data Protection Commission) na stronie",
    "We only share photos of your hair with your permission, and we'll remove them if you ask.": "Zdjęcia Twoich włosów publikujemy wyłącznie za Twoją zgodą i usuniemy je na Twoją prośbę.",
    "Cookies and links": "Pliki cookie i linki",
    "This website doesn't use cookies to track you or show you adverts. Links to Booksy, Google Forms and Instagram take you to their own websites, which have their own privacy policies.": "Ta strona nie używa plików cookie do śledzenia ani wyświetlania reklam. Linki do Booksy, Formularzy Google i Instagrama prowadzą do ich własnych stron, które mają własne polityki prywatności.",
    "Keeping your information safe": "Bezpieczeństwo Twoich danych",
    "We store your information on password-protected devices and accounts, and only we can access it.": "Przechowujemy Twoje dane na urządzeniach i kontach zabezpieczonych hasłem, a dostęp do nich mamy tylko my.",
    "Changes to this policy": "Zmiany w polityce prywatności",
    "We may update this policy from time to time. The latest version will always be on this page.": "Od czasu do czasu możemy aktualizować tę politykę. Najnowsza wersja zawsze będzie dostępna na tej stronie.",

    // FAQ
    "Questions & answers": "Pytania i odpowiedzi",
    "Everything you might want to know before your visit. Can't find your answer? Just give us a call.": "Wszystko, co warto wiedzieć przed wizytą. Nie ma tu odpowiedzi na Twoje pytanie? Po prostu zadzwoń.",
    "How do I book?": "Jak się umówić?",
    "Book online through": "Umów się online przez",
    ", or call us on (091) 561 200 or 083 433 6607.": " albo zadzwoń pod numer (091) 561 200 lub 083 433 6607.",
    "I'm a new client. How soon can I get in?": "Nowy klient — jak szybko mogę się umówić?",
    "At the moment, the waiting time for new clients is about 8–10 weeks, with very limited availability. Please fill out our short": "Obecnie czas oczekiwania dla nowych klientów wynosi około 8–10 tygodni, a liczba wolnych terminów jest bardzo ograniczona. Wypełnij naszą krótką",
    "new clients questionnaire": "ankietę dla nowych klientów",
    "and we'll be in touch.": ", a skontaktujemy się z Tobą.",
    "I messaged you on Instagram and didn't hear back.": "Moja wiadomość na Instagramie została bez odpowiedzi.",
    "Sorry about that! Messages can sometimes get lost among notifications. For bookings and questions, calling or emailing is the quickest way to reach us.": "Przepraszamy! Wiadomości czasem giną wśród powiadomień. W sprawie rezerwacji i pytań najszybciej skontaktujesz się z nami telefonicznie lub mailowo.",
    "Where are you?": "Gdzie jesteście?",
    "We work from David Martin Hairdressing, New Dock Street 11, The Docks, Galway. See": "Pracujemy w David Martin Hairdressing, New Dock Street 11, The Docks, Galway. Mapę i godziny otwarcia znajdziesz w zakładce",
    "for the map and opening hours.": ".",
    "Your appointment": "Twoja wizyta",
    "Do I need a patch test?": "Czy potrzebuję testu uczuleniowego?",
    "Yes, for any colour service. It must be done at least 48 hours before your appointment, and it's valid for 6 months. If it's been longer than 6 months since your last colour with us, you'll need a new test.": "Tak, przed każdą koloryzacją. Test trzeba wykonać co najmniej 48 godzin przed wizytą i jest ważny 6 miesięcy. Jeśli od ostatniej koloryzacji u nas minęło więcej niż 6 miesięcy, potrzebny będzie nowy test.",
    "How much will my appointment cost?": "Ile będzie kosztować moja wizyta?",
    "Our new": "Nasz nowy",
    "2027 price list": "cennik na 2027 rok",
    "applies to both new and existing clients. The final price depends on the length and thickness of your hair, and we'll confirm it during your consultation, before we start.": " obowiązuje zarówno nowych, jak i stałych klientów. Ostateczna cena zależy od długości i gęstości włosów — potwierdzimy ją podczas konsultacji, przed rozpoczęciem usługi.",
    "How long will my appointment take?": "Ile potrwa moja wizyta?",
    "It depends on the service. Colour and blonde appointments can take several hours, so please don't plan anything straight after.": "To zależy od usługi. Koloryzacja i rozjaśnianie mogą potrwać kilka godzin, dlatego nie planuj niczego zaraz po wizycie.",
    "How should I prepare?": "Jak się przygotować?",
    "Come with dry hair, styled the way you usually wear it, and bring photos of looks you love (and any you don't). Please tell us about any box dye, henna or treatments from the last two years.": "Przyjdź z suchymi włosami, ułożonymi tak jak na co dzień, i przynieś zdjęcia fryzur, które Ci się podobają (i tych, które nie). Powiedz nam o farbach drogeryjnych, hennie i zabiegach z ostatnich dwóch lat.",
    "Which products do you use?": "Jakich produktów używacie?",
    "For colour, we use Alfaparf Milano. Our treatments include Pro Repair by Diana Beauty, Platinum B-Tox, Organic B-Tox and Kerabloom Infusion. See our": "Do koloryzacji używamy Alfaparf Milano. Nasze zabiegi to m.in. Pro Repair marki Diana Beauty, Platinum B-Tox, Organic B-Tox i Kerabloom Infusion. Więcej znajdziesz na stronach",
    "and": "i",
    "pages for more.": ".",
    "Can I bring my children?": "Czy mogę przyjść z dziećmi?",
    "Children are welcome, but the salon can get very busy. Please ask us before your visit whether there's a spare seat for your child, so you can keep an eye on them.": "Dzieci są mile widziane, ale w salonie bywa bardzo tłoczno. Przed wizytą zapytaj nas, czy znajdzie się wolne miejsce dla dziecka, aby mieć je na oku.",
    "Keep in mind that colour appointments can take 2 to 4 hours, which is a long time for little ones to wait. A salon also has hot tools, chemicals and busy stylists moving around, so for their safety it's best if they stay close to you.": "Pamiętaj, że koloryzacja może trwać od 2 do 4 godzin, a to dla maluchów długie czekanie. W salonie są też gorące narzędzia, chemikalia i zapracowani styliści, więc dla bezpieczeństwa najlepiej, by dzieci były blisko Ciebie.",
    "Changes and aftercare": "Zmiany i pielęgnacja po wizycie",
    "How do I cancel or move my appointment?": "Jak odwołać lub przełożyć wizytę?",
    "Through Booksy or by phone, at least 48 hours before your appointment. Please see our": "Przez Booksy lub telefonicznie, co najmniej 48 godzin przed wizytą. Szczegóły znajdziesz tu:",
    "What if I'm not happy with my hair?": "Co jeśli efekt mi się nie podoba?",
    "Let us know within 72 hours, before your first wash, and we'll look at it together. See our": "Daj nam znać w ciągu 72 godzin, przed pierwszym myciem, a przyjrzymy się temu razem. Więcej informacji:",
    "Payment and vouchers": "Płatności i vouchery",
    "How can I pay?": "Jak mogę zapłacić?",
    "We accept card and cash.": "Przyjmujemy płatności kartą i gotówką.",
    "Do you sell gift vouchers?": "Czy sprzedajecie vouchery podarunkowe?",
    "Yes, vouchers are available online or in salon.": "Tak, vouchery są dostępne online lub w salonie.",
    "I've lost my voucher. What can I do?": "Voucher zaginął. Co mogę zrobić?",
    "Contact us with the buyer's name and roughly when it was bought, and we'll look it up for you.": "Skontaktuj się z nami, podając imię i nazwisko kupującego oraz przybliżoną datę zakupu, a my go odszukamy."
  };

  var MONTHS = { January: "stycznia", February: "lutego", March: "marca", April: "kwietnia", May: "maja", June: "czerwca", July: "lipca", August: "sierpnia", September: "września", October: "października", November: "listopada", December: "grudnia" };
  var P = [
    [/^More (.+) techniques$/, "Więcej technik: $1"],
    [/^(.+) techniques$/, "Techniki: $1"],
    [/^About (.+)$/, "O usłudze: $1"],
    [/^A closer look at our (.+) work\.$/, "Nasze prace z bliska: $1."],
    [/^Open photo: (.+)$/, function (m, a) { return "Otwórz zdjęcie: " + (tr(a) || a); }],
    [/^(.+) at Chemistry Hair Co\.$/, "$1 w Chemistry Hair Co."],
    [/^(.+) gallery$/, "Galeria: $1"],
    [/^Specimen (\d+)$/, "Próbka $1"],
    [/^(\d{1,2}) (January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})$/, function (m, d, mo, y) { return d + " " + MONTHS[mo] + " " + y; }]
  ];

  var OUT = {};
  Object.keys(D).forEach(function (k) { OUT[D[k]] = 1; });

  function norm(s) { return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim(); }
  var ND = {};
  Object.keys(D).forEach(function (k) { ND[norm(k)] = D[k]; });
  function tr(text) {
    var k = norm(text);
    if (!k || OUT[k]) return null;
    if (Object.prototype.hasOwnProperty.call(ND, k)) return ND[k];
    for (var i = 0; i < P.length; i++) if (P[i][0].test(k)) return k.replace(P[i][0], P[i][1]);
    return null;
  }

  var lang = "en";
  try { if (localStorage.getItem("ch-lang") === "pl") lang = "pl"; } catch (e) {}

  var textDone = new Map();   // node -> {en, pl}
  var attrDone = new Map();   // element -> {attr: {en, pl}}
  var ATTRS = ["aria-label", "alt", "title", "placeholder"];

  function skip(el) {
    for (var p = el; p && p !== document.body; p = p.parentNode) {
      if (p.nodeType === 1 && (p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.hasAttribute("data-no-translate"))) return true;
    }
    return false;
  }
  function doText(n) {
    var v = n.nodeValue;
    if (!v || !/[A-Za-z]/.test(v)) return;
    var rec = textDone.get(n);
    if (rec && rec.pl === v) return;
    var t = tr(v);
    if (t == null || t === norm(v)) return;
    if (n.parentNode && skip(n.parentNode)) return;
    var lead = /^[\s,.;:]/.test(t) ? "" : v.match(/^\s*/)[0];
    var out = lead + t + v.match(/\s*$/)[0];
    textDone.set(n, { en: v, pl: out });
    n.nodeValue = out;
  }
  function doAttrs(el) {
    if (skip(el)) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], v = el.getAttribute(a);
      if (!v) continue;
      var rec = attrDone.get(el) || {};
      if (rec[a] && rec[a].pl === v) continue;
      var t = tr(v);
      if (t == null || t === norm(v)) continue;
      rec[a] = { en: v, pl: t };
      attrDone.set(el, rec);
      el.setAttribute(a, t);
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }
  function revert() {
    textDone.forEach(function (r, n) { if (n.nodeValue === r.pl) n.nodeValue = r.en; });
    textDone.clear();
    attrDone.forEach(function (rec, el) { Object.keys(rec).forEach(function (a) { if (el.getAttribute(a) === rec[a].pl) el.setAttribute(a, rec[a].en); }); });
    attrDone.clear();
  }

  var enTitle = null;
  function doTitle() {
    var t = document.title;
    if (lang !== "pl") { if (enTitle && t !== enTitle && tr(enTitle)) {} return; }
    var parts = t.split(" · ");
    var changed = false;
    var outParts = parts.map(function (p) { var x = tr(p); if (x != null && x !== p) { changed = true; return x; } return p; });
    if (changed) document.title = outParts.join(" · ");
  }

  var obs = new MutationObserver(function (list) {
    if (lang !== "pl") return;
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      if (m.type === "characterData") doText(m.target);
      else if (m.type === "attributes") doAttrs(m.target);
      else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
    }
    doTitle();
  });

  function apply() {
    var html = document.documentElement;
    html.setAttribute("lang", lang === "pl" ? "pl" : "en");
    html.setAttribute("data-lang", lang);
    if (lang === "pl") { walk(document.body); doTitle(); }
    else revert();
  }

  window.__chLang = function () { return lang; };
  window.__chToggleLang = function () {
    lang = lang === "pl" ? "en" : "pl";
    try { localStorage.setItem("ch-lang", lang); } catch (e) {}
    if (lang === "en") { location.reload(); return; }
    apply();
  };

  var css = document.createElement("style");
  css.textContent =
    ".ch-lang-toggle{display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:999px;border:0;background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);cursor:pointer;font:600 12px/1 Inter,system-ui,sans-serif;letter-spacing:.04em}" +
    ".ch-lang-toggle span{padding:6px 8px;border-radius:999px;color:rgba(255,255,255,.65);transition:background .2s,color .2s}" +
    "html:not([data-lang=pl]) .ch-lang-toggle .ch-en,html[data-lang=pl] .ch-lang-toggle .ch-pl{background:#fff;color:#1d1433}";
  (document.head || document.documentElement).appendChild(css);

  function start() {
    apply();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    setInterval(function () { if (lang === "pl") doTitle(); }, 800);
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
