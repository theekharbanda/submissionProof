import React from 'react';
import HeatMap from 'react-heatmap-grid';
import {  getInitials } from '../utils/helpers';

const SkillHeatmap = ({ candidates, skills }) => {
  if (!candidates.length) return null;

  const data = skills.map(() => 
    candidates.map(() => 5)
  );

  return (
    <div className="skill-heatmap">
      <div 
        style={{ 
          position: 'relative',
          width: '100%',
          overflowX: 'auto',
          padding: '80px 20px 20px 260px',
          marginTop: '20px'
        }}
      >
        <div style={{
          minWidth: 'max-content',
          position: 'relative'
        }}>
          <HeatMap
            xLabels={candidates.map(c => getInitials(c.name))}
            yLabels={skills}
            data={data}
            squares
            height={35}
            xLabelsStyle={{
              color: '#000',
              fontSize: '14px',
              transform: 'rotate(-45deg)',
              transformOrigin: 'left top',
              position: 'absolute',
              bottom: '100%',
              left: '0',
              marginBottom: '-15px',
              whiteSpace: 'nowrap',
              fontWeight: '500'
            }}
            yLabelsStyle={{
              position: 'absolute',
              left: '-240px',
              width: '220px',
              textAlign: 'right',
              fontSize: '12px',
              paddingRight: '10px',
              lineHeight: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
            cellStyle={(_, value) => ({
              background: 'green',
              width: '50px',
              height: '35px',
              margin: '0 1px',
              border: '1px solid #fff'
            })}
            cellRender={() => ''}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillHeatmap;