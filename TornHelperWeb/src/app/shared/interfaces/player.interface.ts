export interface Player {
  level: number;
  gender: string;
  playerId: number;
  name: string;
  status: {
    description: string;
    details: string;
    state: string;
    color: string;
    until: number;
  };
}
