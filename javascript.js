
    //рисование по клеткам
    function activ2(){
        startPaint();
        doTransparent('transparent_img');
        doTransparent('transparent_text');
    }
    
    function doTransparent(id) {
        let element = document.getElementById(id);
        element.style.display = 'none';
    }

    let paint = false;

    function changeBackGroundCell(cell){
        if (paint){
            if (cell.style.backgroundColor === "black"){
                cell.style.backgroundColor = "";
            } else{
                cell.style.backgroundColor = "black";
            }
        }
    }

    function draw(cell){
        if (paint){
            changeBackGroundCell(cell);
        }
    }

    function startPaint(){
        paint = true;
    }

    function endPaint(){
        paint = false;
        let cells = document.querySelectorAll(".paint td");
        cells.forEach(function(cell)   {
            cell.style.backgroundColor = "";
});
    }

    //двиганье объектов
    let draggables = document.querySelectorAll('.draggable');
    let activeDraggable = null;

    draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', function(event) {
        activeDraggable = draggable;
        let offsetX = event.clientX - draggable.getBoundingClientRect().left;
        let offsetY = event.clientY - draggable.getBoundingClientRect().top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);

        function drag(event) {
            event.preventDefault();
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
            activeDraggable.style.left = x + 'px';
            activeDraggable.style.top = y + 'px';
        }

        function stopDrag() {
            activeDraggable = null;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
    });
})

    //переключение квартир
    function showImage() {
    var blockRoom = document.querySelectorAll('.roomBlock');
    var numberRoom = document.querySelectorAll('.numberRoom');
    numberRoom.forEach((number, index) => {
        number.addEventListener('mouseover', function() {
            blockRoom.forEach(image => image.style.display = 'none');
            blockRoom[index].style.display = 'block';
        });
    });
};

// //курсор
// document.addEventListener('mousedown', function() {
//     document.body.classList.add('clicked');
// });

// document.addEventListener('mouseup', function() {
//     document.body.classList.remove('clicked');
// });
// document.addEventListener('mousemove', function(event) {
//     let cursor = document.querySelector('.custom_cursor');
//     cursor.style.left = event.clientX - cursor.offsetWidth / 2 + 'px';
//     cursor.style.top = event.clientY - cursor.offsetHeight / 2 + 'px';
// });


// четвертый блок
document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.iron, .concrete, .glass, .brick, .sand');

    blocks.forEach(function(block) {
        block.addEventListener('mouseover', function() {
            block.style.backgroundColor = '#111111'; // Изменение цвета фона при наведении
            block.querySelectorAll('p').forEach(function(p) {
                p.style.color = '#F9F9F9'; // Изменение цвета текста при наведении
            });
        });

        block.addEventListener('mouseout', function() {
            block.style.backgroundColor = '#f9f9f9'; // Возврат к изначальному цвету фона
            block.querySelectorAll('p').forEach(function(p) {
                p.style.color = '#111111'; // Возврат к изначальному цвету текста
            });
        });
    });
});