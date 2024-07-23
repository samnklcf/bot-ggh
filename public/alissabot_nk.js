      // Fonction pour créer le bouton
      function createCustomButton() {
        var button = document.createElement("div");
        button.innerHTML = `<img src="https://bot-ggh.onrender.com/images/chatbot.gif" alt="JPG" width="80px" style="border-radius: 100%; z-index:200000;">`;
        button.style.position = "fixed";
        button.style.bottom = "70px";
        button.style.right = "30px";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.zIndex="9999"
        document.body.appendChild(button);

        button.addEventListener("click", function () {
          // Faites disparaître le bouton
          button.style.display = "none";

          // Créez un layer sombre
          var darkLayer = document.createElement("div");
          darkLayer.style.position = "fixed";
          darkLayer.style.top = "0";
          darkLayer.style.left = "0";
          darkLayer.style.width = "100%";
          darkLayer.style.height = "100%";
          darkLayer.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Couleur noire avec une opacité de 0.5
          darkLayer.style.cursor = "pointer"; // Ajout d'un curseur pointer pour indiquer que le layer est cliquable
          darkLayer.style.zIndex = "5000";
          darkLayer.addEventListener("click", function () {
            // Faites disparaître le layer, le rectangle et l'iframe
            darkLayer.style.display = "none";
            rectangle.style.display = "none";
            loadingIndicator.style.display = "none";
            iframe.style.display = "none";

            // Restaurez le bouton
            button.style.display = "block";
          });
          document.body.appendChild(darkLayer);

          // Créez un rectangle rouge au milieu de la page
          var rectangle = document.createElement("div");
          rectangle.style.position = "fixed";
          rectangle.style.top = "50%";
          rectangle.style.left = "50%";
          rectangle.style.transform = "translate(-50%, -50%)";
          rectangle.style.width = "400px";
          rectangle.style.height = "90vh"; // 90% de la hauteur de l'écran
          rectangle.style.backgroundColor = "white";
          rectangle.style.zIndex = "6000"; // Assurez-vous que le rectangle est au-dessus du layer
          rectangle.style.border = "none";
          rectangle.style.borderRadius = "8px";
          rectangle.style.marginLeft = "4px";
          rectangle.style.right = "4px";
          document.body.appendChild(rectangle);

          // Ajoutez un indicateur de chargement
          var loadingIndicator = document.createElement("div");
          loadingIndicator.innerHTML = "Chargement en cours...";
          loadingIndicator.style.position = "absolute";
          loadingIndicator.style.top = "50%";
          loadingIndicator.style.left = "50%";
          loadingIndicator.style.transform = "translate(-50%, -50%)";
          rectangle.appendChild(loadingIndicator);

          var returnButton = document.createElement("div");
          returnButton.innerHTML = "X";
          returnButton.style.position = "absolute";
          returnButton.style.top = "10px";
          returnButton.style.right = "10px";
          returnButton.style.padding = "10px";
          returnButton.style.width="50px";
          returnButton.style.height="50px";
          returnButton.style.border= "0";
          returnButton.style.borderRadius ="100%";
          returnButton.style.display ="flex";
          returnButton.style.alignContent ="center";
          returnButton.style.justifyContent= "center";
          returnButton.style.fontWeight ="900"
          

          returnButton.style.color ="white"
          returnButton.style.backgroundColor = " #dc3545";
          returnButton.style.cursor = "pointer";

          // Ajoutez un iframe à l'intérieur du rectangle
          var iframe = document.createElement("iframe");
          iframe.src = "https://bot-ggh.onrender.com/";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.style.border = "none";
          iframe.style.borderRadius = "8px";
          iframe.style.zIndex = "7000";

          // Ajoutez un gestionnaire d'événements pour détecter le chargement de l'iframe
          iframe.addEventListener("load", function () {
            // Masquez l'indicateur de chargement une fois l'iframe chargé
            loadingIndicator.style.display = "none";
            // Affichez l'iframe
            iframe.style.display = "block";
          });

          returnButton.addEventListener("click", function () {
            // Faites disparaître le layer, le rectangle et l'iframe
            darkLayer.style.display = "none";
            rectangle.style.display = "none";
            loadingIndicator.style.display = "none";
            iframe.style.display = "none";
            returnButton.style.zIndex = "8000";

            // Restaurez le bouton
            button.style.display = "block";
          });

          rectangle.appendChild(iframe);
          rectangle.appendChild(returnButton);
        });

        document.body.appendChild(button);
      }

      // Ajoutez le bouton lors du chargement de la page
      window.onload = function () {
        createCustomButton();
      };
