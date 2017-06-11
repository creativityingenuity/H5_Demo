<?php
require('../../dbconfig.php');
$p=new PDO($DBDNS,$USERNAME);
$sql='SELECT
    id,li
    FROM list';
$rs=$p->query($sql,PDO::FETCH_OBJ);
$r=$rs->fetchAll();
echo json_encode($r);