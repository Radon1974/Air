
//Обработчик событий мыши
/*canvas.addEventListener('mouseup', function (g) {
  if (event.which == 3) {
    Droite = false;
  }
  else {
    Gauche = false
  }

  mouse.x = g.pageX - this.offsetLeft;
  mouse.y = g.pageY - this.offsetTop;
  X_s = mouse.x;
  Y_s = mouse.y;

});*/

//Обнуление
function Raz() {
  //var i = 1,k = 1;
  for (let i = 1; i <= Nb_Canal; i++) { Canal[i].Etat = Zero }
  for (let i = 1; i <= Nb_Distributeur; i++) { for (let k = -1; k <= 5; k++) { Distributeur[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Memoire; i++) { for (let k = 1; k <= 4; k++) { Memoire[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Sequenceur; i++) { for (let k = 1; k <= 22; k++) { Sequenceur[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Canal_Pilote; i++) { Canal_Pilote[i].Etat = Bof }
  for (let i = 1; i <= Nb_Capteur; i++) { for (let k = 1; k <= 3; k++) { Capteur[i].Etat_Ext[k] = Bof } }
  for (let i = 1; i <= Nb_Verin; i++) { for (let k = 1; k <= 2; k++) { Verin[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Carrefour; i++) { Carrefour[i].Etat = Zero }
  for (let i = 1; i <= Nb_Carrefour_Pilote; i++) { Carrefour_Pilote[i].Etat = Bof }
}

//Старый обнуление
function Raz_Vieux() {
  Vieux_Nb_Verin = 0;
  Vieux_Nb_Distributeur = 0;
  Vieux_Nb_Capteur = 0;
  Vieux_Nb_Alim = 0;
  Vieux_Nb_Alim_Pilote = 0;
  Vieux_Nb_Carrefour_Pilote = 0;
  Vieux_Nb_Carrefour = 0;
  Vieux_Nb_Commande = 0;
  Vieux_Nb_Canal_Pilote = 0;
  Vieux_Nb_Canal = 0;
  Vieux_Nb_Memoire = 0;
  Vieux_Nb_Sequenceur = 0;
}

//Большое обнуление
function Super_Raz() {
  //var Pour = 1, K = 1;
  Raz_Vieux();
  Nb_Verin = 0;
  Nb_Distributeur = 0;
  Nb_Commande = 0;
  Nb_Canal = 0;
  Nb_Canal_Pilote = 0;
  Nb_Alimentation = 0;
  Nb_Capteur = 0;
  Nb_Alim_Pilote = 0;
  Nb_Carrefour = 0;
  Nb_Carrefour_Pilote = 0;
  Nb_Memoire = 0;
  Nb_Sequenceur = 0;
  Nb_Texte = 0;
  for (let Pour = 1; Pour <= Max_Canal; Pour++) {
    for (let K = 1; K <= 2; K++) {
      Canal[Pour].Etat = Zero;
      Canal[Pour].Bout[K].Quoi = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Max_Canal_Pilote; Pour++) {
    for (let K = 1; K <= 2; K++) {
      Canal_Pilote[Pour].Etat = Bof;
      Canal_Pilote[Pour].Bout[K].Quoi = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Max_Distributeur; Pour++) { for (let K = -1; K <= 5; K++) { Distributeur[Pour].Etat_Ext[K] = 0 } }
  for (let Pour = 1; Pour <= Max_Capteur; Pour++) { Capteur[Pour].Etat = 0 }
  Raz();
}

//Отображение времени
function Affiche_Temps(X, Y, Go) { //X,Y - координаты
  var dim = 18;
  var h = 0, m = 0;
  // var heure = 0;

  //heure = frac(time) * 24;
  h = hours; //h = round(int(heure));
  m = minutes; //m = round((frac(heure) * 60));
  if (h >= 12) (h = h - 12);
  if ((h != Heur) || (m != Minute) || Go) {
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Heur = h;
    Minute = m;
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Cercle(X, Y, dim + 2);
    NPave(X, Y, '#008000');
  }
}



//*************Рисование элементов пневматики*************

//Отображение пружины горизонтальной
function Affiche_Ressort(X, Y, XFin, Hauteur, Droite) {
  intervalle = (XFin - X) / 3;
  if (Droite) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (var Pour = 0; Pour < 3; Pour++) {
    Ligne(X + Signe * Pour * intervalle, Y - Hauteur / 2, X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2);
    Ligne(X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2, X + Signe * (Pour + 1) * intervalle, Y - Hauteur / 2);
  }
}

//Отображение пружины вертикальной
function Affiche_Ressort_Vertical(X, Y, YFin, Largeur, Bas) {
  intervalle = (YFin - Y) / 3;
  if (Bas) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (let Pour = 0; Pour < 3; Pour++) {
    Ligne(X - Largeur / 2, Y + Signe * Pour * intervalle, X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle);
    Ligne(X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle, X - Largeur / 2, Y + Signe * (Pour + 1) * intervalle);
  }
}

//Создать секвенсер
function Cree_Sequenceur(XE, YE, Combien_Etape) { //XE,YE - координаты, Combien_Etape - 
  //var Pour = 0;

  Nb_Sequenceur++;

  Sequenceur[Nb_Sequenceur].X = XE;
  Sequenceur[Nb_Sequenceur].Y = YE;
  Sequenceur[Nb_Sequenceur].Combien = Combien_Etape;

  for (let Pour = 1; Pour <= 8; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X + (Pour - 1 / 4) * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtX[Pour + 8] = Sequenceur[Nb_Sequenceur].ExtX[Pour];
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + 5 / 4 * SLargeur - SLargeur / 2;
    Sequenceur[Nb_Sequenceur].ExtY[Pour + 8] = Sequenceur[Nb_Sequenceur].Y - 1 / 4 * SLargeur - SLargeur / 2;
  }
  for (let Pour = 17; Pour <= 20; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X - 1 / 4 * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + (Pour - 16) * SLargeur / 5 - SLargeur / 2;
  }

  Sequenceur[Nb_Sequenceur].ExtX[21] = Sequenceur[Nb_Sequenceur].X + (Sequenceur[Nb_Sequenceur].Combien + 3 / 4) * SLargeur;
  Sequenceur[Nb_Sequenceur].ExtX[22] = Sequenceur[Nb_Sequenceur].ExtX[21];
  Sequenceur[Nb_Sequenceur].ExtY[21] = Sequenceur[Nb_Sequenceur].ExtY[17];
  Sequenceur[Nb_Sequenceur].ExtY[22] = Sequenceur[Nb_Sequenceur].ExtY[20];
  Sequenceur[Nb_Sequenceur].Etat = 0;
}

//Отображение состояния секвенсера
function Affiche_Etat_Sequenceur(Numero) { //Numero - номер
  //var Pour = 0;

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    if (Pour == Sequenceur[Numero].Etat) {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#000000')
    }
    else {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#FFFFFF')
    }
  }
}

//Отображение секвенсера
function Affiche_Sequenceur(Numero, Blanc) { //Numero - номер, Blanc - отображать или нет
  //var Pour = 0;
  var XX = 0;
  var YY = 0;

  //if SVG then form1.memo1.lines.Add('<g>');

  Couleur('#000000');
  Rect(Sequenceur[Numero].X, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 2);
  Rect(Sequenceur[Numero].X + Sequenceur[Numero].Combien * SLargeur + SLargeur / 4, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 2 + Sequenceur[Numero].Combien * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    Rect(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);
    XX = Sequenceur[Numero].X + 3 * SLargeur / 4 + (Pour - 1) * SLargeur;
    Ligne(XX, Sequenceur[Numero].Y + SLargeur / 2, XX, Sequenceur[Numero].Y + SLargeur / 2 + SLargeur / 4);
    Ligne(XX, Sequenceur[Numero].Y - SLargeur / 2, XX, Sequenceur[Numero].Y - SLargeur / 2 - SLargeur / 4);
    Pointille(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y + SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y - SLargeur / 2);
  }

  for (let Pour = 1; Pour <= 4; Pour++) {
    YY = Pour * SLargeur / 5 - SLargeur / 2;
    Ligne(Sequenceur[Numero].X, Sequenceur[Numero].Y + YY, Sequenceur[Numero].X - SLargeur / 4, Sequenceur[Numero].Y + YY);
  }

  XX = SLargeur / 2 + SLargeur * Sequenceur[Numero].Combien;
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2);
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2);

  Affiche_Etat_Sequenceur(Numero);
  Couleur('#000000');
  //if SVG then form1.memo1.lines.Add('</g>');
}



//Создать гидроцилиндр
function Cree_Verin(XX, YY, Model) { //XX - координата  X, YY - координата Y, Model - тип гидроцилиндра
  Nb_Verin++;

  Verin[Nb_Verin].X = XX;
  Verin[Nb_Verin].Y = YY;
  if (Model != 'Double_V') {
    Verin[Nb_Verin].EntreeX[1] = XX + L_Bout / 2;
    Verin[Nb_Verin].EntreeY[1] = YY + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeX[2] = XX - L_Bout / 2 + VLargeur;
    Verin[Nb_Verin].EntreeY[2] = YY + VHauteur / 2 + VCanal;
  } else {
    Verin[Nb_Verin].EntreeX[1] = XX + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeY[1] = YY - L_Bout / 2;
    Verin[Nb_Verin].EntreeX[2] = XX + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeY[2] = YY + L_Bout / 2 - VLargeur;
  }
  Verin[Nb_Verin].Tige = 2;
  Verin[Nb_Verin].Modele = Model;
}

//Отображение гидроцилиндра
function Affiche_Verin(Numero, C, Blanc) {  //Numero - номер гидроцилиндра, C - цвет, Blanc - отображать или нет
  var Coul = '';

  //Отображение гидроцилиндра
  function Affiche_Simple(Amortissement) {
    var Amor = 0;

    if (Amortissement) { Amor = VAmor } else { Amor = 0 }

    //With Verin[Numero] Do

    //if !SVG then

    if (Verin[Numero].Modele != 'Double_V') {
      ctx.setLineDash([5, 3]);
      Rect(Verin[Numero].X + (Maxtige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Maxtige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      Rect(Verin[Numero].X + (Mintige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Mintige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      ctx.setLineDash([]);
      Ligne(Verin[Numero].X, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y + VHauteur / 2);
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y - VHauteur / 2);
    } else {
      ctx.setLineDash([5, 3]);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Maxtige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Maxtige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Mintige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Mintige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      ctx.setLineDash([]);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur);
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y, Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - VLargeur);
    }

    if (Verin[Numero].Modele != 'Double_V') {
      Ligne(Verin[Numero].X + VLargeur, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y - VH_Tige);
      Ligne(Verin[Numero].X + VLargeur, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y + VH_Tige);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + L_Bout, Verin[Numero].Y + VHauteur / 2);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y - Amor, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - Amor / 5, Verin[Numero].Y + Amor);
      Rect(Verin[Numero].X + Verin[Numero].Tige * L_Bout, Verin[Numero].Y - Amor, Verin[Numero].X + Verin[Numero].Tige * L_Bout + Amor / 5, Verin[Numero].Y + Amor);
      Rect(Verin[Numero].X + Verin[Numero].Tige * L_Bout + Amor / 5, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y + VH_Tige);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      Ligne(Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2 + VCanal);
      Ligne(Verin[Numero].X + VLargeur - L_Bout / 2, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
    } else {
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - VLargeur, Verin[Numero].X - VH_Tige, Verin[Numero].Y - VLargeur);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur, Verin[Numero].X + VH_Tige, Verin[Numero].Y - VLargeur);
      Rect(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - L_Bout);
      Rect(Verin[Numero].X - VH_Tige, Verin[Numero].Y - Verin[Numero].Tige * L_Bout - Amor / 5, Verin[Numero].X + VH_Tige, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - L_Bout);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - L_Bout / 2, Verin[Numero].X + VHauteur / 2 + VCanal, Verin[Numero].Y - L_Bout / 2);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur + L_Bout / 2, Verin[Numero].X + VHauteur / 2 + VCanal, Verin[Numero].Y + L_Bout / 2 - VLargeur);
    }

  }

  //  if SVG then form1.memo1.lines.Add('<g>');
  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный




  switch (Verin[Numero].Modele) {
    case 'Simple':
    case 'Double2':
    case 'Double_A':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Affiche_Simple(Verin[Numero].Modele == 'Double_A');
      if (Verin[Numero].Modele == 'Simple') {
        Triangle(Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
      }
      break;

    case 'Simple_R':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Affiche_Simple(false);
      Affiche_Ressort(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + L_Bout, Verin[Numero].Y, Verin[Numero].X + VLargeur, VHauteur / 1.5, A_Droite);
      Triangle(Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'R_Simple':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Verin[Numero].Tige = 11 - Verin[Numero].Tige;
      Affiche_Simple(false);
      Affiche_Ressort(Verin[Numero].X, Verin[Numero].Y, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, VHauteur / 1.5, A_Droite);
      Verin[Numero].Tige = 11 - Verin[Numero].Tige;
      Triangle(Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'Double_T':
    case 'Double_T_A':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y - VH_Tige);
      Ligne(Verin[Numero].X, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VH_Tige);
      Affiche_Simple(Verin[Numero].Modele == 'Double_T_A');
      if (Verin[Numero].Modele == 'Double_T_A') {
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VAmor / 5, Verin[Numero].Y + VH_Tige);
      } else {
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y + VH_Tige);
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - L_Bout - VL_Tige, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y + VH_Bout);
      }
      break;

    case 'Double_V':
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y);
      Affiche_Simple(Verin[Numero].Modele == 'Double_A');
      break;

  }

  if (!Blanc) {
    if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF0000' }

    NPavepetit(Verin[Numero].EntreeX[1], Verin[Numero].EntreeY[1], Coul);
    if (Verin[Numero].Modele == 'Double2' || Verin[Numero].Modele == 'Double_V') {
      NPavepetit(Verin[Numero].EntreeX[2], Verin[Numero].EntreeY[2], Coul)
    }
  }

  Couleur('#FFFFFF');
  //  if SVG then form1.memo1.lines.Add('</g>');

}





//Создать комманду
function Cree_Commande(XX, YY, Model) {
  Nb_Commande++;
  Commande[Nb_Commande].X = XX;
  Commande[Nb_Commande].Y = YY;
  Commande[Nb_Commande].Modele = Model;
}

//Отобразить комманду
function Affiche_Commande(Numero, C, Blanc, Deca, Etat) { //Numero - номер команды, C - цвет, Blanc - отображать или нет, Deca - смещение, Etat - 0 или 1
  var Largeur = 0, Z = 0;

  //Отобразить Левый толкатель
  function Affiche_Poussoir_Gauche() {
    Ligne(Z, Commande[Numero].Y - VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y - VHauteur / 8);
    Ligne(Z, Commande[Numero].Y + VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 8);
    Ligne(Z - Largeur / 6, Commande[Numero].Y - VHauteur / 6, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 6);
    Arc_De_Cercle(Z - Largeur / 6, Commande[Numero].Y, 270, 90, VHauteur / 6);
  }

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный

  Z = Commande[Numero].X + Deca;
  switch (Commande[Numero].Modele) {
    case 'Scie_Droite': //Прямая пила
      Largeur = 4 / 5 * DLargeur;
      Ligne(Z, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      break;
    case 'Poussoir_Gauche': //Левый Толкатель
      Largeur = VLargeur;
      Affiche_Poussoir_Gauche();
      break;
    case 'Ressort_Droit':  //Прямая Пружина
      Largeur = DLargeur / 2;
      if (Etat == 1) { Affiche_Ressort(Z, Commande[Numero].Y, Z + 2 * Largeur, VHauteur / 4, A_Droite) }
      else { Affiche_Ressort(Z, Commande[Numero].Y, Z + Largeur / 2, VHauteur / 4, A_Droite) }
      break;
    case 'Pilote_Gauche':  //Левый Пилот
      Rect(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      break;
    case 'Pilote_Droit':  //Правый Пилот
      Rect(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      break;
  }

  Couleur('#000000'); //Черный
}




//Создать память
function Cree_Memoire(XC, YC, L_Etat) {  //XC,YC - координаты, L_Etat - 0 или 1
  Nb_Memoire++;
  Memoire[Nb_Memoire].X = XC;
  Memoire[Nb_Memoire].Y = YC;
  Memoire[Nb_Memoire].Etat = L_Etat;
  Memoire[Nb_Memoire].ExtX[1] = Memoire[Nb_Memoire].X - Dmemoire * 5 / 4;
  Memoire[Nb_Memoire].ExtY[1] = Memoire[Nb_Memoire].Y + 1 / 4 * Dmemoire;
  Memoire[Nb_Memoire].ExtX[2] = Memoire[Nb_Memoire].ExtX[1];
  Memoire[Nb_Memoire].ExtY[2] = Memoire[Nb_Memoire].Y + 3 / 4 * Dmemoire;
  Memoire[Nb_Memoire].ExtX[3] = Memoire[Nb_Memoire].X + Dmemoire * 5 / 4;
  Memoire[Nb_Memoire].ExtY[3] = Memoire[Nb_Memoire].ExtY[1];
  Memoire[Nb_Memoire].ExtX[4] = Memoire[Nb_Memoire].X;
  Memoire[Nb_Memoire].ExtY[4] = Memoire[Nb_Memoire].Y + 5 / 4 * Dmemoire;
}

//Отобразить память
function Affiche_Memoire(Numero, C, Blanc) {  //Numero номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var Pour = 0;

  //if SVG then form1.memo1.lines.Add('<g>');
  Couleur(C);

  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  Rect(Memoire[Numero].X - Dmemoire, Memoire[Numero].Y, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire);
  Pointille(Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire / 2, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire / 2);
  Ligne(Memoire[Numero].X - Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire / 4, Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire / 4);
  Ligne(Memoire[Numero].X + Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire / 4, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire / 4);
  Ligne(Memoire[Numero].X - Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire * 3 / 4, Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire * 3 / 4);
  Ligne(Memoire[Numero].X, Memoire[Numero].Y + Dmemoire, Memoire[Numero].X, Memoire[Numero].Y + Dmemoire * 5 / 4);

  if (!Blanc) { for (let Pour = 1; Pour <= 4; Pour++) { NPavepetit(Memoire[Numero].ExtX[Pour], Memoire[Numero].ExtY[Pour], Coul) } }
  if (Memoire[Numero].Etat == 1) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Memoire[Numero].X + Dmemoire / 2, Memoire[Numero].Y + 3 / 4 * Dmemoire, Coul);
  if (Memoire[Numero].Etat == 2) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Memoire[Numero].X + Dmemoire / 2, Memoire[Numero].Y + 1 / 4 * Dmemoire, Coul);

  Couleur('#000000'); //Черный
  //if SVG then form1.memo1.lines.Add('</g>');
}







//Создать датчик
function Cree_Capteur(XC, YC, Modelec, L_Etat) {  //XC,YC - координаты, Modelec - модель, L_Etat - 1 (несжата) или 2 (сжата)
  Nb_Capteur++;
  Capteur[Nb_Capteur].X = XC;
  Capteur[Nb_Capteur].Y = YC;
  if (Modelec != 'A_Galet_V') {

    switch (Modelec) {
      case 'Et':
      case 'Ou':
      case 'Inhibition':
        Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X - 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 1 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].ExtX[1];
        Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].Y + 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].X + 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].ExtY[2];
        break;
      default:
        Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X - CLargeur / 2;
        Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 5 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].ExtX[1];
        Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].Y + 7 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].X + CLargeur / 2;
        Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].ExtY[2];
    }

  }
  else {
    Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X + 5 / 4 * CLargeur;
    Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 1 / 2 * CLargeur;
    Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].X + 7 / 4 * CLargeur;
    Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].ExtY[1];
    Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].ExtX[2];
    Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].Y - 1 / 2 * CLargeur;
  }
  Capteur[Nb_Capteur].Modele = Modelec;
  Capteur[Nb_Capteur].Etat = L_Etat;
}

