
let userInput;

let $input = $("input[type='text']")
let $ul = $("ul")

console.log($input);

$('form').on('submit', handleClick);


function handleClick(event) {
    event.preventDefault();
    const li = document.createElement('li');
    userInput = $input.val();
    li.innerHTML = userInput;
    $ul.append(`<li><button class="delete">❌</button>${userInput}</li>`);
    $input.val('')
}

$('ul').on('click', 'button', function () {
    console.log(this);
    $(this).closest('li').remove();
});
