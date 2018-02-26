(function (window, document) {
    window.theme = {
        initialize: function () {
            Reveal.addEventListener('ready', function (event) {
                // event.currentSlide, event.indexh, event.indexv
                appendFooter('regular', 'regular-footer');
                appendFooter('only-title', 'only-title-footer');
            });
        }
    };
    
    function appendFooter(sectionClass, footerClass) {
                var sections = document.querySelectorAll(".reveal .slides section." + sectionClass);
                var footer = document.querySelector(".templates ." + footerClass);
                for (var i = 0; i < sections.length; i++) {
                    var footerClone = footer.cloneNode(true);
                    sections[i].appendChild(footerClone);
                }
    }
})(window, document);
