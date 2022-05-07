import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 blog">
          <div>
            <h4>
              1.<span className="text-danger">Q:</span> Difference between
              javascript and nodejs
            </h4>
            <p>
              <span className="text-danger">ANS:</span>
              <span> JAVASCRIPT:</span> Javascript generally used on the
              client-side server. It is a programming language. Javascript works
              in any browser that has a proper browser engine.It's a newer
              version of the ECMA script that runs on Chrome's V8 engine, which
              is written in C++.
              <br />
              <span>NODE.JS:</span> It is generally used on the server-side.t's
              a JavaScript interpreter and environment with some valuable
              libraries that JavaScript programming can use separately.It uses
              C, C++, and JavaScript.
            </p>
          </div>
          <div>
            <h4>
              2.<span className="text-danger">Q:</span>Differences between sql
              and nosql databases.
            </h4>
            <p>
              <span className="text-danger">ANS:</span>
              SQL databases defines and manipulates
              data based structured query language (SQL). Seeing from a side
              this language is extremely powerful. SQL is one of the most
              versatile and widely-used options available which makes it a safe
              choice especially for great complex queries. But from other side
              it can be restrictive. SQL requires you to use predefined schemas
              to determine the structure of your data before you work with it.
              Also all of your data must follow the same structure. This can
              require significant up-front preparation which means that a change
              in the structure would be both difficult and disruptive to your
              whole system.
              <br />A NoSQL database has dynamic schema for unstructured data.
              Data is stored in many ways which means it can be
              document-oriented, column-oriented, graph-based or organized as a
              KeyValue store. This flexibility means that documents can be
              created without having defined structure first. Also each document
              can have its own unique structure. The syntax varies from database
              to database, and you can add fields as you go.
            </p>
          </div>
          <div>
            <h4>
              3.<span className="text-danger">Q:</span>What is the purpose of jwt and how does it work


            </h4>
            <p>
              <span className="text-danger">ANS:</span>
              <span> JWT:</span> The minning of JWT  JSON Web Token.It is use for more secure our data.jwt is an open standard used to share security information between two parties — a client and a server
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
