const button = document.getElementById('button');
const area = document.getElementById('area');

function GetColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', function() {
    const RandomColor = GetColor();
    area.style.backgroundColor = RandomColor;
});
