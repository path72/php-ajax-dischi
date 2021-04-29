<?php

	require __DIR__.'/database.php';

	// IO SONO JSON E RIECHEGGIO COME TALE!
	header('Content-Type: application/json');
	echo json_encode($database);


	/**
	 * filtro lato server
	 * 
	 * tradurre in php
	 * */ 

	// buildFilterList(items) {
	// 	items.forEach((item)=>{ // item cycle
	// 		for (key in item) { // level1 parameter cycle for each item
	// 			if (this.filterLists[key] == undefined)
	// 				this.filterLists[key] = []; // level2 parameter values list is initialized
	// 			if (!this.filterLists[key].includes(item[key])) 
	// 				 this.filterLists[key].push(item[key]); // level2 parameter list for each level1 parameter
	// 		}
	// 	});
	// 	console.log('filterLists',this.filterLists);
	// 	this.displayItems = this.itemList; // filling starting displayed data
	// 	if (this.displayItems.length > 0) this.displayItemsAreReady = true;
	// },

?>