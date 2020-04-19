//Перемещение компонента
function Deplace_Objet() {
  var Objet = '';
  var Pour = 0,
    Pour2 = 0,
    Pour3 = 0;
  var Lax = 0,
    Lay = 0;
  var dx = 0,
    dy = 0;
  var mypoint = '';

 // Objet = 'Toutsaufcanal';
  //PetitMenu('#A6CAF0', '<Переместить>  Выбор компонента ?');
  //Pointe_Objet(Objet, Pour, '#0000FF');
  
  Pour = Celui_La2;
  Objet = Objet2;


  if (Objet == 'Rien') {
    Redess(false);
    return false;
  }

  Lax = 150;
  Lay = 150;

  if (Objet == 'Un_Cap') { if ([Et, Ou, Inhibition].includes(Capteur[Pour].Modele)) { Objet = 'Une_Cellule' } }

  PetitMenu('#A6CAF0', '<Переместить>  Укажите новую позицию ?');
  //GetCursorPos(MyPoint);
  //SetCursorPos(Math.round((mypoint.X) / Facteur), Math.round((mypoint.Y) / Facteur));
  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;

  if (Objet == 'Un_V') { if (Verin[Pour].Modele = 'Double_V') { Immonde_rustine_double_v = true } }
  if (Objet == 'Un_Cap') { if (Capteur[Pour].Modele = 'A_Galet_V') { Immonde_rustine_galet_v = true } }
  //Ou_Que(Lax, Lay, false, Objet);
  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;
  if (Objet == 'Ouste') { return false }
  dx = 0;
  dy = 0;

  switch (Objet) {
    case 'Un_Cap':
    case 'Une_Cellule':
      Objet = 'Un_Cap';
      dx = Lax - Capteur[Pour].X;
      dy = Lay - Capteur[Pour].Y;
      Capteur[Pour].X = Capteur[Pour].X + dx;
      Capteur[Pour].Y = Capteur[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) {
        Capteur[Pour].ExtX[Pour2] = Capteur[Pour].ExtX[Pour2] + dx;
        Capteur[Pour].ExtY[Pour2] = Capteur[Pour].ExtY[Pour2] + dy;
      }
      break;

    case 'Un_Sequenceur':
      dx = Lax - Sequenceur[Pour].X;
      dy = Lay - Sequenceur[Pour].Y;
      Sequenceur[Pour].X = Sequenceur[Pour].X + dx;
      Sequenceur[Pour].Y = Sequenceur[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) {
        Sequenceur[Pour].ExtX[Pour2] = Sequenceur[Pour].ExtX[Pour2] + dx;
        Sequenceur[Pour].ExtY[Pour2] = Sequenceur[Pour].ExtY[Pour2] + dy;
      }
      break;

    case 'Un_V':
      dx = Lax - Verin[Pour].X;
      dy = Lay - Verin[Pour].Y;
      Verin[Pour].X = Verin[Pour].X + dx;
      Verin[Pour].Y = Verin[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
        Verin[Pour].EntreeX[Pour2] = Verin[Pour].EntreeX[Pour2] + dx;
        Verin[Pour].EntreeY[Pour2] = Verin[Pour].EntreeY[Pour2] + dy;
      }
      break;

    case 'Un_D':
      dx = Lax - Distributeur[Pour].X;
      dy = Lay - Distributeur[Pour].Y;
      Distributeur[Pour].X = Distributeur[Pour].X + dx;
      Distributeur[Pour].Y = Distributeur[Pour].Y + dy;
      for (let Pour2 = -1; Pour2 <= 5; Pour2++) {
        Distributeur[Pour].ExtX[Pour2] = Distributeur[Pour].ExtX[Pour2] + dx;
        Distributeur[Pour].ExtY[Pour2] = Distributeur[Pour].ExtY[Pour2] + dy;
      }
      Commande[Distributeur[Pour].Com[1].Laquelle].X = Commande[Distributeur[Pour].Com[1].Laquelle].X + dx;
      Commande[Distributeur[Pour].Com[1].Laquelle].Y = Commande[Distributeur[Pour].Com[1].Laquelle].Y + dy;
      Commande[Distributeur[Pour].Com[2].Laquelle].X = Commande[Distributeur[Pour].Com[2].Laquelle].X + dx;
      Commande[Distributeur[Pour].Com[2].Laquelle].Y = Commande[Distributeur[Pour].Com[2].Laquelle].Y + dy;
      break;

    case 'Un_texte':
      dx = Lax - Math.round(Texte[Pour].X);
      dy = Lay - Math.round(Texte[Pour].Y);
      Texte[Pour].X = Texte[Pour].X + dx;
      Texte[Pour].Y = Texte[Pour].Y + dy;
      break;

    case 'Une_Alim':
      dx = Lax - Math.round(AliMentation[Pour].X);
      dy = Lay - Math.round(AliMentation[Pour].Y);
      AliMentation[Pour].X = AliMentation[Pour].X + dx;
      AliMentation[Pour].Y = AliMentation[Pour].Y + dy;
      break;

    case 'Une_Alim_pilote':
      dx = Lax - Math.round(Alim_Pilote[Pour].X);
      dy = Lay - Math.round(Alim_Pilote[Pour].Y);
      Alim_Pilote[Pour].X = Alim_Pilote[Pour].X + dx;
      Alim_Pilote[Pour].Y = Alim_Pilote[Pour].Y + dy;
      break;

    case 'Un_Carrefour':
      dx = Lax - Math.round(Carrefour[Pour].X);
      dy = Lay - Math.round(Carrefour[Pour].Y);
      Carrefour[Pour].X = Carrefour[Pour].X + dx;
      Carrefour[Pour].Y = Carrefour[Pour].Y + dy;
      break;

    case 'Un_Carrefour_pilote':
      dx = Lax - Math.round(Carrefour_Pilote[Pour].X);
      dy = Lay - Math.round(Carrefour_Pilote[Pour].Y);
      Carrefour_Pilote[Pour].X = Carrefour_Pilote[Pour].X + dx;
      Carrefour_Pilote[Pour].Y = Carrefour_Pilote[Pour].Y + dy;
      break;

    case 'Une_Memoire':
      dx = Lax - Memoire[Pour].X;
      dy = Lay - Memoire[Pour].Y;
      Memoire[Pour].X = Memoire[Pour].X + dx;
      Memoire[Pour].Y = Memoire[Pour].Y + dy;
      for (let Pour2 = 1; Pour <= 4; Pour2++) {
        Memoire[Pour].ExtX[Pour2] = Memoire[Pour].ExtX[Pour2] + dx;
        Memoire[Pour].ExtY[Pour2] = Memoire[Pour].ExtY[Pour2] + dy;
      }
      break;
  }

  for (let Pour2 = 1; Pour2 <= Nb_Canal; Pour2++) {
    for (let Pour3 = 1; Pour3 <= 2; Pour3++) {
      if (Canal[Pour2].Bout[Pour3].Quoi == Objet) {
        if (Canal[Pour2].Bout[Pour3].Lequel == Pour) {
          if (Pour3 == 2) {
            if (Canal[Pour2].nbpoint == 2) {
              Canal[Pour2].NbPoint = 3;
              Canal[Pour2].parcoursx[3] = Canal[Pour2].parcoursx[2];
              Canal[Pour2].Parcoursy[3] = Canal[Pour2].Parcoursy[2];
              Canal[Pour2].parcoursx[2] = (Canal[Pour2].parcoursx[1] + Canal[Pour2].parcoursx[3]) / 2;
              Canal[Pour2].parcoursy[2] = (Canal[Pour2].parcoursy[1] + Canal[Pour2].parcoursy[3]) / 2;
            }

            if ((Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 2]))) {
              Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx;
              Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
              Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint];
            } else {
              if ((Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 2]))) {
                Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx;
                Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
                Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint];
                Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 2];
              } else {
                if ((Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 2]))) {
                  Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx;
                  Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
                  Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint];
                } else {
                  if ((Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 2]))) {
                    Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx;
                    Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
                    Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint];
                  }
                }
              }
            }
          } else if (Pour3 == 1) {
            if (Canal[Pour2].nbpoint == 2) {
              Canal[Pour2].NbPoint = 3;
              Canal[Pour2].parcoursx[3] = Canal[Pour2].parcoursx[2];
              Canal[Pour2].Parcoursy[3] = Canal[Pour2].Parcoursy[2];
              Canal[Pour2].parcoursx[2] = (Canal[Pour2].parcoursx[1] + Canal[Pour2].parcoursx[3]) / 2;
              parcoursy[2] = (parcoursy[1] + parcoursy[3]) / 2;
            }

            if ((Math.round(Canal[Pour2].parcoursy[1]) == Math.round(Canal[Pour2].Parcoursy[2])) && (Math.round(Canal[Pour2].parcoursx[2]) == Math.round(Canal[Pour2].Parcoursx[3]))) {
              Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx;
              Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
              Canal[Pour2].Parcoursy[2] = Canal[Pour2].Parcoursy[1];
            } else {
              if ((Math.round(Canal[Pour2].parcoursx[1]) == Math.round(Canal[Pour2].Parcoursx[2])) && (Math.round(Canal[Pour2].parcoursx[2]) == Math.round(Canal[Pour2].Parcoursx[3]))) {
                Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx;
                Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
                Canal[Pour2].Parcoursy[2] = Canal[Pour2].Parcoursy[3];
                Canal[Pour2].Parcoursx[2] = Canal[Pour2].Parcoursx[1];
              } else {
                if ((Math.round(Canal[Pour2].parcoursx[1]) == Math.round(Canal[Pour2].Parcoursx[2])) && (Math.round(Canal[Pour2].parcoursy[2]) == Math.round(Canal[Pour2].Parcoursy[3]))) {
                  Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx;
                  Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
                  Canal[Pour2].Parcoursx[2] = Canal[Pour2].Parcoursx[1];
                } else {
                  if ((Math.round(Canal[Pour2].parcoursy[1]) == Math.round(Canal[Pour2].Parcoursy[2])) && (Math.round(Canal[Pour2].parcoursy[2]) == Math.round(Canal[Pour2].Parcoursy[3]))) {
                    Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx;
                    Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
                    Canal[Pour2].Parcoursx[2] = Canal[Pour2].Parcoursx[1];
                  }
                }
              }
            }
          }
        }
      }
    }
  }





  for (let Pour2 = 1; Pour2 <= Nb_Canal_Pilote; Pour2++) {
    for (let Pour3 = 1; Pour3 <= 2; Pour3++) {
      if (Canal_Pilote[Pour2].Bout[Pour3].Quoi == Objet) {
        if (Canal_Pilote[Pour2].Bout[Pour3].Lequel == Pour) {
          if (Pour3 == 2) {
            if (Canal_Pilote[Pour2].nbpoint == 2) {
              Canal_Pilote[Pour2].NbPoint = 3;
              Canal_Pilote[Pour2].parcoursx[3] = Canal_Pilote[Pour2].parcoursx[2];
              Canal_Pilote[Pour2].Parcoursy[3] = Canal_Pilote[Pour2].Parcoursy[2];
              Canal_Pilote[Pour2].parcoursx[2] = (Canal_Pilote[Pour2].parcoursx[1] + Canal_Pilote[Pour2].parcoursx[3]) / 2;
              Canal_Pilote[Pour2].parcoursy[2] = (Canal_Pilote[Pour2].parcoursy[1] + Canal_Pilote[Pour2].parcoursy[3]) / 2;
            }

            if ((Math.round(Canal_Pilote[Pour2].parcoursy[Canal_Pilote[Pour2].nbPoint]) == Math.round(Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].NbPoint - 1])) && (Math.round(Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].nbPoint - 1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].NbPoint - 2]))) {
              Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] + dx;
              Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] + dy;
              Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint - 1] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint];
            } else {
              if ((Math.round(Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].nbPoint]) == Math.round(Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].NbPoint - 1])) && (Math.round(Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].nbPoint - 1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].NbPoint - 2]))) {
                Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] + dx;
                Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] + dy;
                Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint - 1] = Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint];
                Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint - 1] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint - 2];
              } else {
                if ((Math.round(Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].nbPoint]) == Math.round(Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].NbPoint - 1])) && (Math.round(Canal_Pilote[Pour2].parcoursy[Canal_Pilote[Pour2].nbPoint - 1]) == Math.round(Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].NbPoint - 2]))) {
                  Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] + dx;
                  Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] + dy;
                  Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint - 1] = Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint];
                } else {
                  if ((Math.round(Canal_Pilote[Pour2].parcoursy[Canal_Pilote[Pour2].nbPoint]) == Math.round(Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].NbPoint - 1])) && (Math.round(Canal_Pilote[Pour2].parcoursy[Canal_Pilote[Pour2].nbPoint - 1]) == Math.round(Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].NbPoint - 2]))) {
                    Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].parcoursx[Canal_Pilote[Pour2].Nbpoint] + dx;
                    Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] = Canal_Pilote[Pour2].Parcoursy[Canal_Pilote[Pour2].Nbpoint] + dy;
                    Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint - 1] = Canal_Pilote[Pour2].Parcoursx[Canal_Pilote[Pour2].Nbpoint];
                  }
                }
              }
            }
          } else {
            if (Pour3 == 1) {
              if (Canal_Pilote[Pour2].nbpoint == 2) {
                Canal_Pilote[Pour2].NbPoint = 3;
                Canal_Pilote[Pour2].parcoursx[3] = Canal_Pilote[Pour2].parcoursx[2];
                Canal_Pilote[Pour2].Parcoursy[3] = Canal_Pilote[Pour2].Parcoursy[2];
                Canal_Pilote[Pour2].parcoursx[2] = (Canal_Pilote[Pour2].parcoursx[1] + Canal_Pilote[Pour2].parcoursx[3]) / 2;
                Canal_Pilote[Pour2].parcoursy[2] = (Canal_Pilote[Pour2].parcoursy[1] + Canal_Pilote[Pour2].parcoursy[3]) / 2;
              }

              if ((Math.round(Canal_Pilote[Pour2].parcoursy[1]) == Math.round(Canal_Pilote[Pour2].Parcoursy[2])) && (Math.round(Canal_Pilote[Pour2].parcoursx[2]) == Math.round(Canal_Pilote[Pour2].Parcoursx[3]))) {
                Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx;
                Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                Canal_Pilote[Pour2].Parcoursy[2] = Canal_Pilote[Pour2].Parcoursy[1];
              } else {
                if ((Math.round(Canal_Pilote[Pour2].parcoursx[1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[2])) && (Math.round(Canal_Pilote[Pour2].parcoursx[2]) == Math.round(Canal_Pilote[Pour2].Parcoursx[3]))) {
                  Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx;
                  Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                  Canal_Pilote[Pour2].Parcoursy[2] = Canal_Pilote[Pour2].Parcoursy[3];
                  Canal_Pilote[Pour2].Parcoursx[2] = Canal_Pilote[Pour2].Parcoursx[1];
                } else {
                  if ((Math.round(Canal_Pilote[Pour2].parcoursx[1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[2])) && (Math.round(Canal_Pilote[Pour2].parcoursy[2]) == Math.round(Canal_Pilote[Pour2].Parcoursy[3]))) {
                    Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx;
                    Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                    Canal_Pilote[Pour2].Parcoursx[2] = Canal_Pilote[Pour2].Parcoursx[1];
                  } else {
                    if ((Math.round(Canal_Pilote[Pour2].parcoursy[1]) == Math.round(Canal_Pilote[Pour2].Parcoursy[2])) && (Math.round(Canal_Pilote[Pour2].parcoursy[2]) == Math.round(Canal_Pilote[Pour2].Parcoursy[3]))) {
                      Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx;
                      Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                      Canal_Pilote[Pour2].Parcoursx[2] = Canal_Pilote[Pour2].Parcoursx[1];
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
}