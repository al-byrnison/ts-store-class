export class Incident {
  description: string;
  status: string;
  createdAt: Date;
  resolvedAt?: Date;

  constructor(description: string) {
    this.description = description;
    this.status = 'open';
    this.createdAt = new Date();
  }

  resolve() {
    this.status = 'solved';
    this.resolvedAt = new Date();
  }
}
