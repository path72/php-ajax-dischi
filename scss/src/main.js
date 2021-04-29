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
			getData(query) {
				let wl = window.location;
				axios
					.get(wl.protocol+'//'+wl.host+'/git/php-ajax-dischi/partial/server.php?'+query)
					.then((resp)=>{
						console.log('getData > query: '+query+'\n',resp.data);
						if (query == 'filterlists') {
							this.filterLists = resp.data;
							console.log('filterLists\n',this.filterLists);
						} else if (query == '') {
							this.itemList     = resp.data; 		// original remote data
							this.displayItems = this.itemList;	// starting displayed data
							if (this.displayItems.length > 0) this.displayItemsAreReady = true; // go display
							console.log('displayItems READY\n',this.displayItems);
						} else {
							this.displayItems = resp.data;		// update displayed data
							console.log('displayItems UPDATE\n',this.displayItems);
						}
					});
			},
			filter2Selection(filter2Sel) {
				if (this.filter1Selected) 
					this.getData(this.filter1Selected+'='+filter2Sel);
			},
			sortFilter() {
				if (this.sortSelected) {
					this.filterLists[this.sortSelected].sort(); // sorting level2 parameters for a level1 parameter
					console.log('sortFilter > filterLists['+this.sortSelected+']\n',this.filterLists[this.sortSelected]);
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
				} else {
					this.displayItems = this.itemList;
				}
				console.log('displayItems UPDATE\n',this.displayItems);
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
			this.getData('filterlists'); 	// l'organizzatore cognitivo
			this.getData(''); 				// tutto il DB
		},
		mounted() {
		},
		updated() {
		}
	}
);
