<?php
header('Access-Control-Allow-Origin: *'); //Para que funcionen las peticion HTTP desde otros Dominios o Servidores
session_start();
include 'conexionbd.php';

if (isset($_SESSION['logged'])) {
    $_SESSION['logged']='1';
    echo $_SESSION['logged'];
} else {

if (isset($_GET['user'])) {

$sql="SELECT * FROM `admin_login` WHERE user='".$_GET['user']."' AND `password`='".$_GET['password']."'" ;

$result=$conn->query($sql);

if ($row=$result->fetch_assoc()) {
    $_SESSION['logged']='1';
    echo $_SESSION['logged'];
}

}
}
?>