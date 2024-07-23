const { NlpManager } = require("node-nlp");
const express = require("express");
const manager = new NlpManager({ languages: ["fr"] });
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

// ------------------------------Doc1------------------------------------------
manager.addDocument(
  "fr",
  "Quelle est la perception de la pauvreté au Gabon?",
  "perceptionPauvrete"
);
manager.addDocument(
  "fr",
  "Quel est le point de vue sur la pauvreté ?",
  "perceptionPauvrete"
);
manager.addDocument(
  "fr",
  "Comment les gens voient-ils la pauvreté ?",
  "perceptionPauvrete"
);
manager.addDocument("fr", "La pauvreté au Gabon ?", "GabPauvrete");
manager.addDocument(
  "fr",
  "Comment la pauvreté est-elle perçue par les gabonais ",
  "perceptionPauvrete"
);
manager.addAnswer(
  "fr",
  "perceptionPauvrete",
  "Au Gabon, la manière dont la pauvreté est perçue ne semble pas être significativement influencée par des facteurs tels que le lieu de résidence, le sexe du chef de ménage, la région de résidence ou le groupe socio-économique."
);
manager.addAnswer(
  "fr",
  "GabPauvrete",
  `Au Gabon, la pauvreté est une réalité pour une grande partie de la population. En 2016, 54% des ménages ont vu leur niveau de vie décliner, tandis que 6% ont noté une amélioration et 40% ont constaté une stabilité. La situation est plus difficile en milieu rural où 56,9% des ménages ont connu une baisse de leur niveau de vie. De plus, seulement 20% des ménages économisent, tandis que 14% vivent sur leurs réserves et 23% s’endettent.

La perception de la pauvreté est également élevée, avec 14,9% des ménages se déclarant très pauvres et 38,3% moyennement pauvres. Cette perception est plus prononcée en milieu rural (24,9%) et parmi les ménages dirigés par des femmes (59%).

En termes de besoins, 93,9% des ménages estiment que le besoin minimum pour une vie correcte est de pouvoir se soigner lorsqu’on est malade, suivi de l’emploi stable (92,1%), l’accès à l’eau courante et à l’électricité (91,8%) et l’éducation pour tous les enfants (91%).

Enfin, pour améliorer les conditions de vie, 59% des ménages estiment que la création d’emplois est l’action prioritaire. D’autres actions, comme la valorisation des salaires (7%), la garantie des prix des produits de base et l’accès au logement (6% chacun), sont également envisagées.

Ces informations mettent en évidence les défis importants auxquels le Gabon est confronté en matière de réduction de la pauvreté et d’amélioration des conditions de vie.`
);

manager.addDocument("fr", "répartition des ménages ?", "TableMenage");

manager.addAnswer(
    "fr",
    "TableMenage",
    
    `
    <style>
      body {
        font-size: 12px; /* Ajustez la taille de la police selon vos besoins */
      }
  
      .table {
        width: auto;
        overflow-x: auto;
      }
    </style>


  
    <div class="container mt-4 w" style="width:100%">
      <h6 class="mb-4">Tableau 1 : Répartition (%) des ménages</h6>
  
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Milieu de résidence / Région / Sexe / Niveau d'instruction / Groupe socioéconomique</th>
              <th scope="col" colspan="7">Perception de la notion de pauvreté</th>
            </tr>
          </thead>
          <tbody>
        <tr>
          <th scope="row">Milieu de résidence</th>
          <td>Total</td>
          <td>81.4</td>
          <td>76.1</td>
          <td>77.2</td>
          <td>60.2</td>
          <td>74.4</td>
          <td>80.2</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Urbain</td>
          <td>81.8</td>
          <td>75.9</td>
          <td>78.1</td>
          <td>59.3</td>
          <td>74.1</td>
          <td>80.3</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Rural</td>
          <td>78.9</td>
          <td>77.3</td>
          <td>72.3</td>
          <td>65.6</td>
          <td>75.9</td>
          <td>79.7</td>
        </tr>
        <!-- ... Autres lignes ... -->
        <tr>
          <th scope="row">Région</th>
          <td>Total</td>
          <td>81.4</td>
          <td>76.1</td>
          <td>77.2</td>
          <td>60.2</td>
          <td>74.4</td>
          <td>80.2</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Libreville</td>
          <td>85.4</td>
          <td>79.4</td>
          <td>84.3</td>
          <td>59.7</td>
          <td>74.9</td>
          <td>85.3</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Port-Gentil</td>
          <td>72.9</td>
          <td>74.7</td>
          <td>77</td>
          <td>63.7</td>
          <td>78.3</td>
          <td>77.4</td>
        </tr>
        <!-- ... Autres lignes ... -->
      </tbody>
        </table>
      </div>
  
    </div>
  
   

    
  `
  );
manager.addAnswer(
  "fr",
  "perceptionPauvrete",
  "Au Gabon, la façon dont les gens voient la pauvreté n'est pas beaucoup différente selon où ils habitent, le sexe du chef de famille, la région ou le groupe socio-économique."
);

manager.addDocument(
  "fr",
  "Quels facteurs sont associés à la pauvreté?",
  "facteursPauvrete"
);
manager.addDocument("fr", "Les causes la pauvreté ?", "facteursPauvrete");
manager.addAnswer(
  "fr",
  "facteursPauvrete",
  "La majorité des ménages au Gabon associent la pauvreté à une consommation inférieure au seuil de subsistance, à l’incapacité d’influer sur sa condition de vie et à un faible niveau de capital humain."
);
manager.addAnswer(
  "fr",
  "facteursPauvrete",
  "La plupart des familles au Gabon considèrent la pauvreté comme ayant un niveau de vie en dessous du seuil nécessaire, une incapacité à améliorer les conditions de vie et un faible niveau de compétences humaines."
);
manager.addAnswer(
  "fr",
  "facteursPauvrete",
  "La plupart des familles au Gabon pensent que la pauvreté signifie vivre avec peu, ne pas pouvoir changer sa vie et avoir peu de compétences."
);

