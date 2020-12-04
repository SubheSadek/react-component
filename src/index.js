import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./commentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeago="Today at 4:45PM"
          content="Nice blog Post"
          image={faker.image.animals()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeago="Today at 2:00PM"
          content="I like this subject"
          image={faker.image.people()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeago="Yesterday at 5:00PM"
          content="I like the writting"
          image={faker.image.nature()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
