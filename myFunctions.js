//Нажимаем на пробел

// Рисуем текст
CanvasRenderingContext2D.prototype.funcTextCreate = function (x, y, text, color,
  razmer) {
  this.font = 'bold ' + razmer + 'pt' + ' sans-serif';
  this.fillStyle = color;
  this.fillText(text, x, y);
};

// Рисуем квадрат с скругленными краями
CanvasRenderingContext2D.prototype.funcRoundRect = function (btn) {
  this.fillStyle = btn.color;

  this.fillRect((btn.x), (btn.y),
    (btn.w), btn.h);

  //return this;
};

// Рисуем квадрат без скругленных краев с подсказкой
CanvasRenderingContext2D.prototype.funcRectPodskazka = function (btn) {
  this.fillStyle = '#f0f0f0';
  this.fillRect((mouseCoord.x + 10), (mouseCoord.y + 15),
    (8.35 * btn.text.length), btn.h);
  this.fillStyle = 'black';
  this.strokeRect((mouseCoord.x + 10), (mouseCoord.y + 15),
    (8.35 * btn.text.length), btn.h);
  this.font = ' ' + 10 + 'pt' + ' Courier';
  this.fillStyle = 'black';
  this.fillText(btn.text, (mouseCoord.x + 15),
    (mouseCoord.y + 25.5));
  //return this;
};

// Сообщение в журнал событий, в правое верхнее нижнее окно и т.д.
CanvasRenderingContext2D.prototype.funcSoobshenie = function (color1,
  color2, x, y, w, h, kegl, text) {
  this.fillStyle = color1;
  this.fillRect((x), (y), (w), h);
  this.font = 'bold ' + kegl + 'pt' + ' arial';
  this.fillStyle = color2;
  this.fillText(text, (x + 6), (y + 16));
};

// Рисуем квадрат без подсказки
CanvasRenderingContext2D.prototype.funcRect = function (btn) {
  this.fillStyle = btn.color;
  this.fillRect((btn.x), (btn.y) *
    popravkaX, (btn.w), btn.h);
};

//Функция аналогична событию onload
function myOnload(img, ctx, w, h, x, y) {
  img.src = img.src;
  img.onload = function () {
    //ctx.globalAlpha = 0.2;
    ctx.drawImage(img, x, y, w, h);
  };
}


//Попадание в область Canvas - Click или Move
function funcHitArea(e, object) {
  if (e.x > object.x &&
    e.x < (object.x + object.w) &&
    e.y > object.y &&
    e.y < (object.y + object.h)) {
    return true;
  }
  return false;
}

//Отрисовывает таймера справа
CanvasRenderingContext2D.prototype.funcCreateTimerSprava = function () {
  if (etapiAPK.timerSpravaPokazat == true) {
    this.font = ' ' + 10 + 'pt' + ' sans-serif';
    this.fillStyle = 'blue';
    this.fillText(etapiAPK.prefixTimeraSprava + etapiAPK.timerTimera +
      ' сек.', 1510, 690);
  }
};

//Изменить вид курсора
function funcCursor(whichSelected) {
  document.body.style.cursor = whichSelected
}

/*function funcEventMoveCanvas(e) {
  mouseCoord.x = e.pageX;
  mouseCoord.y = e.pageY;
}*/

//Вывод текста
function Otxy(X, Y, S) {
  ctx.fillText(S, X * Facteur, Y * Facteur);
}

//Ввод текста
function Ed(Entete, Demande, Ouiounon) { //Ed(entete,demande:string;var ouiounon:boolean):string;
  Demande = prompt(Entete, Demande);

  return Demande
}

//Рисование закрашенного прямоугольника (маленького)
function NPave(X, Y, Co) {
  ctx.fillStyle = Co;
  ctx.beginPath();
  ctx.moveTo((X - 2) * Facteur, (Y + 2) * Facteur);
  ctx.lineTo((X + 2) * Facteur, (Y + 2) * Facteur);
  ctx.lineTo((X + 2) * Facteur, (Y - 2) * Facteur);
  ctx.lineTo((X - 2) * Facteur, (Y - 2) * Facteur);
  ctx.closePath();
  ctx.fill();
}

