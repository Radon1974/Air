
//Стереть канал
function Efface_Canal(Celui_La2) {  //
  var Pour = 0;
  for (let Pour = Celui_La2; Pour <= Nb_Canal - 1; Pour++) {
    Canal[Pour] = Canal[Pour + 1];
    Nb_Canal--;
  }
}

//Стереть канал пилота
function Efface_Canal_Pilote(Celui_La2) {  //
  var Pour = 0;
  for (let Pour = Celui_La2; Pour <= Nb_Canal_Pilote - 1; Pour++) {
    Canal_Pilote[Pour] = Canal_Pilote[Pour + 1];
    Nb_Canal_Pilote--;
  }
}

//Стереть
function Effacer() {  //
  var Pour = 0;
  
  var Pour2 = 0;
  //var Pointe_Quoi = '';
  var On_Efface = false;

  //var Celui_La = 1;
  //while (true) {

    //PetitMenu(clolive, '<Очистить> Правая кнопка = Назад');  //Перенесено
    //Pointe_Quoi = 'Tout';   //Перенесено
    //Pointe_Objet(Pointe_Quoi, Celui_La, clolive);  //Перенесено
    Pointe_Quoi = Objet2;
    if (Pointe_Quoi == 'Rien') { return false }
    if (['Une_Alim', 'Un_Carrefour', 'Un_D', 'Un_V'].includes(Pointe_Quoi)) {
      Pour = 1;
      while (Pour <= Nb_Canal) {
        On_Efface = false;
        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal[Pour].Bout[Pour2].Quoi == Pointe_Quoi) {
            if (Canal[Pour].Bout[Pour2].Lequel == Celui_La2) { On_Efface = true }
            if (Canal[Pour].Bout[Pour2].Lequel > Celui_La2) { Canal[Pour].Bout[Pour2].Lequel = (Canal[Pour].Bout[Pour2].Lequel - 1) }
          }
        }
        if (On_Efface) { Efface_Canal(Pour) } else { Pour++ }
      }
    }

    if (['Une_Alim_Pilote', 'Un_Carrefour_Pilote', 'Un_Cap', 'Un_D', 'Une_Memoire', 'Un_Sequenceur'].includes(Pointe_Quoi)) {

      Pour = 1;
      while (Pour <= Nb_Canal_Pilote) {
        On_Efface = false;
        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal_Pilote[Pour].Bout[Pour2].Quoi == Pointe_Quoi) {
            if (Canal_Pilote[Pour].Bout[Pour2].Lequel == Celui_La2) { On_Efface = true }
            if (Canal_Pilote[Pour].Bout[Pour2].Lequel > Celui_La2) { Canal_Pilote[Pour].Bout[Pour2].Lequel = (Canal_Pilote[Pour].Bout[Pour2].Lequel - 1) };
          }
        }
        if (On_Efface) { Efface_Canal_Pilote(Pour) } else { Pour++ }
      }
    }

    if (Pointe_Quoi == 'Un_Canal') {
      Efface_Canal(Celui_La2);
    } else {
      if (Pointe_Quoi == 'Un_Canal_Pilote') {
        Efface_Canal_Pilote(Celui_La2)
      } else {
        if (Pointe_Quoi == 'Un_Cap') {
          for (let Pour = Celui_La2; Pour <= Nb_Capteur - 1; Pour++) { Capteur[Pour] = Capteur[Pour + 1] }
          Nb_Capteur--;
        } else {
          if (Pointe_Quoi == 'Un_Sequenceur') {
            for (let Pour = Celui_La2; Pour <= Nb_Sequenceur - 1; Pour++) { Sequenceur[Pour] = Sequenceur[Pour + 1] }
            Nb_Sequenceur--;
          } else {
            if (Pointe_Quoi == 'Une_Memoire') {
              for (let Pour = Celui_La2; Pour <= Nb_Memoire - 1; Pour++) { Memoire[Pour] = Memoire[Pour + 1] }
              Nb_Memoire--;
            } else {
              if (Pointe_Quoi == 'Un_D') {
                for (let Pour = Celui_La2; Pour <= Nb_Distributeur - 1; Pour++) { Distributeur[Pour] = Distributeur[Pour + 1] }
                Nb_Distributeur--;
              } else {
                if (Pointe_Quoi == 'Un_V') {
                  for (let Pour = Celui_La2; Pour <= Nb_Verin - 1; Pour++) { Verin[Pour] = Verin[Pour + 1] }
                  Nb_Verin--;
                } else {
                  if (Pointe_Quoi == 'Une_Alim') {
                    for (let Pour = Celui_La2; Pour <= Nb_Alimentation - 1; Pour++) { AliMentation[Pour] = AliMentation[Pour + 1] }
                    Nb_Alimentation--;
                  } else {
                    if (Pointe_Quoi == 'Une_Alim_Pilote') {
                      for (let Pour = Celui_La2; Pour <= Nb_Alim_Pilote - 1; Pour++) { Alim_Pilote[Pour] = Alim_Pilote[Pour + 1] }
                      Nb_Alim_Pilote--;
                    } else {
                      if (Pointe_Quoi == 'Un_Carrefour') {
                        for (let Pour = Celui_La2; Pour <= Nb_Carrefour - 1; Pour++) { Carrefour[Pour] = Carrefour[Pour + 1] }
                        Nb_Carrefour--;
                      } else {
                        if (Pointe_Quoi = 'Un_Texte') {
                          for (let Pour = Celui_La2; Pour <= Nb_Texte - 1; Pour++) { Texte[Pour] = Texte[Pour + 1] }
                          Nb_Texte--;
                        } else {
                          if (Pointe_Quoi == 'Un_Carrefour_Pilote') {
                            for (let Pour = Celui_La2; Pour <= Nb_Carrefour_Pilote - 1; Pour++) { Carrefour_Pilote[Pour] = Carrefour_Pilote[Pour + 1] }
                            Nb_Carrefour_Pilote--;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    Redess(false);
  //}
}

