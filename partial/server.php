<?php

	require __DIR__.'/database.php';

	// IO SONO JSON...
	header('Content-Type: application/json'); // ! RIMETTIMI A POSTO !

	if ($_GET) { // % DB PARZIALE % 
		$query_key_list = array_keys($_GET);
		$query_key      = $query_key_list[0];
		$query_value    = $_GET[$query_key];

		// organizzatore cognitivo
		$filterLists = [];
		foreach ($database as $item)
			foreach (array_keys($item) as $key)
				if (!in_array($item[$key],$filterLists[$key]))
					$filterLists[$key][] = $item[$key];
		// query: 'filterlists' >>> $filterLists
		if ($query_key == 'filterlists') 
			$resp = $filterLists;
		// query: 'keyList' >>> lista dei valori di filter1Sel
		else if ($query_key == 'keylist')  
			$resp = array_keys($filterLists); 
		// query: filter1Sel >>> lista dei valori di filter2Sel
		else if (in_array($query_key,array_keys($filterLists)) && $query_value == '')
			$resp = $filterLists[$query_key]; 
		else {  // query: filter1Sel=filter2Sel >> filtro $filterLists[$filter1Sel]=filter2Sel
			foreach ($database as $item)
				if ($item[$query_key]==$query_value)
					$resp[] = $item;
		}
	} else { // % DB TOTALE % 
		$resp = $database;
	}
	// var_dump($resp); // ! RIMETTIMI A POSTO !

	// ... E RIECHEGGIO COME TALE!
	echo json_encode($resp); // ! RIMETTIMI A POSTO !


	/**
	 * tradurre in php
	 * */ 

	/*
		items = resp.data di server.php = 
		buildFilterList(items) {
			items.forEach((item)=>{ // item cycle
				for (key in item) { // level1 parameter cycle for each item
					if (this.filterLists[key] == undefined)
						this.filterLists[key] = []; // level2 parameter values list is initialized
					if (!this.filterLists[key].includes(item[key])) 
						this.filterLists[key].push(item[key]); // level2 parameter list for each level1 parameter
				}
			});
			console.log('filterLists',this.filterLists);
			this.displayItems = this.itemList; // filling starting displayed data
			if (this.displayItems.length > 0) this.displayItemsAreReady = true;
		},
	*/

?>