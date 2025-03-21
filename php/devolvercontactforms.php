<?php 
header('Access-Control-Allow-Origin: *');
include 'conexionbd.php';
$obj=array();
$sql='SELECT * FROM `formulario_contacto` ORDER BY `id` DESC';
$i=0;
$result=$conn->query($sql);
while ($row=$result->fetch_assoc()) {
    $obj[$i]=new stdclass();
    $obj[$i]->id=$row['id'];
    $obj[$i]->nombre=$row['nombre'];
    $obj[$i]->email=$row['email'];
    $obj[$i]->mensaje=$row['mensaje'];
    $i++;
}
    echo json_encode($obj);
?>