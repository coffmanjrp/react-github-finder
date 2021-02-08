import { RepoItem } from './';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
