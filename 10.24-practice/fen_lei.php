<html>
<head>
    <meta charset="UTF-8">
    <title>分类</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <style>
        *{
            padding:0;
            margin:0;
        }
        .ul{
            width:90px;
            /*background:  pink;*/
           position: fixed;
            top:45px;
            left:0;
            bottom: 50px;
            background-color: #f8f8f8;
            overflow:auto;
        }
        li{
            width:88px;
            height: 43px;
            padding-left: 14px;
            line-height: 44px;
            font-size: 14px;
            color: #666666;
            white-space: nowrap;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            background-color: #f8f8f8;
            text-overflow: ellipsis;
            overflow: hidden;
            box-sizing: border-box;
        }
        li:last-child{
            border-bottom:1px solid #cccccc;
        }
        .content{
            display: inline-block;
            width:70%;
            height:600px;
            /*background: lightgreen;*/
            margin-left:0;
            margin-top:0;
            padding-top:30px;
        }
        img{
            width:60px;
            height:60px;
        }
        table{
            width:100%;
        }
        td{
            width:33.3%;
            height:60px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class=" ul">
            <ul class="nav nav-pills navbar-default" role="tablist">
                <?php
                require('../dbconfig.php');
                $p=new PDO($DBDNS,$USERNAME);
                $sql='SELECT
                    id,
                    li
                    FROM list;
                    ';
                $rs=$p->query($sql,PDO::FETCH_OBJ);
                $r=$rs->fetchAll();
                foreach($r as $i){
                    $id=$i->id;
                    $li=$i->li;
                    echo '<li><a href="fen_lei.php?did='.$id.'">'.$li.'</a>';
                }
                ?>
            </ul>
        </div>
        <div class="content">
            <table>
                <caption>水果</caption>
                <tbody>
                    <?php
                    if(!isset($_GET['did'])){
                        $did=1;
                    }else{
                        $did=$_GET['did'];
                    }
                    $p=new PDO($DBDNS,$USERNAME);
                    $sql='SELECT
                        id,r1,r2,r3
                        FROM table1
                        WHERE num='.$did;
                    $rs=$p->query($sql,PDO::FETCH_OBJ);
                    $rr=$rs->fetchAll();
                    foreach($rr as $item){
                        $r1=$item->r1;
                        $r2=$item->r2;
                        $r3=$item->r3;
                        echo '<tr>';
                        echo "<td>$r1</td>";
                        echo "<td>$r2</td>";
                        echo "<td>$r3</td>";
                        echo '</tr>';
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>



