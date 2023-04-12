class Testimonial {
  #quote;
  #image;
  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }
  get quote() {
    return this.#quote;
  }
  get image() {
    return this.#image;
  }
  get forHTML() {
    return `<article class="card">
    <img src=${this.image} alt="profile-testimonial" />
    <p><q>${this.quote}</q></p>
    <p class="author">- ${this.author}</p>
  </article>`;
  }
}

class AuthorTestimonial extends Testimonial {
  #author;
  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }
  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company;
  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }
  get author() {
    return this.#company + " Company";
  }
}

const firstTestimonial = new AuthorTestimonial(
  "Surya Elidanto",
  "Mantap sekali jasanya",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
);
const secondTestimonial = new AuthorTestimonial(
  "Surya Elz",
  "Keren lah pokoknya",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
);
const thirdTestimonial = new CompanyTestimonial(
  "ABC",
  "Wuhuu keren lah",
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
);

let data = [firstTestimonial, secondTestimonial, thirdTestimonial];
let testimonialForHtml = "";

for (let i = 0; i < data.length; i++) {
  testimonialForHtml += data[i].forHTML;
}

document.getElementById("my-testimonials").innerHTML = testimonialForHtml;
