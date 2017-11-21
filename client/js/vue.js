var app = new Vue({
  el: '#app',
  
  data: {
    items : [],
    cart : [],
    total_harga : 0,
  },
  methods : {
  	getItem(){
  		axios.get('http://localhost:3000/api/items/list')
		  .then(response => {
		    this.items = response.data
		  })
		  .catch(function (error) {
		    console.log(error);
		  });	
  	},
    addCart(item){
      let status = false,
          obj = {
            id : item._id,
            amount: 1,
            price : item.price,
            name : item.name
          }


        if(this.cart.length == 0){
          this.total_harga += item.price
          this.cart.push(obj)
        }
        else{
          this.cart.forEach(cart => {
            if(cart.id == obj.id){
              cart.amount ++
              this.total_harga += cart.price
              status = true
            }
          })

          if(status == false){
            this.total_harga += item.price
            this.cart.push(obj)
          }
        }
        console.log(this.cart)
    },
    checkout(){
      axios.post('http://localhost:3000/api/items/add', {
        cart: this.cart,
        total_harga: this.total_harga
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  },
  created: function (){
  		this.getItem()
  },
  computed : {
  	getShoes (){
  		this.items.filter(item => {
  			console.log(item.category)
  			return item.category === 'shoes';
  		})
  	},
  	getAppereal (){
  		this.items.filter(item => {
  			return item.category === 'appereal';
  		})
  	}
  }


})