
// curator-feed-homepagefeatured-layout
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/3a91be96-3801-4797-80f9-0a9d5b0db399.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();

    (function(){
        var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
        i.src = "https://cdn.curator.io/published/b5ac86ba-eac5-4016-af9c-e3e38db05d30.js";
        e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
        })();



        var elem = document.querySelectorAll('.main-carousel');
        for (var i=0, len = elem.length; i < len; i++) {
            var carouselElem = elem[i];
            new Flickity (carouselElem, {
                cellAlign: 'center',
                adaptiveHeight: true,
                wrapAround: true,
                percentPosition: false,
                resize: true,
            })};





var inputVal = document.getElementsByClassName("buy-inputs");


function checkFilled() {
    var inputVal = document.getElementsByClassName("buy-inputs");
    var i;
    for (i = 0; i < inputVal.length; i++) {
        if (inputVal[i].value.length !== 0) {
            inputVal[i].id = 'filled'+(i+1);
        }    

    }

    }

    inputVal[0].addEventListener("keyup", checkFilled);
    inputVal[1].addEventListener("keyup", checkFilled);


