<?php

echo "Hello World <br />";
if(isset($_GET['v'])){
	echo "Version: {$_GET['v']}";
}