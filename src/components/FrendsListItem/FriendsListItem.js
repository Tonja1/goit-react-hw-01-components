import PropTypes from 'prop-types';
import { Item, Status, Avatar, NameUser, Thumb } from "./FriendsListItemStyled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statLine={isOnline}>{isOnline}</Status>
      <Thumb>
        <Avatar src={avatar} alt="User avatar" width="48" />
      </Thumb>
      <NameUser>{name}</NameUser>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};