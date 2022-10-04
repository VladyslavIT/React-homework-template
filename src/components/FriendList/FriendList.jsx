import PropTypes from 'prop-types';
import { FriendsRoster, FriendsItem, Status, FriendName} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsRoster>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <Status status={friend.isOnline}></Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{friend.name}</FriendName>
        </FriendsItem>
      ))}
    </FriendsRoster>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
