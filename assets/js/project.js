let blogs = [];

function getBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let nodeJs = document.getElementById("nodeJs").checked;
  let reactJs = document.getElementById("reactJs").checked;
  let nextjs = document.getElementById("nextJs").checked;
  let typescript = document.getElementById("typescript").checked;
  let image = document.getElementById("input-blog").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    projectName,
    description,
    nodeJs,
    reactJs,
    nextjs,
    typescript,
    image,
    startDate,
    endDate,
  };

  blogs.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("dynamic-project").innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("dynamic-project").innerHTML += `
    <article class="card">
            <div class="card-item">
              <img src="${blogs[i].image}" alt="card image" />
              <div class="card-title">
                <a href="./project-detail.html"><h3>${blogs[i].projectName}</h3></a>
                <p>durasi: ${calculateDate(blogs[i].startDate, blogs[i].endDate)}</p>
              </div>
              <div class="card-description">
                <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                <ul>
                ${blogs[i].nodeJs === true ? '<li><img src="./assets/images/icons8-node-js.svg" alt="node js" /></li>' : ""}
                ${blogs[i].reactJs === true ? '<li><img src="./assets/images/icons8-react-native.svg" alt="react js" /></li>' : ""}
                ${blogs[i].nextjs === true ? '<li><img src="./assets/images/nextjs-icon-svgrepo-com.svg" alt="next js" /></li>' : ""}
                ${blogs[i].typescript === true ? '<li><img src="./assets/images/icons8-typescript.svg" alt="typescript" /></li>' : ""}
                </ul>
              </div>
              <div class="card-button">
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          </article>`;
  }
}

function calculateDate(startDate, endDate) {
  const distance = new Date(endDate) - new Date(startDate);
  const monthDistance = Math.floor(distance / (30.4167 * 24 * 60 * 60 * 1000));

  if (monthDistance > 0) {
    return monthDistance + " Months Ago";
  } else {
    const weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000));
    if (weekDistance > 0) {
      return weekDistance + " Weeks ago";
    } else {
      const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000));
      if (dayDistance > 0) {
        return dayDistance + " Days ago";
      }
    }
  }
}
