var day = 13; //13
var month = 2; //marzo
var now = new Date();

var year;
if (now.getMonth() > month) {
    year = now.getFullYear() + 1;
} else if (now.getMonth() == month && now.getDate() > day) {
    year = now.getFullYear() + 1;
} else {
    year = now.getFullYear() + 1;
}


var countDownDate = new Date(year, month, day);

var x = setInterval(function() {

    // Get today's date and time
    now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().split("");
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().split("");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().split("");
    // Display the result in the element with 
    days.forEach((x, y) => {
        let z = 1;
        if (days.length == 2) {
            z++;
        } else if (days.length == 1) {
            z = z + 2;
        }
        let id = (y + z);
        if ($('.timer .days #id_' + id + ' #img1').data('value') != x) {
            let prev;
            if (id == 1) {
                prev = x == 3 ? 0 : (parseInt(x) + 1);
            } else if (id == 2) {
                prev = x == 6 ? 0 : (parseInt(x) + 1);
            } else {
                if (z == 3) {
                    prev = x == 5 ? 0 : (parseInt(x) + 1);
                } else {
                    prev = x == 9 ? 0 : (parseInt(x) + 1);
                }
            }
            var animation = $('#anim_days_' + id)[0];
            var lottieAnimation = bodymovin.loadAnimation({
                container: animation, // ID del div
                path: 'static/animation/blanco/bco_' + prev + '-' + x + '.json', // Ruta fichero .json de la animación
                renderer: 'svg', // Requerido
                loop: false, // Opcional
                autoplay: false, // Opcional
            });
            lottieAnimation.play();
            setTimeout(() => {
                $('.timer .days #id_' + id + ' #img1').data('value', x);
                $('.timer .days #id_' + id + ' #img1').attr('src', 'static/img/blanco_img/' + x + '_bco.png');
            }, 500);
            $('#anim_days_' + id).empty();
        }
    });
    hours.forEach((x, y) => {
        z = hours.length == 1 ? 2 : 1;
        let id = (y + z);
        if ($('.timer .hours #id_' + id + ' #img1').data('value') != x) {
            let prev;
            if (id == 1) {
                /* next = x == 0 ? 2 : x - 1; */
                prev = x == 2 ? 0 : (parseInt(x) + 1);
            } else {
                if (z == 2) {
                    /* next = x == 0 ? 3 : x - 1; */
                    prev = x == 3 ? 0 : (parseInt(x) + 1);
                } else {
                    /* next = x == 0 ? 9 : x - 1; */
                    prev = x == 9 ? 0 : (parseInt(x) + 1);
                }
            }
            var animation = $('#anim_hour_' + id)[0];
            var lottieAnimation = bodymovin.loadAnimation({
                container: animation, // ID del div
                path: 'static/animation/blanco/bco_' + prev + '-' + x + '.json', // Ruta fichero .json de la animación
                renderer: 'svg', // Requerido
                loop: false, // Opcional
                autoplay: false, // Opcional
            });
            lottieAnimation.play();
            setTimeout(() => {
                $('.timer .hours #id_' + id + ' #img1').data('value', x);
                $('.timer .hours #id_' + id + ' #img1').attr('src', 'static/img/blanco_img/' + x + '_bco.png');
            }, 500);
            $('#anim_hour_' + id).empty();
        }
    });
    minutes.forEach((x, y) => {
        z = minutes.length == 1 ? 2 : 1;
        let id = (y + z);
        if ($('.timer .min #id_' + id + ' #img1').data('value') != x) {
            let clr, color, prev;
            if (id == 1) {
                /* next = x == 0 ? 6 : x - 1; */
                prev = x == 6 ? 0 : (parseInt(x) + 1);
            } else {
                /* next = x == 0 ? 9 : x - 1; */
                prev = x == 9 ? 0 : (parseInt(x) + 1);
            }
            clr = id == 2 ? 'ama' : 'bco';
            color = id == 2 ? 'amarillo' : 'blanco';
            var animation = $('#anim_min_' + id)[0];
            var lottieAnimation = bodymovin.loadAnimation({
                container: animation, // ID del div
                path: 'static/animation/' + color + '/' + clr + '_' + prev + '-' + x + '.json', // Ruta fichero .json de la animación
                renderer: 'svg', // Requerido
                loop: false, // Opcional
                autoplay: false, // Opcional
            });
            lottieAnimation.play();
            setTimeout(() => {
                $('.timer .min #id_' + id + ' #img1').data('value', x);
                $('.timer .min #id_' + id + ' #img1').attr('src', 'static/img/' + color + '_img/' + x + '_' + clr + '.png');
            }, 500);
            $('#anim_min_' + id).empty();
        }
    });

}, 1000);