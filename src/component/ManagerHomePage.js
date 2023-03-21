import axios from "axios";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import './ManagerHomePage.css'

function ManagerHomePage() {
  return (
    <div  class="row justify-content-center p-4">
      <h1 class="text-center" style={{ padding:"10px" }} >Welcome to xyz</h1>
      <div class="col-sm-4 rounded">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-primary">Add Services</h5><br></br>
            <a href="/addServices" class="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4 rounded">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-primary">Assign the counter</h5><br></br>
            <a href="/assignCounter" class="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerHomePage;
