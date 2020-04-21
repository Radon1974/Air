//Перемещение по оси X
function Decah(Combien) {
    var Pour = 0, Pour2 = 0;
  
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal[Pour].ParcoursX[Pour2] = Canal[Pour].ParcoursX[Pour2] + Combien } }
    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal_Pilote[Pour].ParcoursX[Pour2] = Canal_Pilote[Pour].ParcoursX[Pour2] + Combien } }
  
    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
      Capteur[Pour].X = Capteur[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Capteur[Pour].ExtX[Pour2] = Capteur[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { AliMentation[Pour].X = AliMentation[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Alim_Pilote[Pour].X = Alim_Pilote[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Carrefour[Pour].X = Carrefour[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Carrefour_Pilote[Pour].X = Carrefour_Pilote[Pour].X + Combien }
  
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
      Verin[Pour].X = Verin[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Verin[Pour].EntreeX[Pour2] = Verin[Pour].EntreeX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
      Sequenceur[Pour].X = Sequenceur[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) { Sequenceur[Pour].ExtX[Pour2] = Sequenceur[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
      Memoire[Pour].X = Memoire[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Memoire[Pour].ExtX[Pour2] = Memoire[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
      Distributeur[Pour].X = Distributeur[Pour].X + Combien;
      for (let Pour2 = -1; Pour2 <= 5; Pour2++) (Distributeur[Pour].ExtX[Pour2] = Distributeur[Pour].ExtX[Pour2] + Combien)
    }
  
    for (let Pour = 1; Pour <= Nb_Commande; Pour++) { Commande[Pour].X = Commande[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Texte[Pour].X = Texte[Pour].X + Combien }
  }
  
  //Перемещение по оси Y
  function Decav(Combien) {
    var Pour = 0, Pour2 = 0;
    
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal[Pour].ParcoursY[Pour2] = Canal[Pour].ParcoursY[Pour2] + Combien } }
    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal_Pilote[Pour].ParcoursY[Pour2] = Canal_Pilote[Pour].ParcoursY[Pour2] + Combien } }
  
    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
      Capteur[Pour].Y = Capteur[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Capteur[Pour].ExtY[Pour2] = Capteur[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { AliMentation[Pour].Y = AliMentation[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Alim_Pilote[Pour].Y = Alim_Pilote[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Carrefour[Pour].Y = Carrefour[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Carrefour_Pilote[Pour].Y = Carrefour_Pilote[Pour].Y + Combien }
  
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
      Verin[Pour].Y = Verin[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Verin[Pour].EntreeY[Pour2] = Verin[Pour].EntreeY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
      Sequenceur[Pour].Y = Sequenceur[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) { Sequenceur[Pour].ExtY[Pour2] = Sequenceur[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
      Memoire[Pour].Y = Memoire[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Memoire[Pour].ExtY[Pour2] = Memoire[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
      Distributeur[Pour].Y = Distributeur[Pour].Y + Combien;
      for (let Pour2 = -1; Pour2 <= 5; Pour2++) { Distributeur[Pour].ExtY[Pour2] = Distributeur[Pour].ExtY[Pour2] + Combien } 
    }
  
    for (let Pour = 1; Pour <= Nb_Commande; Pour++) { Commande[Pour].Y = Commande[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Texte[Pour].Y = Texte[Pour].Y + Combien }
  }

//Минимальный
function Minimumh() {
    var Pour = 0;
    var mini = 10000;
    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { if (Capteur[Pour].X < mini) { mini = Capteur[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { if (AliMentation[Pour].X < mini) { mini = AliMentation[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { if (Alim_Pilote[Pour].X < mini) { mini = Alim_Pilote[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { if (Carrefour[Pour].X < mini) { mini = Carrefour[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { if (Carrefour_Pilote[Pour].X < mini) { mini = Carrefour_Pilote[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) { if (Verin[Pour].X < mini) { mini = Verin[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) { if (Distributeur[Pour].X < mini) { mini = Distributeur[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Memoire; Pour++) { if (Memoire[Pour].X < mini) { mini = Memoire[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { if (Sequenceur[Pour].X < mini) { mini = Sequenceur[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { if (Texte[Pour].X < mini) { mini = Texte[Pour].X } }
    
    return mini;
  }


  //Минимальный
function Minimumv() {
    var Pour = 0;
    var mini = 10000;
    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { if (Capteur[Pour].Y < mini) { mini = Capteur[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { if (AliMentation[Pour].Y < mini) { mini = AliMentation[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { if (Alim_Pilote[Pour].Y < mini) { mini = Alim_Pilote[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { if (Carrefour[Pour].Y < mini) { mini = Carrefour[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { if (Carrefour_Pilote[Pour].Y < mini) { mini = Carrefour_Pilote[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) { if (Verin[Pour].Y < mini) { mini = Verin[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) { if (Distributeur[Pour].Y < mini) { mini = Distributeur[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Memoire; Pour++) { if (Memoire[Pour].Y < mini) { mini = Memoire[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { if (Sequenceur[Pour].Y < mini) { mini = Sequenceur[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { if (Texte[Pour].Y < mini) { mini = Texte[Pour].Y } }

    return mini;
  }