//Отобразить датчик
function Affiche_Capteur(Numero, C, Blanc) {  //Numero- номер, C - цвет, Blanc - true или false
  var Decay = 0;
  //Остановка
  function Stop(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + CLargeur / 5, Y);
    Ligne(X + CLargeur / 5, Y + CLargeur / 7, X + CLargeur / 5, Y - CLargeur / 7);
  }
  //Остановка вертикальная
  function Stop_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - CLargeur / 5);
    Ligne(X + CLargeur / 7, Y - CLargeur / 5, X - CLargeur / 7, Y - CLargeur / 5);
  }
  //Высокий толкатель
  function Poussoir_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 6, Y - DLargeur / 3, X - DLargeur / 6, Y - DLargeur / 3);
    Arc_De_Cercle(X, Y - DLargeur / 3, 0, 180, DLargeur / 6);
  }
  //Низкий толкатель
  function Poussoir_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 6, Y - DLargeur / 6, X - DLargeur / 6, Y - DLargeur / 6);
    Arc_De_Cercle(X, Y - DLargeur / 6, 0, 180, DLargeur / 6);
  }
  //Высокий ролик
  function Galet_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 12);
  }
  //Высокий Ролик вертикальный
  function Galet_Haut_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y + DLargeur / 11, X - DLargeur / 3, Y + DLargeur / 11);
    Ligne(X, Y - DLargeur / 11, X - DLargeur / 3, Y - DLargeur / 11);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 6);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 12);
  }
  //Высокий толкатель
  function Galet_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 12);
  }
  //Квадратный
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X - CLargeur / 2, Y, X + CLargeur / 2, Y + CLargeur);
  }
  //Левый квадрат
  function Carre_Gauche(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 - 1 / 8) * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 + 1 / 8) * CLargeur);
    Stop(X - CLargeur / 2, Y + 1 / 4 * CLargeur);
  }
  //Правый квадрат
  function Carre_Droite(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 4, Y + 1 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 3, Y + (1 / 4 + 1 / 5) * CLargeur);
    Stop(X - CLargeur / 2, Y + 3 / 4 * CLargeur);
  }
  //Пила
  function Scie(X, Y) {  //X,Y - координаты
    Ligne(X - CLargeur / 10, Y, X - CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X - CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 3 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 3 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X + CLargeur / 10, Y);
  }
  //Изменение шрифта
  function Change_taille() {
    if (Facteur > 2.6) { ctx.font = "bold 48pt Arial" }
    else {
      if (Facteur > 1.9) { ctx.font = "bold 24pt Arial" }
      else {
        if (Facteur >= 1) { ctx.font = "bold 16pt Arial" }
      }
    }
  }
  //Клетка
  function Cellule_Et(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 3), '&');
    ctx.font = "bold 8pt Arial";
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  //Замедление клетки
  function Cellule_Inhibition(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 3), '&');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2 - CLargeur / 5, Y + 3 / 4 * CLargeur);
    Cercle(X - CLargeur / 2 - CLargeur / 10, Y + 3 / 4 * CLargeur, CLargeur / 10);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  function Cellule_Ou(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur * 2 / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2 + 2, Y + CLargeur * 2 / 3 + 2, X - CLargeur / 4 + 2, Y + CLargeur / 2 + 2);
    Otxy(Math.round(X - CLargeur / 4 + 4), Math.round(Y + CLargeur / 3), '1');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }


  //if SVG then form1.memo1.lines.Add('<g>');
  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  switch (Capteur[Numero].Modele) {

    case 'Inhibition': Cellule_Inhibition(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    case 'Et': Cellule_Et(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    case 'Ou': Cellule_Ou(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    default:
      if (Capteur[Numero].Modele != 'A_Galet_V') {
        if (Capteur[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Carre_Gauche(Capteur[Numero].X, Capteur[Numero].Y + Decay);
        Carre_Droite(Capteur[Numero].X, Capteur[Numero].Y + CLargeur + Decay);

        if ((Capteur[Numero].Modele == 'A_Poussoir') || (Capteur[Numero].Modele == 'A_Poussoir_Bistable')) { Poussoir_Haut(Capteur[Numero].X, Capteur[Numero].Y + Decay) }
        else { Galet_Haut(Capteur[Numero].X, Capteur[Numero].Y + Decay) }

        if (Capteur[Numero].Modele == 'A_Poussoir_Bistable') { Scie(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay) }
        else {
          if (Capteur[Numero].Etat == 1) { Affiche_Ressort_Vertical(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay, Capteur[Numero].Y + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
          else { Affiche_Ressort_Vertical(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay, Capteur[Numero].Y + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
        }
      }
      else {
        if (Capteur[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Rect(Capteur[Numero].X + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Rect(Capteur[Numero].X + CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + CLargeur + CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Galet_Haut_V(Capteur[Numero].X + Decay, Capteur[Numero].Y);
        Stop_V(Capteur[Numero].X + CLargeur / 4 + Decay, Capteur[Numero].Y + CLargeur / 2);
        Stop_V(Capteur[Numero].X + CLargeur + 3 * CLargeur / 4 + Decay, Capteur[Numero].Y + CLargeur / 2);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + (3 / 4 + 1 / 8) * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 4);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + (3 / 4 - 1 / 8) * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 4);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + 7 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 4);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + (5 / 4 + 1 / 5) * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 3);

        if (Capteur[Numero].Etat == 1) { Affiche_Ressort(Capteur[Numero].X + 2 * CLargeur + Decay, Capteur[Numero].Y, Capteur[Numero].X + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
        else { Affiche_Ressort(Capteur[Numero].X + 2 * CLargeur + Decay, Capteur[Numero].Y, Capteur[Numero].X + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
      }
      break;
  }
  Couleur('#000000');
  //if SVG then form1.memo1.lines.Add('</g>');
}






//Создать автомат
function Cree_Distributeur(XC, YC, Modelec, Commande1, Commande2, L_Etat) {
  //XC,YC - координаты, Modelec - модель, Commande1,Commande2 - тип толкателя, L_Etat - 
  Nb_Distributeur++;
  Distributeur[Nb_Distributeur].X = XC;
  Distributeur[Nb_Distributeur].Y = YC;

  switch (Modelec) {
    case '_4_3':
    case '_5_3':
      Distributeur[Nb_Distributeur].ExtX[-1] = XC - DLargeur / 2 - DLargeur;
      Distributeur[Nb_Distributeur].ExtX[0] = XC + 4 * DLargeur + DLargeur / 2;
      break;
    default:
      Distributeur[Nb_Distributeur].ExtX[-1] = XC - DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[0] = XC + 3 * DLargeur + DLargeur / 2;
  }

  Distributeur[Nb_Distributeur].ExtY[-1] = YC;
  Distributeur[Nb_Distributeur].ExtY[0] = YC;

  Distributeur[Nb_Distributeur].ExtX[2] = Distributeur[Nb_Distributeur].X + 9 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[2] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
  Distributeur[Nb_Distributeur].ExtX[3] = Distributeur[Nb_Distributeur].X + 9 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[3] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;
  Distributeur[Nb_Distributeur].ExtX[4] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[4] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;

  switch (Modelec) {
    case '_3_2':
    case '_4_2':
    case '_4_3':
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      break;
    case '_5_2':
    case '_5_3':
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      break;
    case '_2_2':
    case '_2_2_':
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].ExtX[1];
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[4] = Distributeur[Nb_Distributeur].ExtX[1];
      Distributeur[Nb_Distributeur].ExtY[4] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;
      break;
  }

  Distributeur[Nb_Distributeur].Modele = Modelec;
  Distributeur[Nb_Distributeur].Etat = L_Etat;

  Cree_Commande(Distributeur[Nb_Distributeur].X, Distributeur[Nb_Distributeur].Y, Commande1);
  Commande[Nb_Commande].Etat = L_Etat;
  Distributeur[Nb_Distributeur].Com[1].Quoi = Commande1;
  Distributeur[Nb_Distributeur].Com[1].Laquelle = Nb_Commande;
  if ((Modelec == '_4_3') || (Modelec == '_5_3')) {
    Cree_Commande(Distributeur[Nb_Distributeur].X + 3 * DLargeur, Distributeur[Nb_Distributeur].Y, Commande2)
  }
  else {
    Cree_Commande(Distributeur[Nb_Distributeur].X + 2 * DLargeur, Distributeur[Nb_Distributeur].Y, Commande2)
  }
  Commande[Nb_Commande].Etat = L_Etat;
  Distributeur[Nb_Distributeur].Com[2].Quoi = Commande2;
  Distributeur[Nb_Distributeur].Com[2].Laquelle = Nb_Commande;
}
//Отобразить автомат
function Affiche_Distributeur(Numero, C, Blanc) {
  //Numero - номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var XDeca = 0;
  //Стрелка вверх
  function Fleche_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y - DLargeur, X - DLargeur / 20, Y - DLargeur + DLargeur / 5);
    Ligne(X, Y - DLargeur, X + DLargeur / 20, Y - DLargeur + DLargeur / 5);
  }
  //Стрелка вниз
  function Fleche_Bas(X, Y) {  //X,Y - координаты
    //Опорная точка ниже
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y, X - DLargeur / 20, Y - 0.2 * DLargeur);
    Ligne(X, Y, X + DLargeur / 20, Y - 0.2 * DLargeur);
  }
  //Квадрат
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X, Y - DLargeur / 2, X + DLargeur, Y + DLargeur / 2);
  }
  //Площадь Высокий Низкий
  function Carre_Haut_Bas(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
  }
  //Стоп Низкий
  function Stop_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur / 5);
    Ligne(X - DLargeur / 10, Y - DLargeur / 5, X + DLargeur / 10, Y - DLargeur / 5);
  }
  //Стоп Высокий
  function Stop_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y + DLargeur / 5);
    Ligne(X - DLargeur / 10, Y + DLargeur / 5, X + DLargeur / 10, Y + DLargeur / 5);
  }
  //Косая стрелка вниз
  function Fleche_Oblique_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.6 * DLargeur, Y + DLargeur);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y + DLargeur - DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.43 * DLargeur, Y + 0.9 * DLargeur);
  }
  //Косая стрелка вверх
  function Fleche_Oblique_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.60 * DLargeur, Y - DLargeur);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.43 * DLargeur, Y - 0.9 * DLargeur);
  }
  //Площадь Вверх Стоп
  function Carre_Haut_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Stop_Bas(X + DLargeur - DLargeur / 5, Y + DLargeur / 2);
  }
  //Квадратная стрелка
  function Carre_Fleche(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 2, Y + DLargeur / 2);
  }
  //Квадрат Стоп Стоп
  function Carre_Stop_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 2, Y + DLargeur / 2);
    Stop_Haut(X + DLargeur / 2, Y - DLargeur / 2);
  }
  //Квадрат Стоп Косой
  function Carre_Stop_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
  }
  //Квадрат Косой Косой
  function Carre_Oblique_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
    Fleche_Oblique_Haut(X + DLargeur / 5, Y + DLargeur / 2);
  }
  //Стрелка наполовину наклонная вверху справа
  function Fleche_Demi_Oblique_Haut_Droite(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.30 * DLargeur, Y - DLargeur);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.30 * DLargeur + DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Стрелка наполовину полукруглый верхний левый
  function Fleche_Demi_Oblique_Haut_Gauche(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X - 0.30 * DLargeur, Y - DLargeur);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.30 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Квадрат
  function Carre_1_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Droite(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат
  function Carre_2_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Gauche(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат 4 стоп
  function Carre4stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Haut(X + 0.2 * DLargeur, Y - DLargeur / 2);
    Stop_Haut(X + 0.8 * DLargeur, Y - DLargeur / 2);
  }
  //Квадрат 2 стрелки
  function Carre2fleches(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }


  //if SVG then form1.memo1.lines.Add('<g>');
  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  if (Distributeur[Numero].Etat == 1) { XDeca = 0 } else { if (Distributeur[Numero].Etat == 2) { XDeca = DLargeur } else { if (Distributeur[Numero].Etat == 3) { XDeca = -DLargeur } } }
  switch (Distributeur[Numero].Modele) {
    case '_3_2':
      Carre_Haut_Stop(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Stop_Oblique(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_2':
      Carre_2_5_2(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_1_5_2(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_3':
      Carre_2_5_2(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre2fleches(Distributeur[Numero].X + DLargeur + XDeca, Distributeur[Numero].Y);
      Carre_1_5_2(Distributeur[Numero].X + XDeca + DLargeur + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_2':
      Carre_Haut_Bas(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Oblique_Oblique(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_3':
      Carre_Haut_Bas(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre4stop(Distributeur[Numero].X + DLargeur + XDeca, Distributeur[Numero].Y);
      Carre_Oblique_Oblique(Distributeur[Numero].X + XDeca + 2 * DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_2_2':
      Carre_Stop_Stop(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Carre_Fleche(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      break;
    case '_2_2_':
      Carre_Stop_Stop(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Fleche(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      break;
  }
  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  if (!Blanc) { Couleur(Coul) } else { Couleur('#000000') }

  if ((Distributeur[Numero].Com[1].Quoi == 'Pilote_Gauche') || (Distributeur[Numero].Com[1].Quoi == 'Pilote_Droit')) {

    switch (Distributeur[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Distributeur[Numero].ExtX[-1], Distributeur[Numero].Y, Distributeur[Numero].ExtX[-1] + XDeca + DLargeur, Distributeur[Numero].Y);
        break;
      default:
        Ligne(Distributeur[Numero].ExtX[-1], Distributeur[Numero].Y, Distributeur[Numero].ExtX[-1] + XDeca, Distributeur[Numero].Y);
    }
  }

  if ((Distributeur[Numero].Com[2].Quoi == 'Pilote_Gauche') || (Distributeur[Numero].Com[2].Quoi == 'Pilote_Droit')) {

    switch (Distributeur[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Distributeur[Numero].ExtX[0] + XDeca - DLargeur, Distributeur[Numero].Y, Distributeur[Numero].ExtX[0], Distributeur[Numero].Y);
        break;
      default:
        Ligne(Distributeur[Numero].ExtX[0] - XDeca, Distributeur[Numero].Y, Distributeur[Numero].ExtX[0] - DLargeur, Distributeur[Numero].Y);
    }
  }

  Affiche_Commande(Distributeur[Numero].Com[1].Laquelle, C, Blanc, XDeca, Distributeur[Numero].Etat);
  Affiche_Commande(Distributeur[Numero].Com[2].Laquelle, C, Blanc, XDeca, Distributeur[Numero].Etat);

  Couleur(C);
  if ((Distributeur[Numero].Modele == '_4_3') || (Distributeur[Numero].Modele == '_5_3')) {
    if (Distributeur[Numero].Etat == 3) { Affiche_Ressort(Distributeur[Numero].X - DLargeur / 4 + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + XDeca, DLargeur / 4, true) }
    else { Affiche_Ressort(Distributeur[Numero].X - DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + XDeca, DLargeur / 4, true) }
    if (Distributeur[Numero].Etat == 2) { Affiche_Ressort(Distributeur[Numero].X + 3 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + 3 * DLargeur + DLargeur / 4 + XDeca, DLargeur / 4, true) }
    else { Affiche_Ressort(Distributeur[Numero].X + 3 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + 3 * DLargeur + DLargeur + XDeca, DLargeur / 4, true) }
  }

  Couleur('#000000');
  //if SVG then form1.memo1.lines.Add('</g>');
}






//Отобразить канал
function Affiche_Canal(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;
  ctx.lineWidth = 2; //Толщина линии 2

  if (!Blanc) { if (Canal[Numero].Etat == Un) { Couleur('#FF0000') } else { Couleur('#000000') } } else { Couleur('#000000') }
  Xe = Canal[Numero].ParcoursX[1];
  Ye = Canal[Numero].ParcoursY[1];
  console.log("Canal[Numero].NbPoint", Canal[Numero].NbPoint);
  console.log("Xe1",Xe,"Ye1",Ye); 
  console.log("Xe2",Canal[Numero].ParcoursX[2],"Ye2",Canal[Numero].ParcoursY[2]);
  for (let Pour = 2; Pour <= Canal[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, Canal[Numero].ParcoursX[Pour], Canal[Numero].ParcoursY[Pour]);
    Xe = Canal[Numero].ParcoursX[Pour];
    Ye = Canal[Numero].ParcoursY[Pour];
    
  }

  Couleur('#000000');
  ctx.lineWidth = 1; //Толщина линии 1
}

//Отобразить канал пилота
function Affiche_Canal_Pilote(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;

  if (!Blanc) {
    switch (Canal_Pilote[Numero].Etat) {
      case 0: Couleur('#000000');
        break;
      case 1: Couleur('#FF00FF');
        break;
      case 2: Couleur('#808080');
        break;
    }
  }
  Xe = Canal_Pilote[Numero].ParcoursX[1];
  Ye = Canal_Pilote[Numero].ParcoursY[1];
  for (let Pour = 2; Pour <= Canal_Pilote[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, Canal_Pilote[Numero].ParcoursX[Pour], Canal_Pilote[Numero].ParcoursY[Pour]);
    Xe = Canal_Pilote[Numero].ParcoursX[Pour];
    Ye = Canal_Pilote[Numero].ParcoursY[Pour];
  }

  Couleur('#000000');
}

//Отобразить питание
function Affiche_Alimentation(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(AliMentation[Numero].X, AliMentation[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(AliMentation[Numero].X, AliMentation[Numero].Y - 0.2, C) } else { NPavepetit(X, Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить питание пилота
function Affiche_Alim_Pilote(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y - 0.2, C) } else { NPavepetit(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить пересечение
function Affiche_Carrefour(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#FF0000' } else { Co = '#000000' }
  NPavepetit(Carrefour[Numero].X, Carrefour[Numero].Y, Co);
}

//Отобразить пересечение пилота
function Affiche_Carrefour_Pilote(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#800080' } else { Co = '#000000'; }
  NPavepetit(Carrefour_Pilote[Numero].X, Carrefour_Pilote[Numero].Y, Co);
}

//Отобразить текст
function Affiche_Texte(Numero, C) {  //
  Couleur(C);
  ctx.font = (Math.round(Texte[Numero].Lataille * 8 * Facteur) + 4) + 'px Arial'
  Otxy(Math.round(Texte[Numero].X), Math.round(Texte[Numero].Y - Texte[Numero].Lataille * 6 - 4), Texte[Numero].Le_Texte);
  ctx.font.height = (Math.round(8 * Facteur)) + 'px Arial';
  Couleur('#000000');
}


function Redessprinc(Blanc) {  // Отображение компонентов на экране
  var Pour = 0;
  ctx.font = '10px Arial'

  for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Affiche_Canal(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { Affiche_Canal_Pilote(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Verin; Pour++) { Affiche_Verin(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) { Affiche_Distributeur(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { Affiche_Capteur(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { Affiche_Alimentation(Pour, '#FF0000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Affiche_Alim_Pilote(Pour, '#800080', Blanc) }
  for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Affiche_Carrefour_Pilote(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Affiche_Carrefour(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Memoire; Pour++) { Affiche_Memoire(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { Affiche_Sequenceur(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Affiche_Texte(Pour, '#000000') }
console.log("Nb_Canal", Nb_Canal)
  ctx.font = '10px Arial'
}

function Redess(Blanc) {  //
  ClearDevice();
  Redessprinc(Blanc);
}

//Создание формы
function FormCreate() {  //Sender: TObject

  SVG = false;
  Pasapas = true;
  DoubleBuffered = true;
  Facteur = 1.1;
  Fichiermodifie = false;
  //Feuille = Form1.Image1.canvas;
  Heure = false;
  Super_Raz();
  /*if (ParamCount > 0) {

    NomdeFichier = changefileext(ParamStr(1), '.PWW');
    Lecturede(nomdefichier);
    form1.Caption = 'PFFF ' + ExtractFilename(NomdeFichier);
  }*/
  Redess(false);
  //SetLinemode(pmcopy);
  Compteursouris = 0;
  //MetaFile = TMetaFile.Create;
  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;
  //Button(); //Вывести кнопки 
}


function PetitMenu(couleur, s) {
  document.getElementById('placeForText').innerHTML = s;
  document.getElementById('placeForText').style.color = couleur;
  //form1.panel1.color:=couleur;form1.panel1.caption:=s;
  //ctx.fillStyle = couleur;
  //ctx.textAlign = "center";
  //ctx.font = "12px Verdana";
  //ctx.fillText(s, canvas.width/2, 50);
}

//Выход по нажатию правой кнопки мыши
function Cestfini() {  //
  //Actionencours = false;
  Redess(false);
  PetitMenu('#FFFFFF', 'Pfff');
  funcCursor('default'); //Курсор в виде стрелки
  Couleur('#000000');
  //Changemenu();
}












//Стереть канал
function Efface_Canal(Celui_La) {  //
  var Pour = 0;
  for (let Pour = Celui_La; Pour <= Nb_Canal - 1; Pour++) {
    Canal[Pour] = Canal[Pour + 1];
    Nb_Canal--;
  }
}

//Стереть канал пилота
function Efface_Canal_Pilote(Celui_La) {  //
  var Pour = 0;
  for (let Pour = Celui_La; Pour <= Nb_Canal_Pilote - 1; Pour++) {
    Canal_Pilote[Pour] = Canal_Pilote[Pour + 1];
    Nb_Canal_Pilote--;
  }
}

//Стереть
function Effacer() {  //
  var Pour = 0;
  var Celui_La = 0;
  var Pour2 = 0;
  var Pointe_Quoi = '';
  var On_Efface = false;

  var Celui_La = 1;
  while (true) {

    PetitMenu(clolive, '<Очистить> Правая кнопка = Назад');
    Pointe_Quoi = 'Tout';
    Pointe_Objet(Pointe_Quoi, Celui_La, clolive);

    if (Pointe_Quoi == 'Rien') { return false }
    if (['Une_Alim', 'Un_Carrefour', 'Un_D', 'Un_V'].includes(Pointe_Quoi)) {
      Pour = 1;
      while (Pour <= Nb_Canal) {
        On_Efface = false;
        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal[Pour].Bout[Pour2].Quoi == Pointe_Quoi) {
            if (Canal[Pour].Bout[Pour2].Lequel == Celui_La) { On_Efface = true }
            if (Canal[Pour].Bout[Pour2].Lequel > Celui_La) { Canal[Pour].Bout[Pour2].Lequel = (Canal[Pour].Bout[Pour2].Lequel - 1) }
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
            if (Canal_Pilote[Pour].Bout[Pour2].Lequel == Celui_La) { On_Efface = true }
            if (Canal_Pilote[Pour].Bout[Pour2].Lequel > Celui_La) { Canal_Pilote[Pour].Bout[Pour2].Lequel = (Canal_Pilote[Pour].Bout[Pour2].Lequel - 1) };
          }
        }
        if (On_Efface) { Efface_Canal_Pilote(Pour) } else { Pour++ }
      }
    }

    if (Pointe_Quoi == 'Un_Canal') {
      Efface_Canal(Celui_La);
    } else {
      if (Pointe_Quoi == 'Un_Canal_Pilote') {
        Efface_Canal_Pilote(Celui_La)
      } else {
        if (Pointe_Quoi == 'Un_Cap') {
          for (let Pour = Celui_La; Pour <= Nb_Capteur - 1; Pour++) { Capteur[Pour] = Capteur[Pour + 1] }
          Nb_Capteur--;
        } else {
          if (Pointe_Quoi == 'Un_Sequenceur') {
            for (let Pour = Celui_La; Pour <= Nb_Sequenceur - 1; Pour++) { Sequenceur[Pour] = Sequenceur[Pour + 1] }
            Nb_Sequenceur--;
          } else {
            if (Pointe_Quoi == 'Une_Memoire') {
              for (let Pour = Celui_La; Pour <= Nb_Memoire - 1; Pour++) { Memoire[Pour] = Memoire[Pour + 1] }
              Nb_Memoire--;
            } else {
              if (Pointe_Quoi == 'Un_D') {
                for (let Pour = Celui_La; Pour <= Nb_Distributeur - 1; Pour++) { Distributeur[Pour] = Distributeur[Pour + 1] }
                Nb_Distributeur--;
              } else {
                if (Pointe_Quoi == 'Un_V') {
                  for (let Pour = Celui_La; Pour <= Nb_Verin - 1; Pour++) { Verin[Pour] = Verin[Pour + 1] }
                  Nb_Verin--;
                } else {
                  if (Pointe_Quoi == 'Une_Alim') {
                    for (let Pour = Celui_La; Pour <= Nb_Alimentation - 1; Pour++) { AliMentation[Pour] = AliMentation[Pour + 1] }
                    Nb_Alimentation--;
                  } else {
                    if (Pointe_Quoi == 'Une_Alim_Pilote') {
                      for (let Pour = Celui_La; Pour <= Nb_Alim_Pilote - 1; Pour++) { Alim_Pilote[Pour] = Alim_Pilote[Pour + 1] }
                      Nb_Alim_Pilote--;
                    } else {
                      if (Pointe_Quoi == 'Un_Carrefour') {
                        for (let Pour = Celui_La; Pour <= Nb_Carrefour - 1; Pour++) { Carrefour[Pour] = Carrefour[Pour + 1] }
                        Nb_Carrefour--;
                      } else {
                        if (Pointe_Quoi = 'Un_Texte') {
                          for (let Pour = Celui_La; Pour <= Nb_Texte - 1; Pour++) { Texte[Pour] = Texte[Pour + 1] }
                          Nb_Texte--;
                        } else {
                          if (Pointe_Quoi == 'Un_Carrefour_Pilote') {
                            for (let Pour = Celui_La; Pour <= Nb_Carrefour_Pilote - 1; Pour++) { Carrefour_Pilote[Pour] = Carrefour_Pilote[Pour + 1] }
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
  }
}

//Создать питание
function Cree_Alimentation(Xe, Ye) {  //
  Nb_Alimentation++;
  AliMentation[Nb_Alimentation].X = Xe;
  AliMentation[Nb_Alimentation].Y = Ye;
}

//Создать питание пилота
function Cree_Alim_Pilote(Xe, Ye) {  //
  Nb_Alim_Pilote++;
  Alim_Pilote[Nb_Alim_Pilote].X = Xe;
  Alim_Pilote[Nb_Alim_Pilote].Y = Ye;
}

//Создать пересечение
function Cree_Carrefour(Xe, Ye) {  //
  Nb_Carrefour++;
  Carrefour[Nb_Carrefour].X = Xe;
  Carrefour[Nb_Carrefour].Y = Ye;
  Etat = Zero;
}

//Создать пересечение пилота
function Cree_Carrefour_Pilote(Xe, Ye) {  //
  Nb_Carrefour_Pilote++;
  Carrefour_Pilote[Nb_Carrefour_Pilote].X = Xe;
  Carrefour_Pilote[Nb_Carrefour_Pilote].Y = Ye;
  Etat = Bof;
}

//Отображение 
function Ou_Que(Old_X, Old_Y, Panoramique, Objet) {  //Old_X, Old_Y - координаты   Objet - выводимый объект
  var X = 0;
  var Y = 0;

  //Пересечение
  /*function Croix(X, Y) {  //
    var H = 0;
    var V = 0;
    var H2 = 0;
    var H3 = 0;
    var V2 = 0;

    //setlinemode(pmnot);
    if (!Panoramique) {
      V = Math.round(7 / 4 * CLargeur);
      V2 = Math.round(1 / 4 * CLargeur);
      H = Math.round(5 / 4 * DLargeur);
      H3 = Math.round(7 / 4 * DLargeur);
      H2 = Math.round(L_Bout / 2);
      switch (Objet) {
        case 'Un_V':
          if (!Immonde_rustine_double_v) {
            Ligne(X, Y + Math.round(VHauteur / 2), X + Math.round(VLargeur), Y + Math.round(VHauteur / 2));
            Ligne(X, Y - Math.round(VHauteur / 2), X + Math.round(VLargeur), Y - Math.round(VHauteur / 2));
            Ligne(X + Math.round(VLargeur), Y - Math.round(VHauteur / 2), X + Math.round(VLargeur), Y + Math.round(VHauteur / 2));
            Ligne(X + VLargeur - H2, Y + VHauteur / 2, X + VLargeur - H2, Y + VHauteur + 10);
            Ligne(X + H2, Y + VHauteur / 2, X + H2, Y + VHauteur + 10);
          } else {
            Ligne(X + Math.round(VHauteur / 2), Y, X + Math.round(VHauteur / 2), Y - Math.round(VLargeur));
            Ligne(X - Math.round(VHauteur / 2), Y, X - Math.round(VHauteur / 2), Y - Math.round(VLargeur));
            Ligne(X - Math.round(VHauteur / 2), Y - Math.round(VLargeur), X + Math.round(VHauteur / 2), Y - Math.round(VLargeur));
            Ligne(X + VHauteur / 2, Y - VLargeur + H2, X + VHauteur + 10, Y - VLargeur + H2);
            Ligne(X + VHauteur / 2, Y - H2, X + VHauteur + 10, Y - H2);
          }
          break;

        case 'Un_D':
          Ligne(X, Y - DLargeur / 2, X + 2 * DLargeur, Y - DLargeur / 2);
          Ligne(X, Y + DLargeur / 2, X + 2 * DLargeur, Y + DLargeur / 2);
          Ligne(X + 3 * DLargeur - 5, Y - DLargeur / 2, X + 3 * DLargeur, Y - DLargeur / 2);
          Ligne(X + 3 * DLargeur - 5, Y + DLargeur / 2, X + 3 * DLargeur, Y + DLargeur / 2);
          Ligne(X + 2 * DLargeur, Y + DLargeur / 2, X + 2 * DLargeur, Y - DLargeur / 2);
          Ligne(X + 3 * DLargeur, Y + DLargeur / 2, X + 3 * DLargeur, Y - DLargeur / 2);
          Ligne(X + H, Y - DLargeur / 2, X + H, Y - DLargeur - 10);
          Ligne(X + H, Y + DLargeur / 2, X + H, Y + DLargeur + 10);
          Ligne(X + 3 * DLargeur / 2, Y + DLargeur / 2, X + 3 * DLargeur / 2, Y + DLargeur + 10);
          Ligne(X + H3, Y - DLargeur / 2, X + H3, Y - DLargeur - 10);
          break;

        case 'Un_Cap':
          if (!Immonde_rustine_galet_v) {
            Ligne(X - CLargeur / 2, Y, X - CLargeur / 2, Y + 2 * CLargeur);
            Ligne(X + CLargeur / 2, Y, X + CLargeur / 2, Y + 2 * CLargeur);
            Ligne(X + 50, Y + V, X - 50, Y + V);
            Arc_De_Cercle(X, Y - DLargeur / 3 - DLargeur / 8, 0, 360, DLargeur / 7);
          } else {
            Ligne(X, Y - CLargeur / 2, X + 2 * CLargeur, Y - CLargeur / 2);
            Ligne(X, Y + CLargeur / 2, X + 2 * CLargeur, Y + CLargeur / 2);
            Ligne(X + 7 / 4 * CLargeur, Y + 50, X + 7 / 4 * CLargeur, Y - 50);
            Arc_De_Cercle(X - DLargeur / 3 - DLargeur / 8, Y, 0, 360, DLargeur / 7);
          }
          break;

        case 'Une_Cellule':
          Rect(X - CLargeur / 2, Y, X + CLargeur / 2, Y + CLargeur);
          Ligne(X - CLargeur / 2, Y + V2, X - 50, Y + V2);
          Ligne(X + 50, Y + 3 * V2, X - 50, Y + 3 * V2);
          break;
        case 'Une_Alim':
        case 'Une_Alim_Pilote':
          Cercle(X, Y, ARayon);
          break;
        case 'Une_Memoire':
          Rect(X - DMemoire, Y, X + DMemoire, Y + DMemoire);
          break;
        default:
          Ligne(X - 20, Y, X + 20, Y);
          Ligne(X, Y - 20, X, Y + 20);
      }
    }
    //setlinemode(pmcopy);
  }*/


  funcCursor('crosshair');   //Курсор в виде креста
  Couleur('#000000');
  X = X_s;     //Координаты курсора
  Y = Y_s;
  Old_X = X;   //Для совместимости
  Old_Y = Y;
  /*while (true) {
    //Croix(X, Y);
    Gauche = false;   //Показать курсор пока не будет true (нажата левая клавиша мыши)
    Droite = false;   //Показать курсор пока не будет true (нажата правая клавиша мыши)
    while ((!Gauche) && (!Droite) && (X = X_s) && (Y = Y_s)) { 
      Sleep(2000);
      break;
    }  //application.processmessages
    //Croix(X, Y);
    X = X_s;
    Y = Y_s;
    if (Gauche) {
      Old_X = X; Old_Y = Y;
      Couleur('#000000');
      funcCursor('default');   //Курсор в виде стрелки
      return false;
    } else {
      if (Droite) {
        Old_X = X;
        Old_Y = Y;
        Couleur('#000000');
        Objet = 'Ouste';
        funcCursor('default');   //Курсор в виде стрелки
        return false;
      }
    }
  }*/
}

//Создать текст
function Cree_Texte() {  //

  var Quoi_Donc = '';
  var Xe = 300;
  var Ye = 200;
  Quoi_Donc = 'Un_Texte';
  PetitMenu('#808080', '<Текст> Положение текста ?, правая кнопка = Назад');
  Ou_Que(Xe, Ye, false, Quoi_Donc);



  /*if (Quoi_Donc == 'Ouste') {
    Redess(false);
    PetitMenu('#FFFFFF', 'Air simulator');
    return false;
  }

  S = Ed('Введите текст : ', '', Poured);
  if (S != '') {
    Nb_Texte++;
    Texte[Nb_Texte].X = Xe;
    Texte[Nb_Texte].Y = Ye;
    Texte[Nb_Texte].Le_Texte = S;
    Texte[Nb_Texte].Lataille = 1;
    Dialogvaleur = MessageDlg('Двойная высота ?', mtConfirmation, [mbYes, mbno, mbcancel], 0);

    switch (Dialogvaleur) {
      case 'id_yes':
        Texte[Nb_Texte].Lataille = 2; //Двойная высота текста
        break;
      case 'id_Cancel':
        Texte[Nb_Texte].Lataille = 1; //Обычная высота текста
        break;
    };
  };*/
}

//Создать текст
function Cree_Texte2() {  //Ввод тексата
  var Textenter = '';
  var Poured = false;
  var Quoi_Donc = '';
  var Xe = 300;
  var Ye = 200;

  if (Quoi_Donc == 'Ouste') {
    Redess(false);
    PetitMenu('#FFFFFF', 'Air simulator');
    return false;
  }

  Textenter = Ed('Введите текст : ', '', Poured);
  Otxy(X_s, Y_s, Textenter);

  if (Textenter != '') {
    Nb_Texte++;
    Texte[Nb_Texte].X = Xe;
    Texte[Nb_Texte].Y = Ye;
    Texte[Nb_Texte].Le_Texte = Textenter;
    Texte[Nb_Texte].Lataille = 1;
  }

}

function AD(X, Increment) {  //
  X = X + Increment;
}

//Изменить состояние датчика
function Change_Etat_Capteur(Numero) {  //
  Affiche_Capteur(Numero, '#FFFFFF', false);
  Capteur[Numero].Etat = 3 - Capteur[Numero].Etat;
  Affiche_Capteur(Numero, '#000000', false);
}

//Поместите датчик
function Place_Capteur_a(Numero, Combien) {  //
  if (Capteur[Numero].Etat != Combien) { Change_Etat_Capteur(Numero) }
}

//Поместите дозатор
function Place_Distributeur_a(Numero, Combien) {  //
  Affiche_Distributeur(Numero, '#FFFFFF', false);
  Distributeur[Numero].Etat = Combien;
  Commande[Distributeur[Numero].Com[1].Laquelle].Etat = Distributeur[Numero].Etat;
  Commande[Distributeur[Numero].Com[2].Laquelle].Etat = Distributeur[Numero].Etat;
  Affiche_Distributeur(Numero, '#000000', false);
}

function pause() {
  Sleep(1000);
}

function Sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms) { }
}

//Анимация
function Anime() {  //
  var Pour = 0;
  var Pour2 = 0;
  var Pour3 = 0;
  var Celui_La = 0;
  var Fois = 0;
  var Encours = 0;
  var Le_Type = '';
  var En_Un = false;
  var En_Deux = false;
  var L_Action = '';
  var Tempo = 0;

  //Управление часами
  Affiche_Temps(20, 30, true);
  while (true) {

    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
      if (!(['_4_3', '_5_3'].includes(Distributeur[Pour].Modele))) {
        if ((Distributeur[Pour].Com[2].Quoi == 'Ressort_Droit') && (Distributeur[Pour].Com[1].Quoi == 'Poussoir_Gauche')) { Place_Distributeur_a(Pour, 1) }
      }
    }
    PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');

    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
      if (Distributeur[Pour].Com[2].Quoi == (Ressort_Droit)) {
        if (Distributeur[Pour].Com[1].Quoi != 'Pilote_Gauche') { Place_Distributeur_a(Pour, 1) }
      }
    }

    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {

      if (['A_Poussoir'].includes(Capteur[Pour].Modele)) { Place_Capteur_a(Pour, 1) }
      if (['A_Galet', 'A_Galet_V'].includes(Capteur[Pour].Modele)) {
        Place_Capteur_a(Pour, 1);
        for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {
          if (!(Verin[Pour3].Modele == 'Double_V')) {
            if ((Math.round(Math.abs(((Verin[Pour3].X + (Verin[Pour3].Tige - 1) * L_Bout + VL_Tige + 2 * L_Bout) - Capteur[Pour].X))) < 11) && ((Verin[Pour3].Y - Capteur[Pour].Y) < 0) && (Math.abs(Verin[Pour3].Y - Capteur[Pour].Y) < 40)) { Place_Capteur_a(Pour, 2) }
          } else {
            if ((Math.round(Math.abs(((Verin[Pour3].Y - (Verin[Pour3].tige - 1) * L_Bout - VL_Tige - 2 * L_Bout) - Capteur[Pour].Y))) < 11) && ((Verin[Pour3].X - Capteur[Pour].X) < 0) && (Math.abs(Verin[Pour3].X - Capteur[Pour].X) < 40)) { Place_Capteur_a(Pour, 2) }
          }
        }
      }
    }

    L_Action = 'Un_Cap';
    while (['Un_D', 'Un_Cap'].includes(l_Action)) {

      L_Action = 'Action';
      Heure = true;
      //if (!Pasapas) { form1.timer2.enabled = true }
      Pointe_Objet(L_Action, Celui_La, '#808080');
      //form1.timer2.enabled = false;
      Heure = false;
      if (Celui_La == 0) {
        Redess(false);
        PetitMenu('#FFFFFF', 'Pfff');
        return false;
      }
      switch (L_Action) {
        case 'Un_D':
          if ((Distributeur[Celui_La].Com[1].Quoi = 'Poussoir_gauche') && (['Ressort_Droit', 'Scie_Droite'].includes(Distributeur[Celui_La].Com[2].Quoi))) {
            place_Distributeur_a(Celui_La, 3 - Distributeur[Celui_La].Etat)
          };
          break;
        case 'Un_Cap':
          Change_Etat_Capteur(Celui_La);
          break;
      }
    }
    RAZ();
    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (Pour2 = 1; Pour2 <= 2; Pour2++) { if (Canal_Pilote[Pour].Bout[Pour2].Quoi = 'Une_Alim_Pilote') { Canal_Pilote[Pour].Etat = Un } } }
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Canal[Pour].Etat = Zero }
    for (let Fois = 1; Pour <= 16; Fois++) {

      for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        if (Canal_Pilote[Pour].Etat != Bof) {
          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Carrefour_Pilote') {
              Carrefour_Pilote[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat = Canal_Pilote[Pour].Etat
            }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        if (Canal_Pilote[Pour].Etat != Bof) {
          for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Bout[Pour2].Quoi == 'Un_Cap') {
              if ([1, 2].includes(Canal_Pilote[Pour].Bout[Pour2].Branchement)) {
                Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = Canal_Pilote[Pour].Etat
              }
            }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
        switch (Capteur[Pour].Modele) {
          case 'Ou':
            if ((Capteur[Pour].Etat_Ext[1] == 1) || (Capteur[Pour].Etat_Ext[2] == 1)) { Capteur[Pour].Etat_Ext[3] = 1 }
            else {
              if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) { Capteur[Pour].Etat_Ext[3] = 0 }
            };
            break;
          case 'Et':
            if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) {
              if ((Capteur[Pour].Etat_Ext[1] == 1) && (Capteur[Pour].Etat_Ext[2] == 1)) {
                Capteur[Pour].Etat_Ext[3] = 1
              }
              else { Capteur[Pour].Etat_Ext[3] = 0 }
            };
            break;
          case 'Inhibition':
            if ((Capteur[Pour].Etat_Ext[1] == 1) && (Capteur[Pour].Etat_Ext[2] == 0)) { Capteur[Pour].Etat_Ext[3] = 1 }
            else {
              if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) { Capteur[Pour].Etat_Ext[3] = 0 }
            }
            break;
          default:
            switch (Capteur[Pour].Etat) {
              case 1:
                if ([0, 1].includes(Capteur[Pour].Etat_Ext[2])) { Capteur[Pour].Etat_Ext[3] = 0 };
                break;
              case 2:
                Capteur[Pour].Etat_Ext[3] = Capteur[Pour].Etat_Ext[2];
                break;
            }
        }
      }

      for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Cap') {
            if (Canal_Pilote[Pour].Bout[Pour2].Branchement == 3) {
              if (Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3] != Bof) {
                Canal_Pilote[Pour].Etat = Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3]
              }
            }
          }
        }

        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Carrefour_Pilote') {
            if (Carrefour_Pilote[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat == 1) {
              Canal_Pilote[Pour].Etat = 1
            }
          }
        }
      }

      for (Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        if (Etat == 1) {
          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Une_Memoire') {
              if (Canal_Pilote[Pour].Bout[Pour2].Branchement != 3) {
                Memoire[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
              }
            }
          }

          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Sequenceur') {
              Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
            }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
        if ((Memoire[Pour].Etat_Ext[1] == 1) && (Memoire[Pour].Etat_Ext[2] != 1)) { Memoire[Pour].Etat = 2 }
        if ((Memoire[Pour].Etat_Ext[1] != 1) && (Memoire[Pour].Etat_Ext[2] == 1)) { Memoire[Pour].Etat = 1 }
        Affiche_memoire(Pour, 15, false);
      }

      for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
        if (Memoire[Pour].Etat == 1) { Memoire[Pour].Etat_Ext[3] = 0 }
        else {
          if (Memoire[Pour].Etat_Ext[4] == 1) { Memoire[Pour].Etat_Ext[3] = 1 }
          else { Memoire[Pour].Etat_Ext[3] = 0 }
        }
      }

      for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        if (Canal_Pilote[Pour].Etat != 1) {
          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal_Pilote[Pour].Bout[Pour2].Quoi = 'Une_Memoire') {
              if (Canal_Pilote[Pour].Bout[Pour2].Branchement == 3) { Canal_Pilote[Pour].Etat = Memoire[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3] }
            }
          }

          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal_Pilote[Pour].Bout[Pour2].Quoi = 'Un_Sequenceur') {
              if (Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] == 1) { Canal_Pilote[Pour].Etat = 1 }
              else {
                if ([9, 10, 11, 12, 13, 14, 15, 16, 21, 22].includes(Canal_Pilote[Pour].Bout[Pour2].Branchement)) {
                  if (Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] == 0) { Canal_Pilote[Pour].Etat = 0 }
                }
              }
            }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
        if (Sequenceur[Pour].Etat_Ext[18] == 1) { Sequenceur[Pour].Etat = 0 }
        if ((Sequenceur[Pour].Etat != 0) && (Sequenceur[Pour].Etat_Ext[19] == 1)) { Sequenceur[Pour].Etat_Ext[Etat + 8] = 1 }
        if ((Sequenceur[Pour].Etat == Combien) && (Sequenceur[Pour].Etat_Ext[Etat] == 1)) { Etat_Ext[22] = 1 } else { Etat_Ext[22] = 0 }
        if (Sequenceur[Pour].Etat == 1) { Sequenceur[Pour].Etat_Ext[17] = 1 }
        if (Sequenceur[Pour].Etat != 0) {
          if (Sequenceur[Pour].Etat != Combien) {
            if ((Sequenceur[Pour].Etat_Ext[19] == 1) && (Sequenceur[Pour].Etat_Ext[Etat] == 1)) { Sequenceur[Pour].Etat = Sequenceur[Pour].Etat % Combien + 1 }
          }
          else {
            if ((Sequenceur[Pour].Etat_Ext[20] == 1) && (Sequenceur[Pour].Etat_Ext[Etat] == 1)) { Sequenceur[Pour].Etat = 1 }
          }
        }
        else {
          if (Sequenceur[Pour].Etat_Ext[20] == 1) { Sequenceur[Pour].Etat = 1 }
        }
        Affiche_Etat_Sequenceur(Pour);
      }
    }

    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
      if (Canal_Pilote[Pour].Etat == 1) {
        for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
          if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_D') {
            Distributeur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
          }
        }
      }
    }

    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
      if (!(['_4_3', '_5_3'].includes(Distributeur[Pour]).Modele)) {
        if (Distributeur[Pour].Etat_Ext[-1] == 1) {
          if (Distributeur[Pour].Etat_Ext[0] == 0) { Place_distributeur_a(Pour, 2) };
        } else {
          if (((Distributeur[Pour].Com[2].Quoi == 'Ressort_Droit') && (Distributeur[Pour].Modele != '_2_2')) || (Distributeur[Pour].Etat_Ext[0] == 1)) { Place_Distributeur_a(pour, 1) };
        }
      } else {

        if ((Distributeur[Pour].Etat_Ext[-1] == 1) && (Distributeur[Pour].Etat_Ext[0] == 0)) { Place_distributeur_a(Pour, 2) }
        else {
          if ((Distributeur[Pour].Etat_Ext[-1] == 0) && (Distributeur[Pour].Etat_Ext[0] == 1)) { Place_distributeur_a(Pour, 3) }
          else { if ((Distributeur[Pour].Etat_Ext[-1] == 0) && (Distributeur[Pour].Etat_Ext[0] == 0)) { Place_distributeur_a(Pour, 1) } }
        }
      }
    }

    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { for (Pour2 = 1; Pour2 <= 2; Pour2++) { if (Canal[Pour].Bout[Pour2].Quoi = 'Une_Alim') { Canal[Pour].Etat = Un } } }

    for (let Fois = 1; Fois <= 4; Fois++) {

      for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        if ([Bouche, Un].includes(Canal[Pour].Etat)) {
          for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Carrefour') { Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat = Canal[Pour].Etat; }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        if ([Un, Bouche].includes(Canal[Pour].Etat)) {

          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
              if (Canal[Pour].Bout[Pour2].Branchement == 1) { Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat }
            }
          }
          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Un_V') {
              Verin[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat;
            }
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
        if (!([_4_3, _5_3].includes(Distributeur[Pour].Modele))) {
          switch (Distributeur[Pour].Etat) {
            case 1:
              Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
              if (Distributeur[Pour].Modele == '_2_2_') { Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1] }
              if (Distributeur[Pour].Modele == '_2_2') { Distributeur[Pour].Etat_Ext[4] = Bouche }
              break;
            case 2:
              if (!(Distributeur[Pour].Modele == '_2_2_')) {
                Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1]
              } else { Distributeur[Pour].Etat_Ext[4] = Bouche }
              break;
          }
        } else {

          switch (Distributeur[Pour].Etat) {

            case 1:
              Distributeur[Pour].Etat_Ext[3] = Bouche;
              Distributeur[Pour].Etat_Ext[4] = Bouche;
              break;
            case 2:
              Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1];
              break;
            case 3:
              Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
              break;
          }
        }
      }

      for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        if (Etat == 0) {

          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
              if ([Bouche, Un].includes(Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement])) {
                Canal[Pour].Etat = Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement]
              }
            }
          }

          for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi = 'Un_Carrefour') {
              if ([Bouche, Un].includes(Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat)) {
                Canal[Pour].Etat = Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat;
              }
            }
          }

        }
      }
    }

    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Affiche_Canal(Pour, false) }
    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { Affiche_Canal_Pilote(Pour, false); }
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
      En_Un = Verin[Pour].Etat_Ext[1] = 1;
      En_Deux = Verin[Pour].Etat_Ext[2] = 1;
      switch (Verin[Pour].Modele) {
        case 'Simple_R':
        case 'R_Simple':
          if (Verin[Pour].Modele == 'R_SImple') { En_Un = En_Deux }
          if (En_Un) {
            if (Tige < 9) {
              Affiche_Verin(Pour, '#FFFFFF', false);
              Tige++;
              Affiche_Verin(Pour, '#000000', false);
            }
          } else {
            if (!((Verin[Pour].Modele == 'Simple_R') && (Verin[Pour].Etat_Ext[1] == Bouche))) {
              if (!((Verin[Pour].Modele = 'r_SImple') && (Verin[Pour].Etat_Ext[2] = Bouche))) {
                if (Tige > 2) {
                  Affiche_Verin(Pour, '#FFFFFF', false);
                  Tige--;
                  Affiche_Verin(Pour, '#000000', false);
                }
              }
            }
          }
          break;

        case 'Double2':
        case 'Double_T':
        case 'DouBle_A':
        case 'Double_T_A':
        case 'Double_V':
          if (En_Un && En_Deux) {
            PetitMenu('#FF0000', 'Обе камеры запитаны !');
            Pause();
          } else {
            if (!En_Un && !En_Deux) {
              PetitMenu('#FF0000', 'Нет камеры с питанием !');
              Pause();
            }
            else {
              if (En_Un) {
                if (Verin[Pour].Tige < 9) {
                  if (!(Verin[Pour].Etat_Ext[2] == Bouche)) {
                    Affiche_Verin(Pour, '#FFFFFF', false);
                    Inc(Verin[Pour].Tige);
                    Affiche_Verin(Pour, '#000000', false);
                  }
                }
              } else {
                if (Verin[Pour].Tige > 2) {
                  if (!(Verin[Pour].Etat_Ext[1] = Bouche)) {
                    Affiche_Verin(Pour, '#FFFFFF', false);
                    Verin[Pour].Tige--;
                    Affiche_Verin(Pour, '#000000', false);
                  }
                }
              }
            }
          }
          break;

      }
    }
  }
}



//Перемещение мышкой
/*function Image1MouseMove(Sender, Shift, X, Y) {  //
  X_s =X;
  Y_s =Y;
}*/

//Мышка вниз  кнопка
/*function Image1MouseDown(Sender, Button,  Shift, X, Y) {  //
   X_s =X;
   Y_s =Y;
   Droite =(button=mbRight);
   Gauche =(button=mbLeft);
   Compteursouris =0;
}*/







//Сохранение файла  кнопка
function Ouvrir1Click(Sender) {  //

  if (Fichiermodifie) {
    Dialogvaleur = MessageDlg('Сохранить файл ?', mtConfirmation, [mbYes, mbno, mbcancel], 0);
    switch (Dialogvaleur) {
      case 'id_yes':
        Enregregistersous1Click(Self);
        break;
      case 'id_Cancel':
        return false
    }
  }

  if (openDialog1.execute) {
    Fichiermodifie = false;
    nomdefichier = OpenDialog1.Filename;
    Lecturede(nomdefichier);
    Facteur = 1;
  }
  redess(false);
}

//Запись файла  кнопка
/*function Enregregistersous1Click(Sender) {  //
var Pour=0;
    F:File;
Begin
  if (SaveDialog1.execute) then
  Begin
    nomdefichier =SaveDialog1.Filename;
    assignfile(F,nomdefichier);
    Pour =0;
    ReWrite(f,1);
    try
      BlockWrite(f,Nb_Verin,2);
      BlockWrite(f,Nb_Distributeur,2);
      BlockWrite(f,Nb_Commande,2);
      BlockWrite(f,Nb_Canal,2);
      BlockWrite(f,Nb_Canal_Pilote,2);
      BlockWrite(f,Nb_Alimentation,2);
      BlockWrite(f,Nb_Capteur,2);
      BlockWrite(f,Nb_Alim_Pilote,2);
      BlockWrite(f,Nb_Carrefour,2);
      BlockWrite(f,Nb_Carrefour_Pilote,2);
      BlockWrite(f,Nb_Memoire,2);
      BlockWrite(f,Nb_Sequenceur,2);
      BlockWrite(f,Nb_Texte,2);
      BlockWrite(f,Pour,2);            {R‚serve}
      BlockWrite(f,Pour,2);
      BlockWrite(f,Verin[1],Nb_Verin*SizeOf(Verin[1]));
      BlockWrite(f,Distributeur[1],Nb_Distributeur*SizeOf(Distributeur[1]));
      BlockWrite(f,Commande[1],Nb_Commande*SizeOf(Commande[1]));
      BlockWrite(f,Canal[1],Nb_Canal*SizeOf(Canal[1]));
      BlockWrite(f,Canal_Pilote[1],Nb_Canal_Pilote*SizeOf(Canal_Pilote[1]));
      BlockWrite(f,AliMentation[1],Nb_Alimentation*SizeOf(AliMentation[1]));
      BlockWrite(f,Capteur[1],Nb_Capteur*SizeOf(Capteur[1]));
      BlockWrite(f,Alim_Pilote[1],Nb_Alim_Pilote*SizeOf(Alim_Pilote[1]));
      BlockWrite(f,Carrefour[1],Nb_Carrefour*SizeOf(Carrefour[1]));
      BlockWrite(f,Carrefour_Pilote[1],Nb_Carrefour_Pilote*SizeOf(Carrefour_Pilote[1]));
      BlockWrite(f,Memoire[1],Nb_Memoire*SizeOf(Memoire[1]));
      BlockWrite(f,Sequenceur[1],Nb_Sequenceur*SizeOf(Sequenceur[1]));
      for (let Pour=1; Pour <= Nb_Texte; Pour++) Do BlockWrite(f,Texte[Pour],SizeOf(Texte[Pour]));
      finally
        Closefile(f);
      end;
      Fichiermodifie =false;
  end;
end;*/



//Печать  кнопка
/*function TForm1.Imprimer1Click(Sender: TObject) {  //
var rect='';
    coef,nbx,nby:Double;
    margex,margey,largeur:Integer;
begin
  nbx =GetDeviceCaps(Printer.Handle,logpixelsX);
  nby =GetDeviceCaps(Printer.Handle,logpixelsY);
  Margex =Math.round(Nbx*10/25.4);
  MargeY =Math.round(Nby*10/25.4);
  Printer.Orientation  = poPortrait;
  if (PrintDialog1.execute) Then
  Begin
    With printer Do
    begin
      Printer.Orientation  = {poPortrait; }
      poLandscape  ;
      coef =form1.Image1.height/form1.Image1.Width;
      rect.left =margex;
      Rect.top =margey;
      if (pagewidth*form1.Image1.height/form1.Image1.Width>pageheight) then largeur =pagewidth
                                                                     else largeur =Math.round(pageheight*form1.Image1.Width/form1.Image1.height);
      rect.right =largeur-MargeX;
      rect.bottom =Math.round(largeur*coef)-MargeY;
      PrintScale =poproportional;
      BeginDoc;
        Canvas.StretchDraw(rect,form1.Image1.Picture.Graphic);
      EndDoc;
    end;
  end;
end;*/



//Сохранить изображение  кнопка
/*function TForm1.Sauverlimage1Click(Sender: TObject) {  //
 var JpegImg: TJpegImage;
begin
   if (SavePictureDialog1.execute) then
   begin
     Nomdefichier =SavepictureDialog1.Filename;
     nomdefichier =changefileext(nomdefichier,'.jpg');
     JpegImg  = TJpegImage.Create;
   try
   JpegImg.Assign(Form1.image1.picture.Bitmap);
   JpegImg.SaveToFile(nomdefichier);
  finally
    JpegImg.Free
  end;
  end;
end;*/

//Цветное  кнопка
function Couleur1Click(Sender) {  //
  redess(false);
}

//
function FormKeyDown(Sender, Key, Shift) {  //
  if (Key = vk_escape) { Droite = true };
  if (key = 107) { if (Shift.includes(ssCtrl)) { if (loupe1.Enabled) { loupe1Click(self) } } }
  if (key = 109) { if (Shift.includes(ssCtrl)) { if (loupe2.Enabled) { Loupe2Click(self) } } }
}

//Сохранить MsPaint  кнопка
/*function TForm1.MsPaintBmp1Click(Sender: TObject) {  //
var s1,s3,result:string;
    DossierTemp: array[0..255] of Char;
begin
	result ='C:\';
	if (GetTempPath(255, @DossierTemp)<>0) then Result  = StrPas(DossierTemp);
  s1 ='Mspaint';s3 ='';
  Nomdefichier =result+'Temporaire.bmp';
  try
    Form1.image1.picture.SaveToFile(nomdefichier);
    ShellExecute (handle,'Open', PChar(s1)  ,PChar(Nomdefichier),PChar(s3),SW_SHOWNORMAL);
  finally
  end;
end;*/



//Сохранить EMF  кнопка
/*function TForm1.SauverlimageEMF1Click(Sender: TObject) {  //
var MetaFileCanvas : TMetaFileCanvas;
begin
  Metafile.height =form1.Image1.height+1;
  Metafile.width =form1.Image1.Width;
  SavepictureDialog2.Filename =changefileext(nomdefichier,'.EMF');
  if (SavePictureDialog2.execute) then
  begin
    Nomdefichier =SavepictureDialog2.Filename;
    nomdefichier =changefileext(nomdefichier,'.EMF');
    MetaFileCanvas  = TMetaFileCanvas.Create(MetaFile, 0);
    Feuille = MetaFileCanvas;
    redessprinc(true);
    MetaFileCanvas.free;
    try
      MetaFile.SaveToFile(Nomdefichier);
    finally
    end;
  end;
  feuille =Form1.Image1.Canvas;
end;*/



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
  Minimumh = mini;
  return Minimumh;
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
  Minimumv = mini;
  return Minimumv;
}

//Ниже
function Decah(Combien) {  //
  var Pour = 0, Pour2 = 0;

  for (let Pour = 1; Pour <= Nb_Canal; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal[Pour].parcoursx[Pour2] = Canal[Pour].parcoursx[Pour2] + Combien } }
  for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal_Pilote[Pour].parcoursx[Pour2] = Canal_Pilote[Pour].parcoursx[Pour2] + Combien } }

  for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
    Capteur[Pour].X = Capteur[Pour].X + Combien;
    for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Capteur[Pour].ExtX[Pour2] = Capteur[Pour].ExtX[Pour2] + Combien }
  }

  for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { AliMentation[Pour].X = AliMentation[Pour].X + Combien }
  for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Alim_Pilote[Pour].X = Alim_Pilote[Pour].X + combien }
  for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Carrefour[Pour].X = Carrefour[Pour].X + Combien }
  for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Carrefour_Pilote[Pour].X = Carrefour_Pilote[Pour].X + Combien }

  for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
    Verin[Pour].X = Verin[Pour].X + Combien;
    for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Verin[Pour].EntreeX[Pour2] = Verin[Pour].EntreeX[Pour2] + Combien }
  }

  for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
    Sequenceur[Pour].X = Sequenceur[Pour].X + Combien;
    for (let Pour2 = 1; Pour2 <= 22; Pour++) { Sequenceur[Pour].ExtX[Pour2] = Sequenceur[Pour].ExtX[Pour2] + Combien }
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