//Рисование закрашенного прямоугольника (маленького 2)
function NPavepetit(X, Y, Co) {
  ctx.fillStyle = Co;
  ctx.beginPath();
  ctx.moveTo((X - 1) * Facteur, (Y + 1) * Facteur);
  ctx.lineTo((X + 1) * Facteur, (Y + 1) * Facteur);
  ctx.lineTo((X + 1) * Facteur, (Y - 1) * Facteur);
  ctx.lineTo((X - 1) * Facteur, (Y - 1) * Facteur);
  ctx.closePath();
  ctx.fill();
}

//Изменение цвета рисования и шрифта
function Couleur(C) {
  ctx.strokeStyle = (C);
  ctx.fillStyle = (C);
}

//Рисование линии
function Ligne(X1, Y1, X2, Y2) {
  ctx.beginPath();
  ctx.moveTo(X1 * Facteur, Y1 * Facteur);
  ctx.lineTo(X2 * Facteur, Y2 * Facteur);
  ctx.stroke();
}

//Рисование эллипса
function Ellipse_SVG(X1, Y1, X2, Y2) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(X1 * Facteur, Y1 * Facteur);
  ctx.scale((X2 * Facteur) / (Y2 * Facteur), 1);
  ctx.arc(0, 0, Y2 * Facteur, 0, Math.PI * 2, true);
  ctx.restore();
  ctx.closePath();
  ctx.stroke();
}

//Рисование круга
function Cercle(X, Y, Rr) {
  ctx.beginPath();
  ctx.arc(X * Facteur, Y * Facteur, Rr * Facteur, 0, 2 * Math.PI, false);
  ctx.stroke();
}

//Рисование прямоугольника
function Rect(Xe, Ye, Xf, Yf) {
  Ligne(Xe, Ye, Xe, Yf);
  Ligne(Xf, Ye, Xf, Yf);
  Ligne(Xe, Ye, Xf, Ye);
  Ligne(Xe, Yf, Xf, Yf);
}

//Рисование пунктирной линии
function Pointille(X1, Y1, X2, Y2) {
  ctx.setLineDash([5, 3]);
  //dashes are 5px && spaces are 3px
  ctx.beginPath();
  ctx.moveTo(X1 * Facteur, Y1 * Facteur);
  ctx.lineTo(X2 * Facteur, Y2 * Facteur);
  ctx.stroke();
  ctx.setLineDash([]);
}

//Рисование дуги окружности
function Arc_De_Cercle(X, Y, AngleDebut, AngleFin, Rayon) {
  AngleDebut = AngleDebut * Math.PI / 180;
  AngleFin = AngleFin * Math.PI / 180;
  ctx.lineWidth = 1; // толщина линии
  ctx.arc(X * Facteur, Y * Facteur, Rayon * Facteur, AngleDebut, AngleFin, true);
  ctx.stroke();
}

//Очистка холста
function ClearDevice() {
  // Сохраняем текущую матрицу трансформации
  ctx.save();
  // Используем идентичную матрицу трансформации на время очистки
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Возобновляем матрицу трансформации
  ctx.restore();
}

//Рисование треугольника
function Triangle(X, Y) {

  Ligne(X - Cote, Y, X + Cote, Y);
  Ligne(X - Cote, Y, X, Y + Cote * 1.7);
  Ligne(X + Cote, Y, X, Y + Cote * 1.7);
}

//var SaveF = {        //Для примера
//  "myKey": "Привет!"
//};

//+++Чтение файла+++
document.getElementById("selFile").onchange = function () {
  var fileReader = new FileReader();
  fileReader.onload = function () {
    var LoadF = JSON.parse(this.result);
    //Object.assign(localStorage, LoadF);   // использовать этот объект localStorage
    //alert("done, myKey=" + LoadF["myKey"]); // LoadF[] -> localStorage.getItem("myKey")
    Load1Click(LoadF)
    Redess(false)
  };
  fileReader.readAsText(this.files[0]);
};

//+++Запись файла+++
document.getElementById("downFile").onclick = function () {
  var SaveF = Save1Click()
  var json = JSON.stringify(SaveF); // test -> localStorage
  var file = new File([json], "myFilename.txt", {
    type: "application/octet-stream"
  });
  var blobUrl = (URL || webkitURL).createObjectURL(file);
  window.location = blobUrl;
}


