const { writeHTML, copyFile } = require("../utils/generateHTML");

// creates the html from the answered questions
// filters the employed array by Manager, Engineer, and Intern
const createTeam = employed => {
    copyFile();
    return writeHTML(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Sheet</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<header>
    <h1>My Team</h1>
</header>
    <body>
    <section class="Employee-Holder">
    <div class="row">
        ${employed
          .filter(({ office }) => office)
          .map(({ name, id, email, role, office }) => {
          return `<!-- Manager -->
              <div class="container col-5 card card-top">
                  <div class="row">
                    <h4 class="col-6 Name">${name} </h4>
                    <h4 class="col-6 Role">${role} &#9999;</h4>
                  </div>
                  <div class="info">
                    <p class="col-12">ID: ${id}</p>
                    <p class="col-12">Email: <a href = "mailto: ${email}">${email}</a></p>
                    <p class="col-12">Office: ${office} </p>
                  </div>
              </div>
              `;
            })
            .join()}       
            </div>
        </section>
        <section class="Employee-Holder">
          <div class="row">
        ${employed
            .filter(({ github }) => github)
            .map(({ name, id, email, role, github }) => {
            return `<!-- Engineer -->
                <div class="container col-5 card card-top">
                    <div class="row">
                      <h4 class="col-6 Name">${name} </h4>
                      <h4 class="col-6 Role">${role} &#9881;</h4>
                    </div>
                    <div class="info">
                      <p class="col-12">ID: ${id}</p>
                      <p class="col-12">Email: <a href = "mailto: ${email}">${email}</a></p>
                      <p class="col-12">Github: <a href="https://github.com/${github}">${github}</a></p>
                    </div>
                </div>
            `;
          })
          .join('')}
        ${employed
          .filter(({ school }) => school)
          .map(({ name, id, email, role, school }) => {
          return `<!-- Intern -->
              <div class="container col-5 card card-top">
                  <div class="row">
                    <h4 class="col-6 Name">${name} </h4>
                    <h4 class="col-6 Role">${role} &#9749;</h4>
                  </div>
                  <div class="info">
                    <p class="col-12">ID: ${id}</p>
                    <p class="col-12">Email: <a href = "mailto: ${email}">${email}</a></p>
                    <p class="col-12">School: ${school}</p>
                  </div>
              </div>
              `;
            })
            .join('')}
            </div>
        </section>   
</body>`);
};


module.exports = { createTeam };