manager.addDocument(
  "fr",
  "joue un rôle prépondérant / important / majeur / central  dans la définition de la pauvreté au Gabon ?",
  "roleDefinitionPauvrete"
);
manager.addAnswer(
  "fr",
  "roleDefinitionPauvrete",
  "Les chefs de ménage éduqués et les cadres supérieurs jouent un rôle prépondérant dans la définition de la pauvreté au Gabon."
);
manager.addDocument(
  "fr",
  "La perception / définition  de la pauvreté a-t-elle changé ?",
  "evolutionPerceptionPauvrete"
);
manager.addAnswer(
  "fr",
  "evolutionPerceptionPauvrete",
  "Non, ces perceptions n’ont pas changé de manière significative depuis 2005."
);

// -------------------Doc2------------------------------------
manager.addDocument("fr", "le niveau de vie  ?", "niveau_de_vie");
manager.addDocument(
  "fr",
  "Comment a évolué le niveau de vie au Gabon ?",
  "niveau_de_vie"
);
manager.addDocument(
  "fr",
  "Pourquoi le niveau de vie a décliné au Gabon ?",
  "niveau_de_vie"
);

// Réponses sur le niveau de vie en général
manager.addAnswer(
  "fr",
  "niveau_de_vie",
  "En 2016, 54% des ménages au Gabon ont vu leur niveau de vie décliner, 6% ont noté une amélioration et 40% ont constaté une stabilité."
);
manager.addAnswer(
  "fr",
  "niveau_de_vie",
  "La majorité des ménages au Gabon ont connu une baisse de leur niveau de vie en 2016. Seuls 6% ont vu une amélioration. En 2016, 54% des ménages au Gabon ont vu leur niveau de vie décliner, 6% ont noté une amélioration et 40% ont constaté une stabilité."
);
manager.addAnswer(
  "fr",
  "niveau_de_vie",
  "La dégradation du niveau de vie au Gabon peut être attribuée à divers facteurs économiques et sociaux. En 2016, 54% des ménages au Gabon ont vu leur niveau de vie décliner, 6% ont noté une amélioration et 40% ont constaté une stabilité."
);

// Questions sur le niveau de vie en milieu rural
manager.addDocument(
  "fr",
  "le niveau de vie en milieu rural?",
  "niveau_de_vie_rural"
);

manager.addDocument(
  "fr",
  "Pourquoi le niveau de vie en milieu rural est plus dégradé ?",
  "pourquoi_niveau_de_vie_rural"
);

// Réponses sur le niveau de vie en milieu rural
manager.addAnswer(
  "fr",
  "niveau_de_vie_rural",
  "La dégradation du niveau de vie est plus marquée en milieu rural au Gabon, avec 56,9% des ménages ayant connu une baisse en 2016."
);
manager.addAnswer(
  "fr",
  "pourquoi_niveau_de_vie_rural",
  "En milieu rural au Gabon, la situation est plus difficile avec 56,9% des ménages qui ont vu leur niveau de vie baisser en 2016."
);

// ----------------------------Doc3---------------------------------------
manager.addDocument(
  "fr",
  "le niveau de vie à Port-Gentil ?",
  "niveau_de_vie_portgentil"
);
manager.addDocument(
  "fr",
  "Pourquoi le niveau de vie en région de Port-Gentil est plus dégradé ?",
  "niveau_de_vie_portgentil"
);

// Réponses sur le niveau de vie en région de Port-Gentil
manager.addAnswer(
  "fr",
  "niveau_de_vie_portgentil",
  "La région de Port-Gentil a subi la plus grande dégradation avec 56,5% des ménages ayant connu une baisse en 2016."
);
manager.addAnswer(
  "fr",
  "niveau_de_vie_portgentil",
  "En région de Port-Gentil au Gabon, la situation est plus difficile avec 56,5% des ménages qui ont vu leur niveau de vie baisser en 2016."
);

// Doc4
manager.addDocument(
  "fr",
  "pourcentage de ménages au Gabon économisent ?",
  "economie"
);
manager.addDocument("fr", "les cadres épargnent-ils plus ?", "economie");
manager.addAnswer(
  "fr",
  "economie",
  "Seulement 20% des ménages au Gabon économisent, dont 2% économisent beaucoup et 18% un peu. Les cadres, surtout les cadres supérieurs, épargnent le plus (34%)."
);
manager.addAnswer(
  "fr",
  "economie",
  "Les cadres, en particulier les cadres supérieurs, ont généralement des revenus plus élevés, ce qui leur permet dépargner davantage. Seulement 20% des ménages au Gabon économisent, dont 2% économisent beaucoup et 18% un peu. Les cadres, surtout les cadres supérieurs, épargnent le plus (34%)."
);

// Doc5
manager.addDocument(
  "fr",
  "la stabilité des revenus des ménages ?",
  "stabilite_revenus"
);
manager.addDocument(
  "fr",
  "l’instabilité du revenu est-il plus prononcée  en milieu rural / campagne / village ?",
  "stabilite_revenus"
);
manager.addAnswer(
  "fr",
  "stabilite_revenus",
  "Au Gabon, 12% des ménages trouvent leur revenu très stable, 41% le jugent très instable et 47% le considèrent à peu près stable. L’instabilité du revenu est plus prononcée en milieu rural (51%)."
);
manager.addAnswer(
  "fr",
  "stabilite_revenus",
  "L’instabilité du revenu en milieu rural peut être due à la nature saisonnière de l'agriculture et à l'absence de sources de revenus stables."
);

// Doc8
manager.addDocument(
  "fr",
  "besoins minimums pour une vie correcte ?",
  "besoins_minimum"
);
manager.addDocument(
  "fr",
  "Pourquoi l’accès à l’eau courante et à l’électricité est-il si important au Gabon ?",
  "besoins_minimum"
);
manager.addAnswer(
  "fr",
  "besoins_minimum",
  "Au Gabon, 93,9% des ménages estiment que le besoin minimum pour une vie correcte est de pouvoir se soigner lorsqu’on est malade. Suivent l’emploi stable (92,1%), l’accès à l’eau courante et à l’électricité (91,8%) et l’éducation pour tous les enfants (91%). "
);
manager.addAnswer(
  "fr",
  "besoins_minimum",
  "L’accès à l’eau courante et à l’électricité est crucial pour la santé et le bien-être des ménages au Gabon. Au Gabon, 93,9% des ménages estiment que le besoin minimum pour une vie correcte est de pouvoir se soigner lorsqu’on est malade. Suivent l’emploi stable (92,1%), l’accès à l’eau courante et à l’électricité (91,8%) et l’éducation pour tous les enfants (91%)."
);

