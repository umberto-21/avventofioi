var currentYear = 2023

function setCalendar()
{
    var date = new Date();
    var gg = date.getDate();
    var yy = date.getFullYear();

    var currentDay = parseInt(gg);

    if (yy == currentYear)
    {
        $('.day').each(function()
        {
    
            var title = $(this).attr('title');
            var currentDiv = parseInt(title);
    
            if (currentDay >= currentDiv)
            {
                $(this).click(function()
                {
                    $(this).toggleClass('flipped');
                });
            }
            else
            {
                $(this).click(function()
                {
                    alert("UA dice: Beccat@!Furbett@!");
                });
            }
    
        });
    }
    else
    {
        $('.day').each(function()
        {
            $(this).click(function()
            {
                $(this).toggleClass('flipped');
            }); 
        });      
    }
}

window.onload = function()
{
    setCalendar();
}