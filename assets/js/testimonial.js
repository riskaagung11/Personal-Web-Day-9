const testimonialData = [
  {
    name: "Surya Elidanto",
    comment: "Keren banget jasanya!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
  },
  {
    name: "Surya Elz",
    comment: "Keren lah pokoknya!",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Surya Gans",
    comment: "The best pelayananya!",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Surya",
    comment: "Oke lah!",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Suryeah",
    comment: "Apa apaan ini!",
    rating: 1,
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// function for show testimonial
function showTestimonial() {
  let testimonialForHtml = "";
  testimonialData.forEach((item) => {
    testimonialForHtml += `<article class="card">
    <img src=${item.image} alt="profile-testimonial" />
    <p><q>${item.comment}</q></p>
    <p class="author">- ${item.name}</p>
    <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
  </article>`;
  });

  document.getElementById("my-testimonials").innerHTML = testimonialForHtml;
}
showTestimonial();

// function for filtering testimonials
function filterTestimonials(rating) {
  let testimonialForHtml = "";

  const dataFiltered = testimonialData.filter(function (data) {
    return data.rating === rating;
  });
  // console.log(dataFiltered);

  if (dataFiltered.length === 0) {
    testimonialForHtml = `<h3>Data not found !</h3>`;
  } else {
    dataFiltered.forEach((data) => {
      testimonialForHtml += `<article class="card">
      <img src=${data.image} alt="profile-testimonial" />
      <p><q>${data.comment}</q></p>
      <p class="author">- ${data.name}</p>
      <p class="author">${data.rating} <i class="fa-solid fa-star"></i></p>
    </article>`;
    });
  }

  document.getElementById("my-testimonials").innerHTML = testimonialForHtml;
}
