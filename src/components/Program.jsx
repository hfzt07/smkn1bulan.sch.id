import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Ekstrakurikuler from './Ekstrakurikuler';
import { useNavigate } from 'react-router-dom';

const ProgramSection = styled.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`;

const ProgramContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`;

const ProgramCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

function Program() {
  const navigate = useNavigate();

  return (
    <ProgramSection id="program">
      <ProgramContainer>
        <SectionTitle>Program Unggulan</SectionTitle>
        <ProgramGrid>
          <ProgramCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/akademik-detail')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Program Akademik</h3>
            <p>Program pembelajaran berbasis industri dengan pendekatan teaching factory</p>
          </ProgramCard>

          <ProgramCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/karakter-detail')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Penguatan Karakter</h3>
            <p>Pembentukan karakter dan etika melalui berbagai program pembinaan</p>
          </ProgramCard>

          <ProgramCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/ekstrakurikuler-detail')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Ekstrakurikuler</h3>
            <p>Pengembangan minat dan bakat melalui berbagai kegiatan ekstrakurikuler</p>
          </ProgramCard>
        </ProgramGrid>
        <Ekstrakurikuler />
      </ProgramContainer>
    </ProgramSection>
  );
}

export default Program; 