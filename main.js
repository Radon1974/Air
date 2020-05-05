var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  w = canvas.width,
  h = canvas.height;

  document.oncontextmenu = function (){return false};  //Запретить выпадающее меню в браузере





const Button1 = document.getElementById('Button1'),

  Button4 = document.getElementById('Button4'),
  Button5 = document.getElementById('Button5'),
  Button6 = document.getElementById('Button6'),
  Button7 = document.getElementById('Button7'),
  Button8 = document.getElementById('Button8'),
  Button9 = document.getElementById('Button9'),
  Button10 = document.getElementById('Button10'),
  //Button11 = document.getElementById('Button11'),
  Button12 = document.getElementById('Button12'),
  Button13 = document.getElementById('Button13'),
  Button14 = document.getElementById('Button14'),
  Button15 = document.getElementById('Button15'),
  Button16 = document.getElementById('Button16'),
  Button17 = document.getElementById('Button17'),
  Button18 = document.getElementById('Button18'),
  Button19 = document.getElementById('Button19'),
  Button20 = document.getElementById('Button20');


//Часы
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();




//Текущие координаты мыши
var mouse = { x: 0, y: 0 };
var ActionMouse = ''



//Получение событий мыши
/*if (canvas.addEventListener) {
  canvas.addEventListener('click', funcEventMoveCanvas.bind(null));
}else if (canvas.attachEvent) { // IE DOM
  canvas.attachEvent('onclick', funcEventMoveCanvas.bind(null));
}*/

FormCreate();


//Обработчик событий мыши

Button1.addEventListener('click', function (e) {    //Создать новый файл
  Nouveau1Click();
});

Button4.addEventListener('click', function (e) {    //Создать новый компонент
  Composant1Click()
});
Button5.addEventListener('click', function (e) {    //Создать текст
  Texte1Click()
});
Button6.addEventListener('click', function (e) {    //Удалить компонент
  Efface1Click()
});
Button7.addEventListener('click', function (e) {    //Переместить компонент
  Dplacer1Click();
});
Button8.addEventListener('click', function (e) {    //Добавить силовую цепь
  Puissance1Click();
});
Button9.addEventListener('click', function (e) {    //Добавить цепь управления
  Commande1Click();
});
Button10.addEventListener('click', function (e) {   //Пошаговое выполнение
  Anime1Click();
});
//Button11.addEventListener('click', function (e) {   //Непрерывное выполнение
//  Continu1Click();
//});
Button12.addEventListener('click', function (e) {   //Изменить состояние компонента
  RAZ1Click();
});
Button13.addEventListener('click', function (e) {   //Увеличить
  Loupe1Click();
});
Button14.addEventListener('click', function (e) {   //Уменьшить
  Loupe2Click();
});
Button15.addEventListener('click', function (e) {   //Влево
  Gauche1Click();
});
Button16.addEventListener('click', function (e) {   //Вправо
  Droite1Click();
});
Button17.addEventListener('click', function (e) {   //Вверх
  Dessus1Click();
});
Button18.addEventListener('click', function (e) {   //Вниз
  Dessous1Click();
});
Button19.addEventListener('click', function (e) {   //Возврат
  Sortir1Click();
});
Button20.addEventListener('click', function (e) {   //О программе
  Apropos1Click();
});



canvas.addEventListener('mousedown', function (f) {
  X_s = f.pageX - this.offsetLeft;
  Y_s = f.pageY - this.offsetTop;
  //X_s = mouse.x * Facteur;
  //Y_s = mouse.y * Facteur;
  //X_s = mouse.x;
  //Y_s = mouse.y;

  //++++++++++++++++++++++++++++++++++++++
  if ((event.which == 1) && Fichiermodifie) {
    Gauche = true;
    Droite = false;
    Mouse1Click()
  }
  if (event.which == 3) {
    Droite = true;
    Gauche = false;
    PetitMenu('#000000', '<Симулятор> Готов!');
  }
}
);

