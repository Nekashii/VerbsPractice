const completeVerbsList = [
    { baseForm: "bet", pastSimple: "bet", pastParticiple: "bet", spanish: "Apostar" },
    { baseForm: "burst", pastSimple: "burst", pastParticiple: "burst", spanish: "Explotar" },
    { baseForm: "cost", pastSimple: "cost", pastParticiple: "cost", spanish: "Costar" },
    { baseForm: "cut", pastSimple: "cut", pastParticiple: "cut", spanish: "Cortar" },
    { baseForm: "fit", pastSimple: "fit", pastParticiple: "fit", spanish: "Caber" },
    { baseForm: "hit", pastSimple: "hit", pastParticiple: "hit", spanish: "Golpear" },
    { baseForm: "hurt", pastSimple: "hurt", pastParticiple: "hurt", spanish: "Lastimar" },
    { baseForm: "let", pastSimple: "let", pastParticiple: "let", spanish: "Permitir" },
    { baseForm: "put", pastSimple: "put", pastParticiple: "put", spanish: "Poner" },
    { baseForm: "quit", pastSimple: "quit", pastParticiple: "quit", spanish: "Parar /renunciar" },
    { baseForm: "read", pastSimple: "read", pastParticiple: "read", spanish: "Leer" },
    { baseForm: "set", pastSimple: "set", pastParticiple: "set", spanish: "Colocar" },
    { baseForm: "shed", pastSimple: "shed", pastParticiple: "shed", spanish: "Mudar/perder" },
    { baseForm: "shut", pastSimple: "shut", pastParticiple: "shut", spanish: "Cerrar" },
    { baseForm: "spread", pastSimple: "spread", pastParticiple: "spread", spanish: "Extender" },
    { baseForm: "upset", pastSimple: "upset", pastParticiple: "upset", spanish: "Molestar" },
    { baseForm: "bend", pastSimple: "bent", pastParticiple: "bent", spanish: "Doblar/ceder" },
    { baseForm: "bleed", pastSimple: "bled", pastParticiple: "bled", spanish: "Sangrar" },
    { baseForm: "breed", pastSimple: "bred", pastParticiple: "bred", spanish: "Procrear" },
    { baseForm: "bring", pastSimple: "brought", pastParticiple: "brought", spanish: "Traer" },
    { baseForm: "Build", pastSimple: "built", pastParticiple: "built", spanish: "Construir" },
    { baseForm: "burn", pastSimple: "burned/burnt", pastParticiple: "burned/burnt", spanish: "Quemar" },
    { baseForm: "buy", pastSimple: "bought", pastParticiple: "bought", spanish: "Comprar" },
    { baseForm: "catch", pastSimple: "caught", pastParticiple: "caught", spanish: "Atrapar" },
    { baseForm: "creep", pastSimple: "crept", pastParticiple: "crept", spanish: "Arrastrarse" },
    { baseForm: "deal", pastSimple: "dealt", pastParticiple: "dealt", spanish: "Repartir/Tratar" },
    { baseForm: "dig", pastSimple: "dug", pastParticiple: "dug", spanish: "Cavar" },
    { baseForm: "dream", pastSimple: "dreamed/dreamt", pastParticiple: "dreamed/dreamt", spanish: "Soñar" },
    { baseForm: "feed", pastSimple: "fed", pastParticiple: "fed", spanish: "Alimentar" },
    { baseForm: "feel", pastSimple: "felt", pastParticiple: "felt", spanish: "Sentir" },
    { baseForm: "fight", pastSimple: "fought", pastParticiple: "fought", spanish: "Pelear" },
    { baseForm: "find", pastSimple: "found", pastParticiple: "found", spanish: "Encontrar" },
    { baseForm: "hang", pastSimple: "hung", pastParticiple: "hung", spanish: "Colgar" },
    { baseForm: "have", pastSimple: "had", pastParticiple: "had", spanish: "Tener" },
    { baseForm: "hear", pastSimple: "heard", pastParticiple: "heard", spanish: "Escuchar" },
    { baseForm: "hold", pastSimple: "held", pastParticiple: "held", spanish: "Agarrar" },
    { baseForm: "keep", pastSimple: "kept", pastParticiple: "kept", spanish: "Mantener" },
    { baseForm: "lay", pastSimple: "laid", pastParticiple: "laid", spanish: "Extender" },
    { baseForm: "lead", pastSimple: "led", pastParticiple: "led", spanish: "Dirigir" },
    { baseForm: "leap", pastSimple: "leaped/leapt", pastParticiple: "leaped/leapt", spanish: "Saltar" },
    { baseForm: "learn", pastSimple: "learned/learnt", pastParticiple: "learned/learnt", spanish: "Aprender" },
    { baseForm: "leave", pastSimple: "left", pastParticiple: "left", spanish: "Dejar" },
    { baseForm: "lend", pastSimple: "lent", pastParticiple: "lent", spanish: "Prestar" },
    { baseForm: "light", pastSimple: "lit", pastParticiple: "lit", spanish: "Encender" },
    { baseForm: "lose", pastSimple: "lost", pastParticiple: "lost", spanish: "Perder" },
    { baseForm: "make", pastSimple: "made", pastParticiple: "made", spanish: "Hacer" },
    { baseForm: "mean", pastSimple: "meant", pastParticiple: "meant", spanish: "Significar" },
    { baseForm: "meet", pastSimple: "met", pastParticiple: "met", spanish: "Conocer" },
    { baseForm: "pay", pastSimple: "paid", pastParticiple: "paid", spanish: "Pagar" },
    { baseForm: "say", pastSimple: "said", pastParticiple: "said", spanish: "Decir" },
    { baseForm: "sell", pastSimple: "sold", pastParticiple: "sold", spanish: "Vender" },
    { baseForm: "send", pastSimple: "sent", pastParticiple: "sent", spanish: "Enviar" },
    { baseForm: "shine", pastSimple: "shone", pastParticiple: "shone", spanish: "Brillar" },
    { baseForm: "shoot", pastSimple: "shot", pastParticiple: "shot", spanish: "Disparar" },
    { baseForm: "sit", pastSimple: "sat", pastParticiple: "sat", spanish: "Sentarse" },
    { baseForm: "sleep", pastSimple: "slept", pastParticiple: "slept", spanish: "Dormir" },
    { baseForm: "slide", pastSimple: "slid", pastParticiple: "slid", spanish: "Deslizar" },
    { baseForm: "smell", pastSimple: "smelled/smelt", pastParticiple: "smelled/smelt", spanish: "Oler" },
    { baseForm: "speed", pastSimple: "sped/speeded", pastParticiple: "sped/speeded", spanish: "Acelerar" },
    { baseForm: "spell", pastSimple: "spelled/spelt", pastParticiple: "spelled/spelt", spanish: "Deletrear" },
    { baseForm: "spend", pastSimple: "spent", pastParticiple: "spent", spanish: "Gastar" },
    { baseForm: "spill", pastSimple: "spilled/split", pastParticiple: "spilled/split", spanish: "Derramar" },
    { baseForm: "spin", pastSimple: "spun", pastParticiple: "Spun", spanish: "Girar" },
    { baseForm: "spit", pastSimple: "spit/spat", pastParticiple: "spit/spat", spanish: "Escupir" },
    { baseForm: "spoil", pastSimple: "spoiled/spoilt", pastParticiple: "spoiled/spoilt", spanish: "Arruinar/Consentir" },
    { baseForm: "spring", pastSimple: "sprang/sprung", pastParticiple: "sprang/sprung", spanish: "Brotar" },
    { baseForm: "stand", pastSimple: "stood", pastParticiple: "stood", spanish: "Pararse" },
    { baseForm: "stick", pastSimple: "stuck", pastParticiple: "stuck", spanish: "Clavar" },
    { baseForm: "sting", pastSimple: "stung", pastParticiple: "stung", spanish: "Picar(abeja)" },
    { baseForm: "stink", pastSimple: "stank/stunk", pastParticiple: "stunk", spanish: "Apestar" },
    { baseForm: "string", pastSimple: "strung", pastParticiple: "strung", spanish: "Colgar" },
    { baseForm: "sweep", pastSimple: "swept", pastParticiple: "swept", spanish: "Barrer" },
    { baseForm: "swing", pastSimple: "swung", pastParticiple: "swung", spanish: "Balancear" },
    { baseForm: "teach", pastSimple: "taught", pastParticiple: "taught", spanish: "Enseñar" },
    { baseForm: "tell", pastSimple: "told", pastParticiple: "told", spanish: "Decir" },
    { baseForm: "think", pastSimple: "thought", pastParticiple: "thought", spanish: "Pensar" },
    { baseForm: "understand", pastSimple: "understood", pastParticiple: "understood", spanish: "Entender" },
    { baseForm: "weep", pastSimple: "wept", pastParticiple: "wept", spanish: "Llorar" },
    { baseForm: "win", pastSimple: "won", pastParticiple: "Won", spanish: "Ganar" },
    { baseForm: "wind", pastSimple: "wound", pastParticiple: "wound", spanish: "Ventilar/Enrollar" },
    { baseForm: "be", pastSimple: "was/were", pastParticiple: "been", spanish: "Ser o Estar" },
    { baseForm: "beat", pastSimple: "beat", pastParticiple: "beaten", spanish: "Vencer/Golpear" },
    { baseForm: "become", pastSimple: "became", pastParticiple: "become", spanish: "Llegar a ser" },
    { baseForm: "begin", pastSimple: "began", pastParticiple: "begun", spanish: "Comenzar" },
    { baseForm: "bite", pastSimple: "bit", pastParticiple: "bitten", spanish: "Morder" },
    { baseForm: "blow", pastSimple: "blew", pastParticiple: "blown", spanish: "Soplar" },
    { baseForm: "break", pastSimple: "broke", pastParticiple: "broken", spanish: "Romper" },
    { baseForm: "choose", pastSimple: "chose", pastParticiple: "chosen", spanish: "Escoger" },
    { baseForm: "come", pastSimple: "came", pastParticiple: "come", spanish: "Venir" },
    { baseForm: "do", pastSimple: "did", pastParticiple: "done", spanish: "Hacer" },
    { baseForm: "draw", pastSimple: "drew", pastParticiple: "drawn", spanish: "Dibujar" },
    { baseForm: "drink", pastSimple: "drank", pastParticiple: "drunk", spanish: "Beber" },
    { baseForm: "drive", pastSimple: "drove", pastParticiple: "driven", spanish: "Manejar" },
    { baseForm: "eat", pastSimple: "ate", pastParticiple: "eaten", spanish: "Comer" },
    { baseForm: "fall", pastSimple: "fell", pastParticiple: "fallen", spanish: "Caer" },
    { baseForm: "fly", pastSimple: "flew", pastParticiple: "flown", spanish: "Volar" },
    { baseForm: "forbid", pastSimple: "forbade", pastParticiple: "forbidden", spanish: "Prohibir" },
    { baseForm: "forget", pastSimple: "forgot", pastParticiple: "forgotten", spanish: "Olvidar" },
    { baseForm: "forgive", pastSimple: "forgave", pastParticiple: "forgiven", spanish: "Perdonar" },
    { baseForm: "freeze", pastSimple: "froze", pastParticiple: "frozen", spanish: "Congelar" },
    { baseForm: "get", pastSimple: "got", pastParticiple: "gotten", spanish: "Conseguir" },
    { baseForm: "give", pastSimple: "gave", pastParticiple: "given", spanish: "Dar" },
    { baseForm: "go", pastSimple: "went", pastParticiple: "gone", spanish: "Ir" },
    { baseForm: "grow", pastSimple: "grew", pastParticiple: "grown", spanish: "Crecer" },
    { baseForm: "hide", pastSimple: "hid", pastParticiple: "hidden", spanish: "Esconder" },
    { baseForm: "know", pastSimple: "knew", pastParticiple: "known", spanish: "Conocer" },
    { baseForm: "mistake", pastSimple: "mistook", pastParticiple: "mistaken", spanish: "Equivocarse" },
    { baseForm: "ride", pastSimple: "rode", pastParticiple: "ridden", spanish: "Montar" },
    { baseForm: "ring", pastSimple: "rang", pastParticiple: "rung", spanish: "Sonar" },
    { baseForm: "rise", pastSimple: "rose", pastParticiple: "risen", spanish: "Subir" },
    { baseForm: "run", pastSimple: "ran", pastParticiple: "run", spanish: "Correr" },
    { baseForm: "see", pastSimple: "saw", pastParticiple: "seen", spanish: "Ver" },
    { baseForm: "shake", pastSimple: "shook", pastParticiple: "shaken", spanish: "Sacudir" },
    { baseForm: "show", pastSimple: "showed", pastParticiple: "shown", spanish: "Mostrar" },
    { baseForm: "shrink", pastSimple: "shrank", pastParticiple: "shrunk", spanish: "Encogerse" },
    { baseForm: "sing", pastSimple: "sang", pastParticiple: "sung", spanish: "Cantar" },
    { baseForm: "sink", pastSimple: "sank", pastParticiple: "sunk", spanish: "Hundirse" },
    { baseForm: "speak", pastSimple: "spoke", pastParticiple: "spoken", spanish: "Hablar" },
    { baseForm: "steal", pastSimple: "stole", pastParticiple: "stolen", spanish: "Robar" },
    { baseForm: "strike", pastSimple: "struck", pastParticiple: "stricken", spanish: "Golpear/dar blanco" },
    { baseForm: "swear", pastSimple: "swore", pastParticiple: "sworn", spanish: "Prometer" },
    { baseForm: "swim", pastSimple: "swam", pastParticiple: "swum", spanish: "Nadar" },
    { baseForm: "take", pastSimple: "took", pastParticiple: "taken", spanish: "Agarrar" },
    { baseForm: "tear", pastSimple: "tore", pastParticiple: "torn", spanish: "Llorar" },
    { baseForm: "throw", pastSimple: "threw", pastParticiple: "thrown", spanish: "Lanzar" },
    { baseForm: "wake", pastSimple: "woke", pastParticiple: "woken", spanish: "Despertar" },
    { baseForm: "wear", pastSimple: "wore", pastParticiple: "worn", spanish: "Vestir" },
    { baseForm: "weave", pastSimple: "wove", pastParticiple: "woven", spanish: "Tejer/Entrelazar" },
    { baseForm: "write", pastSimple: "wrote", pastParticiple: "written", spanish: "Escribir" },
]

