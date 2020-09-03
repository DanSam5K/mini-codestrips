let pageIndex = 0;
const pages = ['head', 'body', 'bubble', 'background', 'text', 'caption'];

const awsPrefix = 'https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/build-apis-mini-capstone-project/';

let current = {
    head: 'happy',
    body: 'plus',
    bubble: 'statement',
    background: 'space',
    text: 'Your text here!',
    caption: 'caption',
};

let defaults = {
    head: 'happy',
    body: 'plus',
    bubble: 'statement',
    background: 'space',
    text: 'Your text here!',
    caption: 'caption',
};

let strips = [];

const options = {
    head: [
        {
            name: 'happy',
            src: `${awsPrefix}img/happy.svg`,
        },
        {
            name: 'sad',
            src: `${awsPrefix}img/sad.svg`,
        },
        {
            name: 'angry',
            src:`${awsPrefix}img/angry.svg`,
        },
    ],
    body: [
        {
           name: 'plus',
           src: `${awsPrefix}img/body1.svg`, 
        },
        {
            name: 'minus',
            src: `${awsPrefix}img/body2.svg`, 
        },
        {
            name: 'x',
            src: `${awsPrefix}img/body3.svg`, 
        },
    ],
    bubble: [
        {
            name: 'statement',
            src: `${awsPrefix}img/thought_bubble_1.svg`, 
        },
        {
            name: 'question',
            src: `${awsPrefix}img/thought_bubble_2.svg`, 
        },
        {
            name: 'sound',
            src: `${awsPrefix}img/thought_bubble_3.svg`, 
        },
    ],
    background: [
        {
            name: 'space',
            src: `${awsPrefix}img/bg1.svg`,
            bgColor: '#3A6AE6',
        },
        {
            name: 'mountains',
            src: `${awsPrefix}img/bg2.svg`,
            bgColor: '#00DAB7',
        },
        {
            name: 'boat',
            src: `${awsPrefix}img/bg3.svg`,
            bgColor: '#7A67F9',
        },
    ],
};

const redrawSelections = () => {
    let page = pages[pageIndex];
    // Set text
    $('#navigation-label').text(page);
    //Set images
    if (pageIndex<4) {
        $('#textboxes').addClass('invisible');
        $('#triple-selector').removeClass('invisible');
        $('.selector > img').each(function(index) {
            $(this).attr('src', `${option[page][index].src}`);
        });
    } else{
        $('#textboxes').removeClass('invisible');
        $('#triple-selector').addClass('invisible');
        $('#text-input').val(current[page]);
    }
};