//Выше
function Decav(Combien) {  //
  var Pour = 0, Pour2 = 0;
  begin
  for (let Pour = 1; Pour <= Nb_Canal; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal[Pour].parcoursy[Pour2] = Canal[Pour].parcoursy[Pour2] + Combien } }
  for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { Canal_Pilote[Pour].parcoursy[Pour2] = Canal_Pilote[Pour].parcoursy[Pour2] + Combien } }

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
    for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Verin[Pour].entreey[Pour2] = Verin[Pour].entreey[Pour2] + Combien }
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
    for (let Pour2 = -1; Pour <= 5; Pour2++) { Distributeur[Pour].ExtY[Pour2] = Distributeur[Pour].ExtY[Pour2] + Combien }
  }

  for (let Pour = 1; Pour <= Nb_Commande; Pour++) { Commande[Pour].Y = Commande[Pour].Y + Combien }
  for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Texte[Pour].Y = Texte[Pour].Y + Combien }
}

//Слева  кнопка
function Gauche1Click(Sender) {  //
  if (minimumh > 30) { Decah(-15) };
  redess(false);
}

//Справа  кнопка
function Droite1Click(Sender) {  //
  if (minimumh < 300) { Decah(15) };
  redess(false);
}

//Выше  кнопка
function Dessus1Click(Sender) {  //
  if (minimumv > 30) { Decav(-15) };
  redess(false);
}

