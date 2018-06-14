jurMenu = {
    initMenu : function(){
        this.menuList();
    },

    menuList : function(){
        $.ajax({
            url:"/admin/menu/menuList",
            type:"post",
            data:{},
            dataType:"json",
            //async:true,
            success:function(data){
                alert(data.menuName);
                console.log(data);
            },error:function(XMLHttpRequest, textStatus, errorThrown){
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息
                console.log(textStatus);
            }
        });
    }

}
