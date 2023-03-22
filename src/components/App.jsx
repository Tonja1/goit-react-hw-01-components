import { GlobalStyle } from "./GlobalStyles";
import { Profile } from "./profile/Profile";
import user from '../Data/user';
import data from '../Data/data';
import { Statistics } from "./Statistics/Statistics";
import friends from '../Data/friends';
import { FriendList } from "./FriendList/FriendList";
import transactions from '../Data/transactions';
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
  stats={user.stats}        
/>
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