const formStart = document.getElementById("formStart")
const txtVerbsAmount = document.getElementById("txtVerbsAmount")
const verbsCarousel = document.getElementById("verbsCarousel")
const cardContainer = document.getElementById("cardContainer")
let verbs = []

formStart.onsubmit = (e) => {
    e.preventDefault()
    verbs = completeVerbsList.slice(0, txtVerbsAmount.value)
    shuffle(verbs)
    let output = ''
    verbs.forEach((verb, index) => {
        const {baseForm, pastSimple, pastParticiple, spanish} = verb
        output += `
            <div class="carousel-item${!index ? ' active'  : ''} p-4">
                <div class="card mx-auto shadow" style="max-width: 24rem; height: 18rem">
                    <div class="card-body p-4 d-flex" role="button" onclick="reveal(${index})">
                        <div id="infoContainer${index}" class="my-auto w-100 fadable">
                            <h1 class="text-center">${baseForm}</h1>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    cardContainer.innerHTML = output
    verbsCarousel.style.opacity = 1
}

const reveal = index => {
    const infoContainer = document.getElementById(`infoContainer${index}`)
    const verb = verbs[index]
    const {baseForm, pastSimple, pastParticiple, spanish} = verb
    infoContainer.style.opacity = 0
    // infoContainer.removeAttribute('role')
    // infoContainer.removeAttribute('onclick')
    setTimeout(() => {
        if (infoContainer.getAttribute('revealed')) {
            infoContainer.innerHTML = `
            <h1 class="text-center">${baseForm}</h1>
            `
            infoContainer.removeAttribute('revealed')
        } else {
            infoContainer.innerHTML = `
            <small>Base form</small>
            <h5>${baseForm}</h5>
            <small>Past simple</small>
            <h5>${pastSimple}</h5>
            <small>Past participle</small>
            <h5>${pastParticiple}</h5>
            <small>Spanish</small>
            <h5>${spanish}</h5>
            `
            infoContainer.setAttribute('revealed', true)
        }
        
        infoContainer.style.opacity = 1
    }, 150)
}

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }