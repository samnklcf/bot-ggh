$(document).ready(function () {
  // Utilisez l'événement submit du formulaire
  $("#chatForm").submit(function (event) {
      event.preventDefault(); // Empêche le rechargement de la page
      showLoadingMessage();
      sendMessage();
  });

  $(document).on("click", ".suggested-question", function () {
      const suggestedQuestion = $(this).text();
      $("#userInput").val(suggestedQuestion);
      showLoadingMessage();
      sendMessage();
      $(this).remove();
  });

  function showLoadingMessage() {
      const chatList = $("#chatList");
      const loadingMessage = `
          <hr />
          <div class="message message-left message-loading">
              <div class="message-text"><div class="custom-loader"></div></div>
          </div>
      `;
      chatList.append(loadingMessage);
      chatList.scrollTop(chatList[0].scrollHeight);
  }

  function sendMessage() {
      const userInput = $("#userInput").val();
      $("#userInput").val("");

      $.get(`/bot?message=${userInput}`, function (data) {
          // Supprimez le message de chargement
          $(".message-loading").remove();

          // Affichez le message "moi" immédiatement
          const chatList = $("#chatList");
          const myMessage = `
              <hr />
              <div class="message message-right haut">
                  <div class="message-text">${data.moi}</div>
              </div>
          `;
          chatList.append(myMessage);

          // Affichez la réponse du bot lettre par lettre
          const botMessageContainer = $('<div class="message message-left"> ');
          chatList.append(botMessageContainer);

          const botMessageText = data.bot;
          let index = 0;

          const intervalId = setInterval(function () {
              const partialMessage = botMessageText.slice(0, index + 1);
              botMessageContainer.html(
                  `<img src="/images/chatbot.gif" class="img-fluid mt-10" width="40px" style="border-radius: 100%;"><br /><br /><div class="message-text "><i>${partialMessage}</i>
                  <br/>
                  <br />
  
                  <div class="suggested-questions">
  
                      <span class="suggested-question ">Sugg: ${data.question1}</span>
                      
                  </div>
                  </div>`
              );
              chatList.scrollTop(chatList[0].scrollHeight);

              index++;

              if (index === botMessageText.length) {
                  clearInterval(intervalId);

                  // Faire défiler automatiquement vers le bas avec une animation fluide
                  chatList.animate(
                      { scrollTop: chatList[0].scrollHeight },
                      800
                  );
              }
          }, 10); // Ajoutez une lettre toutes les 100 millisecondes
      });
  }
});