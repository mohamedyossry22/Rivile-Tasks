$(document).ready(() => {



    let arrayContent = [];

    for (let x = 0; x < localStorage.length; x++) {

        let question = localStorage.key(x),

            answers = localStorage.getItem(question);

        arrayContent.push([question, JSON.parse(answers)])
    }

    arrayContent.map((value, key) => {

        $('.questions-container').append(
            `<div class="question-content">
                <div class="question">
                    ${value[0]}
                </div>
                <div class="question-answer">
                    <ul>

                    </ul>
                </div>
            </div>`
        )

        value[1].map((value, key) => {
            $('div.question-answer:last ul').append(
                `<li class="question-answer">
                    <button data-value=${value['value']}>${value['answer']}</button>
                </li>`
            )

            console.log(value['answer'])
        })
    })

    $('li.question-answer button').on('click', function() {

        let dataValue = $(this).attr('data-value');

        if (dataValue == 'true') {
            $(this).addClass('success');
        } else {
            $(this).addClass('error');
        }

        $(this).parent().siblings().children('button').removeClass();
    })
})