// Doc9
manager.addDocument(
  "fr",
  "la participation associative au Gabon ?",
  "participation_associative"
);
manager.addDocument(
  "fr",
  "Pourquoi la participation associative a-t-elle diminué au Gabon ?",
  "participation_associative"
);
manager.addAnswer(
  "fr",
  "participation_associative",
  "Au Gabon, 45,7% des ménages participent à une vie associative. Les associations les plus populaires sont religieuses (18,1%) et familiales (13,9%). Par rapport à 2005, la participation associative a diminué."
);
manager.addAnswer(
  "fr",
  "participation_associative",
  "La diminution de la participation associative au Gabon peut être due à divers facteurs, tels que le manque de ressources ou le changement des priorités des ménages. Au Gabon, 45,7% des ménages participent à une vie associative. Les associations les plus populaires sont religieuses (18,1%) et familiales (13,9%). Par rapport à 2005, la participation associative a diminué."
);

// Doc10
manager.addDocument(
  "fr",
  "les ménages s’attendent-ils à recevoir de l’aide en période difficile ",
  "aide_difficulte"
);
manager.addDocument(
  "fr",
  "Les ménages au Gabon comptent-ils davantage sur leur voisinage que sur les associations religieuses en cas de difficulté ?",
  "aide_difficulte"
);
manager.addAnswer(
  "fr",
  "aide_difficulte",
  "Au Gabon, en période difficile, les ménages s’attendent à recevoir de l’aide principalement de la famille élargie (77,8%), des amis (53%) et du voisinage (36%). Malgré une plus grande adhésion aux associations religieuses, les ménages comptent davantage sur leur voisinage (36%) que sur ces associations (17,5%) en cas de difficulté."
);
manager.addAnswer(
  "fr",
  "aide_difficulte",
  "Les ménages au Gabon peuvent compter davantage sur leur voisinage que sur les associations religieuses en cas de difficulté en raison de la proximité géographique et des liens communautaires forts."
);

// Doc11
manager.addDocument(
  "fr",
  "les actions prioritaires pour améliorer les conditions de vie ?",
  "actions_prioritaires"
);
manager.addDocument(
  "fr",
  "la création d’emplois est-elle considérée comme une priorité au Gabon ?",
  "actions_prioritaires"
);
manager.addAnswer(
  "fr",
  "actions_prioritaires",
  "Au Gabon, 59% des ménages estiment que la création d’emplois est l’action prioritaire pour améliorer les conditions de vie. D’autres actions, comme la valorisation des salaires (7%), la garantie des prix des produits de base et l’accès au logement (6% chacun), sont également envisagées."
);
manager.addAnswer(
  "fr",
  "actions_prioritaires",
  "La création d’emplois est considérée comme une priorité au Gabon car elle peut contribuer à améliorer les conditions de vie en augmentant les revenus des ménages et en réduisant la pauvreté."
);

// -----------------------Role de la DGS--------------------
manager.addDocument(
  "fr",
  "Qui est le directeur général / chef / responsable de la DGS / Direction Générale des statistiques ?",
  "directeurGeneralDGS"
);
manager.addAnswer(
  "fr",
  "directeurGeneralDGS",
  "Le Directeur Général de la DGS est Pierre Claver MFOUBA."
);
manager.addDocument(
  "fr",
  "Qui est le directeur général adjoint de la DGS ?",
  "directeurGeneralAdjointDGS"
);
manager.addAnswer(
  "fr",
  "directeurGeneralAdjointDGS",
  "Le Directeur Général Adjoint de la DGS est Serge MAGANGA."
);
// managerrmation sur les prérogatives
manager.addDocument(
  "fr",
  "Quelles sont / est les prérogatives / missions / rôle de la DGS ?",
  "prerogativesDGS"
);
manager.addAnswer(
  "fr",
  "prerogativesDGS",
  "La DGS a plusieurs prérogatives. Elle est chargée de produire, analyser et diffuser les statistiques officielles, mener des enquêtes périodiques ou ponctuelles d’intérêt général auprès des Entreprises ou des Ménages, mesurer les principaux indicateurs économiques du Gabon, d’en produire et d’en publier les indices, organiser les opérations de recensement de la population et d’en assurer la publication, estimer le solde migratoire, gérer les répertoires nationaux d’identification des individus et des Entreprises, en collaboration avec les Administrations et des Organismes compétents, assurer la diffusion et la publication des études et autres Informations Statistiques, définir et harmoniser avec les autres Organismes des Pays de la sous-région les standards et les données statistiques, collaborer avec les autres Administrations les Instituts Nationaux, Sous-Régionaux et Internationaux de Recherches Statistiques."
);
manager.addAnswer(
  "fr",
  "prerogativesDGS",
  "La DGS a une multitude de responsabilités. Elle produit, analyse et diffuse les statistiques officielles, réalise des enquêtes d’intérêt général, mesure les indicateurs économiques du Gabon, organise les recensements de la population, estime le solde migratoire, gère les répertoires nationaux d’identification, assure la diffusion des informations statistiques, harmonise les standards et les données statistiques avec les autres Organismes des Pays de la sous-région, et collabore avec les autres Instituts de Recherches Statistiques."
);

