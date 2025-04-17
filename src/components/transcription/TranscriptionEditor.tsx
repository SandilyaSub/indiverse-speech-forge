
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Edit, Check } from 'lucide-react';

interface TranscriptionEditorProps {
  id: string;
  timeCode: string;
  speaker: string;
  content: string;
  onContentChange: (id: string, content: string) => void;
  onSpeakerChange?: (id: string, speaker: string) => void;
}

const TranscriptionEditor = ({
  id,
  timeCode,
  speaker,
  content,
  onContentChange,
  onSpeakerChange
}: TranscriptionEditorProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onContentChange(id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="text-sm text-gray-500">#{id} | {timeCode}</div>
        
        {onSpeakerChange ? (
          <select
            className="text-sm border rounded px-2 py-1"
            value={speaker}
            onChange={(e) => onSpeakerChange(id, e.target.value)}
          >
            <option value="SPEAKER_00">SPEAKER_00</option>
            <option value="SPEAKER_01">SPEAKER_01</option>
            <option value="SPEAKER_02">SPEAKER_02</option>
            <option value="SPEAKER_03">SPEAKER_03</option>
          </select>
        ) : (
          <div className="text-sm font-medium">{speaker}</div>
        )}
      </div>
      
      {isEditing ? (
        <>
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="mb-2"
            rows={3}
          />
          <div className="flex justify-end">
            <Button
              size="sm"
              className="bg-indic-purple hover:bg-indic-purple-dark flex gap-1"
              onClick={handleSave}
            >
              <Check size={14} /> Save
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-800 mb-2">{content}</p>
          <div className="flex justify-end">
            <Button
              size="sm" 
              variant="ghost"
              className="text-indic-purple hover:bg-indic-purple/10 flex gap-1"
              onClick={handleEdit}
            >
              <Edit size={14} /> Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TranscriptionEditor;
