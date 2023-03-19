import { GlobalStyle } from "./GlobalStyles";
import { Profile } from "./profile/Profile";
import user from "../user";
import { Information } from "./Information/Information";
import data from '../data';
import { Statistics } from "./Statistics/Statistics";
import friends from '../friends';
import { FriendList } from "./FriendList/FriendList";
import transactions from '../transactions';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";



export const App = () => {
  return (
    <div>
    <div>
  <GlobalStyle />
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
/>
    </div>
    <div>
        <Information stats={user.stats} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