//Обработка событий мыши
function Mouse1Click() {


  switch (ActionMouse) {
    case 'File':
      alert('Файл');
      funcCursor("default");
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Pointe_Objet2':

      Pointe_Objet2(Objet2, Prox2);                             //Выбор компонента
      Ajoute_Objet2(Objet2, Celui_La2);                         //
      Ou_Que();                    //Выбор места установки компонента
      ActionMouse = 'Ajoute_Objet3';
      break;
    case 'Ajoute_Objet3':

      Ajoute_Objet3(Objet2, X_s / Facteur, Y_s / Facteur, Quoi_Donc2, Celui_La2);//Вставка компонента
      PetitMenu('#000000', '<Симулятор> Готов!');
      Redess(false);                                            //Перерисовка холста
      funcCursor("default");
      ClearObjet();
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Texte':

      Cree_Texte2()
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Remove':

      Celui_La2 = 1;
      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Effacer()  //

      //Ajoute_Objet2(Objet2, Celui_La2); //
      //Ou_Que(Lax2, Lay2, false, Quoi_Donc2); //Выбор места установки компонента
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Move':

      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Ou_Que(); //Выбор места установки компонента
      PetitMenu('#A6CAF0', '<Переместить>  Укажите новую позицию ?');
      ActionMouse = 'Move2';
      break;

    case 'Move2':
      Deplace_Objet()
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;
    //++++++++++++++++++++++++++++++++++++++
    case 'DRA':

      DRA(X_s, Y_s);              //Ввод точки канала
      Entre_Canal();                      //Ввод канала
      if (Ext) {
        Cree_Canal();                       //Запись канала после введения данных
        Redess(false);                      //Перерисовка холста                      
        funcCursor("default");
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }
      break;

    //++++++++++++++++++++++++++++++++++++++        
    case 'DRA2':

      DRA(X_s, Y_s);              //Ввод точки канала
      Entre_Canal_Pilote();                      //Ввод канала
      if (Ext) {
        Cree_Canal_Pilote();                       //Запись канала после введения данных
        Redess(false);                      //Перерисовка холста                      
        funcCursor("default");
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }
      break;
    case 'RAZ1':        //Выбор положения при нажатии

      RAZ1Click2();
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime':        //Выбор положения при нажатии
      Pasapas = true;
      Anime1();
      Redess(false);
      PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
      L_Action = 'Action';
      Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

      //ActionMouse = 'Anime1';

      if (Objet2 != 'Rien' || ActionMouse != 'Exit') {   //Если нажата клавиша "Возврат" - то выход
        ActionMouse = 'Anime1'
      } else {
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }

      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime1':        //Выбор положения при нажатии
      
        Heure = true;
        Pointe_Objet2(Objet2, Prox2); //Выбор компонента
        Anime2();
        
      
      Redess(false);
      
      ActionMouse = 'Anime'; 
      
      if (['Un_D', 'Un_Cap'].includes(Objet2)) {

        Pasapas = true;
        //Anime1();
  
        PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
        L_Action = 'Action';
        Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

        
        ActionMouse = 'Anime1'
      }
      funcCursor("default");
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime2':        //Выбор положения при нажатии

      var intervalID = setInterval(function () {  //Непрерывный цикл
        Heure = true;
        Pointe_Objet2(Objet2, Prox2); //Выбор компонента
        Anime2();
        Redess(false);
        timerId++
        if (Objet2 == 'Rien') {
          clearInterval(intervalID)
          funcCursor("default");
          PetitMenu('#000000', '<Симулятор> Готов!');
          ActionMouse = '';
          Fichiermodifie = false;
        } //Если нажата клавиша "Возврат" - то выход из цикла
      }, 1000);

      break;

  }

}








//Константы
var Max_Distributeur = 35;
var Max_Verin = 30;
var Max_Commande = 70;
var Max_Canal = 100;
var Max_Canal_Pilote = 200;
var Max_Alimentation = 50;
var Max_Capteur = 60;
var Max_Alim_Pilote = 50;
var Max_Carrefour = 50;
var Max_Carrefour_Pilote = 50;
var Max_Memoire = 20;
var Max_Sequenceur = 5;
var Max_Texte = 80;
var Coef = 1.2;
var VHauteur = 35 * Coef;//Высота элемента
var VLargeur = 130 * Coef;//Ширина элемента
var VH_Tige = 4 * Coef;//Высота штока
var VL_Tige = 130 * Coef;//Ширина штока
var VH_Bout = 6 * Coef;//Высота окончания
var VCanal = 8 * Coef;
var VAmor = 10 * Coef;
var DLargeur = 30 * Coef;
var A_Droite = true;
var L_Bout = VLargeur / 10;
var ARayon = 5;
var CLargeur = 20 * Coef;
var Dmemoire = 24 * Coef;
var SLargeur = 36 * Coef;
var Maxtige = 9;
var Mintige = 2;
var Cote = 2.6 * Coef;
var Un = 1;
var Zero = 0;
var Bof = 2;
var Bouche = 3;
var MobDist = 20;

//Массивы
var Distributeur = [];
var Sequenceur = [];
var Pointe = [];
var Verin = [];
var Commande = [];
var Canal = [];
var Canal_Pilote = [];
var AliMentation = [];
var Alim_Pilote = [];
var Capteur = [];
var Carrefour = [];
var Carrefour_Pilote = [];
var Memoire = [];
var Texte = [];
var T_Parcours = [];
var Les_points = [];


//Сложные типы переменных
var Str16 = ''; //Можно убрать

