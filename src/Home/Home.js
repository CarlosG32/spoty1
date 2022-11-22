export function Home (){
    return(
        <>
        
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" Link="/Home">Red Hot Chili Peppers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" Link="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" Link="/Menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" Link="/Integrantes">Integrantes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" Link="/Historia">Historia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" Link="/Music">Music</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}