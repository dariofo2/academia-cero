<?php
header('Access-Control-Allow-Origin: *'); //Para que funcionen las peticion HTTP desde otros Dominios o Servidores

include 'conexionbd.php';

$sql="SELECT * FROM `noticias` ORDER BY `id` DESC";

$result=$conn->query($sql);

$result_array=array();
$i=0;
while ($row=$result->fetch_assoc() AND $i<8) {
    $result_array[$i]=new stdclass();
    $result_array[$i]->id=$row['id'];
    $result_array[$i]->titulo=$row['titulo'];
    $result_array[$i]->contenido=$row['contenido'];
    $result_array[$i]->imagen=$row['imagen'];
    $result_array[$i]->linkextra=$row['linkextra'];
    
    $i++;
}
$jsonarray= json_encode($result_array);

echo $jsonarray;

?>