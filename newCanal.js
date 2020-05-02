//Создание силового канала


function Entre_Canal() {  //Присвоение точек каналу
   
    if (Canal[Nb_Canal].NbPoint > 9) {
        Canal[Nb_Canal].NbPoint = 0;
        return false;  //заместо Encore =false; и Exit; 
    }


    if (Debut) {
        Canal[Nb_Canal].Bout[1] = Object.assign({},Branche2);
        Canal[Nb_Canal].NbPoint++;
        Canal[Nb_Canal].ParcoursX[Canal[Nb_Canal].NbPoint] = XL;   //Ввод первой точки
        Canal[Nb_Canal].ParcoursY[Canal[Nb_Canal].NbPoint] = YL;
    }

    if (Ext) {                      //Если конечная точка то присвоить значения
        XFin = XL;
        YFin = YL;
        Canal[Nb_Canal].Bout[2] = Object.assign({},Branche2);
    }

    if (!Debut) {                   //Если 2 точка, то нарисовать 1 линию

        if (Math.abs(Old_XL - XL) <= (Math.abs(Old_YL - YL))) { XL = Old_XL } else { YL = Old_YL; }
        Ligne(XL, YL, Old_XL, Old_YL);
        Canal[Nb_Canal].NbPoint++;
        Canal[Nb_Canal].ParcoursX[Canal[Nb_Canal].NbPoint] = XL;   //Ввод второй точки
        Canal[Nb_Canal].ParcoursY[Canal[Nb_Canal].NbPoint] = YL;
    }

    Old_XL = XL;                    //Присвоить значение введенной точки как предыдущую введенную точку
    Old_YL = YL;

    if (Ext) {                      //Если конечная точка, то нарисовать 2 линию 
        Ligne(XL, YL, XFin, YFin);
        Canal[Nb_Canal].NbPoint++;
        Canal[Nb_Canal].ParcoursX[Canal[Nb_Canal].NbPoint] = XFin;
        Canal[Nb_Canal].ParcoursY[Canal[Nb_Canal].NbPoint] = YFin;
    }

    Debut = false;                  //Ввод 1 точки закончен
    

}