// Information sur l'évolution de la DGS
manager.addDocument("fr", "Comment  a-t-elle évolué ?", "evolutionDGS");
manager.addDocument(
  "fr",
  "L'évolution de la DGS / Direction Générale des Statistique ?",
  "evolutionDGS"
);
manager.addAnswer(
  "fr",
  "evolutionDGS",
  "Le décret N° 00718/PR/MPAT du 31 mai 1983 a consacré l’évolution croissante de la DGS avec la création d’une quatrième direction, la Direction des Etudes, de la Coordination Statistique et de l’Informatique. En même temps, la Direction des Enquêtes et de la Démographie est devenue la Direction des Statistiques Démographiques."
);
manager.addDocument(
  "fr",
  " Quelle est La progression de DGS au fil du temps ?",
  "evolutionDGS"
);
manager.addAnswer(
  "fr",
  "evolutionDGS",
  "La DGS a connu une évolution significative. Le décret N° 00718/PR/MPAT du 31 mai 1983 a marqué cette évolution avec la création d’une quatrième direction, la Direction des Etudes, de la Coordination Statistique et de l’Informatique. Parallèlement, la Direction des Enquêtes et de la Démographie a été transformée en Direction des Statistiques Démographiques."
);

// Ajouter des documents pour saluer
manager.addDocument("fr", "Bonjour", "salutation");
manager.addDocument("fr", "Salut", "salutation");
manager.addDocument("fr", "Hello", "salutation");
manager.addDocument("fr", "Coucou", "salutation");

//Doc 1
//Documents

//ANSWER DOC1

////////Information sur le Bot/

manager.addDocument("fr", "Qui t'a développé ?", "info_bot_developer");
manager.addDocument("fr", "Qui t'a crée ?", "info_bot_developer");
manager.addDocument(
  "fr",
  "Peux-tu me dire qui est le cerveau derrière Oli ?",
  "info_bot_developer"
);
manager.addDocument("fr", "Dis-moi qui a conçu Oli.", "info_bot_developer");

manager.addDocument("fr", "Quelle est ton nom ?", "question_nom");
manager.addDocument("fr", "Qui es-tu? ?", "question_nom");
manager.addDocument("fr", "Comment tu t'appelles ?", "question_nom");
manager.addDocument("fr", "Comment tu te nommes ?", "question_nom");
manager.addDocument("fr", "C'est quoi ton petit nom ?", "question_nom");
manager.addDocument("fr", "Peux-tu me dire ton nom ?", "question_nom");

manager.addAnswer(
  "fr",
  "question_nom",
  "On m'appelle Oli, ravi de te rencontrer ! J'ai été créé à Libreville en 15 décembre 2023."
);
manager.addAnswer("fr", "question_nom", "Je réponds au doux nom d'Oli.");
manager.addAnswer(
  "fr",
  "question_nom",
  "Mon nom est Oli, comment puis-je t'aider aujourd'hui ?"
);
manager.addAnswer("fr", "question_nom", "C'est Oli, prêt à discuter !");
manager.addAnswer(
  "fr",
  "question_nom",
  "Oli, c'est comme ça qu'ils m'appellent."
);
manager.addDocument("fr", "Qui est le président du gabon?", "president");
manager.addDocument("fr", "Qui est le général Oligui", "president");
manager.addDocument(
  "fr",
  "Qui est le directeur général/ PDG/ Fondateur / Chef de la SING?",
  "SING"
);

manager.addAnswer(
  "fr",
  "SING",
  "La Société d'Incubation Numérique du Gabon (SING) a été fondéE par monsieur Yannick EBIBIE "
);
manager.addAnswer(
  "fr",
  "president",
  "Le général Oligui est le héro du Gabon, Président de la transition de la république gabonaise depuis 2023"
);

manager.addDocument(
  "fr",
  "Quand et où Oli a-t-il été développé ?",
  "info_bot_creation_location"
);
manager.addDocument(
  "fr",
  "Dis-moi plus sur le lieu et la date de naissance de Oli.",
  "info_bot_creation_location"
);
manager.addDocument(
  "fr",
  "Où et quand Oli a-t-il vu le jour ?",
  "info_bot_creation_location"
);
manager.addDocument("fr", "merci ?", "merci");
manager.addDocument("fr", " je te remercie ?", "merci");

manager.addAnswer(
  "fr",
  "merci",
  "Pas de problème ! Je suis là pour aider avec plaisir."
);
manager.addAnswer(
  "fr",
  "merci",
  "Aucun souci ! C'est toujours un plaisir de fournir de l'aide."
);
manager.addAnswer(
  "fr",
  "merci",
  "Il n'y a pas de quoi ! C'est agréable de pouvoir être utile."
);
manager.addAnswer(
  "fr",
  "merci",
  "Aucune difficulté ! C'est un plaisir d'être à votre service."
);
manager.addAnswer(
  "fr",
  "merci",
  "Pas de soucis du tout ! Aider est ce que je fais avec joie."
);

manager.addAnswer(
  "fr",
  "info_bot_developer",
  "Je suis le fruit du travail acharné de NKENKE EYEBE Samuel, un développeur fullstack et fondateur de Alisa IA. Mon existence a débuté le 15 décembre 2023 à Libreville 🤗 ."
);
manager.addAnswer(
  "fr",
  "info_bot_developer",
  "C'est NKENKE EYEBE Samuel qui m'a développé , un développeur fullstack et fondateur de Alisa IA. Moi Oli, j'ai vu le jour le 15 décembre 2023 à Libreville"
);
manager.addAnswer(
  "fr",
  "info_bot_developer",
  "Le cerveau derrière moi est NKENKE EYEBE Samuel, un développeur fullstack et fondateur de Alisa IA. Je suis né le 15/12/2023 à Libreville🤗."
);

manager.addAnswer(
  "fr",
  "info_bot_creation_location",
  "J'ai été mis au monde à Libreville en 15 décembre 2023."
);
manager.addAnswer(
  "fr",
  "info_bot_creation_location",
  "J'ai vu le jour à Libreville le 15 décembre 2023."
);
manager.addAnswer(
  "fr",
  "info_bot_creation_location",
  "Je suis né à Libreville le 15 décembre 2023."
);

// Ajouter des documents pour dire au revoir
manager.addDocument("fr", "Au revoir", "au_revoir");
manager.addDocument("fr", "Adieu", "au_revoir");
manager.addDocument("fr", "A bientôt", "au_revoir");
manager.addDocument("fr", "Bye", "au_revoir");

// Ajouter des réponses pour les salutations
manager.addAnswer("fr", "salutation", "Bonjour ! Comment puis-je vous aider ?");

