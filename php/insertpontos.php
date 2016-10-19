<?php
//inserindo pontos

$host = "localhost";
$user = "root";
$pass = "";
$db = "finddb";

    $conection = mysql_connect($host, $user, $pass);
	
	mysql_select_db($db);
	
	
	$sql = "select * from localizacao";
	$json = null;
	$query = mysql_query($sql);
	while($row = mysql_fetch_assoc($query)){
		$json_str = json_encode($row);
		$json .= $json_str;
	}	
	
	//string em formato json
	echo $json;