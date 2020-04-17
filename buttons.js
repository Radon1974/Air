//Новый компонент кнопка
function Composant1Click() {  // Добавление нового компонента
  Fichiermodifie = true;
  //Cacommence();
  Ajoute_Objet();       //Вывод на экран компонентов
  ActionMouse = 'Pointe_Objet2';  
  //feuille =form1.image1.canvas;
  //Cestfini();
}

//Текст кнопка
function Texte1Click() {  //
  //Cacommence();
  if (Nb_Texte < Max_Texte) {
    Fichiermodifie = true;
    ActionMouse = 'Texte'
    Cree_Texte();

    if (Textenter != '') {
      Nb_Texte++;
      Texte[Nb_Texte].X = Xe;
      Texte[Nb_Texte].Y = Ye;
      Texte[Nb_Texte].Le_Texte = S;
      Texte[Nb_Texte].Lataille = 1;
    }
  }
  //Cestfini();
}

//Стереть кнопка
function Efface(Sender) {  //
  //Cacommence();
  Fichiermodifie = true;
  Effacer();
  //Cestfini();
}

//Силовая цепь кнопка
function Puissance1Click() {  //
  //Cacommence();
  if (Nb_Alimentation > 0) {
    Fichiermodifie = true;
    
    Cree_CanalZero();  //Обнуление нового канала (для ввода новых данных)
    //Cree_Canal();
    Puissance = true;  //Силовая цепь активна (создание)
    PetitMenu('#FF0000', '<Силовая цепь>  Начало и конец помещены в точки присоединения, правая кнопка=Возврат');
    Ext = true;
    Debut = true;
    //Canal[Nb_Canal].NbPoint = 0;  //не нужен
    Old_XL = X_s;
    Old_YL = Y_s;

    EntrepointView();  //Вывод точек каналов (отображение на экране жирными точками)
    ActionMouse = 'DRA';   //
  } else { alert('Там нет питания (красный)', ' (pas) Pfff') }

  //Cestfini();
}

//Коммандная цепь  кнопка
function Commande1Click() {  //

  //Cacommence();
  if (Nb_Alim_Pilote > 0) {
    Fichiermodifie = true;

    Cree_CanalZero_Pilote();  //Обнуление нового канала (для ввода новых данных)
    //Cree_Canal_Pilote();
    Puissance = false;  //Командная цепь активна (создание)
    PetitMenu('#FF00FF', '<Схема управления>  Начало и конец помещены в точки присоединения, правая кнопка=Возврат');
    Ext = true;
    Debut = true;
    Old_XL = X_s;
    Old_YL = Y_s;

    EntrepointView();  //Вывод точек каналов (отображение на экране жирными точками)
    ActionMouse = 'DRA2';   //
  } else { alert('Там нет контроля мощности (фиолетовый)', ' (pas) Pfff') }
  //Cestfini();
}

//Анимация кнопка
function Anime1Click(Sender) {  //
  //Cacommence();
  Pasapas = true;
  Anime();
  //Cestfini();
}

//Мышка вверх  кнопка
function Image1MouseUp(Sender, Button, Shift, X, Y) {  //
  if (button == mbright) { Droite = false } else { Gauche = false }
  Compteursouris = 0;
}

//Новый  кнопка
function Nouveau1Click(Sender) {  //
  Super_raz();
  Facteur = 1;
  redess(false);
  Fichiermodifie = false;
}

//Распечатать кнопка
/*function Pressepapier1Click(Sender) {  //
begin
   ClipBoard.Assign(form1.Image1.picture);
end;*/

//Закрыть кнопка
function FormCloseQuery(Sender, CanClose) {  //
  Droite = true;
  if (Fichiermodifie) {
    Dialogvaleur = MessageDlg('Сохранить файл ?', mtConfirmation, [mbYes, mbno, mbcancel], 0);
    switch (Dialogvaleur) {
      case 'id_yes':
        Enregregistersous1Click(Self);
        break;
      case 'id_Cancel':
        Canclose = false;
        break;
    }
  }
}

//Выход  кнопка
function Quitter1Click(Sender) {  //
  Close();
}

//По поводу  кнопка
function Apropos1Click(Sender) {  //
  Aboutbox.copyright.caption = 'Air-simulator';
  Aboutbox.showmodal
}

//Черный и белый  кнопка
function Noiretblanc1Click(Sender) {  //
  Redess(true);
}

//
function Timer1Timer(Sender) {  //
  if (Compteursouris < 10) { Compteursouris++ }
  if (Compteursouris > 4) { if (heure) { if ((GetAsyncKeyState(VK_LBUTTON) && $8000) != 0) { Gauche = true; } } }
}

//Лупа увеличить  кнопка
function Loupe1Click(Sender) {  //
  if (Facteur > 3.5) { return false }
  Facteur = Facteur * 1.1;
  redess(false);
}

//Лупа уменьшить  кнопка
function Loupe2Click(Sender) {  //
  if (Facteur < 0.9) { return false }
  Facteur = Facteur / 1.1;
  Redess(false);
}

//Выход  кнопка
function Sortir1Click(Sender) {  //
  Droite = true;
}

//Движение  кнопка
function Dplacer1Click() {  //

  //Cacommence();
  Droite = false;
  while (!Droite) { Deplace_Objet() }
  Cestfini();
}

//Время
function Timer2Timer(Sender) {  //

  X_s = Math.round(20 * Facteur);
  Y_s = Math.round(30 * Facteur);
  Gauche = true;
}

