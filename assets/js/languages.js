//define language reload anchors
		var dataReload = document.querySelectorAll("[data-reload]");
	
		//language translation
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
				graduate: "I graduated the Silesian University of Technology in the field of mechatronics and almost 3 years I work as PLC programmer.",
				bgn: "My first programming language which I learned in my high school was Pascal. During my studies I known some basics of C/C++, C# and I learned also about networks, topologies and algorithms.",
				goods: "To inprove my projects I am trying to use good practises based on SOLID and design patterns.",
				future: "Nowadays I am looking for opportiunity to start my career in IT as junior java programmer.",
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
				graduate: "Ich habe die Schlesische Technische Universität im Bereich Mechatronik abgeschlossen und ca. 3 Jahre arbeite ich als SPS Programmierer.",
				bgn: "My first programming language which I learned in my high school was Pascal. During my studies I known some basics of C/C++, C# and I learned also about networks, topologies and algorithms.",
				goods: "To inprove my projects I am trying to use good practises based on SOLID and design patterns.",
				future: "Nowadays I am looking for opportiunity to start my career in IT as junior java programmer.",
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
				graduate: "Ukończyłem Politechnikę Śląśką w kierunku mechatronika i od prawie trzech lat pracuje jako programista PLC.",
				bgn: "Pierwszymy językiem programowania który poznałem w szkole średniej był Pascal. Podczas studiów poznałem podstawy języka C, C++ oraz C#. Ponadto posiadam podstawową wiedzę na temat sieci, topologi czy też algorytmów.",
				goods: "W celu rozwoju moich projektów staram się stosować dobre praktyki programowania bazujące na zasadach SOLID oraz wzorcach projektowych.",
				future: "Obecnie szukam możliwości rozpoczęcia pracy w branży IT jako młodszy programista Java.",
				s: "Wyślij"
			}
		};
		
		//Define language via hash
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
		
		//Define language via hash
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
		
		//define language reload onclick illiteration
		for(i=0;i<=dataReload.lenght; i++) {
			dataReload[i].onclick = function() {
				location.reload(true);
			};
		}
		
		function timeFunction() {

           setTimeout(function(){ history.go(0); }, 200);

         }