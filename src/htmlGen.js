const generateManagerCard = (manager) => {
  return `
        <div class="card bg-dark">
            <h3 class="text-white">${manager.getName()}</h3>
            <p class="text-white">${manager.getRole()}</p>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `;
};

const generateEngineerCard = (engineer) => {
  return `
        <div class="card bg-dark">
              <h3 class="text-white">${engineer.getName()}</h3>
              <p class="text-white">${engineer.getRole()}</p>
              <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${engineer.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">https://github.com/${engineer.getGithub()}</a></li>
                  </ul>
              </div>
        </div>
      `;
};

const generateInternCard = (intern) => {
  return `
          <div class="card bg-dark">
                <h3 class="text-white">${intern.getName()}</h3>
                <p class="text-white">${intern.getRole()}</p>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
          </div>
        `;
};

const baseHTML = (htmlArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Team Profile Page</title>
</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid bg-danger">
    <h1 class="display-4 heading">My Team</h1>
</div>
</header>
<div id="container">
<div class="card-deck">
 ${htmlArr.join(" ")}

</div>
</div>
    
</body>
</html>
`;

module.exports = {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
  baseHTML,
};
