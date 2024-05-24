document.addEventListener('DOMContentLoaded', function() {
    const face = document.getElementById('bouncy-face');
    const image = face.querySelector('img');
    let x_incr = -1, y_incr = -1;
    let smiling = false;  // Flag to indicate if the smiling image is set

    function init(){
        face.style.position = 'absolute';
        face.style.top = '0px'; // Initialize position
        face.style.left = '0px'; // Initialize position
        setInterval(frame, 5);
        console.log("Function called!")
    }

    function handle_collision(){
        let face_height = face.offsetHeight;
        let face_width = face.offsetWidth;
        let face_top = face.offsetTop;
        let face_left = face.offsetLeft;
        let win_height = window.innerHeight;
        let win_width = window.innerWidth;
        let collision = false;
    
        if (face_left <= 0 || face_left + face_width >= win_width){
            x_incr = -x_incr;
            collision = true;
        }
    
        if (face_top <= 0 || face_top + face_height >= win_height){
            y_incr = -y_incr;
            collision = true;
        }

        if (collision && !smiling) {
            image.src = 'owface.png';
            smiling = true;  // Set flag
            setTimeout(() => {
                image.src = 'neutralface.png';
                smiling = false;  // Reset flag after image changes back
            }, 500);
        }
    }

    face.addEventListener('mouseover', function() {
        if (!smiling) {  // Change the image only if the smiling flag is not set
            image.src = 'happyface.png';  // Assume you have a smiling face image
            smiling = true;}
    }
);


    face.addEventListener('mouseout', function() {
        if (smiling) {  // Change the image only if the smiling flag is not set
            image.src = 'neutralface.png';  // Assume you have a smiling face image
            smiling = false;}
    }
);

    face.addEventListener('click', function(){
        image.src = 'demonface.png';
        setTimeout(() =>{
            image.src = 'neutralface.png'
        }, 300);
    });


    function frame(){
        handle_collision();
        face.style.top = (face.offsetTop + y_incr) + 'px';
        face.style.left = (face.offsetLeft + x_incr) + 'px';
    }

    init();
});