//Создание канала управления
function Entre_Canal_Pilote(Encore) {  //
   
        if (Canal_Pilote[Nb_Canal_Pilote].NbPoint > 9) {
            Canal_Pilote[Nb_Canal_Pilote].NbPoint = 0;
            //Encore =false;
            return false;
        }
      

        if (Debut) {
            Canal_Pilote[Nb_Canal_Pilote].Bout[1] = Object.assign({},Branche2);
            Canal_Pilote[Nb_Canal_Pilote].NbPoint++;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursX[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = XL;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursY[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = YL;
        }

        if (Ext) {
            XFin = XL;
            YFin = YL;
            Canal_Pilote[Nb_Canal_Pilote].Bout[2] = Object.assign({},Branche2);
        }

        if (!Debut) {

            if (Math.abs(Old_XL - XL) <= (Math.abs(Old_YL - YL))) { XL = Old_XL } else { YL = Old_YL }
            Ligne(XL, YL, Old_XL, Old_YL);
            Canal_Pilote[Nb_Canal_Pilote].NbPoint++;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursX[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = XL;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursY[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = YL;
        }

        Old_XL = XL;
        Old_YL = YL;

        if (Ext) {
            Ligne(XL, YL, XFin, YFin);
            Canal_Pilote[Nb_Canal_Pilote].NbPoint++;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursX[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = XFin;
            Canal_Pilote[Nb_Canal_Pilote].ParcoursY[Canal_Pilote[Nb_Canal_Pilote].NbPoint] = YFin;
        }

        Debut = false;

   
}
















//Создание канала
function Cree_CanalZero() {  //Обнуление нового канала (для ввода новых данных)


    var Encore = true;

    //    Encore = true;
    if (Nb_Canal == Max_Canal) { Encore = false }
    //while (Encore) {
    Nb_Canal++;
    NewCanal(Nb_Canal);

}

function Cree_Canal() {  //Запись канала после введения данных


    //Entre_Canal(Encore);
    var Pour = 0;
    var Pouet = false;
    var Encore = true;

    if (Canal[Nb_Canal].NbPoint == 0) { Pouet = true }
    Canal[Nb_Canal].X = Canal[Nb_Canal].ParcoursX[1];
    Canal[Nb_Canal].Y = Canal[Nb_Canal].ParcoursY[1];
    if (!Pouet) {
        for (let Pour = 1; Pour <= 2; Pour++) {

            if ((Canal[Nb_Canal].Bout[Pour].Quoi == 'Une_Alim') && (Canal[Nb_Canal].Bout[3 - Pour].Quoi == 'Une_Alim')) { Pouet = true }
            if ((Canal[Nb_Canal].Bout[Pour].Quoi == 'Un_D') && (Canal[Nb_Canal].Bout[3 - Pour].Quoi == 'Un_D') && (Canal[Nb_Canal].Bout[1].Lequel == Canal[Nb_Canal].Bout[2].Lequel)) { Pouet = true }
            if (Canal[Nb_Canal].Bout[Pour].Quoi == 'Un_V') {

                if (Canal[Nb_Canal].Bout[3 - Pour].Quoi == 'Un_V') { Pouet = true }
                if ((Verin[Canal[Nb_Canal].Bout[Pour].Lequel].Modele == 'Simple_R') && (Canal[Nb_Canal].Bout[Pour].Branchement == 2)) { Pouet = true }
                if ((Verin[Canal[Nb_Canal].Bout[Pour].Lequel].Modele == 'R_Simple') && (Canal[Nb_Canal].Bout[Pour].Branchement == 1)) { Pouet = true }
            }
        }
    }
    if (Pouet) { Nb_Canal-- }  //Для отладки закоментировано (временно)
    if (Nb_Canal == Max_Canal) { Encore = false }

}











//Создание канала управления
function Cree_CanalZero_Pilote() {  //
    var Pour = 0;
    //var Pouet = false;
    var Encore = true;

    //    Encore = true;
    if (Nb_Canal_Pilote == Max_Canal_Pilote) { Encore = false }
    //while (Encore) {
    Nb_Canal_Pilote++;
    NewCanal_Pilote(Nb_Canal_Pilote);
   
}

function Cree_Canal_Pilote() {  //Запись канала после введения данных
    //Entre_Canal_Pilote(Encore);
    var Pouet = false;
    var Encore = true;

    if (Canal_Pilote[Nb_Canal_Pilote].NBPoint == 0) { Pouet = true }
    Canal_Pilote[Nb_Canal_Pilote].X = Canal_Pilote[Nb_Canal_Pilote].ParcoursX[1];
    Canal_Pilote[Nb_Canal_Pilote].Y = Canal_Pilote[Nb_Canal_Pilote].ParcoursY[1];
    if (!Pouet) {
        for (let Pour = 1; Pour <= 2; Pour++) {

            if ((Canal_Pilote[Nb_Canal_Pilote].Bout[Pour].Quoi == 'Une_Alim_Pilote') && (Canal_Pilote[Nb_Canal_Pilote].Bout[3 - Pour].Quoi == 'Une_Alim_Pilote')) (Pouet = true)
            if ((Canal_Pilote[Nb_Canal_Pilote].Bout[Pour].Quoi == 'Un_Cap') && (Canal_Pilote[Nb_Canal_Pilote].Bout[3 - Pour].Quoi == 'Un_Cap') && (Canal_Pilote[Nb_Canal_Pilote].Bout[1].Lequel == Canal_Pilote[Nb_Canal_Pilote].Bout[2].Lequel)) (Pouet = true)
        }
    }
    if (Pouet) { Nb_Canal_Pilote-- }  //Для отладки закоментировано (временно)
    if (Nb_Canal_Pilote == Max_Canal_Pilote) { Encore = false }
}


















function EntrepointView() {  // Вывод на экран каналов
  


    //Нарисовать красный прямоугольник (силовой линии)
    function Entre_Pave(X, Y) {  //X, Y - координаты

        if (Nb_Point < 200) { Nb_Point++ }
        Les_points[Nb_Point][1] = X;
        Les_points[Nb_Point][2] = Y;
        if (Puissance) { NPave(X, Y, '#FF0000') } else { NPave(X, Y, '#FF00FF') }
    }

    funcCursor('crosshair'); //Курсор в виде креста
    Nb_Point = 0;
    if (Puissance) {

        for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { Entre_Pave(AliMentation[Pour].X, AliMentation[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
            switch (Distributeur[Pour].Modele) {
                case '_3_2':
                    for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Entre_Pave(Distributeur[Pour].ExtX[Pour2], Distributeur[Pour].ExtY[Pour2]) }
                    Entre_Pave(Distributeur[Pour].ExtX[4], Distributeur[Pour].ExtY[4]);
                    break;
                case '_5_2':
                case '_5_3':
                    for (let Pour2 = 1; Pour2 <= 5; Pour2++) { Entre_Pave(Distributeur[Pour].ExtX[Pour2], Distributeur[Pour].ExtY[Pour2]) }
                    break;
                case '_4_2':
                case '_4_3':
                    for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Entre_Pave(Distributeur[Pour].ExtX[Pour2], Distributeur[Pour].ExtY[Pour2]) }
                    break;
                case '_2_2':
                case '_2_2_':
                    Entre_Pave(Distributeur[Pour].ExtX[1], Distributeur[Pour].ExtY[1]);
                    Entre_Pave(Distributeur[Pour].ExtX[4], Distributeur[Pour].ExtY[4]);
                    break;
            }
        }
        for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Entre_Pave(Carrefour[Pour].X, Carrefour[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Verin; Pour++) {

            Entre_Pave(Verin[Pour].EntreeX[1], Verin[Pour].EntreeY[1]);
            if (['Double2', 'Double_T', 'Double_A', 'Double_T_A', 'Double_V'].includes(Verin[Pour].Modele)) { Entre_Pave(Verin[Pour].EntreeX[2], Verin[Pour].EntreeY[2]) }
        }
    } else {
        for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Entre_Pave(Alim_Pilote[Pour].X, Alim_Pilote[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Entre_Pave(Carrefour_Pilote[Pour].X, Carrefour_Pilote[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
            if (Distributeur[Pour].Com[1].Quoi == 'Pilote_Gauche') { Entre_Pave(Distributeur[Pour].ExtX[-1], Distributeur[Pour].ExtY[-1]) }
            if (Distributeur[Pour].Com[2].Quoi == 'Pilote_Droit') { Entre_Pave(Distributeur[Pour].ExtX[0], Distributeur[Pour].ExtY[0]) }
        }
        for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Entre_Pave(Capteur[Pour].ExtX[Pour2], Capteur[Pour].ExtY[Pour2]) } }
        for (let Pour = 1; Pour <= Nb_Memoire; Pour++) { for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Entre_Pave(Memoire[Pour].ExtX[Pour2], Memoire[Pour].ExtY[Pour2]) } }
        for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
            for (let Pour2 = 1; Pour2 <= Sequenceur[Pour].Combien; Pour2++) {
                Entre_Pave(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]);
                Entre_Pave(Sequenceur[Pour].ExtX[Pour2 + 8], Sequenceur[Pour].ExtY[Pour2 + 8]);
            }
            for (let Pour2 = 17; Pour2 <= 22; Pour2++) { Entre_Pave(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]) }
        }
    }
}




function DRA(X_s, Y_s) {  // Ввод точки канала
    var Distance = 100000;
    

    //Расстояние определение
    function Dista(X, Y) {  //X, Y - координаты

        return Math.sqrt(Math.pow(X_s - X, 2) + Math.pow(Y_s - Y, 2));
    }


    PourPt = 1;
    while (PourPt <= Nb_Point) {  //Ввести координаты точки линии (силовой или управления)
        Di = Math.sqrt(Math.pow(X_s - (Les_points[PourPt][1]) * Facteur, 2) + Math.pow(Y_s - (Les_points[PourPt][2]) * Facteur, 2));
        if ((Di < 4) && (Di > 1)) { //было от 4 до 1
            X_s = Math.round(Les_points[PourPt][1]);
            Y_s = Math.round(Les_points[PourPt][2]);
            PourPt = Nb_Point + 1;
        }
        PourPt++;
    }
    //Croix(X, Y);
    X = X_s;
    Y = Y_s;
    if (Droite) {
        Entrepoint = false;
        funcCursor('default');   //Курсор в виде стрелки
        //Exit;
        return false;
    } else {
        if (Gauche) {

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) {
                    D = Dista(AliMentation[Pour].X, AliMentation[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = AliMentation[Pour].X;  //Присвоить координаты силовой линии
                        Yd = AliMentation[Pour].Y;
                        Branche2.Quoi = 'Une_Alim';
                        Branche2.Lequel = Pour;
                        Branche2.Branchement = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) {
                    D = Dista(Carrefour[Pour].X, Carrefour[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = Carrefour[Pour].X;     //Присвоить координаты  линии управления
                        Yd = Carrefour[Pour].Y;
                        Branche2.Quoi = 'Un_Carrefour';
                        Branche2.Lequel = Pour;
                        Branche2.Branchement = 0;
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) {
                    D = Dista(Alim_Pilote[Pour].X, Alim_Pilote[Pour].Y);
                    if (D < Distance) {
                        Distance = D;
                        Xd = Alim_Pilote[Pour].X;    //Присвоить координаты силовой линии (пересечение)
                        Yd = Alim_Pilote[Pour].Y;
                        Branche2.Quoi = 'Une_Alim_Pilote';
                        Branche2.Lequel = Pour;
                        Branche2.Branchement = 0;
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) {
                    D = Dista(Carrefour_Pilote[Pour].X, Carrefour_Pilote[Pour].Y);
                    if (D < Distance) {
                        Distance = D;
                        Xd = Carrefour_Pilote[Pour].X;  //Присвоить координаты  линии управления (пересечение)
                        Yd = Carrefour_Pilote[Pour].Y;
                        Branche2.Quoi = 'Un_Carrefour_Pilote';
                        Branche2.Lequel = Pour;
                        Branche2.Branchement = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
                    if (Distributeur[Pour].Modele == '_5_2') { Combien = 5 } else { Combien = 4 }
                    for (let Pour2 = 1; Pour2 <= Combien; Pour2++) {
                        D = Dista(Distributeur[Pour].ExtX[Pour2], Distributeur[Pour].ExtY[Pour2]);

                        if ((!((Pour2 == 3) && (Distributeur[Pour].Modele == '_3_2'))) && (!(([2, 3].includes(Pour2)) && (['_2_2', '_2_2_'].includes(Distributeur[Pour].Modele))))) {
                            if (D < Distance) {
                                Distance = D;
                                Xd = Distributeur[Pour].ExtX[Pour2];  //Присвоить координаты  Distributeur
                                Yd = Distributeur[Pour].ExtY[Pour2];
                                Branche2.Quoi = 'Un_D';
                                Branche2.Lequel = Pour;
                                Branche2.Branchement = Pour2;
                            }
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
                    for (let Pour2 = -1; Pour2 <= 0; Pour2++) {
                        D = Dista(Distributeur[Pour].ExtX[Pour2], Distributeur[Pour].ExtY[Pour2]);

                        if (!((Pour2 == 3) && (Distributeur[Pour].Modele == '_3_2'))) {
                            if (D < Distance) {
                                Distance = D;
                                Xd = Distributeur[Pour].ExtX[Pour2];  //Присвоить координаты  Distributeur (пересечение)
                                Yd = Distributeur[Pour].ExtY[Pour2];
                                Branche2.Quoi = 'Un_D';
                                Branche2.Lequel = Pour;
                                Branche2.Branchement = Pour2;
                            }
                        }
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                        D = Dista(Verin[Pour].EntreeX[Pour2], Verin[Pour].EntreeY[Pour2]);

                        if (D < Distance) {
                            Distance = D;
                            Xd = Verin[Pour].EntreeX[Pour2];    //Присвоить координаты  Verin
                            Yd = Verin[Pour].EntreeY[Pour2];
                            Branche2.Quoi = 'Un_V';    //Тип компонента (гидроцилиндр)
                            Branche2.Lequel = Pour;    //Номер  гидроцилиндра
                            Branche2.Branchement = Pour2;  //Номер точки присоединения к гидроцилиндру
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 3; Pour2++) {
                        D = Dista(Capteur[Pour].ExtX[Pour2], Capteur[Pour].ExtY[Pour2]);

                        if (D < Distance) {
                            Distance = D;
                            Xd = Capteur[Pour].ExtX[Pour2];  //Присвоить координаты  Verin (пересечение)
                            Yd = Capteur[Pour].ExtY[Pour2];
                            Branche2.Quoi = 'Un_Cap';
                            Branche2.Lequel = Pour;
                            Branche2.Branchement = Pour2;
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
                    
                    for (let Pour2 = 1; Pour2 <= 4; Pour2++)
                    {
                        
                        D = Dista(Memoire[Pour].ExtX[Pour2], Memoire[Pour].ExtY[Pour2]);
                        if (D < Distance) {
                            Distance = D;
                            Xd = Memoire[Pour].ExtX[Pour2];   //Присвоить координаты  Memoire (пересечение)
                            Yd = Memoire[Pour].ExtY[Pour2];
                            Branche2.Quoi = 'Une_Memoire';
                            Branche2.Lequel = Pour;
                            Branche2.Branchement = Pour2;
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 22; Pour2++) {
                        D = Dista(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]);
                        if (D < Distance) {
                            Distance = D;
                            Xd = Sequenceur[Pour].ExtX[Pour2];   //Присвоить координаты  Sequenceur (пересечение)
                            Yd = Sequenceur[Pour].ExtY[Pour2];
                            Branche2.Quoi = 'Un_Sequenceur';
                            Branche2.Lequel = Pour;
                            Branche2.Branchement = Pour2;
                        }
                    }
                }
            }


            if (Distance < 6) {
                XL = Xd;
                YL = Yd;
               
                if (!Ext) { Ext = true } else { Ext = false }
            } else {
                if (!Ext) {
                  
                    XL = X_s;
                    YL = Y_s;
                    
                }
            }
        }
    }
}