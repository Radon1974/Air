var Objet2 = '', Celui_La2 = 0

//Добавить объект
function Ajoute_Objet() {  //
    var Objet='';
    var Pour=0,Celui_La=0,Lax=0,Lay=0;
    var Quoi_Donc='';
    var requete='';
    var Pour3=0;
    var Pasbon = false;
    
    
        Objet ='Tout';
        Vieux_Facteur =Facteur;
        Facteur =1.1;
        ClearDevice();
        Couleur('#000000');
        PetitMenu('#A6CAF0','<Новый Компонент>   Укажите компонент');
        Vieux_Nb_Verin = Nb_Verin;
        Vieux_Nb_Distributeur = Nb_Distributeur;
        Vieux_Nb_Capteur =Nb_Capteur;
        Vieux_Nb_Alim =Nb_Alimentation;
        Vieux_Nb_Alim_Pilote =Nb_Alim_Pilote;
        Vieux_Nb_Carrefour_Pilote =Nb_Carrefour_Pilote;
        Vieux_Nb_Carrefour =Nb_Carrefour;
        Vieux_Nb_Commande =Nb_Commande;
        Vieux_Nb_Canal =Nb_Canal;
        Vieux_Nb_Canal_Pilote =Nb_Canal_Pilote;
        Vieux_Nb_Memoire =Nb_Memoire;
        Vieux_Nb_Sequenceur =Nb_Sequenceur;
        Vieux_Nb_Texte =Nb_Texte;
        Nb_Texte =0; //Лишняя
        if (Nb_Verin<Max_Verin-4) {
          Cree_Verin(80,30,'Simple_R');
          Cree_Verin(80,95,'Double2');
          Cree_Verin(45,320,'Double_V');
        }
    
        if (Nb_Distributeur<Max_Distributeur-14) {
          Cree_Distributeur(270,225,'_3_2','Poussoir_Gauche','Scie_Droite',1);
          Cree_Distributeur(608,225,'_3_2','Pilote_Gauche','Ressort_Droit',1);
          Cree_Distributeur(430,225,'_3_2','Pilote_Gauche','Pilote_Droit',1);
          Cree_Distributeur(270,280,'_4_2','Poussoir_Gauche','Scie_Droite',1);
          Cree_Distributeur(608,280,'_4_2','Pilote_Gauche','Ressort_Droit',1);
          Cree_Distributeur(430,280,'_4_2','Pilote_Gauche','Pilote_Droit',1);
          Cree_Distributeur(270,335,'_5_2','Poussoir_Gauche','Scie_Droite',1);
          Cree_Distributeur(608,335,'_5_2','Pilote_Gauche','Ressort_Droit',1);
          Cree_Distributeur(430,335,'_5_2','Pilote_Gauche','Pilote_Droit',1);
          Cree_Distributeur(270,170,'_2_2','Poussoir_Gauche','Scie_Droite',1);
          Cree_Distributeur(430,170,'_2_2_','Poussoir_Gauche','Scie_Droite',1);
          Cree_Distributeur(608,170,'_2_2','Poussoir_Gauche','Ressort_Droit',1);
          Cree_Distributeur(608,30,'_4_3','Pilote_Gauche','Pilote_Droit',1);
          Cree_Distributeur(608,85,'_5_3','Pilote_Gauche','Pilote_Droit',1);
          Otxy(750,225,'3/2');
          Otxy(750,280,'4/2');
          Otxy(750,335,'5/2');
          Otxy(750,170,'2/2');
          Otxy(750,40,'4/3');
          Otxy(750,95,'5/3');
          Otxy(380,380,'бистабильный');
          Otxy(640,380,'моностабильный');
        }
    
        if (Nb_Capteur<Max_Capteur-7) {
          Cree_Capteur(20,450,'A_Poussoir',1);
          Cree_Capteur(70,450,'A_Poussoir_Bistable',1);
          Cree_Capteur(120,450,'A_Galet',1);
          Cree_Capteur(430,20,'Et',1);
          Cree_Capteur(480,20,'Ou',1);
          Cree_Capteur(530,20,'Inhibition',1);
          Cree_Capteur(170,460,'A_Galet_V',1);
        }
    
        if (Nb_Memoire<Max_Memoire-1) {Cree_Memoire(480,80,2)}
    
        if (Nb_Sequenceur<Max_Sequenceur-1) {
          Cree_Sequenceur(20,370,3);
          Sequenceur[Nb_Sequenceur].Etat =1;
          Affiche_Etat_Sequenceur(Nb_Sequenceur);
        }
    
        if (Nb_Alimentation<Max_Alimentation-1) {Cree_Alimentation(640,460)}
        if (Nb_Alim_Pilote<Max_Alim_Pilote-1) {Cree_Alim_Pilote(640,500)}
        if (Nb_Carrefour<Max_Carrefour-1) {Cree_Carrefour(680,460)}
        if (Nb_Carrefour_Pilote<Max_Carrefour_Pilote-1) {Cree_Carrefour_Pilote(680,500)}
        for (let Pour=Vieux_Nb_Verin+1; Pour <= Nb_Verin; Pour++) {Affiche_Verin(Pour,'#000000',true)}
        for (let Pour=Vieux_Nb_Distributeur+1; Pour <= Nb_Distributeur; Pour++) {Affiche_Distributeur(Pour,'#000000',true)}
        for (let Pour=Vieux_Nb_Capteur+1; Pour <= Nb_Capteur; Pour++) {Affiche_Capteur(Pour,'#000000',true)}
        for (let Pour=Vieux_Nb_Alim+1; Pour <= Nb_Alimentation; Pour++) {Affiche_Alimentation(Pour,'#FF0000',false)}
        for (let Pour=Vieux_Nb_Alim_Pilote+1; Pour <= Nb_Alim_Pilote; Pour++) {Affiche_Alim_Pilote(Pour,'#FF00FF',false)}
        for (let Pour=Vieux_Nb_Carrefour_Pilote+1; Pour <= Nb_Carrefour_Pilote; Pour++) {Affiche_Carrefour_Pilote(Pour,false)}
        for (let Pour=Vieux_Nb_Carrefour+1; Pour <= Nb_Carrefour; Pour++) {Affiche_Carrefour(Pour,false)}
        for (let Pour=Vieux_Nb_Memoire+1; Pour <= Nb_Memoire; Pour++) {Affiche_Memoire(Pour,15,true)}
        for (let Pour=Vieux_Nb_Sequenceur+1; Pour <= Nb_Sequenceur; Pour++) { Affiche_Sequenceur(Pour,true)}
    
        Couleur('#FF0000');
        Otxy(635,470,'Сила');
        Couleur('#FF00FF');
        Otxy(635,510,'Команда');
        Couleur('#000000');
        Otxy(200,490,'Пересечения должны быть созданы до подачи каналов');
        Otxy(150,420,'Поместите колесо датчиков положения в конец стержней цилиндров');
        Otxy(360,130,'Память должна быть включена');
        //Выбрать компонент
        Pointe_Objet(Objet, '#0000FF');
    
        /*Immonde_rustine_double_v =false;
        Immonde_rustine_galet_v =false;
        if (Objet == 'Un_V') {if (Verin[Celui_La].Modele == 'Double_V') {Immonde_rustine_double_v =true}}
        if (Objet == 'Un_Cap') {if (Capteur[Celui_La].Modele == 'A_Galet_V') {Immonde_rustine_galet_v =true}}
        //feuille = form1.image1.canvas;
        Nb_Verin = Vieux_Nb_Verin;
        Nb_Distributeur = Vieux_Nb_Distributeur;
        Nb_Capteur = Vieux_Nb_Capteur;
        Nb_Alimentation = Vieux_Nb_Alim;
        Nb_Alim_Pilote = Vieux_Nb_Alim_Pilote;
        Nb_Carrefour_Pilote = Vieux_Nb_Carrefour_Pilote;
        Nb_Carrefour = Vieux_Nb_Carrefour;
        Nb_Commande = Vieux_Nb_Commande;
        Nb_Memoire = Vieux_Nb_Memoire;
        Nb_Sequenceur = Vieux_Nb_Sequenceur;
        Nb_Texte = Vieux_Nb_Texte;
        Raz_Vieux();
        Facteur = Vieux_Facteur;
        ClearDevice();
        if (Objet == Rien) {
          Redess(false);
          PetitMenu('#FFFFFF','Pfff');
          return false;
        }
        Lax =150;
        LaY =150;
        Redess(false);
        PetitMenu('#A6CAF0','<Новый Компонент>   Положение компонента ?');
        
        
        if ((Objet=='Un_Cap') && ( [4,5,6].includes(Celui_La-Nb_Capteur) ))
        {
          Quoi_Donc ='Une_Cellule';
          //Ou_Que(Lax,Lay,false,Quoi_Donc);
        } else
        {
          Quoi_Donc = Objet;
          //Ou_Que(Lax,Lay,false,Quoi_Donc);
        }
        Immonde_rustine_double_v =false;
        Immonde_rustine_galet_v =false;
        if( Quoi_Donc == 'Ouste') {return false};
      switch (Objet) {
        case 'Un_V':
          Cree_Verin(Lax, Lay, Verin[Celui_La].Modele);
          break;
        case 'Un_D':
    
          Celui_La = Celui_La - Nb_Distributeur;
    
          switch (Celui_La) {
            case 1:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 2:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 3:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 4:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 5:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 6:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 7:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 8:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 9:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 10:
              Cree_Distributeur(Lax, Lay, '_2_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 11:
              Cree_Distributeur(Lax, Lay, '_2_2_', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 12:
              Cree_Distributeur(Lax, Lay, '_2_2', 'Poussoir_Gauche', 'Ressort_Droit', 1);
              break;
            case 13:
              Cree_Distributeur(Lax, Lay, '_4_3', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 14:
              Cree_Distributeur(Lax, Lay, '_5_3', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
          }
          break;
        case 'Un_Cap':
          Celui_La = Celui_La - Nb_Capteur;
          switch (Celui_La) {
            case 1:
              Cree_Capteur(Lax, Lay, 'A_Poussoir', 1);
              break;
            case 2:
              Cree_Capteur(Lax, Lay, 'A_Poussoir_Bistable', 1);
              break;
            case 3:
              Cree_Capteur(Lax, Lay, 'A_Galet', 1);
              Pasbon = true;
    
              for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {if ((Lax > Verin[Pour3].X + (0) * L_Bout + VL_Tige + 2 * L_Bout - 13) &&
                (Lax < Verin[pour3].X + (9) * L_Bout + VL_Tige + 2 * L_Bout + 13) && ((Verin[Pour3].Y - Lay) < 0) &&
                (Math.abs(Verin[Pour3].Y - Lay) < 40)) { Pasbon = false}}
    
              if (Pasbon) {
              Affiche_Capteur(Nb_Capteur, '#FF0000', true);
              alert('Этот концевой выключатель, похоже, не может эксплуатироваться существующим водителем  !', '(pas) Pfff', MB_OK + MB_ICONEXCLAMATION + MB_DEFBUTTON1 + MB_APPLMODAL);
              }
              
              break;
            case 4:
              Cree_Capteur(Lax, Lay, 'Et', 1);
              break;
            case 5:
              Cree_Capteur(Lax, Lay, 'Ou', 1);
              break;
            case 6:
              Cree_Capteur(Lax, Lay, 'Inhibition', 1);
              break;
            case 7:
              Cree_Capteur(Lax, Lay, 'A_Galet_V', 1);
              Pasbon = true;
              for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {if ((Math.abs((Verin[Pour3].X - (Capteur[Nb_Capteur].X - DLargeur / 3 - DLargeur / 8))) < 15)
                && (Capteur[Nb_Capteur].Y > Verin[Pour3].Y - (Maxtige - 1) * L_Bout - VL_Tige - 1.5 * L_Bout - 15)
                && (Capteur[Nb_Capteur].Y < Verin[Pour3].Y - (Mintige - 1) * L_Bout - VL_Tige - 1.5 * L_Bout + 10)) {Pasbon = false}}
    
              if (Pasbon) {
                Affiche_Capteur(Nb_Capteur, '#FF0000', true);
                alert('Этот концевой выключатель, похоже, не может эксплуатироваться существующим водителем  !', '(pas) Pfff', MB_OK + MB_ICONEXCLAMATION + MB_DEFBUTTON1 + MB_APPLMODAL);
              }
              break;
          }
          break;
        case 'Une_Alim':
          Cree_Alimentation(Lax, Lay);
          break;
        case 'Une_Alim_Pilote':
          Cree_Alim_Pilote(Lax, Lay);
          break;
        case 'Un_Carrefour_Pilote':
          Cree_Carrefour_Pilote(Lax, Lay);
          break;
        case 'Un_Carrefour':
          Cree_Carrefour(Lax, Lay);
          break;
        case 'Une_Memoire':
          Cree_Memoire(Lax, Lay, 1);
          break;
        case 'Un_Sequenceur':
          requete = '9';
          while ((requete.length != 1) || !(['2', '3', '4', '5', '6', '7', '8'].includes(requete))) { requete = Ed('Ведите количество шагов (от 2 до 8)', '', true);}
          Cree_Sequenceur(Lax, Lay, parseInt(requete));
          break;
    
      }*/
    }
    
    //Добавить объект2
    function Ajoute_Objet2(Objet, Celui_La) {  //
    
        Immonde_rustine_double_v =false;
        Immonde_rustine_galet_v =false;
        if (Objet == 'Un_V') {if (Verin[Celui_La].Modele == 'Double_V') {Immonde_rustine_double_v =true}}
        if (Objet == 'Un_Cap') {if (Capteur[Celui_La].Modele == 'A_Galet_V') {Immonde_rustine_galet_v =true}}
        //feuille = form1.image1.canvas;
        Nb_Verin = Vieux_Nb_Verin;
        Nb_Distributeur = Vieux_Nb_Distributeur;
        Nb_Capteur = Vieux_Nb_Capteur;
        Nb_Alimentation = Vieux_Nb_Alim;
        Nb_Alim_Pilote = Vieux_Nb_Alim_Pilote;
        Nb_Carrefour_Pilote = Vieux_Nb_Carrefour_Pilote;
        Nb_Carrefour = Vieux_Nb_Carrefour;
        Nb_Commande = Vieux_Nb_Commande;
        Nb_Memoire = Vieux_Nb_Memoire;
        Nb_Sequenceur = Vieux_Nb_Sequenceur;
        Nb_Texte = Vieux_Nb_Texte;
        Raz_Vieux();
        Facteur = Vieux_Facteur;
        ClearDevice();
        if (Objet == 'Rien') {
          Redess(false);
          PetitMenu('#FFFFFF','Pfff');
          return false;
        }
        //Lax =150;
        //Lay =150;
        Redess(false);
        PetitMenu('#A6CAF0','<Новый Компонент>   Положение компонента ?');
        
        
        if ((Objet=='Un_Cap') && ( [4,5,6].includes(Celui_La-Nb_Capteur) ))
        {
          Quoi_Donc ='Une_Cellule';
          Objet2 = Objet;
          Quoi_Donc2 = Quoi_Donc;
          //Lax2 = Lax;
          //Lay2 = Lay;
          //Ou_Que(Lax,Lay,false,Quoi_Donc);

        } else
        {
          Quoi_Donc = Objet;
          Objet2 = Objet;
          Quoi_Donc2 = Quoi_Donc;
          //Lax2 = Lax;
          //Lay2 = Lay;
          //Ou_Que(Lax,Lay,false,Quoi_Donc);
        }
        Immonde_rustine_double_v =false;
        Immonde_rustine_galet_v =false;
        
    }
    
    //Добавить объект3
    function Ajoute_Objet3(Objet, Lax, Lay, Quoi_Donc, Celui_La ) {  //
    
    if( Quoi_Donc == 'Ouste') {return false};
      switch (Objet) {
        case 'Un_V':
          Cree_Verin(Lax, Lay, Verin[Celui_La].Modele);
          break;
        case 'Un_D':
    
          Celui_La = Celui_La - Nb_Distributeur;
    
          switch (Celui_La) {
            case 1:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 2:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 3:
              Cree_Distributeur(Lax, Lay, '_3_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 4:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 5:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 6:
              Cree_Distributeur(Lax, Lay, '_4_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 7:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 8:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Pilote_Gauche', 'Ressort_Droit', 1);
              break;
            case 9:
              Cree_Distributeur(Lax, Lay, '_5_2', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 10:
              Cree_Distributeur(Lax, Lay, '_2_2', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 11:
              Cree_Distributeur(Lax, Lay, '_2_2_', 'Poussoir_Gauche', 'Scie_Droite', 1);
              break;
            case 12:
              Cree_Distributeur(Lax, Lay, '_2_2', 'Poussoir_Gauche', 'Ressort_Droit', 1);
              break;
            case 13:
              Cree_Distributeur(Lax, Lay, '_4_3', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
            case 14:
              Cree_Distributeur(Lax, Lay, '_5_3', 'Pilote_Gauche', 'Pilote_Droit', 1);
              break;
          }
          break;
        case 'Un_Cap':
          Celui_La = Celui_La - Nb_Capteur;
          switch (Celui_La) {
            case 1:
              Cree_Capteur(Lax, Lay, 'A_Poussoir', 1);
              break;
            case 2:
              Cree_Capteur(Lax, Lay, 'A_Poussoir_Bistable', 1);
              break;
            case 3:
              Cree_Capteur(Lax, Lay, 'A_Galet', 1);
              Pasbon = true;
    
              for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {if ((Lax > Verin[Pour3].X + (0) * L_Bout + VL_Tige + 2 * L_Bout - 13) &&
                (Lax < Verin[Pour3].X + (9) * L_Bout + VL_Tige + 2 * L_Bout + 13) && ((Verin[Pour3].Y - Lay) < 0) &&
                (Math.abs(Verin[Pour3].Y - Lay) < 40)) { Pasbon = false}}
    
              if (Pasbon) {
              Affiche_Capteur(Nb_Capteur, '#FF0000', true);
              alert('Этот концевой выключатель, похоже, не может эксплуатироваться существующим водителем  !', '(pas) Pfff');
              }
              
              break;
            case 4:
              Cree_Capteur(Lax, Lay, 'Et', 1);
              break;
            case 5:
              Cree_Capteur(Lax, Lay, 'Ou', 1);
              break;
            case 6:
              Cree_Capteur(Lax, Lay, 'Inhibition', 1);
              break;
            case 7:
              Cree_Capteur(Lax, Lay, 'A_Galet_V', 1);
              Pasbon = true;
              for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {if ((Math.abs((Verin[Pour3].X - (Capteur[Nb_Capteur].X - DLargeur / 3 - DLargeur / 8))) < 15)
                && (Capteur[Nb_Capteur].Y > Verin[Pour3].Y - (Maxtige - 1) * L_Bout - VL_Tige - 1.5 * L_Bout - 15)
                && (Capteur[Nb_Capteur].Y < Verin[Pour3].Y - (Mintige - 1) * L_Bout - VL_Tige - 1.5 * L_Bout + 10)) {Pasbon = false}}
    
              if (Pasbon) {
                Affiche_Capteur(Nb_Capteur, '#FF0000', true);
                alert('Этот концевой выключатель, похоже, не может эксплуатироваться существующим водителем  !', '(pas) Pfff');
              }
              break;
          }
          break;
        case 'Une_Alim':
          Cree_Alimentation(Lax, Lay);
          break;
        case 'Une_Alim_Pilote':
          Cree_Alim_Pilote(Lax, Lay);
          break;
        case 'Un_Carrefour_Pilote':
          Cree_Carrefour_Pilote(Lax, Lay);
          break;
        case 'Un_Carrefour':
          Cree_Carrefour(Lax, Lay);
          break;
        case 'Une_Memoire':
          Cree_Memoire(Lax, Lay, 1);
          break;
        case 'Un_Sequenceur':
          requete = '9';
          while ((requete.length != 1) || !(['2', '3', '4', '5', '6', '7', '8'].includes(requete))) { requete = Ed('Ведите количество шагов (от 2 до 8)', '', true);}
          Cree_Sequenceur(Lax, Lay, parseInt(requete));
          break;
    
      }
    }

//Точки объекта
function Pointe_Objet(Objet, Co) {  //
    var Point = Array[1, 2];
    var Pour = 0;
    var X = 0;
    var Y = 0;
    var Pour2 = 0;
    var Combien = 0;
    var Di = 0;
    var D = 0;
    var Xd = 0;
    var Yd = 0;
    var Nombre = 0;
    var C = '';
    var PourPt = 0;
    var Prox = 0;
    var Acote = true;
  
    /*//Создание курсора для рисования
    function Croix(X, Y) {  //X,Y - координаты
      //SetLinemode(pmnot);
      if (Objet != 'Action') {  //Проверить
        Ligne(X, Y - 50, X, Y + 50);
        Ligne(X - 50, Y, X + 50, Y);
      }
      //setlinemode(pmCopy);
    }*/
  
  
  
    function PaveP(X, Y) {  //X,Y - координаты
      NPave(X, Y, Co);
      if (Nb_Point < 200) { Nb_Point++ }
      Les_points[Nb_Point] [1] = X * Facteur;
      Les_points[Nb_Point] [2] = Y * Facteur;
    }
  
  
    funcCursor('pointer');  //Курсор в виде руки
    Acote = false;
    if (Objet == 'Action') { Prox = 13 } else { Prox = 10 } //Проверить
    Nb_Point = 0;
    Couleur(Co);
    if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
      for (let Pour = Vieux_Nb_Alim + 1; Pour <= Nb_Alimentation; Pour++) { PaveP(AliMentation[Pour].X, AliMentation[Pour].Y) }
      for (let Pour = Vieux_Nb_Alim_Pilote + 1; Pour <= Nb_Alim_Pilote; Pour++) { PaveP(Alim_Pilote[Pour].X, Alim_Pilote[Pour].Y) }
      for (let Pour = Vieux_Nb_Verin + 1; Pour <= Nb_Verin; Pour++) { PaveP(Verin[Pour].X, Verin[Pour].Y) }
      for (let Pour = Vieux_Nb_Memoire + 1; Pour <= Nb_Memoire; Pour++) { PaveP(Memoire[Pour].X, Memoire[Pour].Y) }
      for (let Pour = Vieux_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) { PaveP(Sequenceur[Pour].X, Sequenceur[Pour].Y) }
      for (let Pour = Vieux_Nb_Carrefour + 1; Pour <= Nb_Carrefour; Pour++) { PaveP(Carrefour[Pour].X, Carrefour[Pour].Y) }
      for (let Pour = Vieux_Nb_Carrefour_Pilote + 1; Pour <= Nb_Carrefour_Pilote; Pour++) { PaveP(Carrefour_Pilote[Pour].X, Carrefour_Pilote[Pour].Y) }
      for (let Pour = 1; Pour <= Nb_Texte; Pour++) { PaveP(Texte[Pour].X, Texte[Pour].Y) }
    }
    if (Objet == 'Tout') {
      for (let Pour = Vieux_Nb_Canal + 1; Pour <= Nb_Canal; Pour++) { PaveP((Canal[Pour].ParcoursX[2] + Canal[Pour].ParcoursX[1]) / 2, (Canal[Pour].ParcoursY[2] + Canal[Pour].ParcoursY[1]) / 2) }
      for (let Pour = Vieux_Nb_Canal_Pilote + 1; Pour <= Nb_Canal_Pilote; Pour++) { PaveP((Canal_Pilote[Pour].ParcoursX[2] + Canal_Pilote[Pour].ParcoursX[1]) / 2, (Canal_Pilote[Pour].ParcoursY[2] + Canal_Pilote[Pour].ParcoursY[1]) / 2) }
    }
    if ((Objet == 'Action') || (Objet = 'Tout') || (Objet == 'Toutsaufcanal')) {
      for (let Pour = Vieux_Nb_Distributeur + 1; Pour <= Nb_Distributeur; Pour++) {
        if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal') || (['Poussoir_Gauche'].includes(Distributeur[Pour].Com[1].Quoi))) { PaveP(Distributeur[Pour].X, Distributeur[Pour].Y) }
      }
    }
  
    if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
      for (let Pour = Vieux_Nb_Capteur + 1; Pour <= Nb_Capteur; Pour++) {
        if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal') || (['A_Poussoir', 'A_Levier', 'A_Poussoir_Bistable', 'A_Levier_Bistable'].includes(Capteur[Pour].Modele))) { PaveP(Capteur[Pour].X, Capteur[Pour].Y) }
      }
    }
  
    X = X_s;
    Y = Y_s;
  
    if (Objet == 'Action') { PaveP(20, 30) }
    //while (true) {
  
      if (Objet == 'Action') { Affiche_Temps(20, 30, false) }
      if (Acote) { funcCursor('pointer')} else { funcCursor('default') } // Курсор в виде руки или стрелки
      Gauche = false;
      Droite = false;
      Objet2 = Objet; //Передать данные в другую функцию
      Prox2 = Prox; //Передать данные в другую функцию
      //return false;
      //while ((!Gauche) && (!Droite)) { MouseClick() }
  
     /* Acote = false;
      PourPt = 1;
      while (PourPt <= Nb_Point) {   //Точки выбора компонентов
  
        Di = Math.sqrt(Math.pow((1.0 * X_s - Les_points[PourPt, 1]), 2) + Math.pow((1.0 * Y_s - Les_points[PourPt, 2]), 2));
        if ((Di < 5) && (Di > 1)) {
          
          Acote = true;
          X_s = Math.round(Les_points[PourPt, 1]);
          Y_s = Math.round(Les_points[PourPt, 2]);
          PourPt = Nb_Point + 1;
        }
        PourPt++;
      }
      X = X_s;
      Y = Y_s;
  
      if (Droite) {    //Нажата правая кнопка мыши - выход
  
        Objet = 'Rien';
        Celui_La = 0;
        funcCursor('default');   //Курсор в виде стрелки
        return false;
      } else {
        if (Gauche) {
  
          if (Heure) {
  
            if (Dist(20, 30)) {
  
              Celui_La = 255;
              Objet = 'Temps';
              return false;
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Alim + 1; Pour <= Nb_Alimentation; Pour++) {
  
              if (Dist(AliMentation[Pour].X, AliMentation[Pour].Y)) {
  
                Objet = 'Une_Alim';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Carrefour + 1; Pour <= Nb_Carrefour; Pour++) {
              if (Dist(Carrefour[Pour].X, Carrefour[Pour].Y)) {
                Objet = 'Un_Carrefour';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Carrefour_Pilote + 1; Pour <= Nb_Carrefour_Pilote; Pour++) {
              if (Dist(Carrefour_Pilote[Pour].X, Carrefour_Pilote[Pour].Y)) {
                Objet = 'Un_Carrefour_Pilote';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Alim_Pilote + 1; Pour <= Nb_Alim_Pilote; Pour++) {
              if (Dist(Alim_Pilote[Pour].X, Alim_Pilote[Pour].Y)) {
                
                Objet = 'Une_Alim_Pilote';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Distributeur + 1; Pour <= Nb_Distributeur; Pour++) {
              if (Dist(Distributeur[Pour].X, Distributeur[Pour].Y)) {
                Objet = 'Un_D';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Verin + 1; Pour <= Nb_Verin; Pour++) {
              if (Dist(Verin[Pour].X, Verin[Pour].Y)) {
                Objet = 'Un_V';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Capteur + 1; Pour <= Nb_Capteur; Pour++) {
              if (Dist(Capteur[Pour].X, Capteur[Pour].Y)) {
                Objet = 'Un_Cap';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Memoire + 1; Pour <= Nb_Memoire; Pour++) {
              if (Dist(Memoire[Pour].X, Memoire[Pour].Y)) {
                Objet = 'Une_Memoire';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) {
              if (Dist(Sequenceur[Pour].X, Sequenceur[Pour].Y)) {
                Objet = 'Un_Sequenceur';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = 1; Pour <= Nb_Texte; Pour++) {
              if (Dist(Texte[Pour].X, Texte[Pour].Y)) {
                Objet = 'Un_Texte';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if (Objet == 'Tout') {
            for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
              if (Dist((Canal[Pour].ParcoursX[2] + Canal[Pour].ParcoursX[1]) / 2, (Canal[Pour].ParcoursY[2] + Canal[Pour].ParcoursY[1]) / 2)) {
                Objet = 'Un_Canal';
                Celui_La = Pour;
                return false;
              }
            }
          }
  
          if (Objet == 'Tout') {
            for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
              if (Dist((Canal_Pilote[Pour].ParcoursX[2] + Canal_Pilote[Pour].ParcoursX[1]) / 2, (Canal_Pilote[Pour].ParcoursY[2] + Canal_Pilote[Pour].ParcoursY[1]) / 2)) {
                Objet = 'Un_Canal_Pilote';
                Celui_La = Pour;
                return false;
              }
            }
          }
        }
      }
    }*/
    //Couleur('#000000');
    //funcCursor('default');   //Курсор в виде стрелки
  }
  
  //Точки объекта2
  function Pointe_Objet2( Objet, Prox ) {  //
    var Di = 0;
    var PourPt = 0;
    //var Prox = 0; 
  
      Acote = false;
      PourPt = 1;
  
    //Дистанция
    function Dist(X, Y) {  //X,Y - координаты
      if (Math.sqrt(Math.pow(X_s - X * Facteur, 2) + Math.pow(Y_s - Y * Facteur, 2)) < Prox) { return true } else { return false }
    }
  
  
      while (PourPt <= Nb_Point) {   //Точки выбора компонентов
  
        Di = Math.sqrt(Math.pow((1.0 * X_s - Les_points[PourPt] [1]), 2) + Math.pow((1.0 * Y_s - Les_points[PourPt] [2]), 2));
        //console.log("Расстояние", Di, "x=", Les_points[PourPt] [1], "y=", Les_points[PourPt] [2] );
        
        if ((Di < 5) && (Di > 1)) {
          
          Acote = true;
          X_s = Math.round(Les_points[PourPt] [1]);
          Y_s = Math.round(Les_points[PourPt] [2]);
          PourPt = Nb_Point + 1;
        }
        PourPt++;
      }
      X = X_s;
      Y = Y_s;

  
      if (Droite) {    //Нажата правая кнопка мыши - выход
  
        Objet = 'Rien';
        Celui_La = 0;
        Objet2 = Objet;
        Celui_La2 = Celui_La;
        
        funcCursor('default');   //Курсор в виде стрелки
        return false;
      } else {
        if (Gauche) {
  
          if (Heure) {
  
            if (Dist(20, 30)) {
  
              Celui_La = 255;
              Objet = 'Temps';
              Celui_La2 = Celui_La;
              Objet2 = Objet;
              return false;
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Alim + 1; Pour <= Nb_Alimentation; Pour++) {
  
              if (Dist(AliMentation[Pour].X, AliMentation[Pour].Y)) {
  
                Objet = 'Une_Alim';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Carrefour + 1; Pour <= Nb_Carrefour; Pour++) {
              if (Dist(Carrefour[Pour].X, Carrefour[Pour].Y)) {
                Objet = 'Un_Carrefour';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Carrefour_Pilote + 1; Pour <= Nb_Carrefour_Pilote; Pour++) {
              if (Dist(Carrefour_Pilote[Pour].X, Carrefour_Pilote[Pour].Y)) {
                Objet = 'Un_Carrefour_Pilote';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Alim_Pilote + 1; Pour <= Nb_Alim_Pilote; Pour++) {
              if (Dist(Alim_Pilote[Pour].X, Alim_Pilote[Pour].Y)) {
                Objet = 'Une_Alim_Pilote';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Distributeur + 1; Pour <= Nb_Distributeur; Pour++) {
              if (Dist(Distributeur[Pour].X, Distributeur[Pour].Y)) {
                Objet = 'Un_D';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Verin + 1; Pour <= Nb_Verin; Pour++) {
              if (Dist(Verin[Pour].X, Verin[Pour].Y)) {
                Objet = 'Un_V';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Capteur + 1; Pour <= Nb_Capteur; Pour++) {
              if (Dist(Capteur[Pour].X, Capteur[Pour].Y)) {
                Objet = 'Un_Cap';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Memoire + 1; Pour <= Nb_Memoire; Pour++) {
              if (Dist(Memoire[Pour].X, Memoire[Pour].Y)) {
                Objet = 'Une_Memoire';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = Vieux_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) {
              if (Dist(Sequenceur[Pour].X, Sequenceur[Pour].Y)) {
                Objet = 'Un_Sequenceur';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
            for (let Pour = 1; Pour <= Nb_Texte; Pour++) {
              if (Dist(Texte[Pour].X, Texte[Pour].Y)) {
                Objet = 'Un_Texte';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if (Objet == 'Tout') {
            for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
              if (Dist((Canal[Pour].ParcoursX[2] + Canal[Pour].ParcoursX[1]) / 2, (Canal[Pour].ParcoursY[2] + Canal[Pour].ParcoursY[1]) / 2)) {
                Objet = 'Un_Canal';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
  
          if (Objet == 'Tout') {
            for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
              if (Dist((Canal_Pilote[Pour].ParcoursX[2] + Canal_Pilote[Pour].ParcoursX[1]) / 2, (Canal_Pilote[Pour].ParcoursY[2] + Canal_Pilote[Pour].ParcoursY[1]) / 2)) {
                Objet = 'Un_Canal_Pilote';
                Celui_La = Pour;
                Objet2 = Objet;
                Celui_La2 = Celui_La;
                return false;
              }
            }
          }
        }
      }
  }    