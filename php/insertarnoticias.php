<?php 
header('Access-Control-Allow-Origin: *');
include "conexionbd.php";

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);

$titulo=$_POST['titulo'];
$contenido=$_POST['contenido'];
$fotolink=$target_file;
$linkextra=$_POST['linkextra'];

$sql="INSERT INTO `noticias` VALUES ('','".$titulo."','".$contenido."','".$fotolink."','".$linkextra."') ";

mysqli_query($conn,$sql);


?>

<script>
    window.location='admin/index.html';
</script>