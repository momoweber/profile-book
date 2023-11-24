# NewProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ------
## Steps
## ------

1- Node js install

2- Angular install -> CLI 

3- npm install -g @angular/cli

4- visual studio code install

Optional coden im Webbrowser ohne Installation https://codesandbox.io/ 

5- Programmiersprache TypeScript - fast das gleiche wie JavaScript - eine Erweiterung 
 - vs code -> new folder -> neues projekt anlegen Odrner Bsspw. C:\Dev\angular\typescript-tutorial -> new File anlegen script.ts -> in der Konsole -> Console.log('Hallo World!');
 -g steht für globale Systemvariable
 - Ausfühern -> Install typescript: Terminal in vs öffnen -> npm install -g typescript
 - compile typescript code mit ->
 tsc script.ts  -> nach umwandeln -> neue Datei script.js 
 -> Webbrowser kann javascipt und durch umwandeln von ts in js -> ggf. die Datei tsc.ps1 in FileExplorer löschen!
 - hier den unterschied zw. ts und js ->   
 console.log('Hallo World!');
 ersetzen:  neue Versionen js var -> let 
 function sayHello(){
    //var name = 'Momo'; 
	let name = 'Momo'; 
	//oder const name = 'Momo';  // Konstante
}
let name:String = 'Momo';  -> ts Vorteil was für eine Datenvariable -> :String z.B.
Type Script weitere Konzepte inams, mixens, interfaces
6- neues Angular Projekt erstellen -> C:\Dev\angular 
 ng new my-project
 -> scss auswählen -> eine Erweiterung von css cscading style sheed -> SCSS steht für Sassy-CSS. Dies ist eine Stylesheet-Sprache, mit der Sie Ihre Stile objektorientiert schreiben können. SCSS und SASS werden häufig verwechselt, allerdings ist SASS an YAML angelehnt, wohingegen SCSS sich erst später daraus entwickelt hat und heute deutlich weiter verbreitet ist.   
 -> create -> werden viele Dateien und Ordner und Hilfsbibliotheken erstellt für das neue Projekt!
7- Komponenten-Architektur
 - Warum html eine einfache Seite steht so viel drin -> mit angular und Komponanten können wir die Seite in verschieden Komp. aufteilen!
 -> header Teil Component -> in eine header.html  schreiben 
 -> und Willkommenstext packen wir Bsp. in welcome.tml 
 -> alles drum herum in eine index.html 
 Angular verwendet TS -> Erweiterung von JS
                   SCSS = Erweiterung von CSS
 Bsp.:
 HeaderComponent    ->bei Angular schieben wir alle Dateien in:
  - header.component.html
  - header.component.js
  - css header.component.css
  Testdatei
  Modul
 LoginComponent
 WelcomeComponent
 RegisterComponent
 
 ---------------
 HeaderComponent
 ------  -------
 
 ------  -------
 FooterComponent
 ---------------
 
8-Datei- und Ordnerstruktur 
 -node_modules -> sind alle zusätzliche Libaries drin die angular verwendet! d.h. wenn ich orgendwelche externen code libaries verwende -> sind die hier drin!! ,die unser Frameforkt standardmässig braucht!
 -src - Source Ordner - der ganze Quellcode steht hierdrin! bei ganz neuen Projekt gibts erst mall den app Ordner - Component 
 -assets - Bilder, video, sounds ablegen
 -envirement Ordner 
 - main.ts -> Konfigurationsdatei
 - grundlegende styles für unsre App
 - test.ts Test 
 - .browserslistrc -> ist die Browser die unterstützt werrden!
 - .editorconfig -> geht es um unsere Code-Editor wie  konfiguriert ist.
 - .gitignore -> wenn wir in Github hochgeldaen werden als BackUp dan werden diese Ordner nicht hochgeladen!  
 - angular.json -> hier gibts jede Menge Angular Konfigurationen zum Angular Projekt
 - karma.conf.js -> ist unsere Test Runner sogenannte Tests ausführt, um diese automatisiert zu tetsten!
 - package-lock.json -> welche Version bereits von welche Libary installiert wurde
 - package.json -> alles was oben in node_modules importiert werden soll.
 - README.md -> Wie man ein neues Projekt starten kann, wenn andere damit arbeiten!
 - tsconfig.app.json -> typescript app konfigurieren z.B. in welche js Version wir das projekt umwandeln wollen!
 - tsconfig.json -> ts allgemein konfigurieren
 - tscofig.spec.json -> -> Konfiguration für die ts Tests
 
