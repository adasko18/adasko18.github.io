		var dataReload = document.querySelectorAll("[data-reload]");
	
		var language = {
			eng: {
				button1: "Language",
				button2: "About me",
				button3: "Projects",
				button4: "Contact",
				t1: "Junior",
				t2: "Java",
				t3: "Developer",
				prlang: "Programming languages",
				dabs: "Databases",
				web: "Web design",
				form1: "Enter Name: ",
				form2: "Enter Email Address: ",
				form3: "Enter Text: ",
				welcome: "My name is Adam Waniczek and welcome to my profile site.",
				graduate: "I graduated from the Silesian University of Technology in the field of mechatronics and almost 3 years I work as a PLC programmer.I speak in Polish, English and German.",
				hash1: "whyJAVA?",
				bgn: "The answer is simple - Java was the first language I started learning myself. My first programming language which I learned in my high school was Pascal. During my studies, I learned the basics of such languages like C, C++, and C# and I learned also about networks, topologies, and algorithms.   But Java interested me the most because of the bootability on any JVM containing hardware and numbers of useful libraries.",
				hash2: "myProjects",
				goods: "To improve my object-oriented programming projects I am trying to use good practices based on SOLID rules and design patterns.",
				hash3: "devProgrammingPath",
				future: "Nowadays I am looking for an opportunity to start my career in IT as a junior java programmer. I would like to develop toward REST web services and also Angular SPA.",
				s: "Send"
			},
			de: {
				button1: "Sprachen",
				button2: "Über mich",
				button3: "Projekte",
				button4: "Kontakt", 
				t1: "Jungen",
				t2: "Java",
				t3: "Entwickler",
				prlang: "Programmiersprachen",
				dabs: "Datenbank",
				web: "Webseitenerstellung",
				form1: "Name eingeben: ",
				form2: "Email Address eingeben: ",
				form3: "Text eingeben: ",
				welcome: "Mein name ist Adam Waniczek und willkommen auf meine Profilseite.",
				graduate: "Ich habe die Schlesische Technische Universität im Bereich Mechatronik abgeschlossen und ca. 3 Jahre arbeite ich als SPS Programmierer. Ich spreche auf Polish, English und Deutsch.",
				hash1: "warumJAVA?",
				bgn: "Die Antwort ist einfach - Java war die erste Sprache, die ich selbst gelernt habe. Meine erste Programmiersprache, die ich in meiner Mittelschule gelernt habe, war Pascal. Während meines Studiums habe ich die Grundlagen solcher Sprachen wie C, C++ und C# und auch Netzwerke, Topologien und Algorithmen gelernt. Aber Java hat mich am meisten interessiert, weil es auf jeder bootfähig Hardware mit JVM ist und eine nützlicher Bibliotheken enthält.",
				hash2: "meineProjekte",
				goods: "Um meine objektorientierten Programmierprojekte zu verbessern, versuche ich, bewährte Verfahren zu verwenden, die auf SOLID-Regeln und Entwurfsmustern basieren.",
				hash3: "Entw.programmierpfad",
				future: "Jetzt suche ich nach einer Möglichkeit, meine Karriere in der IT als Junior Java Programmer zu anfangen. Ich möchte mich zu REST-Webdiensten und auch zu Angular SPA entwickeln.",
				s: "Schick"
			},
			pl: {
				button1: "Języki",
				button2: "O mnie",
				button3: "Projekty",
				button4: "Kontakt",
				t1: "Młodszy",
				t2: "Java",
				t3: "Deweloper",
				prlang: "Języki programowania",
				dabs: "Bazy danych",
				web: "Projektowanie stron",
				form1: "Podaj imię i nazwisko: ",
				form2: "Podaj adres email: : ",
				form3: "Wprowadź tekst: ",
				welcome: "Nazywam się Adam Waniczek i witam na mojej stronie profilowej.",
				graduate: "Ukończyłem Politechnikę Śląśką w kierunku mechatronika i od prawie trzech lat pracuje jako programista PLC. Posługuje się językiem polskim, angielskim i niemieckim.",
				hash1: "dlaczegoJava?",
				bgn: "Odpowiedź jest prosta - Java była pierwszym językiem którego zacząłem samodzielnie się uczyć. Pierwszym językiem programowania, którego poznałem był Pascal. Podczas studiów poznałem podstawy takich języków jak C, C++ oraz C#, ale też uczyłem się o sieci, topologiach, czy algorytmach. Ale Java interesowała mnie najbardziej ze względu na uruchamialność na każdym sprzęcie posiadającym JVM i ze względu na użyteczne biblioteki.",
				hash2: "mojeProjekty",
				goods: "W celu rozwoju moich zorientowanych obiektowo projektów staram się stosować dobre praktyki programowania bazujące na zasadach SOLID oraz wzorcach projektowych.",
				hash3: "ścieżkaRozwoju",
				future: "Obecnie szukam możliwości rozpoczęcia pracy w branży IT jako młodszy programista Java. Chciałbym również się rozwijać w kierunku RESTowych serwisów webowych i Angular SPA.",
				s: "Wyślij"
			}
		};
		
		if (window.location.hash) {
			if(window.location.hash === "#pl") {
				btn1.textContent = language.pl.button1;
				btn2.textContent = language.pl.button2;
				btn3.textContent = language.pl.button3;
				title1.textContent = language.pl.t1;
				title2.textContent = language.pl.t2;
				title3.textContent = language.pl.t3;
				head3.textContent = language.pl.button3;
				head4.textContent = language.pl.button4;
				btn4.textContent = language.pl.button4;
				head2.textContent = language.pl.button2;
				proglang.textContent = language.pl.prlang;
				webdes.textContent = language.pl.web;
				f1.textContent = language.pl.form1;
				f2.textContent = language.pl.form2;
				f3.textContent = language.pl.form3;
				db.textContent = language.pl.dabs;
				hi.textContent = language.pl.welcome;
				grad.textContent = language.pl.graduate;
				begin.textContent = language.pl.bgn;
				gds.textContent = language.pl.goods;
				ftr.textContent = language.pl.future;
				document.getElementById("send").value = language.pl.s;  
			}
		}
		
		if (window.location.hash) {
			if(window.location.hash === "#de") {
				btn1.textContent = language.de.button1;
				btn2.textContent = language.de.button2;
				btn3.textContent = language.de.button3;
				btn4.textContent = language.de.button4;
				title1.textContent = language.de.t1;
				title2.textContent = language.de.t2;
				title3.textContent = language.de.t3;
				head3.textContent = language.de.button3;
				head4.textContent = language.de.button4;
				head2.textContent = language.de.button2;
				proglang.textContent = language.de.prlang;
				webdes.textContent = language.de.web;
				f1.textContent = language.de.form1;
				f2.textContent = language.de.form2;
				f3.textContent = language.de.form3;
				db.textContent = language.de.dabs;
				hi.textContent = language.de.welcome;
				grad.textContent = language.de.graduate;
				begin.textContent = language.de.bgn;
				gds.textContent = language.de.goods;
				ftr.textContent = language.de.future;
				document.getElementById("send").value = language.de.s;  
			}
		}
		
		for(i=0;i<=dataReload.lenght; i++) {
			dataReload[i].onclick = function() {
				location.reload(true);
			};
		}
		
		function timeFunction() {

           setTimeout(function(){ history.go(0); }, 200);

         }