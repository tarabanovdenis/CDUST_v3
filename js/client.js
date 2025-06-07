window.onload = function(){

    function findAncestor(el, sel) {
        while (el && !el.matches(sel)) {
            el = el.parentElement;
        }
        return el;
    }

    // tabs & popups
    document.querySelectorAll("[data-href]").forEach(href => {
        href.addEventListener("click", function () {
            const group = this.dataset.group;
            const target = this.dataset.href;

            if (target === "close-popup") {
                // Remove all active classes in this group
                document.querySelectorAll(`[data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));
                return;
            }

            // Remove active class from all tabs and content in the same group
            document.querySelectorAll(`[data-href][data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));
            document.querySelectorAll(`[data-name][data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));

            // Add active class to the clicked tab and corresponding content
            this.classList.add("js-active");
            document.querySelector(`[data-name="${target}"][data-group="${group}"]`).classList.add("js-active");
        });
    });

    // Accordion
    document.querySelectorAll(".js-accordion h4").forEach(accordionLink => {
        accordionLink.addEventListener("click", function () {
            findAncestor(this, ".js-accordion")?.classList.toggle("js-open");
        });
    });
}