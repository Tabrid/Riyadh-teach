import React from 'react';

const Blog = () => {
    return (
        <div >
            <div tabIndex={0} className="collapse group">
  <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
  Difference between SQL and NoSQL?
  </div>
  <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>Difference between SQL and NoSQL?
SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
  </div>
</div>
            <div tabIndex={0} className="collapse group">
  <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
  What is JWT, and how does it work? 
  </div>
  <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
  </div>
</div>
            <div tabIndex={0} className="collapse group">
  <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
  </div>
</div>
            <div tabIndex={0} className="collapse group">
  <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
  </div>
</div>



      </div>
    );
};

export default Blog;