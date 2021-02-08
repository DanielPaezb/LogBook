import React from "react";
import {Link} from 'react-router-dom';
import CustomHelmet from "../../../../components/CustomHelmet";
import "./Profile.scss";

export const Profile = () => {
  return (
    <section className="section-profile">
      <CustomHelmet title="Profile" />
      <div className="div-cover">
        <a className="nav-link" role="button">
          <img
            className="img-profile"
            src="https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg"
            alt=""
          />
          <i class="fas fa-pencil-alt"></i>
        </a>
        <h3>Douglas McGee</h3>
        <p>Administrator</p>

      </div>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" value="Douglas" disabled />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              value="McGee"
              disabled
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" value="Douglas" disabled />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              value="McGee"
              disabled
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value="duglas@misena.edu.co"
            disabled
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value="password"
            disabled
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" value="32" disabled />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              value="313472389432"
              disabled
            />
          </div>
        </div>
        <Link to="/dash/settings" className="btn btn-primary">
          Edit
        </Link>
        <button type="submit" className="btn btn-danger">
          Delete account
        </button>
      </form>
    </section>
  );
};

export default Profile;
