const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/fda35bb0746ca10fe338", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error loading data");
    }
  };
  xhr.onerror = function () {
    reject("network error");
  };
  xhr.send();
});

async function showTestimonial() {
  const response = await testimonial;
  console.log(response);

  let testimonialForHtml = "";
  response.forEach((item) => {
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

async function filterTestimonials(rating) {
  const response = await testimonial;
  let testimonialForHtml = "";
  const dataFiltered = response.filter(function (item) {
    return item.rating === rating;
  });
  if (dataFiltered.length === 0) {
    testimonialForHtml = `<h3>Data not found !</h3>`;
  } else {
    dataFiltered.forEach(function (data) {
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
