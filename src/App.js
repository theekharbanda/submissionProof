import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab, Form, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CandidateList from './components/CandidateList';
import SkillHeatmap from './components/SkillHeatmap';
import { skillList } from './data/constants';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('https://forinterview.onrender.com/people/');
        if (!response.ok) {
          throw new Error('Failed to fetch candidates');
        }
        const data = await response.json();
        const first8Candidates = data.slice(0, 8).map(person => ({
          id: person.id.toString(),
          name: person.name,
          experience: `${person.experience} years`,
          currentRole: person.role || 'UX Designer',
          availability: person.availability || 'Immediate'
        }));
        setCandidates(first8Candidates);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleAddCandidate = (candidate) => {
    if (!selectedCandidates.find(c => c.id === candidate.id)) {
      setSelectedCandidates(prev => [...prev, candidate]);
    }
  };

  const filteredSkills = skillList.filter(skill => 
    skill.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Container fluid className="py-4">
      <div className="mb-4">
        <a href="#" className="back-button text-decoration-none">
          ← Back to My Jobs
        </a>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4 className="mb-0">Posk_UXdesigner_sr001</h4>
          <span className="text-muted">{candidates.length} Candidates</span>
        </div>
      </div>

      <Row>
        <Col md={3} className="pe-4 border">
          {isLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 text-muted">Loading candidates...</p>
            </div>
          ) : error ? (
            <div className="text-center py-5 text-danger">
              <p>{error}</p>
            </div>
          ) : (
            <CandidateList
              candidates={candidates}
              onAddCandidate={handleAddCandidate}
              selectedIds={selectedCandidates.map(c => c.id)}
            />
          )}
        </Col>

        <Col md={9} className=''>
          <Tabs  id="candidate-tabs" className="mb-2">
            <Tab eventKey="compare" title="Compare View">
              {selectedCandidates.length > 0 ? (
                <div className="pt-3">
                  <Form.Control
                    type="text"
                    placeholder="Filter skills..."
                    className="mb-3 w-25"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                  />
                  <SkillHeatmap
                    candidates={selectedCandidates}
                    skills={filteredSkills}
                  />
                </div>
              ) : (
                <div className="text-center py-5">
                  <h5 className="text-muted mb-3">No candidates selected</h5>
                  <p className="text-muted">Select candidates from the list to compare their skills</p>
                </div>
              )}
            </Tab>
            <Tab eventKey="individual" title="Individual View">
              <div className="py-5 text-center">
                <h5>Individual View</h5>
                <p className="text-muted">Select a candidate to view detailed information</p>
              </div>
            </Tab>
            <Tab eventKey="shortlisted" title="Shortlisted Candidates">
              <div className="py-5 text-center">
                <h5>Shortlisted Candidates</h5>
                <p className="text-muted">Your shortlisted candidates will appear here</p>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
