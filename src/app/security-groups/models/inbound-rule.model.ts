export interface InboundRule {
    type: string;
    protocol: string;
    portRange: string;
    source: string;
}