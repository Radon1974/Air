var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  w = canvas.width,
  h = canvas.height;

const Button1 = document.getElementById('Button1'),
  Button2 = document.getElementById('Button2'),
  Button3 = document.getElementById('Button3'),
  Button4 = document.getElementById('Button4'),
  Button5 = document.getElementById('Button5'),
  Button6 = document.getElementById('Button6'),
  Button7 = document.getElementById('Button7'),
  Button8 = document.getElementById('Button8'),
  Button9 = document.getElementById('Button9'),
  Button10 = document.getElementById('Button10'),
  Button11 = document.getElementById('Button11'),
  Button12 = document.getElementById('Button12'),
  Button13 = document.getElementById('Button13'),
  Button14 = document.getElementById('Button14'),
  Button15 = document.getElementById('Button15'),
  Button16 = document.getElementById('Button16');



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

Button1.addEventListener('click', function (e) {
  alert('Файл');
});
Button2.addEventListener('click', function (e) {
  Composant1Click()
});
Button3.addEventListener('click', function (e) {
  Texte1Click()
});
Button4.addEventListener('click', function (e) {
  Efface1Click()
});
Button5.addEventListener('click', function (e) {
  Dplacer1Click();
});
Button6.addEventListener('click', function (e) {    //Добавить силовую цепь
  Puissance1Click();
});
Button7.addEventListener('click', function (e) {    //Добавить цепь управления
  Commande1Click();
});
Button8.addEventListener('click', function (e) {
  alert('Запустить');
});
Button9.addEventListener('click', function (e) {
  Loupe1Click();
});
Button10.addEventListener('click', function (e) {
  Loupe2Click();
});
Button11.addEventListener('click', function (e) {
  Gauche1Click();
});
Button12.addEventListener('click', function (e) {
  Droite1Click();
});
Button13.addEventListener('click', function (e) {
  Dessus1Click();
});
Button14.addEventListener('click', function (e) {
  Dessous1Click();
});
Button15.addEventListener('click', function (e) {
  Sortir1Click();
});
Button16.addEventListener('click', function (e) {
  Apropos1Click();
});

/*canvas.addEventListener('click', function (e) {

  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;


  if (funcHitArea(mouse, btnFile)) { alert('Файл') }
  else if (funcHitArea(mouse, btnNewComponent)) { 
    Fichiermodifie = true;
    Ajoute_Objet ();                    //Вывод на экран компонентов
    ActionMouse = 'Pointe_Objet2';
  }
  else if (funcHitArea(mouse, btnText)) { Texte1Click() }
  else if (funcHitArea(mouse, btnRemove)) { alert('Удалить') }
  else if (funcHitArea(mouse, btnMove)) { alert('Переместить') }
  else if (funcHitArea(mouse, btnPowerCircuit)) { alert('Силовая цепь') }
  else if (funcHitArea(mouse, btnControlCircuit)) { alert('Цепь управления') }
  else if (funcHitArea(mouse, btnRun)) { alert('Запустить') }
  else if (funcHitArea(mouse, btnIncrease)) { alert('Увеличить') }
  else if (funcHitArea(mouse, btnDecrease)) { alert('Уменьшить') }
  else if (funcHitArea(mouse, btnLeft)) { alert('Влево') }
  else if (funcHitArea(mouse, btnRight)) { alert('Вправо') }
  else if (funcHitArea(mouse, btnUp)) { alert('Вверх') }
  else if (funcHitArea(mouse, btnDown)) { alert('Вниз') }
  else if (funcHitArea(mouse, btnReturn)) { alert('Возврат') }
  else if (funcHitArea(mouse, btnAbout)) { alert('О программе') }
});*/

//function MouseClick() {
//  canvas.addEventListener('mousedown', function (f) {
//    mouse.x = f.pageX - this.offsetLeft;
//   mouse.y = f.pageY - this.offsetTop;
//    X_s = mouse.x * Facteur;
//    Y_s = mouse.y * Facteur;

    /*if (event.which == 1) {
      Gauche = true;
    }
    if (event.which == 3) {
      Droite = true
    }*/
//  })
//}


//Обработчик событий мыши
/*canvas.addEventListener('mousemove', function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  X_s = mouse.x;
  Y_s = mouse.y;

});*/






