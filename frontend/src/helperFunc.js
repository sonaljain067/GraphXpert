import { FaInbox, FaRobot, FaClipboardList, FaCode } from 'react-icons/fa';
export const nodeTypes = {
    customInput: "Input", 
    llm: "LLM",
    customOutput: "Output",
    text: "Text",
    colorNode: "Node"
}
export const nodeColor = (type) => {
    switch (type) {
      case 'customInput':
        return '#6ede87';
      case 'customOutput':
        return '#6865A5';
      default:
        return '#ff0072';
    }
  };
export const nodeIcons = {
    customInput: <FaInbox/>,
    llm: <FaRobot/>,
    customOutput: <FaClipboardList/>,
    text: <FaCode/>,
    colorNode: <FaCode/>
}

export let handlerPosition = [
  { node: "customInput", type: "source", position: "right"}, 
  { node: "customOutput", type: "target", position: "left"},
  { node: "text", type: "target", position: "right"}, 
  { node: "colorNode", type: "source", position: "left"},
  { node: "colorNode", type: "target", position: "right"},
  { node: "llm", type: "target", position: "left"},
  { node: "llm", type: "source", position: "right"},
]

export const handleInputFinish = (currText) => {
  const regex = /{{(.*?)}}/g;
  const matches = currText.match(regex); 
  // setExtractedTexts(
  return matches ? matches.map(
    match => match = match.replace(/{{|}}/g, '').split(/,\s*|\s*,/)): ""; 
}

