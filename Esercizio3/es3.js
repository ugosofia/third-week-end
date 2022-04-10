function attiva() {
    
    var cognome = document.getElementsByName("cognome").values
    if (cognome == "") {
        alert("il campo cognome non può essere vuoto!")
        return false;
    }


    var nome = document.getElementsByName("nome").values
    if (nome == "") {
        alert("il campo nome non può essere vuoto!")
        return false;
    }

    document.form.cognome.values
    var matricola = document.getElementsByName("matricola").values
    if (isNaN( matricola)) {
        alert("il campo matricola deve essere un numero!")
        return false;
    }


    var regione = document.getElementsByName("regione").values
    if (regione.length == 0) {
        alert("il campo regione non può essere vuoto!")
        return false;
    }

    var email = document.getElementsByName("email").values
    var telefono = document.getElementsByName("telefono").values
    if (telefono.length == 0 || email.length == 0) {
        alert("devi inserire o l'email o il telefono!")
        return false;
    }

    return true;

}