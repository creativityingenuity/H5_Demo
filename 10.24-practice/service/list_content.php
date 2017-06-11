<?php
require('../../dbconfig.php');
$did=$_GET['did'];
//$did=1;
$p=new PDO($DBDNS,$USERNAME);
$sql='SELECT
    r1,r2,r3
    FROM table1
    WHERE num='.$did;
$rs=$p->query($sql,PDO::FETCH_OBJ);
$r=$rs->fetchAll();
echo json_encode($r);