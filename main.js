    //Create "mouseEvent" variable and set it as “Empty”.

    //Create two variables "last_position_of_x" and  "last_position_of_y".

    var mouseEvent = ""; var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line= document.getElementById("width_of_line").value;        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 
    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e)
    {
        cx =e.clientX - canvas.offsetLeft;
        cy =e.clientY - canvas.offsetTop;


        if (mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;


            console.log("last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
              ctx.arc(cx,cy,5,0,2*Math.PI);
           // ctx.moveTo(last_position_of_x,last_position_of_y);
           // ctx.lineTo(cx,cy);

            console.log(" Current position of x and y coordinates = ");
            console.log("x = " + cx + "cy" + cy );
            ctx.stroke();
        }

        last_position_of_x = cx;
        last_position_of_y = cy;
    }

    function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }

