import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderCard from "./LeaderCard";
import NavBar from "./NavBar";
class LeaderBoard extends Component {
  render() {
    const users = this.props.users;
    const usersKeys = Object.keys(users);
    const users_sorted = usersKeys.sort((a, b) => {
      const num_a_ques = users[a].questions.length;
      const ans_arr_a = Object.keys(users[a].answers);
      const num_a_answers = ans_arr_a.length;
      const a_score = num_a_answers + num_a_ques;
      const num_b_ques = users[b].questions.length;
      const ans_arr_b = Object.keys(users[b].answers);
      const num_b_answers = ans_arr_b.length;
      const b_score = num_b_answers + num_b_ques;
      return b_score - a_score;
    });
    return (
      <div>
        <NavBar />
        <div>
          <ul>
            {users_sorted.map((u) => {
              return (
                <div className="margin-leader">
                  <li className="list" key={u}>
                    <LeaderCard user={users[u]} />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
