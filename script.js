const options = ['Red', 'Green', 'Blue', 'Small', 'Medium', 'Large'];

const boxes = document.querySelectorAll('.box');

function populateOptions(box) {
    const optionsDiv = box.querySelector('.options');

    // Ensure the options are not duplicated
    if (optionsDiv.childElementCount === 0) {
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.style.margin = '5px';
            button.style.padding = '5px 10px';
            button.style.cursor = 'pointer';

            // Add a click event to each option button
            button.addEventListener('click', () => {
                alert(`You selected: ${option}`);
            });

            // Append the button to the options div
            optionsDiv.appendChild(button);
        });
    }
}

// Add click event listeners to all boxes
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Toggle the 'expanded' class for the clicked box
        box.classList.toggle('expanded');

        // Populate options for the clicked box
        populateOptions(box);

        // Collapse other boxes if they are expanded
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
            }
        });
    });
});