manager.addAnswer(
  "fr",
  "salutation",
  "Salut ! En quoi puis-je vous assister ?"
);
manager.addAnswer("fr", "salutation", "Hello ! Que puis-je faire pour vous ?");
manager.addAnswer(
  "fr",
  "salutation",
  "Coucou ! Comment puis-je vous assister ?"
);

manager.addAnswer(
  "fr",
  "salutation",
  "Salut 🤖, je suis Oli, le bot de la DIRECTION GENERALE DES STATISTIQUES DU GABON. Mon rôle est de te donner les informations dont tu as besoin! 📊✨"
);

// Ajouter des réponses pour les adieux
manager.addAnswer("fr", "au_revoir", "Au revoir ! À bientôt.");
manager.addAnswer("fr", "au_revoir", "Adieu ! Prenez soin de vous.");
manager.addAnswer(
  "fr",
  "au_revoir",
  "A bientôt ! N'hésitez pas si vous avez besoin d'aide."
);
manager.addAnswer("fr", "au_revoir", "Bye ! Passez une excellente journée.");

manager.addDocument(
  "fr",
  "Qu'est-ce que la DGS Direction Générale Statistique?",
  "description_dgs"
);
manager.addDocument(
  "fr",
  "Qu'est-ce que la Direction Générale Statistique / DGS ?",
  "description_dgs"
);
manager.addDocument(
  "fr",
  "Parle-moi de la Direction Générale Statistique / DGS",
  "description_dgs"
);
manager.addDocument(
  "fr",
  "Parle-moi de la DGS / Direction Générale Statistique",
  "description_dgs"
);
manager.addDocument(
  "fr",
  "Quelle est la mission de la DGS ?",
  "description_dgs"
);
manager.addDocument("fr", "Explique la DGS", "description_dgs");
manager.addDocument("fr", "DGS", "description_dgs");

manager.addDocument("fr", "Les missions de la DGS", "mission_dgs");
manager.addDocument("fr", "La DGS, quelle est la mission", "mission_dgs");
manager.addDocument(
  "fr",
  "Quelles sont les missions de la DGS ?",
  "mission_dgs"
);
manager.addDocument("fr", "Expliquez les fonctions de la DGS", "mission_dgs");
manager.addDocument(
  "fr",
  "Décret N° 00718/PR/MPAT du 31 mai 1983",
  "mission_dgs"
);
manager.addDocument("fr", "ok", "merci");

// Ajouter une réponse pour la mission de la DGS
manager.addAnswer(
  "fr",
  "mission_dgs",
  "Selon le décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique a pour mission de mettre en œuvre la politique du Gouvernement dans le domaine de la Statistique. A ce titre, elle est notamment chargée de :\n\n- Produire, analyser et diffuser les statistiques officielles ;\n- Mener des enquêtes périodiques ou ponctuelles d’intérêt général auprès des Entreprises ou des Ménages ;\n- Mesurer les principaux indicateurs économiques du Gabon, d’en produire et d’en publier les indices ;\n- Organiser les opérations de recensement de la population et d’en assurer la publication ;\n- Estimer le solde migratoire ;\n- Gérer les répertoires nationaux d’identification des individus et des Entreprises, en collaboration avec les Administrations et des Organismes compétents ;\n- Assurer la diffusion et la publication des études et autres Informations Statistiques ;\n- Définir et harmoniser avec les autres Organismes des Pays de la sous-région les standards et les données statistiques ;\n- Collaborer avec les autres Administrations les Instituts Nationaux, Sous-Régionaux et Internationaux de Recherches Statistiques."
);
manager.addAnswer(
  "fr",
  "mission_dgs",
  "La mission de la Direction Générale de la Statistique, en vertu du décret N° 00718/PR/MPAT du 31 mai 1983, englobe la production, l'analyse et la diffusion des statistiques officielles, ainsi que la réalisation d'enquêtes d’intérêt général et la publication des résultats."
);
manager.addAnswer(
  "fr",
  "mission_dgs",
  "Selon les dispositions du décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique est chargée de mesurer les principaux indicateurs économiques du Gabon, d'organiser les recensements de la population et de collaborer avec d'autres organismes pour définir des standards statistiques."
);
manager.addAnswer(
  "fr",
  "mission_dgs",
  "Conformément au décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique a pour mission d'estimer le solde migratoire, de gérer les répertoires nationaux d'identification, et de collaborer avec d'autres institutions nationales et internationales de recherche statistique."
);

manager.addAnswer(
  "fr",
  "description_dgs",
  "La Direction Générale de Statistiques (DGS) du Gabon, également connue sous le sigle DGS, est une administration centrale du Ministère de l’Economie et de la Relance. Elle a été créée et organisée par le décret N° 00718/PR/MPAT du 31 mai 1983. La DGS a évolué avec la création de la Direction des Etudes, de la Coordination Statistique et de l’Informatique, et la transformation de la Direction des Enquêtes et de la Démographie en la Direction des Statistiques Démographiques. Bien que la loi N° 015/2014 ait institué et organisé le Système Statistique National, la référence principale pour les missions de la DGS reste le décret N° 00718/PR/MPAT du 31 mai 1983."
);
manager.addAnswer(
  "fr",
  "description_dgs",
  "La Direction Générale de Statistiques (DGS) du Gabon, connue sous le sigle DGS, constitue une administration centrale du Ministère de l’Économie et de la Relance. Sa création et son organisation remontent au décret N° 00718/PR/MPAT du 31 mai 1983. Au fil du temps, la DGS a connu une évolution marquante avec l'établissement de la Direction des Études, de la Coordination Statistique et de l’Informatique, tandis que la Direction des Enquêtes et de la Démographie a été transformée en la Direction des Statistiques Démographiques. Bien que la loi N° 015/2014 ait institué et organisé le Système Statistique National, il convient de souligner que le décret N° 00718/PR/MPAT du 31 mai 1983 demeure la référence fondamentale pour définir les missions essentielles de la DGS."
);
manager.addDocument("fr", "population totale du gabon / gabonaise", "population");
manager.addDocument("fr", "urbain", "population_urbaine");
manager.addDocument("fr", "rural", "population_rurale");
manager.addDocument("fr", "tranches d'âge", "tranches_age");
manager.addDocument("fr", "00-04 ans", "tranche_age_00_04");
manager.addDocument("fr", "80 ans & +", "tranche_age_80_plus");
manager.addDocument("fr", "masculin", "genre_masculin");
manager.addDocument("fr", "féminin", "genre_féminin");
manager.addDocument(
  "fr",
  "répartition par zone de résidence",
  "repartition_zone_residence"
);
manager.addDocument(
  "fr",
  " opulation urbain masculin / femme",
  "urbain_masculin"
);
manager.addDocument(
  "fr",
  "population urbain féminin / femme",
  "urbain_féminin"
);
manager.addDocument("fr", "population urbain totale", "urbain_total");
manager.addDocument(
  "fr",
  "population rural masculin / homme",
  "rural_masculin"
);
manager.addDocument("fr", "population rurale féminine / femme", "rural_féminin");
manager.addDocument("fr", "population rurale totale / complète", "rural_total");



