<!-- milestone.php -->
<section class="milestone txt_3">
	<span class="info">Use any parameter in GET to show Milestone 1</span>
	<div class="msg">
		<?php
			if ($axios_db_mode) { $m = '2'; $led = 'ON';  $msg = '(<em>JSONed</em> database.php called by axios)'; } 
			else                { $m = '1'; $led = 'OFF'; $msg = '(original database.php included in index.php)';  } 
			echo bold('Milestone '.$m).': Axios DB mode '.bold($led).' '.$msg;
			function bold($string) {
				return '<strong class="led">'.$string.'</strong>';
			}
		?>
	</div>
</section>
