$(document).ready(function () {
	
        $('#box1').click(function (e) {
			checkbox("#box1");
            $(this).toggleClass('active');
            $('#box-item1').toggle();
            e.stopPropagation();
        });
 
        $('#box-item1').click(function (e) {
            e.stopPropagation();
        });
		
		$('#box2').click(function (e) {
			checkbox("#box2");
            $(this).toggleClass('active');
            $('#box-item2').toggle();
            e.stopPropagation();
        });
 
        $('#box-item2').click(function (e) {
            e.stopPropagation();
        });
		
		$('#box3').click(function (e) {
			checkbox("#box3");
            $(this).toggleClass('active');
            $('#box-item3').toggle();
            e.stopPropagation();
        });
 
        $('#box-item3').click(function (e) {
            e.stopPropagation();
        });
		
		$('#box4').click(function (e) {
			checkbox("#box4");
            $(this).toggleClass('active');
            $('#box-item4').toggle();
            e.stopPropagation();
        });
 
        $('#box-item4').click(function (e) {
            e.stopPropagation();
        });
    });

function checkbox(id){
	if ($('#box1').hasClass('active') && (id).valueOf()!=("#box1").valueOf()) {
		$('#box1').click();
	}
	if ($('#box2').hasClass('active') && (id).valueOf()!=("#box2").valueOf()) {
		$('#box2').click();
	}
	if ($('#box3').hasClass('active') && (id).valueOf()!=("#box3").valueOf()) {
		$('#box3').click();
	}
	if ($('#box4').hasClass('active') && (id).valueOf()!=("#box4").valueOf()) {
		$('#box4').click();
	}
}


