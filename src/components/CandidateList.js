import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { formatCandidateName } from '../utils/helpers';

const CandidateList = ({ candidates, onAddCandidate, selectedIds }) => {
  return (
    <div className="candidate-list">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Most Recommended</h5>
        <small className="text-muted">{candidates.length} candidates</small>
      </div>
      
      <ListGroup>
        {candidates.map((candidate) => (
          <ListGroup.Item 
            key={candidate.id} 
            className="d-flex justify-content-between align-items-center py-3"
          >
            <div>
              <div>{formatCandidateName(candidate.name)}</div>
              <small className="text-muted">
                {candidate.currentRole} • {candidate.experience}
              </small>
            </div>
            <Button
              variant={selectedIds.includes(candidate.id) ? "success" : "outline-primary"}
              size="sm"
              onClick={() => onAddCandidate(candidate)}
              disabled={selectedIds.includes(candidate.id)}
            >
              {selectedIds.includes(candidate.id) ? "✓" : "+"}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CandidateList;