function RAZ1Click2() {  //TODO: Функция изменить положение
    var Pour = 0;
    //var Objet = '';
    //Objet2 = 'Toutsaufcanal';
    Pointe_Objet2(Objet2, Prox2);
    Pour = Celui_La2;
    switch (Objet2) {
        case 'Rien':
        case 'Ouste':
            Redess(false);
            //Cestfini();
            return false;

        case 'Un_V':
            Verin[Pour].Tige = Max(( Verin[Pour].Tige + 1) % 10, 2);
            break;
        case 'Un_D':

            switch (Distributeur[Pour].Modele) {
                case '_3_2':
                case '_4_2':
                case '_5_2':
                case '_2_2':
                case '_2_2_':
                    Distributeur[Pour].Etat = Max((Distributeur[Pour].Etat + 1) % 3, 1);
                    break;
                case '_4_3':
                case '_5_3':
                    Distributeur[Pour].Etat = Max((Distributeur[Pour].Etat + 1) % 4, 1);
                    break;
            }
            break;
        case 'Un_Cap':
            if (!(['Et', 'Ou', 'Inhibition'].includes(Capteur[Pour].Modele))) { Capteur[Pour].Etat = Max((Capteur[Pour].Etat + 1) % 3, 1) }
            break;
        case 'Une_Memoire':
            Memoire[Pour].Etat = Max((Memoire[Pour].Etat + 1) % 3, 1);
            break;
        case 'Un_Sequenceur':
            Sequenceur[Pour].Etat = (Sequenceur[Pour].Etat + 1) % (Sequenceur[Pour].Combien + 1);
            break;
    }
    Redess(false);
}

function Max(a, b) {
    if (a > b) { Max2 = a } else { Max2 = b }
    return Max2
}

function Min(a, b) {
    if (a < b) { Min2 = a } else { Min2 = b }
    return Min2
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
