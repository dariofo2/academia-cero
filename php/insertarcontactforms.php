<?php 
include "conexionbd.php";


$nombre=$_GET['nombre'];
$email=$_GET['email'];
$mensaje=$_GET['mensaje'];


$sql="INSERT INTO `formulario_contacto` VALUES ('','".$nombre."','".$email."','".$mensaje."') ";

mysqli_query($conn,$sql);


?>