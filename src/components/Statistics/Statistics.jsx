import PropTypes from 'prop-types';
import { StatsSection, Title, StatsList, StatsItem, StatsLabel, StatsPercentage  } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

  return (
    <StatsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(item => (
          <StatsItem key={item.id}>
            <StatsLabel>{item.label}</StatsLabel>
            <StatsPercentage>{item.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
