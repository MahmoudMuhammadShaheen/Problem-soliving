

// that app return welcome by using your language if your language in the object if not it say welcome


//soultion
//01 frist we have that object has all languages welcome 
//02 we make an condation for if our object has that language say hello by using it 
// 03 if not it say welcome




    function welcome (language) {

        
        let languages = {
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
            }



       if (languages.hasOwnProperty(language)) {
        return languages[language];
       }
       else {
        return languages["english"]
       }
    }

    console.log(welcome("welssdvh"))

