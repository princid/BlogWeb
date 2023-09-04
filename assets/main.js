// console.log("PRINCE");

const blogCard = document.getElementById("blog_card");
const pagination = document.getElementById("pagination");

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

const pages = pagination.querySelectorAll("a");

// Initialized the current page no. to 1
let currentPage = 1;

const blogsPerPage = 10;
const totalBlogs = blogCard.querySelectorAll(".blog__section").length;
const totalPages = Math.ceil(totalBlogs / blogsPerPage);

function displayPage(pageNum) {
  const startIndex = (pageNum - 1) * blogsPerPage;
  const lastIndex = startIndex + blogsPerPage - 1;

  const blogBox = blogCard.querySelectorAll(".blog__section");
  blogBox.forEach((div, index) => {
    if (index >= startIndex && index <= lastIndex) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

function updatePagination(activePage) {
  pages.forEach((page, index) => {
    if (index === activePage) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

// Disabling the prev and next button on start and end pages respectively.
function updateCarouselButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function onPage(pageNum) {
  currentPage = pageNum;
  displayPage(currentPage);
  updatePagination(currentPage - 1);
  updateCarouselButtons();
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    onPage(currentPage - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    onPage(currentPage + 1);
  }
});

// Displaying first 3 btn only
function dispBtn() {
	if(currentPage === pageNum){
		let btnFour = document.getElementById("page4");
		btnFour.style.display = "none";
	}
}

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    // Moving/going to the page that is clicked.
    onPage(index + 1);
  });
});

// By default wali cheezein.
displayPage(currentPage);
updatePagination(currentPage - 1);
updateCarouselButtons();
