<!-- switch.php -->
<?php 
	if ($_GET == null) {
		$axios_db_mode = true;
	} else {
		$axios_db_mode = false;
		require __DIR__.'/database.php';
	}
?>