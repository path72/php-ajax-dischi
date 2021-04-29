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
			filterLists2			: {}, 		// object > level1 parameter: [ level2 parameter value list ]
			filter1Selected			: '', 		// level1 parameter selected for filter
			filter2Selected			: ''		// level2 parameter selected for filter
		},
		methods: {
			// getRemoteData() {
			// 	let wl = window.location;
			// 	axios
			// 		.get(wl.protocol+'//'+wl.host+'/git/php-ajax-dischi/partial/server.php')
			// 		// .get('http://localhost/git/php-ajax-dischi/partial/server.php')
			// 		.then((resp)=>{
			// 			if (Array.isArray(resp.data)) {
			// 				this.itemList = resp.data; // original remote data
			// 				// console.log('itemList',this.itemList);
			// 				this.buildFilterList(this.itemList); // object collecting data's parameters
			// 			}
			// 		});
			// },
			// buildFilterList(items) {
			// 	items.forEach((item)=>{ // item cycle
			// 		for (key in item) { // level1 parameter cycle for each item
			// 			if (this.filterLists[key] == undefined)
			// 				this.filterLists[key] = []; // level2 parameter values list is initialized
			// 			if (!this.filterLists[key].includes(item[key])) 
			// 				 this.filterLists[key].push(item[key]); // level2 parameter list for each level1 parameter
			// 		}
			// 	});
			// 	// console.log('filterLists',this.filterLists);
			// 	this.displayItems = this.itemList; // filling starting displayed data
			// 	if (this.displayItems.length > 0) this.displayItemsAreReady = true;
			// },
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
					console.log('displayItems',this.displayItems);
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
			},
			filter1Selection(filter1Sel) {
				this.filter2Selected='';
				this.getData(filter1Sel);
			},
			filter2Selection(filter2Sel) {
				if (this.filter1Selected) {
					this.getData(this.filter1Selected+'='+filter2Sel);
				}
			},
			getData(query) {
				let wl = window.location;
				axios
					.get(wl.protocol+'//'+wl.host+'/git/php-ajax-dischi/partial/server.php?'+query)
					.then((resp)=>{
						console.log('getData > query='+query,resp.data);
						if (query == 'filterlists') {
							this.filterLists = resp.data;
							console.log('this.filterLists',this.filterLists);
						} else if (query == '') {
							this.itemList     = resp.data; 		// original remote data
							this.displayItems = this.itemList;	// starting displayed data
							if (this.displayItems.length > 0) this.displayItemsAreReady = true; // GO
						} else if (query.includes('=')) {
							this.displayItems = resp.data;		// update displayed data
						} else {
							// non fare nulla
							// alert('qua!');
						}
					});
			}
		},
		computed: {
		},
		created() {
			// this.getRemoteData(); // ! ALLA FINE ABBANDONARE !
			this.getData('filterlists'); 	// l'organizzatore cognitivo
			this.getData(''); 				// tutto il DB
		},
		mounted() {
		},
		updated() {
		}
	}
);
