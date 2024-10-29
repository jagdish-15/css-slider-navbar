document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(`The mail from ${this[0].value} has been sent via the mail id- ${this[1].value} to the team with the subject- "${this[2].value}".`);
});