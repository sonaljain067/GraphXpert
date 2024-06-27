import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import "./css/index.css"; 

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI /> 
      <SubmitButton />
    </div>
  );
}

export default App;
