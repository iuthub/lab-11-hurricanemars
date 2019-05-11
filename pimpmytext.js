// alert('Hello World!');


function makeBigger() {
    let area = document.getElementById('area');
    area.style.fontSize = '24pt';
}

function applyStyle(val) {
    let area = document.getElementById('area');
    if (val.checked) {
        area.style.fontWeight = 'bold';
        area.style.textDecoration = 'underline blink';
        area.style.color = 'green';
        area.style.fontStyle = 'italic';
        area.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';

    } else {
        area.style.fontWeight = 'normal';
        area.style.textDecoration = '';
        area.style.color = '';
        area.style.fontStyle = '';
        area.style.fontFamily = 'monospace';
    }
}

function snoopify() {
    let area = document.getElementById('area');
    let value = area.value.trim();
    let parts = value.split('.');
    parts = parts.map(element => {
        return element == '' ? '' : element + '-izzle.';
    });
    area.value = parts.join('').trim();
}