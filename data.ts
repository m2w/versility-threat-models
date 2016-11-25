export class Threat {
    name: string
    probability: number
    damage: number
    id: Id
}

enum ThreatLevel {
    LOW = 1,
    MEDIUM,
    HIGH
}

enum Layer {
    SMARTBRICKS,
    FOG,
    CLOUD,
    APPLICATION_SERVICES,
    BUSINESS_SERVICES
}

function classifyThreat(threat: Threat): ThreatLevel {
    let t = threat.damage * threat.probability;
    if (t > 0.7) {
        return ThreatLevel.HIGH;
    } else if (t > 0.3) {
        return ThreatLevel.MEDIUM;
    }
    return ThreatLevel.LOW
}

export class AssetClass {
    threats: [Threat]
    threatLevel(): ThreatLevel {
        let max = ThreatLevel.LOW;
        for (let threat of this.threats) {
            let ct = classifyThreat(threat);
            if (ct > max) {
                max = ct;
            }
        }
        return max;
    }
    id: Id
    label: String
    layer: Layer
}

type Id = string;

enum InterfaceType {
    UNIDIRECTIONAL,
    BIDIRECTIONAL
}

export class Interface {
    id: Id
    start: Id
    end: Id
    type: InterfaceType
}