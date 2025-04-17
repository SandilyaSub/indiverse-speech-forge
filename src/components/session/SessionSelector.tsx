
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Folder, 
  FolderPlus, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Play 
} from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Session {
  id: string;
  name: string;
  createdAt: Date;
  targetLanguage: string;
}

const SessionSelector = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [sessionName, setSessionName] = useState('');
  
  // Mock sessions - in a real app, these would come from a database
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      name: 'Hindi Translation Project',
      createdAt: new Date('2025-04-15'),
      targetLanguage: 'Hindi'
    },
    {
      id: '2',
      name: 'Tamil Document',
      createdAt: new Date('2025-04-10'),
      targetLanguage: 'Tamil'
    }
  ]);

  const handleCreateSession = () => {
    if (!sessionName.trim()) {
      toast({
        title: "Session name required",
        description: "Please enter a name for your session",
        variant: "destructive"
      });
      return;
    }
    
    const newSession: Session = {
      id: `${sessions.length + 1}`,
      name: sessionName,
      createdAt: new Date(),
      targetLanguage: 'Not set'
    };
    
    setSessions([...sessions, newSession]);
    setSessionName('');
    setOpen(false);
    
    toast({
      title: "Session created",
      description: `${newSession.name} has been created`
    });
    
    // Navigate to the input page of the new session
    navigate('/');
  };
  
  const handleSelectSession = (sessionId: string) => {
    // In a real app, you'd store the selected session in context or local storage
    toast({
      title: "Session selected",
      description: `Opening session ${sessionId}`
    });
    navigate('/');
  };
  
  const handleDeleteSession = (sessionId: string) => {
    setSessions(sessions.filter(session => session.id !== sessionId));
    toast({
      title: "Session deleted",
      description: "The session has been deleted"
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Your Translation Sessions</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-1">
              <FolderPlus size={18} />
              New Session
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Session</DialogTitle>
              <DialogDescription>
                Enter a name for your new translation session.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Input
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                placeholder="Session name"
                className="w-full"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleCreateSession}>Create Session</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessions.map((session) => (
          <div 
            key={session.id}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-indic-purple/10 p-2 rounded-full mr-3">
                  <Folder className="text-indic-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{session.name}</h3>
                  <p className="text-sm text-gray-500">
                    Target: {session.targetLanguage} • {format(session.createdAt, 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem 
                    onClick={() => handleSelectSession(session.id)}
                    className="flex items-center"
                  >
                    <Play size={16} className="mr-2" /> Open Session
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Edit2 size={16} className="mr-2" /> Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDeleteSession(session.id)} 
                    className="text-red-600 flex items-center"
                  >
                    <Trash2 size={16} className="mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSelectSession(session.id)}
              >
                Continue Session
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {sessions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">You don't have any translation sessions yet.</p>
          <Button onClick={() => setOpen(true)}>Create Your First Session</Button>
        </div>
      )}
    </div>
  );
};

export default SessionSelector;
