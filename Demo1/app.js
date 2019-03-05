new Vue({
	el: '#vue-app',
	data: {
		name: 'Gaurav Gupta',
		age: 28,
		a: 0,
		b: 0,
		company: 'Punchh Tech India Pvt Ltd'
	},
	methods: {
		greet: function(time) {
			return 'Good ' + time;
		},
		add: function() {
			this.age++;
		},
		subtract: function() {
			this.age--;
		},
		addition: function() {
			return this.a + this.age;
		}
	}
});
