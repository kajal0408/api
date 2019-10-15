const sql = require('./db');
const apiTask = {}
apiTask.userList = () => {
    return new Promise((resolve, reject) => {
        sql.query('select * from  employee', (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
apiTask.addUser = (data) => {                                                  //get data(req.body) from  add_student() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('insert into employee set ?', data, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data inserted successfully');
            }
        });
    });

}

apiTask.userDetail = (e_id) => {                                                    //get id(req.params.id) from  student_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('select * from employee where id=?', e_id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    })
}

apiTask.updateDetail = (e_id, data, result) => {                                     //get id(req.body.params) and data(req.body) from  update_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('update employee set name=? ,age=?, salary=? where id=?', [data.e_name, data.e_age, data.e_salary, e_id], (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data updated successfully');
            }
        });
    });
}

apiTask.deleteUser = (e_id) => {
    return new Promise((resolve, reject) => {
        sql.query('delete from employee where id=?', e_id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data delete successfully');
            }
        });
    });
}


module.exports = apiTask;