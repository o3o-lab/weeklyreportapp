var app = {

    // DB保持プロパティ
    db: null

    // 初期設定
    , init: function(){

        console.log("init");

        // デバイス準備
        document.addEventListener('deviceready', function(){
            // db接続(websql)
            this.websql._open(function(_db){

                console.log("- success websql open -");
                document.getElementById('results').innerHTML += '<li class="info">success websql open [' + new Date().toISOString() + ']</li>';

                this.app.db = _db;

                this.app.configtablecreate(function(){

                    console.log("- success create config table -");
                    document.getElementById('results').innerHTML += '<li class="info">success create config table [' + new Date().toISOString() + ']</li>';

                        this.app.weekreporttablecreate(function(){
                        
                            console.log("- success create weekreport table -");
                            document.getElementById('results').innerHTML += '<li class="info">success create weekreport table [' + new Date().toISOString() + ']</li>';

                            this.app.configlastrecord(function(response){

                                console.log("- success record config -", response);
                                document.getElementById('results').innerHTML += '<li class="info">success record config [' + new Date().toISOString() + ']</li>';

                                if(response.rows.length == 0){

                                    this.app.configinsertrecord("", "", "", "", function(response){

                                        console.log("- success config record insert -", response);
                                        document.getElementById('results').innerHTML += '<li class="info">success config record insert [' + new Date().toISOString() + ']</li>';

                                        document.getElementById("config_id").value = response.insertId;

                                    }, function(error){

                                        console.log("- error record config insert -", error);
                                        document.getElementById('results').innerHTML += '<li class="error">error config record insert [' + new Date().toISOString() + ']</li>';
                                        return ;

                                    });

                                }else{

                                    document.getElementById("config_id").value = response.rows[0].id;
                                    document.getElementById("to").value = response.rows[0].mail_to;
                                    document.getElementById("from").value = response.rows[0].mail_from;
                                    document.getElementById("user_name").value = response.rows[0].user_name;
                                    document.getElementById("company_name").value = response.rows[0].company_name;
                                    
                                }

                                this.app.weekreportlastrecord(function(response){

                                    console.log("- success record weekreport -", response);
                                    document.getElementById('results').innerHTML += '<li class="info">success weekreport record [' + new Date().toISOString() + ']</li>';

                                    if(response.rows.length == 0){
                                        this.app.weekreportinsertrecord("", 0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", function(response){
                                            
                                            console.log("- success weekreport record insert -", response);
                                            document.getElementById('results').innerHTML += '<li class="info">success weekreport record insert [' + new Date().toISOString() + ']</li>';
    
                                            document.getElementById("id").value = response.insertId;

                                        }, function(error){

                                            console.log("- error record weekreport insert -", error);
                                            document.getElementById('results').innerHTML += '<li class="error">error weekreport record insert [' + new Date().toISOString() + ']</li>';
                                            return ;

                                        });

                                    }else{

                                        if(response.rows[0].send_check == 1){

                                            this.app.weekreportinsertrecord("", 0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", function(response){
                                                
                                                console.log("- success weekreport record insert -", response);
                                                document.getElementById('results').innerHTML += '<li class="info">success weekreport record insert [' + new Date().toISOString() + ']</li>';
        
                                                document.getElementById("id").value = response.insertId;
    
                                            }, function(error){
    
                                                console.log("- error record weekreport insert -", error);
                                                document.getElementById('results').innerHTML += '<li class="error">error weekreport record insert [' + new Date().toISOString() + ']</li>';
                                                return ;
    
                                            });

                                        }else{

                                            document.getElementById("id").value = response.rows[0].id;
                                            document.getElementById("send_check").value = response.rows[0].send_check;
                                            document.getElementById("title").value = response.rows[0].title;
                                            document.getElementById("project_name").value = response.rows[0].project;
                                            document.getElementById("assign_task").value = response.rows[0].assign;
                                            document.getElementById("work_volume").value = response.rows[0].work;
                                            document.getElementById("notice_etc").value = response.rows[0].notice;
                                            document.getElementById("start_date_sun").value = response.rows[0].start_date_sun;
                                            document.getElementById("end_date_sun").value = response.rows[0].end_date_sun;
                                            document.getElementById("notice_sun").value = response.rows[0].notice_sun;
                                            document.getElementById("start_date_mon").value = response.rows[0].start_date_mon;
                                            document.getElementById("end_date_mon").value = response.rows[0].end_date_mon;
                                            document.getElementById("notice_mon").value = response.rows[0].notice_mon;
                                            document.getElementById("start_date_tue").value = response.rows[0].start_date_tue;
                                            document.getElementById("end_date_tue").value = response.rows[0].end_date_tue;
                                            document.getElementById("notice_tue").value = response.rows[0].notice_tue;
                                            document.getElementById("start_date_wed").value = response.rows[0].start_date_wed;
                                            document.getElementById("end_date_wed").value = response.rows[0].end_date_wed;
                                            document.getElementById("notice_wed").value = response.rows[0].notice_wed;
                                            document.getElementById("start_date_thu").value = response.rows[0].start_date_thu;
                                            document.getElementById("end_date_thu").value = response.rows[0].end_date_thu;
                                            document.getElementById("notice_thu").value = response.rows[0].notice_thu;
                                            document.getElementById("start_date_fri").value = response.rows[0].start_date_fri;
                                            document.getElementById("end_date_fri").value = response.rows[0].end_date_fri;
                                            document.getElementById("notice_fri").value = response.rows[0].notice_fri;
                                            document.getElementById("start_date_sat").value = response.rows[0].start_date_sat;
                                            document.getElementById("end_date_sat").value = response.rows[0].end_date_sat;
                                            document.getElementById("notice_sat").value = response.rows[0].notice_sat;

                                        }

                                    }

                                }, function(error){

                                    console.log("- error record weekreport -", error);
                                    document.getElementById('results').innerHTML += '<li class="error">error weekreport record [' + new Date().toISOString() + ']</li>';
                                    return ;

                                });

                            }, function(error){

                                console.log("- error record config -", error);
                                document.getElementById('results').innerHTML += '<li class="error">error record config [' + new Date().toISOString() + ']</li>';
                                return ;

                            });
        
                        }, function(error){
        
                            console.log("- error create weekreport table -", error);
                            document.getElementById('results').innerHTML += '<li class="error">error create weekreport table [' + new Date().toISOString() + ']</li>';
                            return ;
        
                        });

                }, function(error){

                    console.log("- error create config table -", error);
                    document.getElementById('results').innerHTML += '<li class="error">error create config table [' + new Date().toISOString() + ']</li>';
                    return ;

                });

            }, function(error){

                console.log("- error websql open -", error);
                document.getElementById('results').innerHTML += '<li class="error">error websql open [' + new Date().toISOString() + ']</li>';
                return ;

            });

        }.bind(this), false);

        // DOM構築
        document.addEventListener('DOMContentLoaded', function(){
                
            // クリックにバインド
            document.getElementById('save').addEventListener('click', this.save.bind(this), false);
            document.getElementById('send').addEventListener('click', this.save.bind(this), false);
            document.getElementById('save_config').addEventListener('click', this.saveconfig.bind(this), false);

            // debag用
            document.getElementById('sqllite_open').addEventListener('click', this.sqlliteOpen.bind(this), false);
            document.getElementById('websql_open').addEventListener('click', this.websqlOpen.bind(this), false);
            document.getElementById('create_weekreport_table').addEventListener('click', this.createWeekreportTable.bind(this), false);
            document.getElementById('create_config_table').addEventListener('click', this.createConfigTable.bind(this), false);
            document.getElementById('insert_weekreport_record').addEventListener('click', this.insertWeekreportRecord.bind(this), false);
            document.getElementById('update_weekreport_record').addEventListener('click', this.updateWeekreportRecord.bind(this), false);
            document.getElementById('all_reed_weekreport_records').addEventListener('click', this.allReedWeekreportRecords.bind(this), false);
            document.getElementById('last_reed_weekrepot_record').addEventListener('click', this.lastReedWeekreportRecord.bind(this), false);
            document.getElementById('reed_config').addEventListener('click', this.ReedConfig.bind(this), false);
            document.getElementById('drop_weekreport_table').addEventListener('click', this.dropWeekreportTable.bind(this), false);
            document.getElementById('drop_config_table').addEventListener('click', this.dropConfigTable.bind(this), false);
            document.getElementById('delete_weekreport_record').addEventListener('click', this.deleteWeekreportRecord.bind(this), false);

        }.bind(this), false);

    }

    // saveのファンクション
    , save: function(){
        this.weekreportupdaterecord(
            document.getElementById("id").value
            , document.getElementById("title").value
            , document.getElementById("send_check").value
            , document.getElementById("project_name").value
            , document.getElementById("assign_task").value
            , document.getElementById("work_volume").value
            , document.getElementById("notice_etc").value
            , document.getElementById("start_date_sun").value
            , document.getElementById("end_date_sun").value
            , document.getElementById("notice_sun").value
            , document.getElementById("start_date_mon").value
            , document.getElementById("end_date_mon").value
            , document.getElementById("notice_mon").value
            , document.getElementById("start_date_tue").value
            , document.getElementById("end_date_tue").value
            , document.getElementById("notice_tue").value
            , document.getElementById("start_date_wed").value
            , document.getElementById("end_date_wed").value
            , document.getElementById("notice_wed").value
            , document.getElementById("start_date_thu").value
            , document.getElementById("end_date_thu").value
            , document.getElementById("notice_thu").value
            , document.getElementById("start_date_fri").value
            , document.getElementById("end_date_fri").value
            , document.getElementById("notice_fri").value
            , document.getElementById("start_date_sat").value
            , document.getElementById("end_date_sat").value
            , document.getElementById("notice_sat").value
            , function(response){

                console.log("- success weekreport record update -", response);
                document.getElementById('results').innerHTML += '<li class="info">success weekreport record update [' + new Date().toISOString() + ']</li>';

            }, function(error){

                console.log("- error record weekreport update -", error);
                document.getElementById('results').innerHTML += '<li class="error">error weekreport record update [' + new Date().toISOString() + ']</li>';

            }
        );
    }

    // sendのファンクション
    , send: function(){}

    // saveconfigのファンクション
    , saveconfig: function(){
        this.configupdaterecord(
            document.getElementById("config_id").value
            , document.getElementById("to").value
            , document.getElementById("from").value
            , document.getElementById("user_name").value
            , document.getElementById("company_name").value
            , function(response){
                
                console.log("- success config record update -", response);
                document.getElementById('results').innerHTML += '<li class="info">success config record update [' + new Date().toISOString() + ']</li>';

            }
            , function(error){

                console.log("- error record config update -", error);
                document.getElementById('results').innerHTML += '<li class="error">error config record update [' + new Date().toISOString() + ']</li>';
                
            }
        );
    }

    , sqlliteOpen: function(){
        this.sqllite._open(function(_db){
            console.log("- success sqllite open -");
            this.db = _db;
        }, function(error){
            console.log("- error sqllite open -", error);
        });
    }

    , websqlOpen: function(){
        this.websql._open(function(_db){
            console.log("- success websql open -");
            this.db = _db;
        }, function(error){
            console.log("- error websql open -", error);
        });
        
    }

    , createWeekreportTable: function(){
        this.weekreporttablecreate(function(){
            console.log("- success create weekreport table -");
        }, function(error){
            console.log("- error create weekreport table -", error);
        });
    }

    , createConfigTable: function(){
        this.configtablecreate(function(){
            console.log("- success create config table -");
        }, function(error){
            console.log("- error create config table -", error);
        });
    }

    , insertWeekreportRecord: function(){
        this.weekreportinsertrecord(
            ""              // title
            , ""            // send_check
            , ""            // project
            , ""            // assign
            , ""            // work
            , ""            // notice
            , ""            // start_date_sun
            , ""            // end_date_sun
            , ""            // notice_sun
            , ""            // start_date_mon
            , ""            // end_date_mon
            , ""            // notice_mon
            , ""            // start_date_tue
            , ""            // end_date_tue
            , ""            // notice_tue
            , ""            // start_date_wed
            , ""            // end_date_wed
            , ""            // notice_wed
            , ""            // start_date_thu
            , ""            // end_date_thu
            , ""            // notice_thu
            , ""            // start_date_fri
            , ""            // end_date_fri
            , ""            // notice_fri
            , ""            // start_date_sat
            , ""            // end_date_sat
            , ""            // notice_sat
            , function(){
                console.log("- success insert weekreport record -");
            }, function(error){
                console.log("- error insert weekreport record -", error);
            }
        );
    }

    , updateWeekreportRecord: function(){
        this.weekreportupdaterecord(
            ""              // title
            , ""            // send_check
            , ""            // project
            , ""            // assign
            , ""            // work
            , ""            // notice
            , ""            // end_date_sun
            , ""            // notice_sun
            , ""            // start_date_mon
            , ""            // end_date_mon
            , ""            // notice_mon
            , ""            // start_date_tue
            , ""            // end_date_tue
            , ""            // notice_tue
            , ""            // start_date_wed
            , ""            // end_date_wed
            , ""            // notice_wed
            , ""            // start_date_thu
            , ""            // end_date_thu
            , ""            // notice_thu
            , ""            // start_date_fri
            , ""            // end_date_fri
            , ""            // notice_fri
            , ""            // start_date_sat
            , ""            // end_date_sat
            , ""            // notice_sat
            , function(){
                console.log("- success update weekreport record -");
            }, function(error){
                console.log("- error update weekreport record -", error);
            }
        );
    }

    , allReedWeekreportRecords: function(){
        this.weekreportallrecords(function(response){
            console.log("- success records all weekreport -", response);
        }, function(){
            console.log("- error records all weekreport -", error);
        });
    }

    , lastReedWeekreportRecord: function(){
        this.weekreportlastrecord(function(response){
            console.log("- success record last weekreport -", response);
        }, function(error){
            console.log("- error record last weekreport -", error);
        });
    }

    , ReedConfig: function(){
        this.configrecord(function(response){
            console.log("- success record config -");
        }, function(error){
            console.log("- error record config -", error);
        });
    }

    , dropWeekreportTable: function(){
        //
    }

    , dropConfigTable: function(){
        //
    }

    , deleteWeekreportRecord: function(){
        //
    }

    // sqliteプラグイン
    , sqllite: {
        // チェック
        _is: function(){
            return window.sqlitePlugin?true:false;
        }
        // テスト
        , _test: function(success_callback, failure_callback){
            window.sqlitePlugin.selfTest(function(){
                success_callback();
            }.bind(this), function(){
                failure_callback();
            }.bind(this));
        }
        // db接続
        , _open: function(success_callback, failure_callback){
            try {
                success_callback(
                    window.sqlitePlugin.openDatabase({
                        name: "sample.db"
                        , location: "default"
                    })
                );
            } catch (error) {
                failure_callback(error);
            }
        }
    }

    // websql
    , websql: {
        // チェック
        _is: function(){
            return window.openDatabase?true:false;
        }
        // db 接続
        , _open: function(success_callback, failure_callback){
            try {
                success_callback(
                    /**
                     * name
                     * version 指定しなくてもOK
                     * displayName
                     * size
                     * callback
                     */
                    window.openDatabase(
                        "weeklyreport.db"
                        , "1.0"
                        , "sample"
                        , 10000000
                        // , function(){}
                    )
                );
            } catch (error) {
                failure_callback(error);
            }
        }
    }

    // 週報テーブル 作成
    , weekreporttablecreate: function(success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = [
                "CREATE TABLE IF NOT EXISTS WeeklyReportTable ("
                , "id INTEGER PRIMARY KEY"
                , ", send_check INTEGER"
                , ", title TEXT"
                , ", project TEXT"
                , ", assign TEXT"
                , ", work TEXT"
                , ", notice TEXT"
                , ", start_date_sun TEXT"
                , ", end_date_sun TEXT"
                , ", notice_sun TEXT"
                , ", start_date_mon TEXT"
                , ", end_date_mon TEXT"
                , ", notice_mon TEXT"
                , ", start_date_tue TEXT"
                , ", end_date_tue TEXT"
                , ", notice_tue TEXT"
                , ", start_date_wed TEXT"
                , ", end_date_wed TEXT"
                , ", notice_wed TEXT"
                , ", start_date_thu TEXT"
                , ", end_date_thu TEXT"
                , ", notice_thu TEXT"
                , ", start_date_fri TEXT"
                , ", end_date_fri TEXT"
                , ", notice_fri TEXT"
                , ", start_date_sat TEXT"
                , ", end_date_sat TEXT"
                , ", notice_sat TEXT)"
            ].join("");
            tx.executeSql(sql, [/* parameter */], function(tx, response){
                success_callback(response);
            }, function(error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 週報テーブル 新規レコード
    , weekreportinsertrecord: function(
        title
        , send_check
        , project
        , assign
        , work
        , notice
        , start_date_sun
        , end_date_sun
        , notice_sun
        , start_date_mon
        , end_date_mon
        , notice_mon
        , start_date_tue
        , end_date_tue
        , notice_tue
        , start_date_wed
        , end_date_wed
        , notice_wed
        , start_date_thu
        , end_date_thu
        , notice_thu
        , start_date_fri
        , end_date_fri
        , notice_fri
        , start_date_sat
        , end_date_sat
        , notice_sat
        , success_callback
        , failure_callback
    ){
        this.db.transaction(function(tx){
            var sql = [
                "INSERT INTO WeeklyReportTable ("
                , "title"
                , ", send_check"
                , ", project"
                , ", assign"
                , ", work"
                , ", notice"
                , ", start_date_sun"
                , ", end_date_sun"
                , ", notice_sun"
                , ", start_date_mon"
                , ", end_date_mon"
                , ", notice_mon"
                , ", start_date_tue"
                , ", end_date_tue"
                , ", notice_tue"
                , ", start_date_wed"
                , ", end_date_wed"
                , ", notice_wed"
                , ", start_date_thu"
                , ", end_date_thu"
                , ", notice_thu"
                , ", start_date_fri"
                , ", end_date_fri"
                , ", notice_fri"
                , ", start_date_sat"
                , ", end_date_sat"
                , ", notice_sat"
                , ") VALUES ("
                , "'" + title + "'"
                , ", '" + send_check + "'"
                , ", '" + project + "'"
                , ", '" + assign + "'"
                , ", '" + work + "'"
                , ", '" + notice + "'"
                , ", '" + start_date_sun + "'"
                , ", '" + end_date_sun + "'"
                , ", '" + notice_sun + "'"
                , ", '" + start_date_mon + "'"
                , ", '" + end_date_mon + "'"
                , ", '" + notice_mon + "'"
                , ", '" + start_date_tue + "'"
                , ", '" + end_date_tue + "'"
                , ", '" + notice_tue + "'"
                , ", '" + start_date_wed + "'"
                , ", '" + end_date_wed + "'"
                , ", '" + notice_wed + "'"
                , ", '" + start_date_thu + "'"
                , ", '" + end_date_thu + "'"
                , ", '" + notice_thu + "'"
                , ", '" + start_date_fri + "'"
                , ", '" + end_date_fri + "'"
                , ", '" + notice_fri + "'"
                , ", '" + start_date_sat + "'"
                , ", '" + end_date_sat + "'"
                , ", '" + notice_sat + "')"
            ].join("");
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 週報テーブル レコード更新
    , weekreportupdaterecord: function(
        id
        , title
        , send_check
        , project
        , assign
        , work
        , notice
        , start_date_sun
        , end_date_sun
        , notice_sun
        , start_date_mon
        , end_date_mon
        , notice_mon
        , start_date_tue
        , end_date_tue
        , notice_tue
        , start_date_wed
        , end_date_wed
        , notice_wed
        , start_date_thu
        , end_date_thu
        , notice_thu
        , start_date_fri
        , end_date_fri
        , notice_fri
        , start_date_sat
        , end_date_sat
        , notice_sat
        , success_callback
        , failure_callback
    ){
        this.db.transaction(function(tx){
            var sql = [
                "UPDATE WeeklyReportTable SET "
                , "title = '" + title + "'"
                , ", send_check = '" + send_check + "'"
                , ", project = '" + project + "'"
                , ", assign = '" + assign + "'"
                , ", work = '" + work + "'"
                , ", notice = '" + notice + "'"
                , ", start_date_sun = '" + start_date_sun + "'"
                , ", end_date_sun = '" + end_date_sun + "'"
                , ", notice_sun = '" + notice_sun + "'"
                , ", start_date_mon = '" + start_date_mon + "'"
                , ", end_date_mon = '" + end_date_mon + "'"
                , ", notice_mon = '" + notice_mon + "'"
                , ", start_date_tue = '" + start_date_tue + "'"
                , ", end_date_tue = '" + end_date_tue + "'"
                , ", notice_tue = '" + notice_tue + "'"
                , ", start_date_wed = '" + start_date_wed + "'"
                , ", end_date_wed = '" + end_date_wed + "'"
                , ", notice_wed = '" + notice_wed + "'"
                , ", start_date_thu = '" + start_date_thu + "'"
                , ", end_date_thu = '" + end_date_thu + "'"
                , ", notice_thu = '" + notice_thu + "'"
                , ", start_date_fri = '" + start_date_fri + "'"
                , ", end_date_fri = '" + end_date_fri + "'"
                , ", notice_fri = '" + notice_fri + "'"
                , ", start_date_sat = '" + start_date_sat + "'"
                , ", end_date_sat = '" + end_date_sat + "'"
                , ", notice_sat = '" + notice_sat + "'"
                , " WHERE id = " + id
            ].join("");
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 週報テーブル record 削除
    , weekreportdeleterecord: function(id, success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "DELETE FROM WeeklyReportTable WHERE id = '" + id + "'";
            tx.executeSql(sql, [], function(tx){
                success_callback();
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 週報テーブル record 直近1件読込
    , weekreportlastrecord: function(success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "SELECT * FROM WeeklyReportTable ORDER BY id DESC LIMIT 1";
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 週報テーブル record 全件読込
    , weekreportallrecords: function(success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "SELECT * FROM WeeklyReportTable";
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 設定マスタ テーブル作成
    , configtablecreate: function(success_callback, failure_callback){
        this.db.transaction(function(tx){

            var sql = [
                "CREATE TABLE IF NOT EXISTS ConfigTable ("
                , "id INTEGER PRIMARY KEY"
                , ", mail_to TEXT"
                , ", mail_from TEXT"
                , ", user_name TEXT"
                , ", company_name TEXT)"
            ].join("");
            tx.executeSql(sql, [/* parameter */], function(tx, response){
                success_callback();
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 設定マスタテーブル 新規レコード
    , configinsertrecord: function(
        mail_to
        , mail_from
        , user_name
        , company_name
        , success_callback
        , failure_callback
    ){
        this.db.transaction(function(tx){
            var sql = [
                "INSERT INTO ConfigTable ("
                , "mail_to"
                , ", mail_from"
                , ", user_name"
                , ", company_name"
                , ") VALUES ("
                , "'" + mail_to + "'"
                , ", '" + mail_from + "'"
                , ", '" + user_name + "'"
                , ", '" + company_name + "')"
            ].join("");
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 設定マスタテーブル レコード更新
    , configupdaterecord: function(
        id
        , to
        , from
        , user_name
        , company_name
        , success_callback
        , failure_callback
    ){
        this.db.transaction(function(tx){
            var sql =[
                "UPDATE ConfigTable SET "
                , "mail_to = '" + to + "'"
                , ", mail_from = '" + from + "'"
                , ", user_name = '" + user_name + "'"
                , ", company_name = '" + company_name + "'"
                , " WHERE id = " + id
            ].join("");
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 設定マスタテーブル レコード削除
    , configdeleterecord: function(id, success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "DELETE FROM ConfigTable WHERE id = '" + id + "'";
            tx.executeSql(sql, [], function(tx){
                success_callback();
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

    // 設定マスタテーブル record 直近1件読込
    , configlastrecord: function(success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "SELECT * FROM ConfigTable ORDER BY id DESC LIMIT 1";
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error.message);
            });
        }, function(error){
            failure_callback(error.message);
        }, function(){});
    }

    // 設定マスタテーブル 読込
    , configrecord: function(success_callback, failure_callback){
        this.db.transaction(function(tx){
            var sql = "SELECT * FROM ConfigTable";
            tx.executeSql(sql, [], function(tx, response){
                success_callback(response);
            }, function(tx, error){
                failure_callback(error);
            });
        }, function(error){
            failure_callback(error);
        }, function(){});
    }

};
