import 'bootstrap/dist/js/bootstrap.min';


// eslint-disable-next-line no-undef
require('../Scss/hypatia.scss');

document.addEventListener('DOMContentLoaded', function () {


    const scrollToTargetAdjusted = () => {
        var element = document.getElementById('main');
        var headerOffset = document.getElementById('main').clientHeight;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    };

    const positionMain = () => {
        const headerHeight = document.getElementById('header').clientHeight;
        console.log('header: ' + headerHeight);
        document.getElementById('main').style.marginTop = headerHeight + 'px';
        console.log('nachher: ' + document.getElementById('main').clientHeight);
       scrollToTargetAdjusted();
    };
    positionMain();


    const observer = new ResizeObserver(entries => {

        for (const entry of entries) {
            // each entry is an instance of ResizeObserverEntry
            console.log(entry.contentRect.height);
            document.getElementById('main').style.marginTop = document.getElementById('header').clientHeight + 'px';

            scrollToTargetAdjusted();
        }
    });
    observer.observe(document.getElementById('header'));


});