*Tip: Anfangen zu coden und die Bedeutung der Ordner und Dateien Struktur kommt mit der Zeit, wenn man sie braucht!!!

9- Projekt coden und starten
 ng serve --open	in Terminal -> Befehl startet das projekt!
 
10- coden -> App schreiben  
 - app.component.html
 
	<p>Das ist meine erste Internetseite</p>
    <p>Hier findest Du verschiende Informationen über mich.</p>

    <button (click)="buttonClicked()">klicken</button>

 -app.component.ts -> funktion buttonClicked 

@Component({ ... })
	...
	export class AppComponent {
		title = 'my-project';

		buttonClicked() {
		alert('Hallo, wie geht es dir?')
  }
}	
 
 
 <h1>Hallo Welt!</h1>

11- Header-Component -> Header Komponente ist jedee Internetseite zu sehen Bsp. Logo, Login Logout, Suche, Menü, ...
  - neues Terminal öffnen, und ein Header Component generieren 
  ng g c header   
 
 - https://my.logomakr.com/   eines Logo estellen -> drag and drop in vs img und in logo.png umbenennen.
 - header.component -> <img class="logo" src="assets/img/logo.png">
 - header.component.scss 
header {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
    background-color: white;
}
 .logo {
    height: 48px;
    margin-top: 16px; 
    margin-bottom: 16px;
    margin-left: 80px;
}

Generell für alle Seiten in -> styles.scss 
/* You can add global styles to this file, and also import other style files */

body {
    margin: 0;
    background-color: rgba(0,0,0,0.05);
}

12- Bilder finden - assets/img/hamster -> ablegen
 pixabay.com

13- Card Design
  - my-card Container generieren für die Bilder
  ng g c my-card
  - app-my-card aus my-card.component.ts im selector kopieren und in app.compionent.ts einfügen - autovervollständigen Strg + space und Enter!
  - beide Dateien speichern -> dann wird die Seite im Broser reloaded!
  - app.component.html  mit div einen container classe packen 
<div class="container">
  <app-my-card></app-my-card>
</div>  
 -my-card.component.scss  Bild und Text eingeben und designen
.card {
    min-height: 550px;
    background-color: white;
    width: 400px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    overflow: hidden;
    img {
        width: 100%;
    }
    p {
        padding-left: 16px;
        padding-right: 16px;
        color: rgba(0,0,0,0.8);
        font-size: 20px;
    }
} 
 -und in my-card.component.html im Contaner die card Klasse einbinden und das Bild und  und Text rein schreiben!
<div class="card">
    <img src="assets/img/card/1.jpg"> 
    <p>Hallo, mein Name ist Fredi. <br> Ich bin hier, um neue Freunde zu finden!</p>
</div>
 - neue Schriftart installiere bzw.im Projekt importieren!
 https://fonts.google.com/ 
 -> hier im Bsp. Lato ausgesucht  - alle Arten selecten und den Link kopieren in index.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>NewProject</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
 - font-family: 'Lato', sans-serif; CSS kopieren style.scss in body einfügen! 
 - 2 button hinzufügen -> auch möglich mit shortcut button*2 -> Strg + space und Enter! -> weite 50 % und absolute Position unten!

