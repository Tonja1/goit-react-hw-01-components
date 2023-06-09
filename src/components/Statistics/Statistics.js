import { Layout } from '../profile/profile.styled';
import propTypes from 'prop-types';

import { getRandomHexColor, Title, List, Item } from './StatisticsStyled';

export const Statistics = ({ stats, title }) => {
  return (
    <Layout>
      <section className="statistics">
        {title && <Title className="title">{title}</Title>}
        <List className="stat-list">
          {stats.map(el => (
            <Item className="item" key={el.id} color={getRandomHexColor()}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </Item>
          ))}
        </List>
      </section>
    </Layout>
  );
};

Statistics.propTypes = {
    stats: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        })
    ),
};