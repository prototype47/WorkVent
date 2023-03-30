import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function UserInfo() {
  const { users } = useSelector((state) => state.usersReducer);
  const { id } = useParams();
  const user = users.find((user) => user._id === (id));
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h3>
              <b>Personal Information</b>
            </h3>
            <p>
              <b>First name : </b>
              {user.firstName}
            </p>
            <p>
              <b>Last name : </b>
              {user.lastName}
            </p>
            <p>
              <b>Registration Number : </b>
              {user.RegistrationNumber}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>LinkedIn : </b>
              {user.LinkedIn}
            </p>
            <p>
              <b>Portfolio : </b>
              {user.Portfolio}
            </p>
            <p>
              <b>Github: </b>
              {user.Github}
            </p>

            <p>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </p>
            <p>
              <b>Address : </b>
              {user.address}
            </p>
            <hr />
            <h3>
              <b>Education</b>
            </h3>
            {user.education.map((education) => {
              return <li>{education}</li>;
            })}
            <hr />
            <h3>
              <b>Skills</b>
            </h3>
            {user.skills.map((skill) => {
              return <li>{skill}</li>;
            })}
            <hr />
            <h3>
              <b>Projects</b>
            </h3>
            {user.projects.map((project) => {
              return <li>{project}</li>;
            })}
            <h3>
              <b>Project Link</b>
            </h3>
            {user.projectLink.map((projectLink) => {
              return <li>{projectLink}</li>;
            })}
            <hr />
            <h3>
              <b>Internship</b>
            </h3>
            {user.Internship.map((Internship) => {
              return <li>{Internship}</li>;
            })}
            <hr />
            <b>Resume Link</b>
            <p>
              {user.ResumeLink}
            </p>

          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;
