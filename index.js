const FAQ = [
    {
        q: "How much does Photoshop cost?",
        a: "Plans start at US$22.99/mo.",
    },
    {
        q: "Can you use Photoshop to edit videos?",
        a: "Yes, you can use Photoshop to edit videos.",
    },
    {
        q: "Is Photoshop available without a subscription?",
        a: "Photoshop is only available as part of a Creative Cloud plan, which includes the latest features, updates, fonts, and more.",
    },
];

// add code here if needed

function processBackgroundColor(el) {
    // add code here
    // Define parent 'div'
    const parentDiv = el;

    // Find the 'p' tag containing the color code
    const colorCodeP = parentDiv.querySelector("p");
    const colorCode = colorCodeP.textContent.trim();

    // Remove the divs that contain the color code
    // Since the specific structure is known, navigate up twice to remove the correct divs
    colorCodeP.parentElement.parentElement.remove();
    // Alternate way to remove divs starting from parent 'div' (less safe)
    // parentDiv.firstElementChild.remove();

    // Set the extracted color code as the background of the parent 'div'
    parentDiv.style[
        colorCode.charAt(0) === "#" ? "backgroundColor" : "background"
    ] = colorCode;
}

function processHero(el) {
    processBackgroundColor(el);
    // add code here
}
function processBrick(el) {
    processBackgroundColor(el);
    // add code here
}
function processFaq(el) {
    // improve this code
    el.innerHTML = `
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[0].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[0].a}</p>
                </div>
            </div>
        </div>
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[1].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[1].a}</p>
                </div>
            </div>
        </div>
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[2].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[2].a}</p>
                </div>
            </div>
        </div>`;
    // add code here
}
function processBanner(el) {
    // add code here
}
document.querySelectorAll(".hero").forEach(processHero);
document.querySelectorAll(".brick").forEach(processBrick);
document.querySelectorAll(".faq").forEach(processFaq);
document.querySelectorAll(".banner").forEach(processBanner);
