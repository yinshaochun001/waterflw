/**
 * Created by Administrator on 2016/10/19.
 */
$(document).ready(function(){
    $(window).on('load',function(){
        imgLocation();
        var data={
            "dataImg":[
                {"src":"1.jpg"},
                {"src":"2.jpg"},
                {"src":"3.jpg"},
                {"src":"4.jpg"},
                {"src":"5.jpg"},
                {"src":"6.jpg"},
                {"src":"7.jpg"},
                {"src":"8.jpg"},
                {"src":"9.jpg"},
                {"src":"10.jpg"},
                {"src":"11.jpg"},
                {"src":"12.jpg"}
            ]}
        window.onresize=function(){
            imgLocation();
        }
        window.onscroll=function(){
            if(scroll()){
                $.each(data.dataImg,function(index,value){
                    //console.log(value.src);
                  var box=$('<div>').addClass('box')
                      .appendTo($('.container'));
                    var content=$('<div>').addClass('content')
                        .appendTo(box);
                   var img=$('<img>').attr('src','img/img'+value.src)
                        .appendTo(content);
                    //console.log(img);
                })
                imgLocation();
            }
        }
    })
})
function scroll(){
    var box=$('.box');
    var lastboxHeight=box.last().get(0).offsetTop+
        Math.floor(box.last().height()/2);
    //console.log(lastboxHeight);
    var documentHeight=$(document).width();
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}
function imgLocation(){
    var box=$('.box');
    var boxWidth=box.eq(0).width();
//    一排的图片个数
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index, value){
        //console.log(index+'值：'+value);
        value.style.cssText='';
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=(boxHeight+20);
            //$('.box').css('bottom',10+'px');
            //console.log(boxHeight);
        }else{
            var minboxHeigth=Math.min.apply(null,boxArr);
            //console.log(minboxHeigth);
            var minIndex= $.inArray(minboxHeigth,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeigth+10+'px',
                "left":box.eq(minIndex).position().left+'px',
            })
        boxArr[minIndex]+=box.eq(index).height()+20;
        }
    })



}