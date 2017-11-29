class db {
    constructor() {}

    connect(){
        const mysql = require('mysql');
        let connectionParams = {'host': 'localhost', 'user': 'root', 'password': 'rootroot', 'database': 'mydb'};
        const conn = mysql.createConnection(connectionParams);
        conn.connect(function (err) {
            if (err) {
                console.error("Not Connected!");
            }
            console.log("Connected!");
        });
        return conn;
    }

    create_db(){
        const conn = this.connect();
        conn.query("CREATE DATABASE db", function (err, result) {
            if(err){
                console.error("db not created!");
            }
            else {
                console.log("Database created");
            }
        });
    }

    create_table(table_param) {
        const conn = this.connect();
        conn.query("CREATE TABLE " + table_param, function (err, result) {
            if (err) {
                console.error("table not created!");
            }
            else {
                console.log("Table created");
            }
        });
    }

    insert_into_table(table_name, values) {
        const conn = this.connect();
        conn.query("INSERT INTO " + table_name + " VALUES ? ", [values], function (err, result) {
            if (err) {
                console.error("not inserted!");
            }
            else {
                console.log("records inserted"); //+ result.affectedRows);
            }
        });
    }

    select_table(selected, table_name) {
        const conn = this.connect();
        conn.query("SELECT " + selected + " FROM " + table_name, function (err, result) {
            if (err) {
                console.error("not selected!");
            }
            else {
                console.log(result);
            }
        });
    }

    select_table_limit(selected, table_name, limit) {
        const conn = this.connect();
        conn.query("SELECT " + selected + " FROM " + table_name + " LIMIT " + limit, function (err, result) {
            if (err) {
                console.error("not selected");
            }
            else {
                console.log(result);
            }
        });
    }

    return_fields(selected, table_name) {
        const conn = this.connect();
        conn.query("SELECT " + selected + " FROM " + table_name, function (err, result, fields) {
            if (err) {
                console.error("not returned!");
            }
            else {
                console.log(fields);
            }
        });
    }

    delete_info(table_name, delete_inform) {
        const conn = this.connect();
        conn.query("DELETE FROM " + table_name + " WHERE " + delete_inform, function (err, result) {
            if (err) {
                console.error("info not deleted!");
            }
            else {
                console.log("Number of records deleted: "); //+ result.affectedRows);
            }
        });
    }

    delete_table(table_name) {
        const conn = this.connect();
        conn.query("DROP TABLE IF EXISTS " + table_name, function (err, result) {
            if (err) {
                console.error("table not deleted!");
            }
            else {
                console.log("Table deleted");
            }
        });
    }

    update_info(table_name, first_info, apdate_inform) {
        const conn = this.connect();
        conn.query("UPDATE " + table_name + " SET " + first_info + " WHERE " + apdate_inform, function (err, result) {
            if (err) {
                console.error("not updates!");
            }
            else {
                console.log(/*result.affectedRows*/ + " record(s) updated");
            }
        });
    }

}

let DB = new db();
//DB.create_db();
//....
