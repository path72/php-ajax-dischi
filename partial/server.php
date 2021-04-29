<?php

	require __DIR__.'/database.php';

	// IO SONO JSON...
	header('Content-Type: application/json');

	if ($_GET) { // % DB PARZIALE % 
		$query_key_list = array_keys($_GET);
		$query_key      = $query_key_list[0];
		$query_value    = $_GET[$query_key];
		if ($query_key == 'filterlists') {		// query: 'filterlists' >>> $filterLists organizzatore cognitivo
			$filterLists = [];
			foreach ($database as $item)
				foreach (array_keys($item) as $key)
					if (!in_array($item[$key],$filterLists[$key]))
						$filterLists[$key][] = $item[$key];
			$resp = $filterLists;
		} else { 								// query: filter1Sel=filter2Sel >> filtro $filterLists[$filter1Sel]=filter2Sel
			foreach ($database as $item)
				if ($item[$query_key]==$query_value)
					$resp[] = $item;
		}
	} else { // % DB TOTALE % 
		$resp = $database;
	}

	// ... E RIECHEGGIO COME TALE!
	echo json_encode($resp);

?>