//Сохранение  файла
function Save1Click() {

  return {
    'Nb_Verin': Nb_Verin,
    'Nb_Distributeur': Nb_Distributeur,
    'Nb_Commande': Nb_Commande,
    'Nb_Canal': Nb_Canal,
    'Nb_Canal_Pilote': Nb_Canal_Pilote,
    'Nb_Alimentation': Nb_Alimentation,
    'Nb_Capteur': Nb_Capteur,
    'Nb_Alim_Pilote': Nb_Alim_Pilote,
    'Nb_Carrefour': Nb_Carrefour,
    'Nb_Carrefour_Pilote': Nb_Carrefour_Pilote,
    'Nb_Memoire': Nb_Memoire,
    'Nb_Sequenceur': Nb_Sequenceur,
    'Nb_Texte': Nb_Texte,

    'Verin': Verin,
    'Distributeur': Distributeur,
    'Commande': Commande,
    'Canal': Canal,
    'Canal_Pilote': Canal_Pilote,
    'AliMentation': AliMentation,
    'Capteur': Capteur,
    'Alim_Pilote': Alim_Pilote,
    'Carrefour': Carrefour,
    'Carrefour_Pilote': Carrefour_Pilote,
    'Memoire': Memoire,
    'Sequenceur': Sequenceur,
    'Texte': Texte
  };

}


//Открытие файла
function Load1Click(LoadF) {
  Nb_Verin = LoadF['Nb_Verin'],
  Nb_Distributeur = LoadF['Nb_Distributeur'],
  Nb_Commande = LoadF['Nb_Commande'],
  Nb_Canal = LoadF['Nb_Canal'],
  Nb_Canal_Pilote = LoadF['Nb_Canal_Pilote'],
  Nb_Alimentation = LoadF['Nb_Alimentation'],
  Nb_Capteur = LoadF['Nb_Capteur'],
  Nb_Alim_Pilote = LoadF['Nb_Alim_Pilote'],
  Nb_Carrefour = LoadF['Nb_Carrefour'],
  Nb_Carrefour_Pilote = LoadF['Nb_Carrefour_Pilote'],
  Nb_Memoire = LoadF['Nb_Memoire'],
  Nb_Sequenceur = LoadF['Nb_Sequenceur'],
  Nb_Texte = LoadF['Nb_Texte'],

  Verin = LoadF['Verin'],
  Distributeur = LoadF['Distributeur'],
  Commande = LoadF['Commande'],
  Canal = LoadF['Canal'],
  Canal_Pilote = LoadF['Canal_Pilote'],
  AliMentation = LoadF['AliMentation'],
  Capteur = LoadF['Capteur'],
  Alim_Pilote = LoadF['Alim_Pilote'],
  Carrefour = LoadF['Carrefour'],
  Carrefour_Pilote = LoadF['Carrefour_Pilote'],
  Memoire = LoadF['Memoire'],
  Sequenceur = LoadF['Sequenceur'],
  Texte = LoadF['Texte']

}






















//+++Запись файла+++
function download(filename, content) {
  var a = document.createElement("a");
  linkDownload(a, filename, content);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}



function linkDownload(a, filename, content) {
  contentType = "data:application/octet-stream,";
  uriContent = contentType + encodeURIComponent(content);
  a.setAttribute("href", uriContent);
  a.setAttribute("download", filename);
}





//Чтение файла
function readFile(object, callback) {
  var file = object.files[0];
  console.log(file);
  var reader = new FileReader();
  reader.onload = function () {
    callback(reader.result);
    console.log(reader);
  };
  reader.readAsText(file);
}





function saveFile(data, name) {
  var a = document.createElement("a");
  a.setAttribute("download", name || "file.txt");
  a.setAttribute(
    "href",
    "data:application/octet-stream;base64," + btoa(data || "undefined")
  );
  a.click();
}

function read() {
  var file = document.getElementById("file").files[0];
  console.log(
    'Loading "' + file.name + '"... (' + Math.round(file.size / 1024) + "kB)"
  );
  if (file.size >= 256 * 1024) {
    if (
      !confirm(
        "File size is " +
        Math.round(file.size / 1024) +
        "kBytes! Really want to read it?"
      )
    ) {
      console.log("Aborting loading file...");
      return;
    }
  }
  var reader = new FileReader();
  reader.onload = function () {
    console.log("File readed!");
    document.getElementById("out").innerHTML = reader.result;
    savedata = reader.result;
    savename = file.name;
  };
  console.log("Starting reading file...");
  reader.readAsText(file);
}
