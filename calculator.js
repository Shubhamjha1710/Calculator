var keypad = document.getElementById('keypad');
console.log(keypad);
keypad.addEventListener('click' , display);
var pervious_click;

// function for display the button pressed on screen 
function display(arg)
{
    var button_text;
    let screen = document.querySelector('.display');
    if(arg.target.id == 'btn')
    {
        button_text = arg.target.innerHTML;
        if(pervious_click == '=')
        {
            if(button_text != 'C')
            {
                screen.innerHTML = button_text;
            }
            else
            {
                screen.innerHTML = '';
            }
            pervious_click = null;
        }
         
        else
        {
            if(button_text == 'C')
            {
                screen.innerHTML = "";
            }
            else if(button_text == 'del')
            {
                var content = screen.innerHTML
                screen.innerHTML = content.substring(0,content.length-1);
            }
            else if(button_text == '=')
            {
                screen.innerHTML = eval(screen.innerHTML);
                pervious_click = button_text;
            }
            else 
            {
                screen.innerHTML+=button_text;
            }
        }
        console.log(button_text);
        console.log(pervious_click);
    }
}
