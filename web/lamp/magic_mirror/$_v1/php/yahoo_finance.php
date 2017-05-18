<?php
//$FILE_DIRECTORY = $_SERVER['DOCUMENT_ROOT'] . "/dev/test/basic_rest/assets/";

//downloadFile("http://finance.yahoo.com/d/quotes.csv?s=MSFT+AAPL+GOOG+AMZN&f=snol1p2", $FILE_DIRECTORY . "stocks.txt");
//echo "Change string";
//echo "<h1>THIS IS A LARGE TEXT</h1>";
//echo file_get_contents('http://finance.yahoo.com/d/quotes.csv?s=MSFT+AAPL+GOOG+AMZN&f=snol1p2');
$string = file_get_contents('http://finance.yahoo.com/d/quotes.csv?s=MSFT+AAPL+BAC+GOOG&f=snol1p2');
//AAPL+GOOG+
$string = str_replace("\"", "", $string);
$data = explode("\n", $string);
array_pop($data);


$json = new stdClass();
$json->stocks = array();
$i = 0;
foreach ($data as $datum) {
    $datum = explode(",", $datum);

    $stock = new stdClass();
    $stock->s  = $datum[0];
    $stock->n  = $datum[1];
    $stock->o  = $datum[2];
    $stock->l1 = $datum[3];
    $stock->p2 = $datum[4];

    array_push($json->stocks, $stock);
}

echo json_encode($json);



// $obj = new stdClass();
// $obj->label="Devices per year";
// $obj->data = array(
//     array('1999','3.0'),
//     array('2000','3.9'),
//     //and so on...
// );
//
// echo json_encode($obj);


//echo file_get_contents('C:\Users\Christopher\Desktop\quotes(7).csv');

//echo var_dump($_POST);
// if(isset($_POST['blah']))
// {
//   echo $_POST['blah'];
// }
//
// if(isset($_POST['userid']))
// {
//   echo $_POST['userid'];
// }



//http://stackoverflow.com/a/3938844
function downloadFile($url, $path)
{
    $newfname = $path;
    $file = fopen ($url, 'rb');
    if ($file) {
        $newf = fopen ($newfname, 'wb');
        if ($newf) {
            while(!feof($file)) {
                fwrite($newf, fread($file, 1024 * 8), 1024 * 8);
            }
        }
    }
    if ($file) {
        fclose($file);
    }
    if ($newf) {
        fclose($newf);
    }
}


?>
