function removeRandomLetter(word) {
    if (word.length <= 1) {
      return word;
    }
  
    const indexToRemove = Math.floor(Math.random() * word.length);
    return word.slice(0, indexToRemove) + word.slice(indexToRemove + 2);
  }
  
  function modifyString(inputString) {
    const words = inputString.split(' ');
  
    const modifiedWords = words.map(word => removeRandomLetter(word));
  
    return modifiedWords.join(' ');
  }
  
  const inputString = `Le traitement des données dont il est question ici concerne l’apurement. C’est une activité très
  délicate et qui a exigé qu’un manuel de contrôles de spécifications soit élaboré pour procéder à
  certains redressements des valeurs aberrantes ou d’invraisemblance, des incohérences et des
  omissions de réponses (telles que l’âge qui n’est souvent pas déclaré). Ces contrôles ont été fait par
  des programmes informatiques appliqués sur les données. Cette activité s’est poursuivie à travers
  un atelier -déconcentré des cadres du BCRGA hors de Libreville. Il s’est agi de faire des tris à plat
  sur des variables de la base des données afin de déceler les erreurs de couverture des questions.
  Ceci a porté à la fois sur la fiche de dénombrement et sur les questionnaires des modules centraux.
  Les tableaux de résultats ont permis aux analystes d’observer la configuration des différentes
  réponses obtenues pour chaque variable, de connaître le niveau de mesure de la variable (ordinal,
  nominale ou quantitative) ou la distribution des différentes valeurs obtenues (nombre et
  pourcentage de cas saisis, de réponses valides, de réponses manquantes, de réponses inattendues
  ou aberrantes, etc.). Cela a permis non seulement de décider quoi corriger, recoder, redresser ou
  supprimer, et de comment procéder, mais aussi de déterminer les seuils de tolérance du pourcentage
  de non réponses au-delà desquels, une méthode de correction automatique a été appliquée.
  Ceci a permis d’avoir une base de données stabilisée pour faciliter son exploitation à des fins
  d’analyse. Les principaux logiciels d’analyse et de traitement statistique utilisés sont SPSS, STATA
  et Excel.
  La validation des données a été faite de façon collégiale par les cadres du BCRGA avec l’appui des
  deux consultants de la FAO. Pour l’édition des tableaux, un plan de tabulation a été élaboré
  conformément aux objectifs du RGA. Afin de s’assurer de la non distorsion des données après `;
  const modifiedString = modifyString(inputString);
  
  console.log("Phrase d'origine:", inputString);
  console.log("Phrase modifiée:", modifiedString);