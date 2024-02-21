document.querySelectorAll('.room').forEach((item) => {
    const name = item.getAttribute('data-name');
    const bbox = item.getBBox();
    const x = bbox.x + bbox.width / 2;
    const y = bbox.y + bbox.height / 2;

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('class', 'text-label');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.textContent = name;

    item.parentNode.insertBefore(text, item.nextSibling);

    item.addEventListener('mouseover', function () {
        text.style.visibility = 'visible';
    });

    item.addEventListener('mouseout', function () {
        text.style.visibility = 'hidden';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var textElements = document.querySelectorAll('text');

    textElements.forEach(function (elem) {
        if (elem.textContent === 'Laundry') {
            elem.style.fontSize = '10px';
        }
    });
});
