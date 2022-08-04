
$(document).ready(function(){
    document.getElementById("history").addEventListener(
        "contextmenu", 
        (e) => {
            $('.menu-person').css({
                "margin-left": e.clientX,
                "margin-top": e.clientY,
                "position": "absolute",
                "z-index": 99999
            }).show()

            e.preventDefault();
            window.addEventListener('click', function () {
                $('.menu-person').hide();
            })
        },
        false);
});