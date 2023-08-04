"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const Incident_1 = require("./Incident");
class Store {
    constructor() {
        this.incidents = [];
    }
    addIncident(description) {
        const incident = new Incident_1.Incident(description);
        this.incidents.push(incident);
    }
    closeIncident(index) {
        if (index >= 0 && index < this.incidents.length) {
            const currentDate = new Date();
            this.incidents[index].status = 'solved';
            this.incidents[index].resolvedAt = currentDate;
        }
    }
    incident_status() {
        const openCases = this.incidents.filter(incident => incident.status === 'open').length;
        const solvedCases = this.incidents.filter(incident => incident.status === 'solved').length;
        const solvedTimes = this.incidents
            .filter(incident => incident.status === 'solved' && incident.resolvedAt)
            .map(incident => incident.resolvedAt.getTime() - incident.createdAt.getTime());
        const averageSolution = solvedTimes.length > 0 ? solvedTimes.reduce((prev, curr) => prev + curr, 0) / solvedTimes.length : 0;
        const maximumSolution = solvedTimes.length > 0 ? Math.max(...solvedTimes) : 0;
        return {
            open_cases: openCases,
            closed_cases: solvedCases,
            average_solution: averageSolution,
            maximum_solution: maximumSolution
        };
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map