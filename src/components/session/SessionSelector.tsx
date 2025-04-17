
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Folder, 
  FolderPlus, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Play, 
  Plus,
  Calendar,
  Globe
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
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indic-purple to-indic-pink">Your Translation Sessions</h1>
            <p className="text-gray-600">Select an existing session or create a new one to get started</p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-indic-purple to-indic-pink hover:opacity-90 shadow-button rounded-xl gap-2 px-6 py-6 h-auto font-medium">
                <Plus size={20} />
                New Session
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Create New Session</DialogTitle>
                <DialogDescription className="text-gray-500">
                  Enter a name for your new translation session.
                </DialogDescription>
              </DialogHeader>
              <div className="py-6">
                <Input
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  placeholder="Session name"
                  className="w-full rounded-lg border-gray-200 focus:border-indic-purple focus:ring-indic-purple/20"
                  autoFocus
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)} className="rounded-lg">Cancel</Button>
                <Button onClick={handleCreateSession} className="bg-gradient-to-r from-indic-purple to-indic-pink hover:opacity-90 rounded-lg">
                  Create Session
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <div 
              key={session.id}
              className="group border rounded-xl p-6 bg-white shadow-card hover:shadow-lg transition-all duration-200 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-indic-purple/20 to-indic-pink/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                    <Folder className="text-indic-purple" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{session.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Globe size={14} />
                        <span>{session.targetLanguage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{format(session.createdAt, 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem 
                      onClick={() => handleSelectSession(session.id)}
                      className="flex items-center cursor-pointer"
                    >
                      <Play size={16} className="mr-2" /> Open Session
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Edit2 size={16} className="mr-2" /> Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDeleteSession(session.id)} 
                      className="text-red-600 flex items-center cursor-pointer"
                    >
                      <Trash2 size={16} className="mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full border-indic-purple/30 text-indic-purple hover:bg-indic-purple/10 hover:text-indic-purple hover:border-indic-purple rounded-lg py-5 h-auto font-medium"
                  onClick={() => handleSelectSession(session.id)}
                >
                  Continue Session
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {sessions.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="bg-indic-purple/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FolderPlus className="h-10 w-10 text-indic-purple" />
            </div>
            <p className="text-gray-600 mb-6 text-lg">You don't have any translation sessions yet.</p>
            <Button 
              onClick={() => setOpen(true)} 
              className="bg-gradient-to-r from-indic-purple to-indic-pink hover:opacity-90 shadow-button rounded-xl py-6 px-8 h-auto font-medium"
            >
              Create Your First Session
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionSelector;
