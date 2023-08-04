"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
class Incident {
    constructor(description) {
        this.description = description;
        this.status = 'open';
        this.createdAt = new Date();
    }
    resolve() {
        this.status = 'solved';
        this.resolvedAt = new Date();
    }
}
exports.Incident = Incident;
//# sourceMappingURL=Incident.js.map