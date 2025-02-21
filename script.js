     const form = document.getElementById("form");
    const confirmationSection = document.getElementById("confirmation-section");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let nom = document.getElementById("nom").value.trim();
        let prenom = document.getElementById("prenom").value.trim();
        let birth = document.getElementById("birth").value;
        let phone = document.getElementById("phone").value.trim();
        let motivation = document.getElementById("motivation").value.trim();

        
        if (nom === "" || prenom === "" || birth === "" || phone === "" || motivation === "") {
            alert("Remplis tous les champs avant de continuer !");
            return;
        }

        
        let birthDate = new Date(birth);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        
        if (today.getMonth() < birthDate.getMonth() || 
           (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("Tu dois avoir au moins 18 ans pour t'inscrire !");
            return;
        }

        
        if (motivation.length < 1000 || motivation.length > 2500) {
            alert("Ta motivation doit faire entre 1000 et 2500 caractères !");
            return;
        }

        
        let phonePattern = /^01\d{8}$/;
        if (!phonePattern.test(phone)) {
            alert("Le numéro doit commencer par 01 et contenir 10 chiffres !");
            return;
        }

        
        document.getElementById("display-nom").textContent = nom;
        document.getElementById("display-prenom").textContent = prenom;
        document.getElementById("display-birth").textContent = birth;
        document.getElementById("display-phone").textContent = phone;
        document.getElementById("display-motivation").textContent = motivation;

        
        confirmationSection.style.display = "block";

       
        form.reset();
    });

