var app = new Vue({
  el: '#app',
  
  data: {
    items : [],
    cart : [],
    total_harga : 0,
    transaksi : [],
    username : '',
    password : ''
  },
  methods : {
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
    },
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
        // console.log(this.cart)
    },
    checkout(){
      axios.post('http://localhost:3000/api/transactions/checkout', {
        cart: this.cart,
        total_harga: this.total_harga
      })
      .then(response => {
        this.transaksi.push(response.data)
        console.log(this.transaksi)
       
      })
      .catch(function (error) {
        console.log(error);
      });

      this.cart = []
      this.total_harga = 0
    },
    login(){
      axios.post('http://localhost:3000/api/customers/login', {
        username: this.username,
        password : this.password
      })
      .then(response => {
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
  	
  }


})