//Переменные
var Nb_Verin = 0, Nb_Distributeur = 0, Nb_Commande = 0, Nb_Canal = 0, Nb_Alimentation = 0, Nb_Capteur = 0;
var Nb_Alim_Pilote = 0, Nb_Canal_Pilote = 0, Nb_Carrefour = 0, Nb_Carrefour_Pilote = 0, Nb_Memoire = 0;
var Nb_Sequenceur = 0, Nb_Texte = 0, G_Pour = 0, G_K = 0, X_s = 0, Y_s = 0, Nb_Point = 0;
var Vieux_Nb_Verin = 0, Vieux_Nb_Distributeur = 0, Vieux_Nb_Capteur = 0, Vieux_Nb_Alim = 0;
var Vieux_Nb_Alim_Pilote = 0, Vieux_Nb_Carrefour = 0, Vieux_Nb_Carrefour_Pilote = 0, Vieux_Nb_Commande = 0;
var Vieux_Nb_Canal = 0, Vieux_Nb_Canal_Pilote = 0, Vieux_Nb_Memoire = 0, Vieux_Nb_Sequenceur = 0, Vieux_Nb_Texte = 0;
var Heur = 0, Minute = 0, Seconde = 0, Sec100 = 0;

var Gauche = true, Droite = true, SVG = true, Immonde_rustine_double_v = true, Immonde_rustine_galet_v = true;
var Actionencours = true, Fichiermodifie = true, Pasapas = true;
var Dialogvaleur = 0;
var Compteursouris = 0;
//var      MetaFile:TMetaFile;
var Facteur = 1, Vieux_Facteur = 0, XG = 0, YG = 0;
var Textenter = '', Heure = false, Prox2 = 0, Objet2 = '', Celui_La2 = 0, Quoi_Donc2 = '', Lax2 = 0, Lay2 = 0;
var Puissance = true, Ext = true, Debut = true, XL = 0, YL = 0, Old_XL = 0, Old_YL = 0, XFin = 0, YFin = 0;
var Pointe_Quoi = '', timerId = 0;
//Distributeur.append()


function NewDistributeur(i) {
  //for (let i = 1; i <= Max_Distributeur; i++) {
  Distributeur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],   //Координата X точки присоединения к распределителю 
    ExtY: [],   //Координата Y точки присоединения к распределителю 
    Com: [{
      Quoi: '',
      Laquelle: 0
    }, {
      Quoi: '',   //Тип концов распределителя
      Laquelle: 0
    }, {
      Quoi: '',   //Тип концов распределителя
      Laquelle: 0
    }],
    Modele: '',   ////Модель распределителя
    Etat: 0   //Положение распределителя 1 или 2
  }
  //}
}

function NewSequenceur(i) {
  //for (let i = 1; i <= Max_Sequenceur; i++) {
  Sequenceur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Combien: 0
  }
  //}
}

function NewVerin(i) {
  //for (let i = 1; i <= Max_Verin; i++) {
  Verin[i] = {
    X: 0,
    Y: 0,
    Tige: 0,
    Etat_Ext: [],
    EntreeX: [],
    EntreeY: [],
    Modele: ''
  }
  //}
}

function NewCommande(i) {
  //for (let i = 1; i <= Max_Commande; i++) {
  Commande[i] = {
    X: 0,
    Y: 0,
    Etat: 0,
    Modele: ''
  }
  //}
}

function NewCanal(i) {
  //for (let i = 1; i <= Max_Canal; i++) {
  Canal[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Bout: [{
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }]
  }
  //}
}

function NewCanal_Pilote(i) {
  //for (let i = 1; i <= Max_Canal_Pilote; i++) {
  Canal_Pilote[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Bout: [{
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }]
  }
  //}
}

function NewAliMentation(i) {
  //for (let i = 1; i <= Max_Alimentation; i++) {
  AliMentation[i] = {
    X: 0,
    Y: 0
  }
  //}
}

function NewAlim_Pilote(i) {
  //for (let i = 1; i <= Max_Alimentation; i++) {
  Alim_Pilote[i] = {
    X: 0,
    Y: 0
  }
  //}
}

function NewCapteur(i) {
  //for (let i = 1; i <= Max_Capteur; i++) {
  Capteur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Lie_a: 0,
    Position: 0
  }
  //}
}

function NewCarrefour(i) {
  //for (let i = 1; i <= Max_Carrefour; i++) {
  Carrefour[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
  //}
}

function NewCarrefour_Pilote(i) {
  //for (let i = 1; i <= Max_Carrefour; i++) {
  Carrefour_Pilote[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
  //}
}

function NewMemoire(i) {
  //for (let i = 1; i <= Max_Memoire; i++) {
  Memoire[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Etat: 0
  }
  //}
}

function NewTexte(i) {
  //for (let i = 1; i <= Max_Texte; i++) {
  Texte[i] = {
    X: 0,
    Y: 0,
    Lataille: 0,
    Le_Texte: ''
  }
  //}
}


for (let i = 1; i <= 200; i++) {
  Les_points[i] = new Array(2);
}


var Branche2 = {
  Quoi: '',
  Lequel: 0,
  Branchement: 0
}

