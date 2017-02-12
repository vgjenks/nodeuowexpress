class MySqlUnitOfWork {
	constructor(connection) {
		this.connection = connection;
	}

	query(query, params, callback) {
		this.connection.beginTransaction((err) => {
			this.connection.query(query, params, (err, result) => {
				if (err) this.connection.rollback();
				return callback(result);
			});
		});
	}

	complete() {
		this.connection.commit((err) => {
			this.connection.release();
		});
	}
}

module.exports = MySqlUnitOfWork;