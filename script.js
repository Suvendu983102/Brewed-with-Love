// Simple form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  this.reset();
});
