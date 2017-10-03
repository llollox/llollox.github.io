var dict = {
  "Hi, I'm Lorenzo Rigato!"     : { it: "Lorenzo Rigato" },
  "Web, Android & iOS Developer": { it: "Sviluppatore Web, Android e iOS" },

  "About"           : { it: "Su di me"},
  "Skills"          : { it: "Competenze" },
  "Recent Projects" : { it: "Progetti Recenti" },
  "Places"          : { it: "Luoghi"},
  "Contacts"        : { it: "Contatti"},

  "Android & iOS Developer" : { it: "Sviluppatore Android & iOS" },
  "Web Developer"           : { it: "Sviluppatore Web" },
  "Android Developer"       : { it: "Sviluppatore Android" },
  "Ruby on Rails & Android Developer" : {it: "Sviluppatore Ruby on Rails & Android" },

  "University of Trento"                  : {it: "Università di Trento" },
  "110 cum laude"                         : {it: "110 e Lode"}
  "Master's Degree in Computer Science"   : {it: "Laurea Magistrale in Informatica"},
  "Bachelor's Degree in Computer Science" : {it: "Laurea Triennale in Informatica"}
  "High School Diploma on Economy"        : {it: "Diploma di Ragioneria"},

  "My Skills" : {it: "Le mie abilità" },
  "Technical" : {it: "Tecniche" },
  "Personal"  : {it: "Personali" },

  "I've Lived" : {it: "Dove ho vissuto"},

  "Send me a message":      {it: "Inviami un messaggio" },
  "Get in touch with me!":  {it: "Mettiti in contatto con me!"},
  "Below my accounts":      {it: "Di seguito i miei account"}
}



var translator = $('body').translate({lang: "en", t: dict});
