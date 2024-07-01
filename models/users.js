class Users {
    static async auth(login) {
        const b = await DB();
        
        return new Promise((resolve, reject) => {
            b.query(`SELECT * FROM users WHERE login = '${login}'`, (error, results, fields) => {
                if (error) {
                    if (error.code !== 'ER_NO_SUCH_TABLE') {
                        reject(error);
                    } else {
                        
                    }
                } else {
                    if (results.length > 0) {
                        resolve(JSON.parse(JSON.stringify(results[0])));
                    } else {
                        resolve('empty');
                    }
                }
            });
        });
    };  
}
module.exports = Users