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
function processLinks(parentDiv, parentTag, additionalClass = "") {
    // Find all 'a' tags that are children of the specified parent tags
    const allAsInsideParent = parentDiv.querySelectorAll(`${parentTag} > a`);

    // Iterate over each found 'a' tag
    allAsInsideParent.forEach(function (a) {
        // Add the class "con-button" to the 'a' tag, and any additional class if provided
        a.classList.add("con-button");
        if (additionalClass) {
            a.classList.add(additionalClass);
        }

        // Get the parent tag
        const parentTag = a.parentNode;

        // Use insertBefore to move the 'a' tag outside, just before the parent tag
        parentTag.parentNode.insertBefore(a, parentTag);

        // Delete the parent tag if it's empty now
        if (!parentTag.hasChildNodes()) {
            parentTag.parentNode.removeChild(parentTag);
        }
    });
}

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
    processLinks(el, "b");
    processLinks(el, "i", "blue");

    // Define parent 'div'
    const parentDiv = el;

    // Find all 'p' tags in the parent 'div'
    const allPs = parentDiv.querySelectorAll("p");

    // Iterate through each 'p' tag to find one that contains an 'a' tag
    allPs.forEach(function (p) {
        if (p.querySelector("a")) {
            // If a 'p' tag contains an 'a' tag, add the 'action-area' class to the 'p' tag
            p.classList.add("action-area");
        }
    });
}

function processBrick(el) {
    processBackgroundColor(el);
    // add code here
    // Define parent 'div'
    const parentDiv = el;

    // Find all 'p' tags in the parent 'div'
    const allPs = parentDiv.querySelectorAll("p");

    // Ensure there are enough paragraphs to avoid errors
    if (allPs.length >= 3) {
        // Add the class "title" to the first paragraph
        allPs[0].classList.add("title");
        // Add the class "price" to the second paragraph
        allPs[1].classList.add("price");
        // Add the class "description" to the third paragraph
        allPs[2].classList.add("description");
    }
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