//Ниже  кнопка
function Dessous1Click(Sender) {  //
  if (minimumv < 300) { Decav(15) };
  redess(false);
}

//Сохранить отметку  кнопка
/*function TForm1.SauverlcranSVG1Click(Sender: TObject) {  //
var s1,s2:string;
begin
  SVG =false;
  Vieux_Facteur =Facteur;
  Facteur =1;
  Form1.Memo1.Lines.Clear;
  Form1.Memo1.Lines.Add('<?xml version ="1.0" encoding="ISO-8859-1" standalone="no" ?>');
  Form1.Memo1.Lines.Add('<!-- SVG  genere par Pfff : ADMR');
  Form1.Memo1.Lines.Add(Format(' Date       : %s',[DateToStr(Now)]));
  Form1.Memo1.Lines.Add('-->');
  s1 =strint(800);
  s2 =strint(600);
  Form1.Memo1.Lines.Add('<SVG width="'+s1+'" height="'+s2+'" viewbox="0 0 '+s1+' '+s2+'" xmlns="http://www.w3.org/2000/svg">');
  SaveDialog2.Filename =changefileext(nomdefichier,'.svg');
  if (SaveDialog2.execute) then
   begin
     Nomdefichier =SaveDialog2.Filename;
     nomdefichier =changefileext(nomdefichier,'.svg');
     SVG =true;     redessprinc(true);    SVG =false;
     Form1.Memo1.Lines.Add('</svg>');
     try
       Form1.Memo1.Lines.SaveToFile(Nomdefichier);
     finally
     end;
  end;
  Facteur =Vieux_Facteur;
end;*/

