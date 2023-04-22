function htmlData(data) {
    var html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="document-header">
        <h1>My Team</h1>
    </header>
    <section>
        <div class="card backgroundcolor" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.manager}</h5>
              <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.managerId}</li>
              <li class="list-group-item">Email: <a href="mailto:">${data.managerEmail}</a></li>
              <li class="list-group-item">Office Number: ${data.managerOffice}</li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${data.managerGitHub}">${data.managerGitHub}</a></li>
            </ul>
          </div>
        <div class="card backgroundcolor move-card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.engineer}</h5>
              <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.engineerId}</li>
              <li class="list-group-item">Email: <a href="mailto:">${data.engineerEmail}</a></li>
              <li class="list-group-item">Office Number: ${data.engineerOffice}</li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${data.engineerGitHub}">${data.engineerGitHub}</a></li>
            </ul>
          </div>
        <div class="card backgroundcolor move-card3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.otherEngineer}</h5>
              <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.otherEngineerId}</li>
              <li class="list-group-item">Email: <a href="mailto:">${data.otherEngineerEmail}</a></li>
              <li class="list-group-item">Office Number: ${data.otherEngineerOffice}</li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${data.otherEngineerGitHub}">${data.otherEngineerGitHub}</a></li>
            </ul>
          </div>
        <div class="card backgroundcolor move-card4" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.intern}</h5>
              <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.internId}</li>
              <li class="list-group-item">Email: <a href="mailto:">${data.internEmail}</a></li>
              <li class="list-group-item">Office Number: ${data.internOffice}</li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${data.internGitHub}">${data.internGitHub}</a></li>
            </ul>
          </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>
    `
    return html; 
}; 

module.exports = htmlData; 