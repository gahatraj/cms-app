<?php

date_default_timezone_set('America/Phoenix');

//These headers are only necessary if this API is going to be called from other domains
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Content-Type");

//these headers are necessary to make sure we are getting new data from the server when we call.  Disable if we would rather have cached responses
// header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
// header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
// header("Cache-Control: post-check=0, pre-check=0", false);
// header("Pragma: no-cache");
error_reporting(E_ALL);
ini_set( 'display_errors','1');

preg_match_all("/([^\/]+)\/([^\/]+)/", $_GET['args'], $req);
if(count($req[1]) > 0 && count($req[2]) > 0)
    $req = array_combine($req[1], $req[2]);
else
exit;

require_once('conInfo.php');
function w1250_to_utf8($text) {
    // map based on:
    // http://konfiguracja.c0.pl/iso02vscp1250en.html
    // http://konfiguracja.c0.pl/webpl/index_en.html#examp
    // http://www.htmlentities.com/html/entities/
    $map = array(
        chr(0x8A) => chr(0xA9),
        chr(0x8C) => chr(0xA6),
        chr(0x8D) => chr(0xAB),
        chr(0x8E) => chr(0xAE),
        chr(0x8F) => chr(0xAC),
        chr(0x9C) => chr(0xB6),
        chr(0x9D) => chr(0xBB),
        chr(0xA1) => chr(0xB7),
        chr(0xA5) => chr(0xA1),
        chr(0xBC) => chr(0xA5),
        chr(0x9F) => chr(0xBC),
        chr(0xB9) => chr(0xB1),
        chr(0x9A) => chr(0xB9),
        chr(0xBE) => chr(0xB5),
        chr(0x9E) => chr(0xBE),
        chr(0x80) => '&euro;',
        chr(0x82) => '&sbquo;',
        chr(0x84) => '&bdquo;',
        chr(0x85) => '&hellip;',
        chr(0x86) => '&dagger;',
        chr(0x87) => '&Dagger;',
        chr(0x89) => '&permil;',
        chr(0x8B) => '&lsaquo;',
        chr(0x91) => '&lsquo;',
        chr(0x92) => '&rsquo;',
        chr(0x93) => '&ldquo;',
        chr(0x94) => '&rdquo;',
        chr(0x95) => '&bull;',
        chr(0x96) => '&ndash;',
        chr(0x97) => '&mdash;',
        chr(0x99) => '&trade;',
        chr(0x9B) => '&rsquo;',
        chr(0xA6) => '&brvbar;',
        chr(0xA9) => '&copy;',
        chr(0xAB) => '&laquo;',
        chr(0xAE) => '&reg;',
        chr(0xB1) => '&plusmn;',
        chr(0xB5) => '&micro;',
        chr(0xB6) => '&para;',
        chr(0xB7) => '&middot;',
        chr(0xBB) => '&raquo;',
    );
    //return html_entity_decode(mb_convert_encoding(strtr($text, $map), 'UTF-8', 'ISO-8859-2'), ENT_QUOTES, 'UTF-8');
    return htmlspecialchars_decode(utf8_decode(htmlentities(strtr($text, $map), ENT_COMPAT, 'utf-8', false)));
}
switch ($_SERVER['REQUEST_METHOD']) {
	case "GET":
		//GET calls should be SELECT calls
		if(isset($req['getElements'])){
            $query = "CALL element.get_".$req['product']."()";
	     	$stmt = $conn->prepare($query);
	     	$stmt->execute();
	     	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	     	foreach($result as &$res) {
				foreach($res as &$field) {
					$field = w1250_to_utf8($field);
				};
			}
	    };
    break;
	case "POST":
        $input = rtrim(file_get_contents('php://input'), ":");
        $submission = json_decode($input, true);
	    
        if (isset($req['Create'])) {
            $hashed_password = password_hash($submission['userdata']['password'], PASSWORD_DEFAULT);
            $params[':firstname'] = $submission['userdata']['firstName'];
            $params[':lastname'] = $submission['userdata']['lastName'];
            $params[':username'] = $submission['userdata']['username'];
            $params[':upassword'] = $hashed_password;

            $get_USER_NAME = "SELECT userName FROM users";
            $stmt = $conn->prepare($get_USER_NAME);
            $stmt->execute($params);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach($result as &$user) {
                foreach($user as &$field) {
                    $field = w1250_to_utf8($field);
                };
            };
            if($field === $params[':username'] ){
                echo 'User exits';
                return;
            }else{
                $query = "CALL element.createUser(:firstname,:lastname,:username ,:upassword)";
                $stmt = $conn->prepare($query);
                $stmt->execute($params);
            }
        };



        if(isset($req['login'])){
            $params[':username'] = $submission['username'];
            $params[':password'] = $submission['password'];

            $usern = $params[':username'];

            $get_HASHED_PWD = "SELECT * FROM users";
            $stmt = $conn->prepare($get_HASHED_PWD);
            $stmt->execute($params);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach($result as &$pass) {
                foreach($pass as &$field) {
                    $field = w1250_to_utf8($field);
                };
            }
            
            $hashit = password_verify($params[':password'], $field);

            if($hashit == 0){
                echo "Username or password didn't match";
                return;
            }else{
                // $query = "CALL element.userLoginData(:username, '$field')";
                $query = "SELECT * FROM users where userName='$usern' AND userPassword='$field'";
                // $query = "CALL element.userLoginData(:username, '$field')";
                $stmt = $conn->prepare($query);
                $stmt->execute($params);
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
                var_dump($result); 
            }
        };

	break;
	case "PUT":
		//PUT calls should be INSERT calls
		//ALL PUTS MUST HAVE A CSRF TOKEN
		break;
	case "DELETE":
		//DELETE calls must be DELETE calls
		//ALL DELETES MUST HAVE A CSRF TOKEN
		//No sample delete, we do not generally delete this is included as an "in case" for outliers.
	break;
};

if(isset($stmt)){
	$error = $stmt->errorInfo();
};
if(strlen($error[2]) > 0) {
    $json = json_encode(array("success" => false, "results" => $error[2]));
}else {
	header('Content-type: text/html');
    $json = json_encode(array("success" => true, "results" => $result));
};
echo $json;
return;
?>