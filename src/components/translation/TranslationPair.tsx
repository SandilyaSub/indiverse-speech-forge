
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Edit, Check, Keyboard } from 'lucide-react';

interface TranslationPairProps {
  id: string;
  speaker: string;
  originalText: string;
  translatedText: string;
  onTranslationChange: (id: string, text: string) => void;
  onTransliterate?: () => void;
}

const TranslationPair = ({
  id,
  speaker,
  originalText,
  translatedText,
  onTranslationChange,
  onTransliterate
}: TranslationPairProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTranslation, setEditedTranslation] = useState(translatedText);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onTranslationChange(id, editedTranslation);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="text-sm font-medium">#{id}</div>
        <div className="text-sm text-gray-500">{speaker}</div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Original:</label>
        <div className="bg-gray-50 p-3 rounded text-gray-700">{originalText}</div>
      </div>
      
      <div>
        <label className="block text-sm text-gray-500 mb-1">Translation:</label>
        
        {isEditing ? (
          <>
            <Textarea
              value={editedTranslation}
              onChange={(e) => setEditedTranslation(e.target.value)}
              className="mb-2"
              rows={3}
            />
            <div className="flex justify-between">
              {onTransliterate && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex gap-1"
                  onClick={onTransliterate}
                >
                  <Keyboard size={14} /> Transliterate
                </Button>
              )}
              
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
            <div className="bg-white border p-3 rounded text-gray-800 mb-2">
              {translatedText}
            </div>
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
    </div>
  );
};

export default TranslationPair;