//Продолжение кнопка
function Continu1Click(Sender) {  //
  //Cacommence();
  Pasapas = false;
  Anime();
  Pasapas = false;
  Cestfini();
}

//Выбор положения компонента кнопка
function RAZ1Click(Sender) {  //
  var Pour = 0;
  var Objet = '';

  //Cacommence();
  while (true) {

    Objet = Toutsaufcanal;
    PetitMenu(25343, '<Маневр>  Выбор компонента ?');
    Pointe_Objet(Objet, Pour, 25343);
    switch (Objet) {
      case 'Rien':
      case 'Ouste':
        Redess(false);
        Cestfini();
        return false;

      case 'Un_V':
        with (Verin[Pour]) { tige = Max((tige + 1) % 10, 2) };
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
  Cestfini();
}































var firmColorBlue = '#0079c1';
//Файл
var btnFile = {
  x: 0,
  y: 0,
  w: 45,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Новый компонент
var btnNewComponent = {
  x: 45,
  y: 0,
  w: 130,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Текст
var btnText = {
  x: 175,
  y: 0,
  w: 45,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Удалить
var btnRemove = {
  x: 220,
  y: 0,
  w: 65,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Переместить
var btnMove = {
  x: 285,
  y: 0,
  w: 100,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Силовая цепь
var btnPowerCircuit = {
  x: 385,
  y: 0,
  w: 105,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Цепь управления
var btnControlCircuit = {
  x: 490,
  y: 0,
  w: 125,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Запустить
var btnRun = {
  x: 615,
  y: 0,
  w: 80,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Увеличить
var btnIncrease = {
  x: 695,
  y: 0,
  w: 80,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Уменьшить
var btnDecrease = {
  x: 775,
  y: 0,
  w: 85,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Влево
var btnLeft = {
  x: 860,
  y: 0,
  w: 50,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Вправо
var btnRight = {
  x: 910,
  y: 0,
  w: 60,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Вверх
var btnUp = {
  x: 970,
  y: 0,
  w: 50,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Вниз
var btnDown = {
  x: 1020,
  y: 0,
  w: 45,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//Возврат
var btnReturn = {
  x: 1065,
  y: 0,
  w: 65,
  h: 30,
  r: 20,
  color: firmColorBlue
};
//О программе
var btnAbout = {
  x: 1130,
  y: 0,
  w: 100,
  h: 30,
  r: 20,
  color: firmColorBlue
};





//Нарисовать кнопки
function Button() {
  //Кнопки
  ctx.funcRoundRect(btnFile);
  ctx.funcTextCreate(btnFile.x + 5, btnFile.y + 20,
    'Файл', 'black', 10);

  ctx.funcRoundRect(btnNewComponent);
  ctx.funcTextCreate(btnNewComponent.x + 5, btnNewComponent.y + 20,
    'Новый компонент', 'black', 10);

  ctx.funcRoundRect(btnText);
  ctx.funcTextCreate(btnText.x + 5, btnText.y + 20,
    'Текст', 'black', 10);

  ctx.funcRoundRect(btnRemove);
  ctx.funcTextCreate(btnRemove.x + 5, btnRemove.y + 20,
    'Удалить', 'black', 10);

  ctx.funcRoundRect(btnMove);
  ctx.funcTextCreate(btnMove.x + 5, btnMove.y + 20,
    'Переместить', 'black', 10);

  ctx.funcRoundRect(btnPowerCircuit);
  ctx.funcTextCreate(btnPowerCircuit.x + 5, btnPowerCircuit.y + 20,
    'Силовая цепь', 'black', 10);

  ctx.funcRoundRect(btnControlCircuit);
  ctx.funcTextCreate(btnControlCircuit.x + 5, btnControlCircuit.y + 20,
    'Цепь управления', 'black', 10);

  ctx.funcRoundRect(btnRun);
  ctx.funcTextCreate(btnRun.x + 5, btnRun.y + 20,
    'Запустить', 'black', 10);

  ctx.funcRoundRect(btnIncrease);
  ctx.funcTextCreate(btnIncrease.x + 5, btnIncrease.y + 20,
    'Увеличить', 'black', 10);

  ctx.funcRoundRect(btnDecrease);
  ctx.funcTextCreate(btnDecrease.x + 5, btnDecrease.y + 20,
    'Уменьшить', 'black', 10);

  ctx.funcRoundRect(btnLeft);
  ctx.funcTextCreate(btnLeft.x + 5, btnLeft.y + 20,
    'Влево', 'black', 10);

  ctx.funcRoundRect(btnRight);
  ctx.funcTextCreate(btnRight.x + 5, btnRight.y + 20,
    'Вправо', 'black', 10);

  ctx.funcRoundRect(btnUp);
  ctx.funcTextCreate(btnUp.x + 5, btnUp.y + 20,
    'Вверх', 'black', 10);

  ctx.funcRoundRect(btnDown);
  ctx.funcTextCreate(btnDown.x + 5, btnDown.y + 20,
    'Вниз', 'black', 10);

  ctx.funcRoundRect(btnReturn);
  ctx.funcTextCreate(btnReturn.x + 5, btnReturn.y + 20,
    'Возврат', 'black', 10);

  ctx.funcRoundRect(btnAbout);
  ctx.funcTextCreate(btnAbout.x + 5, btnAbout.y + 20,
    'О программе', 'black', 10);
}