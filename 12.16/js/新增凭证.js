$(function () {  
    //找到所有名字的单元格  
//  var name = $("tbody td:even");  
    //给这些单元格注册鼠标点击事件  
    $(".cr3-1").click(function () {  
      
        
        //找到当前鼠标单击的td  
        var tdObj = $(this);  
        //保存原来的文本  
        var oldText = $(this).text();  
        //创建一个文本框  
        var inputObj = $("<input type='text' class='c1' value='" + oldText + "'/>");  
        //去掉文本框的边框  
//      inputObj.css("border-width", 0);
        inputObj.click(function () {  
            return false;  
        });  
        //使文本框的宽度和td的宽度相同  
        inputObj.width(tdObj.width());  
        inputObj.height(tdObj.height());  
        //去掉文本框的外边距  
        inputObj.css("margin", 0);  
        inputObj.css("padding", 0);  
        inputObj.css("text-align", "center");  
        inputObj.css("font-size", "16px");  
        inputObj.css("background-color", tdObj.css("background-color"));  
        //把文本框放到td中  
        tdObj.html(inputObj);  
        //文本框失去焦点的时候变为文本  
        inputObj.blur(function () {   
            var newText = $(this).val();  
            tdObj.html(newText);          
        });  
        //全选  
          inputObj.trigger("focus").trigger("select");  
    }); 
    
    
    
    
     $(".cr3-2").click(function () {  
      
        
        //找到当前鼠标单击的td  
        var tdObj = $(this);  
        //保存原来的文本  
        var oldText = $(this).text();  
        //创建一个文本框  
        var inputObj = $("<input type='text' value='" + oldText + "'/>");  
        //去掉文本框的边框  
//      inputObj.css("border-width", 0);
        inputObj.click(function () {  
            return false;  
        });  
        //使文本框的宽度和td的宽度相同  
        inputObj.width(tdObj.width());  
        inputObj.height(tdObj.height());  
        //去掉文本框的外边距  
        inputObj.css("margin", 0);  
        inputObj.css("padding", 0);  
        inputObj.css("text-align", "center");  
        inputObj.css("font-size", "16px");  
        inputObj.css("background-color", tdObj.css("background-color"));  
        //把文本框放到td中  
        tdObj.html(inputObj);  
        //文本框失去焦点的时候变为文本  
        inputObj.blur(function () {   
            var newText = $(this).val();  
            tdObj.html(newText);          
        });  
        //全选  
          inputObj.trigger("focus").trigger("select");  
    }); 
    
    
    
    
    
    $(".c3").click(function () {  
      
        
        //找到当前鼠标单击的td  
        var tdObj = $(this);  
        //保存原来的文本  
        var oldText = $(this).text();  
        //创建一个文本框  
        var inputObj = $("<input type='text' class='c1' value='" + oldText + "'/>");  
        //去掉文本框的边框  
        inputObj.css("border-width", 0);
        inputObj.click(function () {  
            return false;  
        });  
        //使文本框的宽度和td的宽度相同  
        inputObj.width(tdObj.width());  
        inputObj.height(tdObj.height());  
        //去掉文本框的外边距  
        inputObj.css("margin", 0);  
        inputObj.css("padding", 0);  
        inputObj.css("text-align", "center");  
        inputObj.css("font-size", "16px");  
        inputObj.css("background-color", tdObj.css("background-color"));  
        //把文本框放到td中  
        tdObj.html(inputObj);  
        //文本框失去焦点的时候变为文本  

          inputObj.blur(function () {   
            var newText = $(this).val();  
            tdObj.html("<table class='c3'><td id='c3-1'>"+ newText+"</td> </table>"); 
           
//          tdObj.html("<table class='c3'><td id='c3-1'></td> <td id='c3-2'></td> <td id='c3-3'></td><td id='c3-4'></td><td id='c3-5'></td> <td id='c3-6'></td><td id='c3-7'></td><td id='c3-8'></td><td id='c3-9'></td><td id='c3-10'></td><td id='c3-11'></td></table>")
        });  
         

         
                    
          inputObj.trigger("focus").trigger("select");  
    }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(".cr2-1").click(function () {  
      
        
        //找到当前鼠标单击的td  
        var tdObj = $(this);  
        //保存原来的文本  
        var oldText = $(this).text();  
        //创建一个文本框  
        var inputObj = $("<input type='text'  value='" + oldText + "'/>");  
        //去掉文本框的边框  
//      inputObj.css("border-width", 0);
        inputObj.click(function () {  
            return false;  
        });  
        //使文本框的宽度和td的宽度相同  
        inputObj.width(tdObj.width());  
        inputObj.height(tdObj.height());  
        //去掉文本框的外边距  
        inputObj.css("margin", 0);  
        inputObj.css("padding", 0);  
        inputObj.css("text-align", "center");  
        inputObj.css("font-size", "16px");  
        inputObj.css("background-color", tdObj.css("background-color"));  
        //把文本框放到td中  
        tdObj.html(inputObj);  
        //文本框失去焦点的时候变为文本  
        inputObj.blur(function () {   
            var newText = $(this).val();  
            tdObj.html(newText);          
        });  
        //全选  
          inputObj.trigger("focus").trigger("select");  
    }); 
    
    
    
    
 
});  
