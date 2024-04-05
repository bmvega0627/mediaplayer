document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('posture').addEventListener('click', function() {
        toggleActive('posture');
    });
    document.getElementById('viewingZone').addEventListener('click', function() {
        toggleActive('viewingZone');
    });
    document.getElementById('readingGlasses').addEventListener('click', function() {
        toggleActive('readingGlasses');
    });
    document.getElementById('progressiveLenses').addEventListener('click', function() {
        toggleActive('progressiveLenses');
    });
    document.getElementById('officeLens').addEventListener('click', function() {
        toggleActive('officeLens');
    });

    toggleActive('posture');
    toggleActive('readingGlasses');
});

function toggleActive(elementId) {
    var clickedElement = document.getElementById(elementId);
    var siblings = document.querySelectorAll('.row2 div, .row3 div');

    siblings.forEach(function(sibling) {
        if (sibling.id !== clickedElement.id && sibling.parentElement.className === clickedElement.parentElement.className) {
            sibling.classList.remove('active');
        }
    });

    clickedElement.classList.add('active');

    var postureActive = document.getElementById('posture').classList.contains('active');
    var viewingZoneActive = document.getElementById('viewingZone').classList.contains('active');
    var readingGlassesActive = document.getElementById('readingGlasses').classList.contains('active');
    var progressiveLensesActive = document.getElementById('progressiveLenses').classList.contains('active');
    var officeLensActive = document.getElementById('officeLens').classList.contains('active');

    var row1Content = document.querySelector('.row1');
    if (postureActive && readingGlassesActive) {
        row1Content.innerHTML = '<video autoplay muted loop playsinline><source src="./media/readervid.mp4" type="video/mp4"></video>';
    } else if (postureActive && progressiveLensesActive) {
        row1Content.innerHTML = '<video autoplay muted loop playsinline><source src="./media/palvid.mp4" type="video/mp4"></video>';
    } else if (postureActive && officeLensActive) {
        row1Content.innerHTML = '<video autoplay muted loop playsinline><source src="./media/officelensvid.mp4" type="video/mp4"></video>';
    } else if (viewingZoneActive && readingGlassesActive) {
        row1Content.innerHTML = '<img src="./media/readerimg.png" alt="Reader Image">';
    } else if (viewingZoneActive && progressiveLensesActive) {
        row1Content.innerHTML = '<img src="./media/palimg.png" alt="Pal Image">';
    } else if (viewingZoneActive && officeLensActive) {
        row1Content.innerHTML = '<img src="./media/officelensimg.png" alt="OfficeLens Image">';
    } else {
        row1Content.innerHTML = '';
    }
}