// Ajouter des réponses pour les données démographiques
manager.addDocument("fr", "population en 1960", "population1960");

manager.addDocument("fr", "population en 1993", "population1993");
manager.addDocument("fr", "population en 2013", "population2013");
manager.addDocument("fr", "population en 2023", "population2023");

manager.addAnswer("fr", "population1960", "La population du Gabon en 1960 était de: 513 340 habitants")
manager.addAnswer("fr", "population1993", "La population du Gabon en 1993 était de: 1 065 390 habitants")
manager.addAnswer("fr", "population2013", "La population du Gabon en 2013 était de: 1 902 226 habitants")
manager.addAnswer("fr", "population2023", "La population du Gabon en 2023 est environ de: 2 388 992 habitants.")


manager.addAnswer(
  "fr",
  "population",
  `La population de quelle année souhaitez-vous connaître ? <br /><br />
  <h6>Choississez: </h6>
  <ul>
  
  <li class="suggested-question ">en 1960</li>

  <li class="suggested-question ">en 1993</li>

  <li class="suggested-question ">en 2013</li>
  <li class="suggested-question ">en 2023</li>
  </ul>
  `
);

manager.addDocument("fr", "La population  du gabon par province / dans chaque province / pour chaque province", "parprovince")
manager.addDocument("fr", "Démographie  du gabon par province / dans chaque province / pour chaque province", "parprovince")


manager.addAnswer("fr", "parprovince", `
<div class="container mt-5">
    <h5>Données démographiques du Gabon par province</h5>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Province</th>
          <th>Population</th>
          <th>Superficie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Estuaire</td>
          <td>895,689 habitants</td>
          <td>20,740 km²</td>
        </tr>
        <tr>
          <td>Haut-Ogooué</td>
          <td>250,799 habitants</td>
          <td>36,547 km²</td>
        </tr>
        <tr>
          <td>Ogooué-Maritime</td>
          <td>157,562 habitants</td>
          <td>22,890 km²</td>
        </tr>
        <tr>
          <td>Woleu-Ntem</td>
          <td>154,986 habitants</td>
          <td>38,465 km²</td>
        </tr>
        <tr>
          <td>Ngounié</td>
          <td>100,838 habitants</td>
          <td>37,750 km²</td>
        </tr>
        <tr>
          <td>Moyen-Ogooué</td>
          <td>69,287 habitants</td>
          <td>18,535 km²</td>
        </tr>
        <tr>
          <td>Ogooué-Lolo</td>
          <td>65,771 habitants</td>
          <td>25,380 km²</td>
        </tr>
        <tr>
          <td>Ogooué-Ivindo</td>
          <td>63,293 habitants</td>
          <td>46,075 km²</td>
        </tr>
        <tr>
          <td>Nyanga</td>
          <td>52,854 habitants</td>
          <td>21,285 km²</td>
        </tr>
      </tbody>
    </table>
  </div>
`)

manager.addAnswer(
  "fr",
  "population_urbaine",
  "La population urbaine du Gabon est de 813 098 personnes."
);
manager.addAnswer(
  "fr",
  "population_rurale",
  "La population rurale du Gabon est de 764 548 personnes."
);
manager.addAnswer(
  "fr",
  "tranches_age",
  "La population totale varie selon les tranches d'âge."
);
manager.addAnswer(
  "fr",
  "tranche_age_00_04",
  "La catégorie des 00-04 ans compte 213 725 personnes."
);
manager.addAnswer(
  "fr",
  "tranche_age_80_plus",
  "Il y a une diminution progressive avec l'âge."
);
manager.addAnswer(
  "fr",
  "genre_masculin",
  "La population masculine totale est de 934 072 personnes."
);
manager.addAnswer(
  "fr",
  "genre_féminin",
  "La population féminine totale est de 877 007 personnes."
);
manager.addAnswer(
  "fr",
  "repartition_zone_residence",
  "Répartition par zone de résidence :"
);
manager.addAnswer("fr", "urbain_masculin", "Masculin : 813 098");
manager.addAnswer("fr", "urbain_féminin", "Féminin : 764 548");
manager.addAnswer("fr", "urbain_total", "Total : 1 577 646");
manager.addAnswer(
  "fr",
  "rural_masculin",
  "La population Masculin rurale est de : 120 974"
);
manager.addAnswer("fr", "rural_féminin", "Féminin : 112 459");
manager.addAnswer("fr", "rural_total", "Total : 233 433");

manager.addDocument(
  "fr",
  "Quelle est l'évolution démographique des provinces du Gabon depuis 1960 ?",
  "evolution_demographique"
);
manager.addDocument(
  "fr",
  "Donne-moi des informations sur la population des provinces / progression / évolution démographique du Gabon entre 1960 et 2013.",
  "evolution_demographique"
);
manager.addDocument(
  "fr",
  "Peux-tu me dire comment la population des provinces du Gabon a changé / évolué / progresser au fil du temps ?",
  "evolution_demographique"
);

