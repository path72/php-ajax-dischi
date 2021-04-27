<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- *** [ FONTS ] *** -->
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
		<!-- *** [ FONT AWESOME ] *** -->
		<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" /> -->
		<!-- *** [ MY CSS ] *** -->
		<link rel="stylesheet" href="css/main.css">
		<!-- *** [ JQUERY - Google CDN ] *** -->
		<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
		<!-- *** [ Vue.js + AXIOS ] *** -->
		<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
		<!-- *** [ MY JS - (jQuery doc ready) ] *** -->
		<!-- <script type="text/javascript" src="js/main.js"></script> -->
		<!-- *** *** -->
		<link rel="shortcut icon" href="#">
		<title>php-ajax-dischi</title>
	</head>
	<body>

		<!-----------------------------------------

			cartella/repo php-ajax-dischi

			Stampare a schermo i dischi musicali (vedi screenshot).
			
			Milestone 1: 
				Stampiamo i dischi solo con l’utilizzo di PHP, 
				che stampa direttamente i dischi in pagina: 
				al caricamento della pagina ci saranno tutti i dischi.
			Milestone 2: 
				Attraverso l’utilizzo di AXIOS: 
				al caricamento della pagina AXIOS chiederà attraverso 
				una chiamata i dischi a php e li stamperà attraverso VUEJS.
			Bonus: 
				Attraverso un’altra chiamata AXIOS, filtrare gli album per artista (edited) 
			
		------------------------------------------>

			<div id="app">

				<!-- ** DATABASE ** -->
				<?php require __DIR__.'/partials/database.php'; ?>

				<!-- ** HEADER ** -->
				<?php require __DIR__.'/partials/header.php'; ?>

				<!-- ** ITEM DISPLAY PANEL ** -->
				<?php require __DIR__.'/partials/main.php'; ?>

			</div> <!-- Vue.js main instance #app -->


		<!-- *** [ MY JS ] *** -->
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>
