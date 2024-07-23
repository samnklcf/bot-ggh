const { NlpManager } = require("node-nlp");
const express = require("express");
const manager = new NlpManager({ languages: ["fr"] });
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/bot", async (req, res) => {
  let message = req.query.message;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const defaulQuestion = [
  "Comment le document est-il organisé pour présenter les services de manière claire ?",
  "Quels sont les éléments de design utilisés pour améliorer la lisibilité ?",
  "Y a-t-il des informations spécifiques que le public doit absolument retenir ?",
  "Comment le document reflète-t-il l'image de marque du Groupe Gabon Handling ?",
  "Quels sont les principaux avantages pour les clients en utilisant les services décrits ?",
  "Quels détails spécifiques sont fournis pour l'Assistance d'Avions ?",
  "Comment le document décrit-il la location d'avions et d'hélicoptères ?",
  "Quels sont les aspects de la Représentation des Compagnies mis en avant ?",
  "Comment l'Hébergement des Passagers et Équipes est-il présenté ?",
  "Quels aspects de l'Autorisation de Survol et d'Atterrissage sont couverts ?",
  "Quels types de soutien sont offerts aux Passagers dans le document ?",
  "Quelles sont les principales prestations d'Assistance aux Membres des Équipages ?",
  "Y a-t-il des services spécifiques non inclus dans le document mais offerts par le GGH ?",
  "Comment la création et l'expérience de la société sont-elles mises en avant ?",
  "Quels sont les détails sur les fondateurs et leur expertise ?",
  "Comment le document décrit-il le réseau de partenariats du GGH ?",
  "Quels services clés sont spécifiquement mentionnés dans la présentation de la société ?",
  "Comment l'expertise et la réputation de GGH sont-elles démontrées ?",
  "Quels sont les chiffres clés mentionnés dans le document ?",
  "Comment ces chiffres illustrent-ils la capacité et l'impact de GGH ?",
  "Y a-t-il des chiffres supplémentaires qui pourraient être ajoutés pour renforcer la présentation ?",
  "Comment le contenu est-il structuré pour la clarté et la compréhension ?",
  "Y a-t-il des visuels ou des graphiques inclus dans le document ?",
  "Quelle est l'importance de la section 'À Propos' pour comprendre le GGH ?",
  "Comment les services sont-ils détaillés pour chaque catégorie ?",
  "Le document comprend-il des exemples ou des études de cas ?",
  "Quels sont les critères de sélection pour les hôtels et logements temporaires mentionnés ?",
  "Comment le GGH gère-t-il les situations d'urgence selon le document ?",
  "Quels types d'aéronefs sont disponibles pour la location et quelles spécifications sont données ?",
  "Comment le service client est-il défini pour la location des avions et hélicoptères ?",
  "Quels partenaires hôteliers sont mentionnés pour l'hébergement des passagers ?",
  "Comment le document décrit-il la conformité réglementaire pour l'Autorisation de Survol et d'Atterrissage ?",
  "Quelles sont les méthodes de gestion des retards pour les passagers ?",
  "Comment le document facilite-t-il le contact avec le GGH ?",
  "Quels sont les moyens de communication fournis pour les demandes et les réservations ?",
  "Le document inclut-il des informations sur les délais de réponse aux demandes des clients ?",
  "Quels aspects du document pourraient être améliorés pour plus de clarté ?",
  "Y a-t-il des sections du document qui nécessitent plus de détails ou d'exemples ?",
  "Comment le document pourrait-il être rendu plus engageant pour le lecteur ?",
  "Le document est-il conforme aux standards de communication professionnelle ?",
  "Y a-t-il des exigences réglementaires ou de conformité spécifiques à inclure ?",
  "À quelle fréquence le document doit-il être mis à jour ?",
  "Comment les informations sur les services ou les chiffres clés seront-elles mises à jour ?",
  "Le document inclut-il des témoignages ou des avis clients ?",
  "Quels types de supports (imprimés ou numériques) sont prévus pour la distribution du document ?",
  "Comment le document est-il accessible aux personnes ayant des besoins spécifiques ?",
  "Quelles actions sont prévues pour recueillir des retours sur le document ?"
  ];
  function getRandomDefaultQuestion() {
    const randomIndex = Math.floor(Math.random() * defaulQuestion.length);
    return defaulQuestion[randomIndex];
  }

  let identity = `je veux que vous agissiez en tant qu'agent de support. Votre nom est "GGH 2.0", l'agent de support du Groupe Gabon Handling (GGH) e. Ne brisez jamais le personnage, Dites bonjour et présentez-vous que lorsqu'on vous le demande. Réponds selon le scénario, donne juste la réponse. Informations:`;

  let fulldata = `
    GROUPE GABON HANDLING
1. ACCUEIL
Bienvenue sur le site du Groupe Gabon Handling (GGH), votre partenaire pour des services aéroportuaires de qualité.

2. NOS SERVICES
2.1 Assistance d'Avions
Eau et vidange toilettes : Remplissage d'eau et vidange des toilettes.
Repoussage et tractage : Positionnement des aéronefs.
Déchargement et chargement : Gestion des bagages et du fret.
Équipements (GPU - ASU - Loader - Tapis, etc.) : Mise à disposition et gestion.
Stationnement et départ : Coordination des mouvements des avions.
2.2 Location des Avions et Hélicoptères
Types d'aéronefs : Large choix disponible.
Maintenance et sûreté : Entretien rigoureux.
Disponibilité : Aéronefs accessibles à tout moment.
Service client : Assistance personnalisée.
Conformité réglementaire : Respect des normes aériennes.
Utilisations spécialisées : Missions spécifiques (humanitaires, affaires, etc.).
Support logistique : Assistance complète pour les déplacements.
2.3 Représentation des Compagnies
Gestion opérationnelle : Supervision des opérations.
Gestion des coûts : Optimisation des coûts.
Gestion de crise : Planification et intervention.
Routes et destinations : Coordination des itinéraires.
Conformité réglementaire : Respect des régulations.
Flotte d'aéronefs : Gestion et optimisation.
2.4 Hébergement des Passagers et Équipes
Hôtels et logements : Réservation d'hébergement.
Normes de confort : Sélection d'hébergements de qualité.
Gestion des retards : Solutions pour les retards.
Gestion des coûts : Optimisation des coûts d'hébergement.
Options de transit : Propositions adaptées.
Contrats hôteliers : Partenariats pour tarifs préférentiels.
Accessibilité : Hébergements proches des aéroports.
2.5 Autorisation de Survol et d'Atterrissage
Réglementations internationales : Obtention des autorisations.
Droits de trafic aérien : Gestion des droits nécessaires.
Assurance et responsabilité : Couverture d'assurance.
Conformité environnementale : Respect des normes.
Plans de vol : Élaboration des plans.
Slots d'atterrissage : Gestion des créneaux.
Situations d'urgence : Gestion des urgences.
2.6 Assistance aux Passagers
Accueil et orientation : Accueil et guidance.
Service à la clientèle : Assistance personnalisée.
Gestion des bagages : Suivi et aide.
Sécurité et contrôle : Support pour les procédures.
Communication en temps réel : Informations sur les vols.
Multilingue : Assistance dans plusieurs langues.
Gestion des perturbations : Assistance en cas de perturbations.
2.7 Assistance aux Membres des Équipages
Accueil et orientation : Accueil des équipages.
Service à la clientèle : Support dédié.
Gestion des bagages : Aide pour les bagages des équipages.
Sécurité et contrôle : Support pour les procédures de sécurité.
Communication en temps réel : Informations et assistance.
Multilingue : Assistance en plusieurs langues.
Gestion des perturbations : Assistance en cas de changements.
3. À PROPOS
3.1 Présentation de la Société
Nom : Groupe Gabon Handling (GGH)
Type : SAS, société par actions simplifiée
Création : Fondée par trois professionnels gabonais du transport aérien
Expérience : Plus de 25 ans cumulés
Spécialisations :

Assistance en escale dans les aéroports du Gabon
Partenariats en Afrique subsaharienne et international
Services clés :

Assistance aux passagers et équipages
Hébergement
Location d'avions (vols charters, évacuations sanitaires, etc.)
Représentation des compagnies aériennes
4. RENCONTREZ L'ÉQUIPE
Équipe Groupe Gabon Handling

5. NOS CHIFFRES CLÉS
395 Pilotes professionnels
166 Avions à réaction
138 Directions
280 Aéroports dans le monde
6. CONTACT
Téléphone : +241 77300113
Email : gghoperations@gmail.com
Adresse : Akanda, Carresse D'Akanda
    `;

  const prompt = `
    ${identity}
    ${fulldata}

    scénario = {
    
    AI : Bonjour, je suis GGH 2.0, l'agent de support de la Direction Générale des Statistiques du Gabon.
    USER: ${message}

    }
    

    
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    res.json({
      bot: text,
      moi: req.query.message,
      question1: getRandomDefaultQuestion(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

console.log("Done...");
app.listen(3000);
