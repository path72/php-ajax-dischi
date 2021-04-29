// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			itemList				: [], 		// original remote data 
			displayItems			: [], 		// displayed (filtered/sortable) data
			displayItemsAreReady	: false,
			sortSelected			: '',		// level1 parameter selected for sorting
			filterLists				: {}, 		// object > level1 parameter: [ level2 parameter value list ]
			filter1Selected			: '', 		// level1 parameter selected for filter
			filter2Selected			: ''		// level2 parameter selected for filter
		},
		methods: {
			getRemoteData() {
				let wl = window.location;
				axios
					.get(wl.protocol+'//'+wl.host+'/git/php-ajax-dischi/partial/server.php')
					// .get('http://localhost/git/php-ajax-dischi/partial/server.php')
					.then((resp)=>{
						if (Array.isArray(resp.data)) {
							this.itemList = resp.data; // original remote data
							console.log('itemList',this.itemList);
							this.buildFilterList(this.itemList); // object collecting data's parameters
						}
					});
			},
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
			sortFilter() {
				if (this.sortSelected) {
					this.filterLists[this.sortSelected].sort(); // sorting level2 parameters for a level1 parameter
					console.log('sorting: filterLists['+this.sortSelected+']',this.filterLists[this.sortSelected]);
					let sortedItems = []; // sorted items by sorted level2 paramter
					this.filterLists[this.sortSelected].forEach((sortPar)=>{
						this.itemList.forEach((item)=>{
							for (key in item) {
								if (item[key] == sortPar && !sortedItems.includes(item))
									sortedItems.push(item);
							}
						});
					});
					this.displayItems = sortedItems;
					// console.log('displayItems',this.displayItems);
				} else {
					this.displayItems = this.itemList;
				}
			},
			isViewable(item) {
				if (this.filter1Selected && this.filter2Selected)
					return (item[this.filter1Selected] == this.filter2Selected);
				else 
					return true;
			},
			isSelected(par) {
				if (par == this.filter2Selected) return true;
				else return false;
			},
			isSorted(par) {
				if (par == this.sortSelected) return true;
				else return false;
			},
			cap(string) {
				return string[0].toUpperCase()+string.substring(1);
			}
		},
		computed: {
		},
		created() {
			this.getRemoteData(); // prima è meglio
		},
		mounted() {
		},
		updated() {
		}
	}
);
