   
    window.onload = function (){
        var footer = document.getElementsByClassName('header_top')[0];
        //var container = document.getElementsByClassName('main')[0];
        console.log(container);
        var ratio;

        var controlWidth = document.body.offsetWidth;
        if(controlWidth < 1300){

            ratio = controlWidth/1300;
            console.log(ratio);
            container.style.transform = 'scale('+ ratio +')' ;
        }

        window.addEventListener('resize',function () {
            resize();
        })
        window.addEventListener('orientationchange',function () {
            resize();
        })
        function resize() {
            controlWidth = document.body.offsetWidth;
            if(controlWidth < 1300){

                ratio = controlWidth/1300;
                console.log(ratio);
                container.style.transform = 'scale('+ ratio +')';
            }else{
                container.style.transform = 'inherit';
            }
        }
    }
