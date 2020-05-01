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
function Efface1Click() {  //
  //Cacommence();
  Fichiermodifie = true;
  PetitMenu('#808000', '<Очистить> Правая кнопка = Назад');
  Pointe_Quoi = 'Tout';
  
  Pointe_Objet(Pointe_Quoi, '#0000FF'); //Выбор компонента
  ActionMouse = 'Remove'; 
  
  //Effacer();
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



//Мышка вверх  кнопка
function Image1MouseUp(Sender, Button, Shift, X, Y) {  //
  if (button == mbright) { Droite = false } else { Gauche = false }
  Compteursouris = 0;
}

//Новый  кнопка
function Nouveau1Click() {
  Super_Raz();
  Facteur = 1;
  Redess(false);
  Fichiermodifie = true;
}



//Закрыть кнопка
function FormCloseQuery(Sender, CanClose) {
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
function Quitter1Click(Sender) {
  Close();
}

//О программе
function Apropos1Click() {
  alert('Air-simulator');

}

//Черный и белый  кнопка
function Noiretblanc1Click(Sender) {
  Redess(true);
}

//
function Timer1Timer(Sender) {
  if (Compteursouris < 10) { Compteursouris++ }
  if (Compteursouris > 4) { if (heure) { if ((GetAsyncKeyState(VK_LBUTTON) && $8000) != 0) { Gauche = true; } } }
}

//Лупа увеличить  кнопка
function Loupe1Click() {
  if (Facteur > 3.5) { return false }
  Facteur = Facteur * 1.1;
  
  //ctx.scale(1.1, 1.1);
  Redess(false);
}

//Лупа уменьшить  кнопка
function Loupe2Click() {
  if (Facteur < 0.9) { return false }
  Facteur = Facteur / 1.1;
  if (Facteur < 1) { Facteur = 1 }  //Добавил чтоб ниже 1 не опускалось
 
  Redess(false);
}

//Выход  кнопка
function Sortir1Click() {
  Droite = true;
  
}

//Движение  кнопка
function Dplacer1Click() {
Fichiermodifie = true;
PetitMenu('#A6CAF0', '<Переместить>  Выбор компонента ?');

 Objet2 = 'Toutsaufcanal';


Pointe_Objet(Objet2, '#0000FF'); //Выбор компонента
ActionMouse = 'Move';

}

//Время
function Timer2Timer(Sender) {

  X_s = Math.round(20 * Facteur);
  Y_s = Math.round(30 * Facteur);
  Gauche = true;
}


//Пошаговый запуск кнопка
 function Anime1Click() {  //
  //Cacommence();
  
  //Pasapas = true;
  //Anime1();

  //PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
  //L_Action = 'Action';
  //Pointe_Objet( L_Action, '#0000FF'); //Выбор компонента
  Fichiermodifie = true;
  ActionMouse = 'Anime';
  //Cestfini();
}


//Непрерывный запуск кнопка
function Continu1Click() {
  //Cacommence();
  
  Pasapas = false;
  Anime1();
  
  PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
  L_Action = 'Action';
  Pointe_Objet( L_Action, '#0000FF'); //Выбор компонента
  Fichiermodifie = true;
  ActionMouse = 'Anime2';

}

//Выбор положения компонента кнопка
function RAZ1Click() {
  var Objet = '';
  Objet = 'Toutsaufcanal';
  Pointe_Objet(Objet, '#0000FF')
  Fichiermodifie = true;
  ActionMouse = 'RAZ1'

  PetitMenu('#A6CAF0', '<Маневр>  Выбор компонента ?');
    
}




//Слева  кнопка
function Gauche1Click() {  //Переместить все компоненты влево
  if (Minimumh() > 30) { Decah(-15) };
  Redess(false);
}

//Справа  кнопка
function Droite1Click() {  //Переместить все компоненты вправо
  if (Minimumh() < 1200) { Decah(15) };
  Redess(false);
}

//Выше  кнопка
function Dessus1Click() {  //Переместить все компоненты выше
  if (Minimumv() > 30) { Decav(-15) };
  Redess(false);
}

//Ниже  кнопка
function Dessous1Click() {  //Переместить все компоненты ниже
  if (Minimumv() < 900) { Decav(15) };
  Redess(false);
}

