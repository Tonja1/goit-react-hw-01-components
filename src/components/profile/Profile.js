import propTypes from 'prop-types';
import { About, Avatar, Layout, UserName, List, Item } from './profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<Layout className="profile">
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <About className="tag">@{tag}</About>
        <About className="location">{location}</About>
      </div>
      <List className="stats">
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </List>
    </Layout>);
};

Profile.propTypes = {
<<<<<<< Updated upstream
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
=======
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
>>>>>>> Stashed changes
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
}

