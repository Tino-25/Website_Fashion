<?php 
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Mehtods: POST");
header("Access-Control-Allow-Headers:Access-Control-Allow-Mehtods,Content-Type,Access-Control-Allow-Mehtods,Authorization,X-Requested-With");

require_once "../model/size.php";
$size_obj = new Size();

$id = isset($_GET['id']) ? $_GET['id'] : null;
if(isset($id)){
	$result = $size_obj->delete($id);
	if($result){
		$size_obj->deliver_response(200, "Đã xóa thành công", null);
	}else{
		$size_obj->deliver_response(200, "Không xóa được dữ liệu", null);
	}
}else{
	$size_obj->deliver_response(400, "Không hợp lệ - thiếu giá trị id để xóa", null);
}

//http://localhost:8080/WORK_SPACE/dacn1_fashion/RestAPI/size/delete.php?id= id record cần xóa
?>