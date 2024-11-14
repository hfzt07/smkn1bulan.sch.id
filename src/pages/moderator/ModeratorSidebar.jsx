import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaUser, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import { useLogin } from '../../context/LoginContext';

const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4444;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: calc(100% - 2rem);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

function ModeratorSidebar() {
  const { handleLogout } = useLogin();

  return (
    <Sidebar>
      <Logo>
        <img src="https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png" alt="Logo" />
        <h1>SMKN 1 Bulan</h1>
      </Logo>
      <NavMenu>
        <NavItem to="/moderator/profile">
          <FaUser /> Profil
        </NavItem>
        <NavItem to="/moderator/posting-berita">
          <FaNewspaper /> Posting Berita
        </NavItem>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </NavMenu>
    </Sidebar>
  );
}

export default ModeratorSidebar; 