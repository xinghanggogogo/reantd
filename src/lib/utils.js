mport $ from 'jquery'

let LIB = LIB || {}

LIB.fetch = function(url, method, params, callback) {
	$.ajax({
		url: url,
		type: method,
		data: params,
		dataType: "jsonp",
		success: function(data){
			return callback(data)
		}
	})
}

export default LIB