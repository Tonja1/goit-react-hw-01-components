// import propTypes from 'prop-types';
import { Layout } from "components/profile/profile.styled";
import { FriendListItem } from "components/FrendsListItem/FriendsListItem";


import { List } from './FriendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <Layout>
      <List className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
      </List>
    </Layout>
  );
};

// FriendList.propTypes = {
// friends: PropTypes.array.isRequired,
// };