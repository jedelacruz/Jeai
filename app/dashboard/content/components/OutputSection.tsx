import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) { // corrected destructuring of Props

  const editorRef = useRef<any>();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput); // corrected method name
  }, [aiOutput]); // fixed the dependency array

  return (
    <div className='bg-white shadow-lg rounded-lg border'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='font-medium'>Result</h2>
        <Button onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy /></Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Text will appear here."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance())}
      />
    </div>
  );
}

export default OutputSection;