canvas.addEventListener('mousedown', function (f) {
  mouse.x = f.pageX - this.offsetLeft;
  mouse.y = f.pageY - this.offsetTop;
  //X_s = mouse.x * Facteur;
  //Y_s = mouse.y * Facteur;
  X_s = mouse.x;
  Y_s = mouse.y;
  
  //console.log("Mouse X", mouse.x, X_s, "Mouse Y", mouse.y, Y_s );

  //++++++++++++++++++++++++++++++++++++++
  if ((event.which == 1) && Fichiermodifie) {
    Gauche = true;
    Droite = false;
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
        Ajoute_Objet3(Objet2, X_s, Y_s, Quoi_Donc2, Celui_La2);//Вставка компонента
        Redess(false);                                            //Перерисовка холста
        funcCursor("default");
        ActionMouse = '';
        Fichiermodifie = false;
        break;

      //++++++++++++++++++++++++++++++++++++++
      case 'Texte':
        Cree_Texte2()
        funcCursor("default");
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
        ActionMouse = '';
        break;

      //++++++++++++++++++++++++++++++++++++++  
      case 'Move':
        Pointe_Objet2(Objet2, Prox2); //Выбор компонента
        Ou_Que(); //Выбор места установки компонента
        ActionMouse = 'Move2';
        break;

      case 'Move2':
        Deplace_Objet()
        funcCursor("default");
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
          ActionMouse = '';
          Fichiermodifie = false;
        }
        break;
      case 'Run':
        alert('Запустить');
        funcCursor("default");
        break;
      case 'Increase':
        alert('Увеличить');
        funcCursor("default");
        break;
      case 'Decrease':
        alert('Уменьшить');
        funcCursor("default");
        break;
      case 'Left':
        alert('Влево');
        funcCursor("default");
        break;
      case 'Right':
        alert('Вправо');
        funcCursor("default");
        break;
      case 'Up':
        alert('Вверх');
        funcCursor("default");
        break;
      case 'Down':
        alert('Вниз');
        funcCursor("default");
        break;
      case 'Return':
        alert('Возврат');
        funcCursor("default");
        break;
      case 'About':
        alert('О программе');
        funcCursor("default");
        break;
    }
  }
  if (event.which == 3) {
    Droite = true;
    Gauche = false;
    Fichiermodifie = false;
  }
});






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
var Pointe_Quoi = '';

for (let i = 1; i <= Max_Distributeur; i++) {
  Distributeur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Com: [{
      Quoi: '',
      Laquelle: 0
    }, {
      Quoi: '',
      Laquelle: 0
    }, {
      Quoi: '',
      Laquelle: 0
    }],
    Modele: '',
    Etat: 0
  }
}

for (let i = 1; i <= Max_Sequenceur; i++) {
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
}

for (let i = 1; i <= Max_Verin; i++) {
  Verin[i] = {
    X: 0,
    Y: 0,
    Tige: 0,
    Etat_Ext: [],
    EntreeX: [],
    EntreeY: [],
    Modele: ''
  }
}

for (let i = 1; i <= Max_Commande; i++) {
  Commande[i] = {
    X: 0,
    Y: 0,
    Etat: 0,
    Modele: ''
  }
}

for (let i = 1; i <= Max_Canal; i++) {
  Canal[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: false,
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
}

for (let i = 1; i <= Max_Canal_Pilote; i++) {
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
}

for (let i = 1; i <= Max_Alimentation; i++) {
  AliMentation[i] = {
    X: 0,
    Y: 0
  }
}

for (let i = 1; i <= Max_Alimentation; i++) {
  Alim_Pilote[i] = {
    X: 0,
    Y: 0
  }
}

for (let i = 1; i <= Max_Capteur; i++) {
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
}

for (let i = 1; i <= Max_Carrefour; i++) {
  Carrefour[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
}

for (let i = 1; i <= Max_Carrefour; i++) {
  Carrefour_Pilote[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
}

for (let i = 1; i <= Max_Memoire; i++) {
  Memoire[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Etat: 0
  }
}

for (let i = 1; i <= Max_Texte; i++) {
  Texte[i] = {
    X: 0,
    Y: 0,
    Lataille: 0,
    Le_Texte: ''
  }
}

for (let i = 1; i <= 200; i++) {
  Les_points[i] = new Array(2);
}


var Branche2 = {
  Quoi: '',
  Lequel: 0,
  Branchement: 0
}

