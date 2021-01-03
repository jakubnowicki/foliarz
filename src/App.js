function random_element(items) {
  return (
    items[Math.floor(Math.random() * items.length)]
  )
}

function generate_quote() {
  const part_one = random_element(["Nie chcę wyjść na foliarza, ale ", "Trochę zgłębiłem temat i ", "Koniecznie przekaż dalej! ", "W twojej telewizji tego nie powiedzą, ale ", "Rząd i służba zdrowia to ukrywa ale ", "Wiem z wiarygodnego źródła, że "])
  const part_two = random_element(["pewien odważny lekarz ", "taki jeden ratownik medyczny ", "brat mojej znajomej ", "ojciec koleżanki ", "znajoma pielęgniarka ", "kuzyn rejestratorki z przychodni "])
  const part_three = random_element(["ze szpitala covidowego ", "pracuje w hurtowni leków ", "z Agencji Rezerw Materiałowych ", "jeździ w pogotowiu ", "ze Szpitala Narodowego ", "z Kliniki z Berlina "])
  const part_four = random_element(["potajemnie powiedział(a) mi, że ", "wysłał(a) mi zaszyfrowaną wiadomość, że ", "dowiedział(a) się w tajemnicy, że ", "odkrył(a), że ", "dostał(a) informację, że ", "dzwonił i powiedział(a), że "])
  const part_five = random_element(["w szczepionkach są mikroczipy. ", "szczepienia depopulują seniorów. ", "szczepionki zmieniają nasze DNA. ", "szczepionki były gotowe przed pandemią. ", "szczepionki naprawdę powodują autyzm. ", "pandemii nie ma, a szczepionki są niepotrzebne. "])
  const part_six = random_element(["Wyłącz tv, włącz myślenie!", "Nie pozwól sobą manipulować!", "Nie daj się spiskowi!", "Używaj rozumu!", "Skończmy z tą pseudopandemią!", "Rozgryźliśmy pandemię!"])

  return (
    part_one + part_two + part_three + part_four + part_five + part_six
  )
}

function App() {
  const quote = generate_quote();
  return (
    <div className="App">
      {quote}
    </div>
  );
}

export default App;
