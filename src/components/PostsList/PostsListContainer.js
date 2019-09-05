import { connect } from "react-redux";
import PostsList from "./PostsList";
import { addPost, delPost } from "../../redux/posts/postsOperations";
import { getAllPosts } from "../../redux/posts/postsSelectors";

const mapStateToProps = state => ({
  items: getAllPosts(state)
});

const mapDispatchToProps = {
  addPost,
  delPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
