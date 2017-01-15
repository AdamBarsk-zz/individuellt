$(".admin").attr("contenteditable", "true");

admin = $(".admin");

$(document).keydown(function(e) {
    if ((e.which == '115' || e.which == '83' ) && (e.ctrlKey || e.metaKey))
    {
        e.preventDefault();
        for (var i = 0; i < admin.length; i++) {

        $edit = $(admin[i]).html();
        $id = admin[i].id;
        $.ajax({
          url: "save.php",
          type: "post",
          data: {data:$edit, id:$id},
          datatype: "html",
            success: function () {
                console.log("Your changes have been saved.");
            }
          });
        }
        return false;
    }
    return true;
});
