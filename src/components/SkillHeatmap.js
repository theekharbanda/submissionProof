import React from 'react';
import HeatMap from 'react-heatmap-grid';
import { getHeatmapColor, getInitials } from '../utils/helpers';

const SkillHeatmap = ({ candidates, skills }) => {
  if (!candidates.length) return null;

  const data = skills.map(() => 
    candidates.map(() => Math.floor(Math.random() * 5))
  );

  return (
    <div className="skill-heatmap border">
      <div style={{ 
        width:'100%',
        // minWidth: 'fit-content',
        padding: '30px 260px'
      }}>
        <HeatMap className='border'
          xLabels={candidates.map(c => getInitials(c.name))}
          yLabels={skills}
          data={data}
          cellStyle={(background, value) => ({
            background: getHeatmapColor(value),
            width: '50px',
            height: '35px',
            margin: '1px',
            border: '1px solid #fff'
          })}
        />
      </div>
    </div>
  );
};

export default SkillHeatmap;