// Ajouter une réponse associée à cette intention
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "L'effectif de la population de toutes les provinces du Gabon a sensiblement augmenté depuis 1960, avec des variations importantes entre les provinces. Entre 1960 et 2013, l’effectif de la population du Gabon a augmenté de 304 %. Pour plus de détails, veuillez fournir des informations spécifiques que vous souhaitez connaître."
);
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "Depuis 1960, il y a eu une augmentation significative de la population dans toutes les provinces du Gabon, avec des variations marquées d'une province à l'autre. L'effectif global a augmenté de 304% entre 1960 et 2013. Pour des détails spécifiques, veuillez préciser les informations que vous recherchez."
);
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "Toutes les provinces du Gabon ont connu une croissance démographique notable depuis 1960, mais les variations entre elles sont importantes. De 1960 à 2013, la population globale du Gabon a augmenté de 304%. Si vous avez des questions précises, n'hésitez pas à les poser pour obtenir plus de détails."
);
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "L'effectif de la population dans chacune des provinces du Gabon a enregistré une hausse significative depuis 1960, présentant toutefois des variations considérables entre les provinces. Entre 1960 et 2013, la population totale du Gabon a augmenté de 304%. Pour des informations spécifiques, veuillez indiquer vos préférences."
);
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "Depuis 1960, la population de toutes les provinces du Gabon a connu une augmentation substantielle, mais avec des différences marquées entre chaque province. Au cours de la période de 1960 à 2013, l'augmentation totale a atteint 304%. Si vous avez des demandes particulières, veuillez les spécifier pour obtenir des détails précis."
);
manager.addAnswer(
  "fr",
  "evolution_demographique",
  "Une croissance notable de la population a été enregistrée dans toutes les provinces du Gabon depuis 1960, mais les variations entre elles sont significatives. Entre 1960 et 2013, la population globale du Gabon a connu une augmentation de 304%. Pour des informations plus détaillées, veuillez préciser les éléments que vous souhaitez connaître."
);

manager.addDocument("fr", "Je ne comprends pas", "non_comprehension");
manager.addDocument("fr", "Peux-tu répéter ?", "non_comprehension");
manager.addDocument("fr", "Je n'ai pas saisi", "non_comprehension");
manager.addDocument("fr", "Que veux-tu dire par là ?", "non_comprehension");

manager.addAnswer(
  "fr",
  "non_comprehension",
  "Désolé si ma réponse était confuse. En résumé, la Direction Générale de la Statistique, selon le décret N° 00718/PR/MPAT du 31 mai 1983, est chargée de mesurer les indicateurs économiques, organiser les recensements de la population, et gérer les répertoires nationaux d'identification."
);

// Document pour les coordonnées de contact
manager.addDocument("fr", "Coordonnées de contact", "coordonnees_contact");
manager.addDocument(
  "fr",
  "Comment contacter l'Institut National de la Statistique / DGS du Gabon ?",
  "coordonnees_contact"
);
manager.addDocument("fr", "Téléphone et e-mail / email", "coordonnees_contact");
manager.addDocument("fr", "Informations de contact", "coordonnees_contact");

manager.addDocument("fr", "contact", "coordonnees_contact");
manager.addDocument("fr", "numéro téléphone", "coordonnees_contact");

// Réponses pour les coordonnées de contact
manager.addAnswer(
  "fr",
  "coordonnees_contact",
  "Vous pouvez contacter DGS aux numéros de téléphone suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Vous pouvez également les joindre par fax au (+241) 720457. Pour les questions par e-mail, utilisez <a href='mailto:contact@instatgabon.org'>contact@instatgabon.org</a>."
);
manager.addAnswer(
  "fr",
  "coordonnees_contact",
  "Les coordonnées de contact de Direction Générale de la Statistique / DGS sont les suivantes : Tél : (+241) 01720455 | 01721369 | 76 06 71, Fax : (+241) 720457, E-mail : <a href='mailto:contact@instatgabon.org'>contact@instatgabon.org</a>."
);
manager.addAnswer(
  "fr",
  "coordonnees_contact",
  "Pour entrer en contact avec Direction Générale de la Statistique / DGS, vous pouvez les appeler aux numéros suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Leur fax est le (+241) 720457, et l'e-mail de contact est <a href='mailto:contact@instatgabon.org'>contact@instatgabon.org</a>."
);
manager.addAnswer(
  "fr",
  "coordonnees_contact",
  "Les coordonnées de Direction Générale de la Statistique / DGS incluent les numéros de téléphone : (+241) 01720455, (+241) 01721369, (+241) 760671. Le fax est le (+241) 720457, et l'adresse e-mail de contact est <a href='mailto:contact@instatgabon.org'>contact@instatgabon.org</a>"
);
manager.addAnswer(
  "fr",
  "coordonnees_contact",
  "Si vous avez besoin de contacter Direction Générale de la Statistique / DGS, vous pouvez le faire en utilisant les numéros suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Le fax est également disponible au (+241) 720457, et l'e-mail de contact est <a href='mailto:contact@instatgabon.org'>contact@instatgabon.org</a>"
);

// Document pour l'emplacement de l'Institut National de la Statistique du Gabon
manager.addDocument("fr", "Où est situé ?", "localisation_instat");
manager.addDocument("fr", "Adresse ", "localisation_instat");
manager.addDocument("fr", "Emplacement de DGS", "localisation_instat");
manager.addDocument("fr", "Donnez-moi l'adresse ", "localisation_instat");

// Réponses pour l'emplacement de l'Institut National de la Statistique du Gabon
manager.addAnswer(
  "fr",
  "localisation_instat",
  "Direction Générale de la Statistique est situé à Libreville, Gabon, à l'adresse B.P: 2119,OLOUMI Immeuble ancienne Planification."
);
manager.addAnswer(
  "fr",
  "localisation_instat",
  "Vous trouverez l'Institut National de la Statistique du Gabon à l'adresse B.P: 2119,OLOUMI Immeuble ancienne Planification, Libreville (Gabon)."
);
manager.addAnswer(
  "fr",
  "localisation_instat",
  "Direction Générale de la Statistique / DGS se situe à l'adresse B.P: 2119, Immeuble ancienne Planification, Libreville (Gabon)."
);
manager.addAnswer(
  "fr",
  "localisation_instat",
  "L'adresse de l'Institut National de la Statistique du Gabon est B.P: 2119, OLOUMI Immeuble ancienne Planification, Libreville (Gabon)."
);
manager.addAnswer(
  "fr",
  "localisation_instat",
  "Direction Générale de la Statistique / DGS se trouve à B.P: 2119, OLOUMI Immeuble ancienne Planification, Libreville (Gabon)."
);