//Перемещение компонента
function Deplace_Objet() {
  var Objet = '';
  var Pour = 0, Pour2 = 0, Pour3 = 0;
  var Lax = 0, Lay = 0;
  var dx = 0, dy = 0;
  var mypoint = '';

  Objet = 'Toutsaufcanal';
  PetitMenu('#A6CAF0', '<Переместить>  Выбор компонента ?');
  Pointe_Objet(Objet, Pour, '#0000FF');
  if (Objet == 'Rien') {
    Redess(false);
    return false;
  }

  Lax = 150;
  Lay = 150;

  if (Objet == 'Un_Cap') { if ([Et, Ou, Inhibition].includes(Capteur[Pour].Modele)) { Objet = 'Une_Cellule' } }

  PetitMenu('#A6CAF0', '<Переместить>  Укажите новую позицию ?');
  GetCursorPos(MyPoint);
  SetCursorPos(Math.round((mypoint.X) / Facteur), Math.round((mypoint.Y) / Facteur));
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
              Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx; Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
              Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint];
            } else {
              if ((Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 2]))) {
                Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx; Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
                Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint];
                Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint - 2];
              } else {
                if ((Math.round(Canal[Pour2].parcoursx[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursx[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 2]))) {
                  Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx; Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
                  Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint - 1] = Canal[Pour2].Parcoursx[Canal[Pour2].Nbpoint];
                } else {
                  if ((Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 1])) && (Math.round(Canal[Pour2].parcoursy[Canal[Pour2].nbPoint - 1]) == Math.round(Canal[Pour2].Parcoursy[Canal[Pour2].NbPoint - 2]))) {
                    Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] = Canal[Pour2].parcoursx[Canal[Pour2].Nbpoint] + dx; Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] = Canal[Pour2].Parcoursy[Canal[Pour2].Nbpoint] + dy;
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
              Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx; Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
              Canal[Pour2].Parcoursy[2] = Canal[Pour2].Parcoursy[1];
            } else {
              if ((Math.round(Canal[Pour2].parcoursx[1]) == Math.round(Canal[Pour2].Parcoursx[2])) && (Math.round(Canal[Pour2].parcoursx[2]) == Math.round(Canal[Pour2].Parcoursx[3]))) {
                Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx; Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
                Canal[Pour2].Parcoursy[2] = Canal[Pour2].Parcoursy[3];
                Canal[Pour2].Parcoursx[2] = Canal[Pour2].Parcoursx[1];
              } else {
                if ((Math.round(Canal[Pour2].parcoursx[1]) == Math.round(Canal[Pour2].Parcoursx[2])) && (Math.round(Canal[Pour2].parcoursy[2]) == Math.round(Canal[Pour2].Parcoursy[3]))) {
                  Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx; Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
                  Canal[Pour2].Parcoursx[2] = Canal[Pour2].Parcoursx[1];
                } else {
                  if ((Math.round(Canal[Pour2].parcoursy[1]) == Math.round(Canal[Pour2].Parcoursy[2])) && (Math.round(Canal[Pour2].parcoursy[2]) == Math.round(Canal[Pour2].Parcoursy[3]))) {
                    Canal[Pour2].parcoursx[1] = Canal[Pour2].parcoursx[1] + dx; Canal[Pour2].Parcoursy[1] = Canal[Pour2].Parcoursy[1] + dy;
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
                Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx; Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                Canal_Pilote[Pour2].Parcoursy[2] = Canal_Pilote[Pour2].Parcoursy[1];
              } else {
                if ((Math.round(Canal_Pilote[Pour2].parcoursx[1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[2])) && (Math.round(Canal_Pilote[Pour2].parcoursx[2]) == Math.round(Canal_Pilote[Pour2].Parcoursx[3]))) {
                  Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx; Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                  Canal_Pilote[Pour2].Parcoursy[2] = Canal_Pilote[Pour2].Parcoursy[3];
                  Canal_Pilote[Pour2].Parcoursx[2] = Canal_Pilote[Pour2].Parcoursx[1];
                } else {
                  if ((Math.round(Canal_Pilote[Pour2].parcoursx[1]) == Math.round(Canal_Pilote[Pour2].Parcoursx[2])) && (Math.round(Canal_Pilote[Pour2].parcoursy[2]) == Math.round(Canal_Pilote[Pour2].Parcoursy[3]))) {
                    Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx; Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
                    Canal_Pilote[Pour2].Parcoursx[2] = Canal_Pilote[Pour2].Parcoursx[1];
                  } else {
                    if ((Math.round(Canal_Pilote[Pour2].parcoursy[1]) == Math.round(Canal_Pilote[Pour2].Parcoursy[2])) && (Math.round(Canal_Pilote[Pour2].parcoursy[2]) == Math.round(Canal_Pilote[Pour2].Parcoursy[3]))) {
                      Canal_Pilote[Pour2].parcoursx[1] = Canal_Pilote[Pour2].parcoursx[1] + dx; Canal_Pilote[Pour2].Parcoursy[1] = Canal_Pilote[Pour2].Parcoursy[1] + dy;
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



function Max(a, b) {
  if (a > b) { Max = a } else { Max = b }
  return max
}

function Min(a, b) {
  if (a < b) { Min = a } else { Min = b }
  return Min
}



//Cree_Texte() //Отладка



console.log("Окончание программы");