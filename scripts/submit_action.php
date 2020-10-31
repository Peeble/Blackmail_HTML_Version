<?php 

$link = mysqli_connect("localhost", "root", "", "company");

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql = "INSERT INTO department (dname, dnumber, mgrssn, mgrstartdate) VALUES ('$_POST[bfname]', '$_POST[vfname]', '$_POST[cost]', '$_POST[bmpic]')";
if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

mysqli_close($link);
?>