<!-- main.php -->
<div class="item_display flex-row-co fx-wrap">
	<?php foreach ($database as $item) { ?>
			<div class="item_box">
				<div class="card flex-col">
					<img src="<?php echo $item['poster'] ?>" alt="">
					<div class="item_title fx-grow-1 txt_1">
						<?php echo $item['title'] ?>
					</div>
					<div class="item_info flex-col-co">
						<div class="item_author txt_2">
							<?php echo $item['author'] ?>
						</div>
						<div class="item_year txt_2">
							<?php echo $item['year'] ?>
						</div>
					</div>
				</div>
			</div>
	<?php } ?>
</div>


<!-- ** ITEM DISPLAY PANEL ** -->
<!-- <div class="item_display flex-row-co fx-wrap" v-if="displayItemsAreReady">
	<div v-for="item in displayItems" v-if="isViewable(item)">
		<div class="item_box">
			<div class="card flex-col">
				<img :src="item.poster" :alt="item.author + ' - ' + item.title">
				<div class="item_title fx-grow-1 txt_1" :class="{selected:isSelected(item.title),sorted:isSorted('title')}">
					{{item.title}}
				</div>
				<div class="item_info flex-col-co">
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
</div> -->
