$(document).ready(function() {
    $(document).on('keyup', 'li:last input[name="answer-input"]', function() {

        let item = $(this).val().trim();

        if (item.length > 2) {

            item = $(this).parents('li.answer-content').clone();

            let parent = $(this).parents('ul.multiple-answer');

            $(parent).append(item);

            $(parent).children('li:last').find('input').val('');

            $(parent).children('li:last').find('button.delete-answer').removeClass('d-none');

            $(parent).children('li:last').find('input[type="checkbox"]').prop('checked', false);

        } else {

            return false;
        }
    }).on('click', 'button.delete-answer', function() {

        $(this).parent('li.answer-content').remove();
    });

    $(document).on('submit', 'form[name="form-add-quiz"]', () => {

        let question = $(this).find('input[name="question"]').val(),

            questionAnswer = [];

        $('ul.multiple-answer li').each(function() {

            let inputValue = $(this).find('input[name="answer-input"]').val(),

                inputCheck = $(this).find('input[name="answer-choice"]');

            inputCheck = $(inputCheck).prop("checked") ? true : false;

            questionAnswer.push({ answer: inputValue, value: inputCheck });
        });

        localStorage.setItem(question, JSON.stringify(questionAnswer));

        $('input[type="submit"]').val('Waiting');

        setTimeout(() => {

            $('input[type="submit"]').val('Success');

            $('ul.multiple-answer li:not(:first-child)').remove();

            $('ul.multiple-answer').children('li:first').find('input[type="checkbox"]').prop('checked', false);

        }, 1000);

        setTimeout(() => {

            $('input[type="submit"]').val('Add Quiz');

        }, 1500);

        return false;
    })

});