

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/////////////////////// Publish comment ////////////////////////

const newFormHandler = async (event) => {
    event.preventDefault();
  
  
    //////////////////////////// Create new post //////////////////////////
  
    const content = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#postId').textContent;
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(`${post_id}`);
      }
    }
  };
  
  
  
  
  document
    .querySelector('.new_comment_form')
    .addEventListener('submit', newFormHandler);