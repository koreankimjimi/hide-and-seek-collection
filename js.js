
/*
    next

 
 
 상대방 총알 충돌 처리 
 HP바 만들어서 충돌시 체력 감소

*/



//user position 
var userLeft = 10;
var userTop = 10;
var userHeader = 0;

//user2 position
var userLeft2 = 100;
var userTop2 = 100;
var userHeader2 = 0;

//block double
var blockDouble  = true;
var blockDouble2  = true;
window.onload = newBlock;
$(function(){
//    user control
    var map = $("#map").offset();
    var w = $("#map").width();
    var h = $("#map").height();
    
    $("body").keydown(function(e){
        var key = e.keyCode;
        console.log(key);
        
        switch(key){
            case 37:
                userHeader = 1;
                if(map.left+10 < userLeft){
                    userLeft -= 10;
                    $("#user").css({"left":userLeft+"px"});
                }
                break;
            case 38:
                userHeader = 2;
                if(map.top+10 < userTop){
                    userTop -= 10;
                    $("#user").css({"top":userTop+"px"});
                }
                break;
            case 39:
                userHeader = 3;
                if(map.left+w > userLeft){
                    userLeft += 10;
                    $("#user").css({"left":userLeft+"px"});
                }
                break;
            case 40:
                userHeader = 0;
               if(map.top+w > userTop){
                    userTop += 10;
                    $("#user").css({"top":userTop+"px"});
                }
                break;
//            case 32:
//                userBlock +=1;
//                $("#map").append("<div class='user_block"+userBlock+"'></div>");
//                $("#map>.user_block"+userBlock+"").css({"width":"10px","height":"10px","background":"black","position":"absolute","top":userTop+"px","left":userLeft+"px"});
//                break;
            case 65:
                 userHeader2 = 1;
                if(map.left+10 < userLeft2){
                    userLeft2 -= 10;
                    $("#user2").css({"left":userLeft2+"px"});
                }
                break;
            case 87:
                userHeader2 = 2;
                if(map.top+10 < userTop2){
                    userTop2 -= 10;
                    $("#user2").css({"top":userTop2+"px"});
                }
                break;
            case 68:
                userHeader2 = 3;
                if(map.left+w > userLeft2){
                    userLeft2 += 10;
                    $("#user2").css({"left":userLeft2+"px"});
                }
                break;
            case 83:
                userHeader2 = 0;
               if(map.top+w > userTop2){
                    userTop2 += 10;
                    $("#user2").css({"top":userTop2+"px"});
                }
                break;
                
            case 70:
                switch (userHeader2){
                    case 0:
                        blockDouble == true ? block("top",0):false;
                        break;
                    case 1:
                        blockDouble == true ? block("left",0) : false;
                        break;
                    case 2:
                        blockDouble == true? block("top",1) : false;
                        break;
                    case 3:
                        blockDouble == true? block("left",1) :false;
                        break;    
                }
                break;
                
                
            case 191:
                switch (userHeader){
                    case 0:
                        blockDouble2 == true ? block("top2",0):false;
                        break;
                    case 1:
                        blockDouble2 == true ? block("left2",0) : false;
                        break;
                    case 2:
                        blockDouble2 == true ? block("top2",1) : false;
                        break;
                    case 3:
                        blockDouble2 == true ? block("left2",1) :false;
                        break;    
                }
                break;
        }
        
       
    })
})
//user shoot
function block(a,b){
    
    
     
     
        switch(a){
            case "top":
                blockDouble = false;
                 bullet(2,"top",b);                
                break;
            case "left":
                blockDouble = false;
                bullet(2,"left",b);
                 break;
            case "top2":
                
                blockDouble2 = false;
                bullet(1,"top",b);
                break;
            case "left2":
                blockDouble2 = false;
                bullet(1,"left",b);
                break;
        }
                    
}

function newBlock(){
        $("#map").append("<div target='block' class='shoot'></div>");
        $("#map").append("<div target='block' class='shoot2'></div>");
}


function bullet(a,b,c){
    switch(a){
        case 1:
            $("#map>.shoot").css({"left":userLeft-10+"px","top":userTop-10+"px","display":"block"});
            switch(b){
                case "top":
                    if(c > 0){
                        $("#map>.shoot").animate({top:userTop-300},500,function(){blockDouble2 = true}).fadeOut(500);  
                    }else{
                        $("#map>.shoot").animate({top:userTop+300},500,function(){blockDouble2 = true}).fadeOut(500);   
                    }
                    break;
                case "left":
                    if(c > 0){
                        $("#map>.shoot").animate({left:userLeft+300},500,function(){blockDouble2 = true}).fadeOut(500); 
                    }else{
                        $("#map>.shoot").animate({left:userLeft-300},500,function(){blockDouble2 = true}).fadeOut(500); 
                    }
                    break;
            }
            
            break;
        case 2:
            $("#map>.shoot2").css({"left":userLeft2-10+"px","top":userTop2-10+"px","display":"block"});
            switch(b){
                case "top":
                    if(c > 0){
                        $("#map>.shoot2").animate({top:userTop2-300},500,function(){blockDouble = true}).fadeOut(500);  
                    }else{
                        $("#map>.shoot2").animate({top:userTop2+300},500,function(){blockDouble = true}).fadeOut(500);   
                    }
                    break;
                case "left":
                    if(c > 0){
                        $("#map>.shoot2").animate({left:userLeft2+300},500,function(){blockDouble = true}).fadeOut(500); 
                    }else{
                        $("#map>.shoot2").animate({left:userLeft2-300},500,function(){blockDouble = true}).fadeOut(500); 
                    }
                    break;
            }
            break;
    }
}