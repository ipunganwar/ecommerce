const jwt = require('jsonwebtoken');

const sign = (result) => {
	let obj = {
			id: result[0]._id,
			name : result[0].name
		}

	return new Promise((resolve, reject) => {
		jwt.sign(obj, '##$@$%#$121213', (err, hash)=> {
			if(err){
				reject(err)
			}
			else{
				resolve(hash)
			}
		})
	})
}

module.exports = {
	sign
}
