import { useState } from 'react';
import styled from 'styled-components';
import {
  Add,
  Edit,
  Delete,
  Publish,
  CloudUpload,
  Search,
  FilterList,
  MoreVert
} from '@mui/icons-material';

const CMSContainer = styled.div`
  padding: 2rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  border: none;
  flex: 1;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.primary ? props.theme.colors.primary : 'white'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${props => props.primary ? props.theme.colors.accent : '#f5f5f5'};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ContentImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const ContentInfo = styled.div`
  padding: 1rem;
`;

const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.colors.grey};
`;

const StatusBadge = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  background: ${props => {
    switch(props.status) {
      case 'published': return '#e8f5e9';
      case 'draft': return '#fff3e0';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'published': return '#2e7d32';
      case 'draft': return '#ef6c00';
      default: return '#666';
    }
  }};
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 90%;
  max-width: 600px;
`;

function ContentManagement() {
  const [showModal, setShowModal] = useState(false);
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "Mathematics Textbook - Grade 6",
      type: "Book",
      status: "published",
      lastModified: "2024-03-15",
      image: "/book1.jpg"
    },
    {
      id: 2,
      title: "Science Workbook - Grade 5",
      type: "Workbook",
      status: "draft",
      lastModified: "2024-03-14",
      image: "/book2.jpg"
    }
  ]);

  return (
    <CMSContainer>
      <TopBar>
        <SearchBar>
          <Search />
          <SearchInput placeholder="Search content..." />
          <FilterList style={{ cursor: 'pointer' }} />
        </SearchBar>

        <ActionButton primary onClick={() => setShowModal(true)}>
          <Add /> Create New
        </ActionButton>
      </TopBar>

      <ContentGrid>
        {contents.map(content => (
          <ContentCard key={content.id}>
            <ContentImage image={content.image} />
            <ContentInfo>
              <h3>{content.title}</h3>
              <p>{content.type}</p>
              <small>Last modified: {content.lastModified}</small>
            </ContentInfo>
            <ContentActions>
              <StatusBadge status={content.status}>
                {content.status}
              </StatusBadge>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <ActionButton>
                  <Edit />
                </ActionButton>
                <ActionButton>
                  <Publish />
                </ActionButton>
                <ActionButton>
                  <Delete />
                </ActionButton>
              </div>
            </ContentActions>
          </ContentCard>
        ))}
      </ContentGrid>

      {showModal && (
        <Modal>
          <h2>Create New Content</h2>
          {/* Add form fields */}
          <ActionButton onClick={() => setShowModal(false)}>
            Cancel
          </ActionButton>
        </Modal>
      )}
    </CMSContainer>
  );
}

export default ContentManagement; 