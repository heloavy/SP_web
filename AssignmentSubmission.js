import { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  CloudUpload,
  AttachFile,
  Delete,
  Send,
  CheckCircle,
  Warning,
  Timer
} from '@mui/icons-material';

const SubmissionContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const AssignmentCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const AssignmentHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
`;

const DueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.overdue ? '#f44336' : props.theme.colors.text};
  margin-top: 0.5rem;
`;

const AssignmentContent = styled.div`
  padding: 1.5rem;
`;

const UploadArea = styled.div`
  border: 2px dashed ${props => props.theme.colors.grey};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  margin: 1.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.grey};
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileList = styled.div`
  margin-top: 1.5rem;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.grey};
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 4px;
  background: ${props => props.theme.colors.grey};
  border-radius: 2px;
  overflow: hidden;
  flex: 1;
`;

const Progress = styled.div`
  height: 100%;
  width: ${props => props.value}%;
  background: ${props => props.theme.colors.primary};
  transition: width 0.3s ease;
`;

const Button = styled.button`
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background: ${props => {
    switch(props.status) {
      case 'submitted': return '#e8f5e9';
      case 'late': return '#fff3e0';
      case 'draft': return '#f5f5f5';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'submitted': return '#2e7d32';
      case 'late': return '#ef6c00';
      case 'draft': return '#666';
      default: return '#666';
    }
  }};
`;

function AssignmentSubmission() {
  const [files, setFiles] = useState([]);
  const [comment, setComment] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('draft');
  const fileInputRef = useRef();

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading'
    }))]);
    uploadFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading'
    }))]);
    uploadFiles(selectedFiles);
  };

  const uploadFiles = (newFiles) => {
    newFiles.forEach((file, index) => {
      // Simulate file upload
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles(prev => prev.map((f, i) => 
          f.file === file ? { ...f, progress } : f
        ));

        if (progress >= 100) {
          clearInterval(interval);
          setFiles(prev => prev.map((f, i) => 
            f.file === file ? { ...f, status: 'uploaded' } : f
          ));
        }
      }, 500);
    });
  };

  const handleSubmit = () => {
    setSubmissionStatus('submitted');
    // Handle submission logic
  };

  return (
    <SubmissionContainer>
      <AssignmentCard>
        <AssignmentHeader>
          <h2>Mathematics Assignment #3</h2>
          <DueDate overdue={false}>
            <Timer />
            Due: March 20, 2024, 11:59 PM
          </DueDate>
          <StatusBadge status={submissionStatus}>
            {submissionStatus === 'submitted' && <CheckCircle />}
            {submissionStatus === 'late' && <Warning />}
            {submissionStatus.charAt(0).toUpperCase() + submissionStatus.slice(1)}
          </StatusBadge>
        </AssignmentHeader>

        <AssignmentContent>
          <h3>Your Submission</h3>
          
          <TextArea
            placeholder="Add a comment (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <UploadArea
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <CloudUpload style={{ fontSize: '48px', color: '#666' }} />
            <p>Drag and drop files here or click to browse</p>
            <small>Maximum file size: 10MB</small>
            <FileInput
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
          </UploadArea>

          <FileList>
            {files.map((file, index) => (
              <FileItem key={index}>
                <AttachFile />
                <div style={{ flex: 1 }}>
                  <div>{file.file.name}</div>
                  <ProgressBar>
                    <Progress value={file.progress} />
                  </ProgressBar>
                </div>
                <Delete 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setFiles(files.filter((_, i) => i !== index))}
                />
              </FileItem>
            ))}
          </FileList>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
            <Button>Save as Draft</Button>
            <Button 
              primary
              onClick={handleSubmit}
              disabled={files.length === 0 || files.some(f => f.status === 'uploading')}
            >
              <Send /> Submit Assignment
            </Button>
          </div>
        </AssignmentContent>
      </AssignmentCard>
    </SubmissionContainer>
  );
}

export default AssignmentSubmission; 