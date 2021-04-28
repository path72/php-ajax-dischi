<?php

	require __DIR__.'/database.php';

	// IO SONO JSON E RIECHEGGIO COME TALE!
	header('Content-Type: application/json');
	echo json_encode($database);

?>