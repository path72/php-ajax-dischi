<!-- main.php -->
<main>

	<?php if ($axios_db_mode) { ?>

		<!-- solo per database.php chiamato da vue tramite axios -->
		<div class="item_display" v-if="displayItemsAreReady">
			<div v-for="item in displayItems" v-if="isViewable(item)">
				<div class="item_box">
					<div class="card">
						<img :src="item.poster" :alt="item.author + ' - ' + item.title">
						<div class="item_title txt_1" :class="{selected:isSelected(item.title),sorted:isSorted('title')}">
							{{item.title}}
						</div>
						<div class="item_info">
							<div class="item_author txt_2" :class="{selected:isSelected(item.author),sorted:isSorted('author')}">
								{{item.author}}
							</div>
							<div class="item_year txt_2" :class="{selected:isSelected(item.year),sorted:isSorted('year')}">
								{{item.year}}
							</div>
							<div class="item_genre txt_3" :class="{selected:isSelected(item.genre),sorted:isSorted('genre')}">
								{{item.genre}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	<?php } else { ?>

		<!-- solo per database.php incluso in index.php -->
		<div class="item_display">
			<?php foreach ($database as $item) { ?>
					<div class="item_box">
						<div class="card">
							<img src="<?php echo $item['poster'] ?>" alt="">
							<div class="item_title txt_1"><?php echo $item['title'] ?></div>
							<div class="item_info">
								<div class="item_author txt_2"><?php echo $item['author'] ?></div>
								<div class="item_year txt_2"><?php echo $item['year'] ?></div>
							</div>
						</div>
					</div>
			<?php } ?>
		</div>

	<?php } ?>

</main>
