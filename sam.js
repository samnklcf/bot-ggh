// Importation des modules nécessaires
const { NlpManager, ConversationContext } = require('node-nlp');

// Création d'une nouvelle instance de NlpManager
const manager = new NlpManager({ languages: ['fr'] });

// Ajout d'un exemple d'intention et de contexte
manager.addDocument('fr', 'Je m\'appelle %name%', 'user.intro');
manager.addDocument('fr', 'Mon nom est %name%', 'user.intro');

// Ajout de la réponse
manager.addAnswer('fr', 'user.intro', 'Enchanté de vous rencontrer! Comment puis-je vous aider aujourd\'hui?');

// Création d'une fonction asynchrone pour entraîner le modèle et traiter l'entrée de l'utilisateur
async function runChatbot() {
    // Entraînement du modèle
    await manager.train();
    manager.save();

    // Création d'un objet pour stocker le contexte
    let context = new ConversationContext();

    // Utilisation du modèle pour comprendre le contexte
    const userInput = 'Je m\'appelle John';
    const response = await manager.process('fr', userInput, context);

    // Vérification de l'existence de l'entité 'name' avant d'y accéder
    const nameEntity = response.entities.find(e => e.entity === 'name');
    if (nameEntity) {
        context.name = nameEntity.option; // Stockage du nom dans le contexte si l'entité 'name' existe

        // Utilisation du nom dans la réponse
        console.log(`Enchanté de vous rencontrer, ${response.entities[0].sourceText}! Comment puis-je vous aider aujourd'hui?`);
    } else {
        console.log(`Enchanté de vous rencontrer, ${response.entities[0].sourceText}! Comment puis-je vous aider aujourd'hui?`);
    }
}


runChatbot();
