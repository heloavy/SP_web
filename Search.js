import { useState } from 'react';
import styled from 'styled-components';
import { Search as SearchIcon, FilterList } from '@mui/icons-material';
import './Search.css';

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 2px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const FiltersPanel = styled.div`
  display: ${props => props.show ? 'grid' : 'none'};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.grey};
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    formats: []
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, filters });
  };

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for books, resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="button"
            className="button filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FilterList /> Filters
          </button>
          <button type="submit" className="button search-button">
            <SearchIcon /> Search
          </button>
        </div>
      </form>

      {showFilters && (
        <div className="filters-panel">
          <FilterGroup>
            <h4>Categories</h4>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('categories', 'textbooks')}
              />
              Textbooks
            </FilterCheckbox>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('categories', 'workbooks')}
              />
              Workbooks
            </FilterCheckbox>
          </FilterGroup>

          <FilterGroup>
            <h4>Grade Levels</h4>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('levels', 'preschool')}
              />
              Preschool
            </FilterCheckbox>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('levels', 'elementary')}
              />
              Elementary
            </FilterCheckbox>
          </FilterGroup>

          <FilterGroup>
            <h4>Formats</h4>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('formats', 'print')}
              />
              Print
            </FilterCheckbox>
            <FilterCheckbox>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('formats', 'digital')}
              />
              Digital
            </FilterCheckbox>
          </FilterGroup>
        </div>
      )}
    </div>
  );
}

export default Search; 