14- Componenten Card mehrfach verwenden / input / Output
 -  Nicht jede Karte soll die gleichen Bilder und Texte beinhalten -> dafür brauchen wir Input Parameter
 -  Bild und Text durch variablen ersetzen! 
 -  Array text und img einbauen
<app-header></app-header>
app.component.html
<div class="container">
  <app-my-card [img]="postImages[0]" [text]="postTexts[0]"></app-my-card>
  <app-my-card [img]="postImages[1]" [text]="postTexts[1]"></app-my-card>
  <app-my-card [img]="postImages[2]" [text]="postTexts[2]"></app-my-card>
  <app-my-card [img]="postImages[3]" [text]="postTexts[3]"></app-my-card>
</div>
15- NgFor - Schleife einbauen - für text und img in Html Teil 
 - app.component.html´
<app-header></app-header>
<div class="container">
  <app-my-card 
     *ngFor="let i of [0, 1, 2, 3]" 
     [img]="postImages[i]" 
     [text]="postTexts[i]"
  ></app-my-card>
</div>

16- Frendesvorschläge   
 -app.component.html -> in app -> flexrow Container Klasse erstellen und dort die Container Klasse mit cards und app-proposals rein schieben
<app-header></app-header>
<div class="flexrow">
  <div class="container">
    <app-my-card *ngFor="let i of [0, 1, 2, 3]" [img]="postImages[i]" [text]="postTexts[i]"></app-my-card>
  </div>
  <app-proposals></app-proposals>
</div>
- app.component.scss
.container {
    margin-right: 48px; 
}
.flexrow {
    display: flex;
    justify-content: center;
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 100px;
}
-und in proposals.component.html eine container Klasse profile-row definieren und eon Bild und Text einfügen
<div class="profile-row">
    <img src="assets/img/card/1.jpg">
    <div>
        <b>Frederick</b><br> <span class="description">3 Jahre alt</span>

    </div>
    
</div>
<b>Freundschaftsvorschläge</b>
- proposals.component.scss 
.profile-row {
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        margin-right: 16px;
    }
    .description {
        color: rgba(0,0,0,0.5);
        font-size: 12px;
    }
}
- ng g c profile-row  
- Array bilden proposals.component.html 
<app-profile-row *ngFor="let i of [0,1,2,3]" [name]="names[i]" [description]="texts[i]" [img]="images[i]"></app-profile-row>
-proposals.component.ts variable einfügen    names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
    texts = ['2 Jahre alt', 'Gräbt gerne Löscher', 'Spielt gerne', 'hamster-Freak'];
    images = ['assets/img/card/5.jpg', 'assets/img/card/6.jpg', 'assets/img/card/7.jpg', 'assets/img/card/8.jpg'];
-profile-row-component.html Variable definieren!
<div class="profile-row margin-bottom-16">
    <img src="{{ img }}">
    <div>
        <b>{{ name }}</b><br> <span class="description">{{ description }}</span>        
    </div>
    
</div>
-profile-row-component.ts @Input Variable rein geben!
export class ProfileRowComponent {
  @Input() name = 'Frederick';
  @Input() img = 'assets/img/card/1.jpg';
  @Input() description = '3 Jahre alt';
}
-
17- Freundschaftsliste
ng g c friendbox   generieren

18- Services
- das Prinzip ist das sogenannte dependecy Injection
- ng g s friend    -> s steht für service
19-NgIf - es geht um Verzweigungen also -> if oder else 
-warum kann ich mir selber folgen -> das ergibt kein Sinn!
-
20- Libaries
https://material.angular.io/   *kann man alle design Komponenten die es bei Google gibt auch Icon als Libary installieren!
ng add @angular/material  ausführen!
-icons material design 


--
-native Apps oder iphone apps
-directives
-pipes

####
## GitHub commit and push
####
	
Github  upload project -> new repository profile-book public
1- copy link: 
https://github.com/momoweber/profile-book
2- commit and push -> SignIn with git and Push to Master