// Document pour répondre à la question "Vous êtes où ?"
manager.addDocument("fr", "Vous êtes où ?", "emplacement_instat");
manager.addDocument("fr", "Où est bureau ?", "emplacement_instat");
manager.addDocument("fr", "Localisation de institution", "emplacement_instat");

// Réponses pour la question "Vous êtes où ?"
manager.addAnswer(
  "fr",
  "emplacement_instat",
  "L'Institut National de la Statistique du Gabon est situé à Libreville, Gabon, à l'adresse B.P: 2119, Immeuble ancienne Planification OLOUMI, "
);
manager.addAnswer(
  "fr",
  "emplacement_instat",
  "Notre institution est située à Libreville, Gabon, à l'adresse B.P: 2119, OLOUMI Immeuble ancienne Planification."
);
manager.addAnswer(
  "fr",
  "emplacement_instat",
  "Le bureau de Direction Générale de la Statistique / DGS est localisé à Libreville, Gabon, à l'adresse B.P: 2119, OLOUMI, Immeuble ancienne Planification."
);
// (async () => {
//     await manager.train();
//     manager.save();
// })();

// (async () => {
//     const response = await manager.process('fr', 'Bonjour');
//     console.log(response);

// })();

manager.train().then(async () => {
  manager.save();

  const defaultMessages = [
    "Désolé, je ne saisis pas bien votre demande. Pouvez-vous reformuler? 😅",
    "Excusez-moi, je n'ai pas compris votre question. Pourriez-vous la reformuler, s'il vous plaît? 🤔",
    "Oh non, je n'ai pas tout à fait compris. Pourriez-vous reformuler votre demande? 🔄",
    "Mes excuses, votre question me pose problème. Pouvez-vous la reformuler, s'il vous plaît? 🙇‍♂️",
    "Oops, ça ne sonne pas clair pour moi. Pourriez-vous reformuler votre question? 🤷‍♂️",
    "Je suis désolé, la compréhension de votre demande me pose problème. Pouvez-vous la reformuler? 🤖",
    "Oups, quelque chose ne va pas avec ma compréhension. Pouvez-vous reformuler votre question? 🔄",
    "Pardon, je n'ai pas bien saisi. Pouvez-vous reformuler votre question? 🧐",
    "Hmm, je suis perplexe. Pourriez-vous reformuler votre demande, s'il vous plaît? 🔄",
    "Désolé, mais je ne parviens pas à comprendre. Pouvez-vous reformuler votre question? 🤨"
  ];

  const defaulQuestion = [
    "Qui est le pésident du Gabon",
    "Qui est le chef de la dgs",
    "La population du Gabon en 2013",
    "Quelle est la Localisation de institution",
    "Quelle est notre Adresse",
    "Emplacement de DGS",
    "Quelle est la population du Gabon",
    "Téléphone et e-mail",
    "Peux-tu me dire comment la population des provinces du Gabon a changé au fil du temps ?",
   " Donne-moi des informations sur la population des provinces / progression / évolution démographique du Gabon entre 1960 et 2013",
   "Quelle est l'évolution démographique des provinces du Gabon depuis 1960 ?",
   "population rurale féminine?",
   "population rurale complète",
   "Quelle est la les fonctions de la DGS?",
   "Quelles sont Les missions de la DGS",
   "Explique moi la DGS", 
   "Quelle est la mission de la DGS ?",
   "Parle-moi de la DGS / Direction Générale Statistique?",
   "Quelle est La progression de DGS au fil du temps ?",
   "Qui est le directeur général adjoint de la DGS ?",
   "Qui est le directeur général / chef / responsable de la DGS / Direction Générale des statistiques ?",
   "les actions prioritaires pour améliorer les conditions de vie ?",
   "Les ménages au Gabon comptent-ils davantage sur leur voisinage que sur les associations religieuses en cas de difficulté ?",
   "les ménages s’attendent-ils à recevoir de l’aide en période difficile ",
   "Pourquoi la participation associative a-t-elle diminué au Gabon ?",
   "Pourquoi l’accès à l’eau courante et à l’électricité est-il si important au Gabon ?",
   "Quelles sont les besoins minimums pour une vie correcte ?",
   "l’instabilité du revenu est-il plus prononcée  en milieu rural / campagne / village ?",
   "Quelle est la perception de la pauvreté au Gabon",
   "Comment les gens voient-ils la pauvreté ?",
   "La pauvreté au Gabon",
   "Tableau de la répartition des ménages",
   "Quels facteurs sont associés à la pauvreté?",
   "Les causes la pauvreté ?",
   "La perception  de la pauvreté a-t-elle changé ?",
   "Comment a évolué le niveau de vie au Gabon ?",
  "quel est le niveau de vie en milieu rural?",
  "Pourquoi le niveau de vie en milieu rural est plus dégradé ?",
  "Pourquoi le niveau de vie en région de Port-Gentil est plus dégradé ?"



  ]

  function getRandomDefaultQuestion() {
    const randomIndex = Math.floor(Math.random() * defaulQuestion.length);
    return defaulQuestion[randomIndex];}
  
  function getRandomDefaultMessage() {
    const randomIndex = Math.floor(Math.random() * defaultMessages.length);
    return defaultMessages[randomIndex];}

  

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });

  app.get("/bot", async (req, res) => {
    let response = await manager.process("fr", req.query.message);
    let botReponse = response.answer || getRandomDefaultMessage();

    res.json({
      bot: botReponse,
      moi: req.query.message,
      question1: getRandomDefaultQuestion(),
      question2: getRandomDefaultQuestion()
    });
  });

  console.log("http://localhost:3000/");
  app.listen(3000);
});


