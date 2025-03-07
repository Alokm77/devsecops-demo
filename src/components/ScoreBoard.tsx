import React from 'react';
import { Trophy, User, Users } from 'lucide-react';

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
  players?: {
    X: string;
    O: string;
  };
}

const ScoreCard: React.FC<{ label: string; score: number; color: string; Icon: React.ElementType }> = ({ label, score, color, Icon }) => (
  <div className={`flex justify-between items-center p-2 rounded border ${color}`}>
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </div>
    <span className="text-lg font-bold">{score}</span>
  </div>
);

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, players = { X: 'Player X', O: 'Player O' } }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-500" />
        Score Board
      </h2>
      
      <div className="space-y-2">
        <ScoreCard label={players.X} score={scores.X} color="bg-indigo-50 border-indigo-300 text-indigo-600" Icon={User} />
        <ScoreCard label={players.O} score={scores.O} color="bg-purple-50 border-purple-300 text-purple-600" Icon={User} />
        <ScoreCard label="Draws" score={scores.draws} color="bg-gray-100 border-gray-300 text-gray-600" Icon={Users} />
      </div>
    </div>
  );
};

export default ScoreBoard;
