let box = document.getElementsByClassName("box")[0];
box.addEventListener("mouseover", () => {
    $(document).ready(function(){
        $.toast({
            'message': 'Satın Almayalım, Sahiplenelim',
            'top': 100,
            'left': 50,
            'durationTime': 8000
          }).show();
    })
})