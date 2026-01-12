$('li').click(function(){
    alert("clicked");
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('Testing text');
    $('#h1').append('Appended Text');
});

$('#btn').on('click', function(){
    console.log('second button clicked');
});

$('#myDiv').click(function(){
    $(this).addClass('clicked');
})
.find('span')
.attr('title', 'This is a span inside a div');

$('#btn4').click(function(){
    $(".hidden").hide('slow');
});

$('#square').click(function(){
    $('#square').animate({
        "width": "200px",
        "height": "200px",
    });
});

$('.testing').click(function(){
    $('.testing').animate({
        'left' : '+=50px',
        'opacity' : 0.5,
        'fontSize' : '30px',
    },
300,
    function(){
        console.log('Animation complete');
    }
);
});