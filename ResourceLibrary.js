import { useState } from 'react';
import styled from 'styled-components';
import {
  Book,
  VideoLibrary,
  Description,
  CloudDownload,
  Favorite,
  Share,
  Search,
  FilterList,
  ViewModule,
  ViewList
} from '@mui/icons-material';

const LibraryContainer = styled.div`
  padding: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  input {
    border: none;
    flex: 1;
    padding: 0.5rem;
    &:focus {
      outline: none;
    }
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${props => props.theme.colors.grey};
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ResourceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ResourceType = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.7);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ResourceInfo = styled.div`
  padding: 1.5rem;
`;

const ResourceActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.grey};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function ResourceLibrary() {
  const [viewMode, setViewMode] = useState('grid');
  const [resources] = useState([
    {
      id: 1,
      title: "Advanced Mathematics",
      type: "book",
      subject: "Mathematics",
      grade: "Grade 6",
      image: "/math-book.jpg",
      downloads: 1234,
      likes: 567
    },
    {
      id: 2,
      title: "Chemistry Lab Experiments",
      type: "video",
      subject: "Science",
      grade: "Grade 5",
      image: "/chemistry-video.jpg",
      downloads: 890,
      likes: 345
    },
    // More resources...
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'book': return <Book />;
      case 'video': return <VideoLibrary />;
      default: return <Description />;
    }
  };

  return (
    <LibraryContainer>
      <h2>Resource Library</h2>

      <SearchBar>
        <SearchInput>
          <Search />
          <input placeholder="Search resources..." />
        </SearchInput>

        <FilterButton>
          <FilterList /> Filters
        </FilterButton>

        <ViewToggle>
          <FilterButton 
            onClick={() => setViewMode('grid')}
            style={{ background: viewMode === 'grid' ? '#f5f5f5' : 'white' }}
          >
            <ViewModule />
          </FilterButton>
          <FilterButton
            onClick={() => setViewMode('list')}
            style={{ background: viewMode === 'list' ? '#f5f5f5' : 'white' }}
          >
            <ViewList />
          </FilterButton>
        </ViewToggle>
      </SearchBar>

      <ResourceGrid>
        {resources.map(resource => (
          <ResourceCard key={resource.id}>
            <ResourceImage image={resource.image} />
            <ResourceInfo>
              <h3>{resource.title}</h3>
              <p>{resource.subject} - {resource.grade}</p>
              <p>Downloads: {resource.downloads}</p>
              <p>Likes: {resource.likes}</p>
            </ResourceInfo>
            <ResourceActions>
              <ActionButton>
                <Book />
              </ActionButton>
              <ActionButton>
                <VideoLibrary />
              </ActionButton>
              <ActionButton>
                <CloudDownload />
              </ActionButton>
              <ActionButton>
                <Favorite />
              </ActionButton>
              <ActionButton>
                <Share />
              </ActionButton>
            </ResourceActions>
          </ResourceCard>
        ))}
      </ResourceGrid>
    </LibraryContainer>
  );
}

export default ResourceLibrary; 